(module.exports = {
  title: 'Hariharan I S',
  tagline: 'Dinosaurs are cool',
  url: 'https://192.168.0.6:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/portfolio.png',
  organizationName: 'ISHariharan', // Usually your GitHub org/user name.
  projectName: 'Portfolio_Site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // algolia : {
    //   apiKey : 'b8ae567e22e8b473e2681e4f7e2c7fca',
    //   indexName : '',
    //   contextualSearch : true,
    //   placeHolder : 'Seach my Portfolio',
    //   appId : 'QH281HHVU3',
    // },
    navbar: {
      title: 'Hariharan I S',
      logo: {
        alt: 'My Site Logo',
        src: 'img/portfolio.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Archive',
        },
        { to : '/blog', label : 'Services', position : 'left'},
        { to : '/blog', label : 'Connections', position : 'left'},
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: 'https://www.google.com',
          label: 'Download CV',
          position: 'right',
          className: 'download-button',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
  },
});
