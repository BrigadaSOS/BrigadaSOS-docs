/**
 * Cloudflare Pages Function for Decap CMS GitHub OAuth
 * Handles the initial authentication request
 *
 * This function redirects users to GitHub's OAuth authorization page.
 * Required environment variables:
 * - GITHUB_CLIENT_ID: Your GitHub OAuth App Client ID
 */

export async function onRequest(context) {
  const { request, env } = context;

  // Get GitHub OAuth Client ID from environment variables
  const clientId = env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response(
      JSON.stringify({
        error: 'GitHub OAuth is not configured properly',
        message: 'GITHUB_CLIENT_ID environment variable is missing',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Parse the request URL
  const url = new URL(request.url);

  // Get the callback URL from the environment or construct it from the current request
  const callbackUrl = `${url.origin}/api/callback`;

  // GitHub OAuth authorization URL
  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id', clientId);
  githubAuthUrl.searchParams.set('redirect_uri', callbackUrl);
  githubAuthUrl.searchParams.set('scope', 'repo,user');

  // Preserve the state parameter if provided (used by Decap CMS)
  const state = url.searchParams.get('state');
  if (state) {
    githubAuthUrl.searchParams.set('state', state);
  }

  // Redirect to GitHub OAuth authorization page
  return Response.redirect(githubAuthUrl.toString(), 302);
}
