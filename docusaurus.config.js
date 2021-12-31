// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  title: 'Brigada SOS',
  tagline: 'Dinosaurs are cool',
  url: 'https://brigadasos.xyz',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Natsume-197', // Usually your GitHub org/user name.
  projectName: 'Natsume-197.github.io', // Usually your repo name.
  deploymentBranch: 'preview',
  plugins: [

  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Natsume-197/Natsume-197.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:  
            'https://github.com/Natsume-197/Natsume-197.github.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'YOUR_APP_ID',
  
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
  
        indexName: 'YOUR_INDEX_NAME',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        //... other Algolia params
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '🌙',
          darkIconStyle: {
            marginLeft: '2px',
        },
         // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '☀',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
      tableOfContents:{
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Brigada SOS Japonés',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Contenido',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.gg/T7BjQpv9vy',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
