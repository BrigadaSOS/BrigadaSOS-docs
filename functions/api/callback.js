/**
 * Cloudflare Pages Function for Decap CMS GitHub OAuth Callback
 * Handles the OAuth callback from GitHub and exchanges the code for an access token
 *
 * Required environment variables:
 * - GITHUB_CLIENT_ID: Your GitHub OAuth App Client ID
 * - GITHUB_CLIENT_SECRET: Your GitHub OAuth App Client Secret
 */

export async function onRequest(context) {
  const { request, env } = context;

  // Get environment variables
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({
        error: 'GitHub OAuth is not configured properly',
        message: 'GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET environment variables are missing',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Parse the request URL
  const url = new URL(request.url);

  // Get the authorization code from the query parameters
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code) {
    return new Response(
      JSON.stringify({
        error: 'Missing authorization code',
        message: 'No code parameter found in callback URL',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error(`GitHub API responded with status ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      throw new Error(tokenData.error_description || tokenData.error);
    }

    // Create the response content that Decap CMS expects
    const responseContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Autenticación exitosa</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      background-color: #1d1d1d;
      color: #e3e3e3;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background-color: #2a2a2a;
      border-radius: 0.5rem;
      border: 1px solid #333;
    }
    h1 {
      color: #ef5552;
      margin-bottom: 1rem;
    }
    p {
      color: #b4b4b4;
    }
    .spinner {
      border: 3px solid #333;
      border-top: 3px solid #ef5552;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 1rem auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✓ Autenticación exitosa</h1>
    <div class="spinner"></div>
    <p>Redirigiendo al CMS...</p>
  </div>
  <script>
    // Post message to opener window (Decap CMS)
    (function() {
      function receiveMessage(e) {
        console.log("Received message:", e);
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify(tokenData)}',
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);

      // Send the token data back to the CMS
      console.log("Sending success message to opener");
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify(tokenData)}',
        window.location.origin
      );

      // Close the popup after a short delay
      setTimeout(function() {
        window.close();
      }, 1000);
    })();
  </script>
</body>
</html>
    `.trim();

    return new Response(responseContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('OAuth callback error:', error);

    return new Response(
      JSON.stringify({
        error: 'Authentication failed',
        message: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
