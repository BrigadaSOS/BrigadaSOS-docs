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

  scripts: [{
    src: './src/js/analytics.js',
    async: true,
  }],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-4BNELQ9B0K',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'UA-216507270-1',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Natsume-197/Natsume-197.github.io/tree/main/',
        },
        blog: false,
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
        appId: '0T5B44QTIC',
  
        // Public API key: it is safe to commit it
        apiKey: 'be24869760df2d72cea750cde8d163eb',
  
        indexName: 'dev_brigadasos',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.xyz',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        //... other Algolia params
      },
      
      /** 
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },*/

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,

    },
      docs:{
        sidebar:{
          autoCollapseCategories: true,
          
        },
      },
      tableOfContents:{
        maxHeadingLevel: 5,
      },
      navbar: {
        hideOnScroll: true,
        title: 'Brigada SOS Japonés',
        logo: {
          alt: 'Brigada SOS logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/Natsume-197/Natsume-197.github.io',
            position: 'right',
            className: 'navbar-item-github',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/ajWm26ADEj',
            className: 'navbar-item-discord',
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
