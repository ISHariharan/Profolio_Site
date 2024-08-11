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
        { to :  "/Service", label : 'Services', position : 'left'},
        { to : '/Connection', label : 'Connections', position : 'left'},
        { to: '/UnderProcess', label: 'Blog', position: 'left' },
        {
          to: 'https://www.google.com',
          label: 'Download CV',
          position: 'right',
          className: 'download-button',
        },
        {
          href: 'https://github.com/ISHariharan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sections',
          items: [
            {
              label: 'Education',
              to: '/docs/tutorial-basics/Education/HigherEducation',
            },
            {
              label: 'Experience',
              to: '/docs/tutorial-basics/Experience/Intership',
            },
            {
              label: 'Extracurricular',
              to: '/docs/tutorial-basics/Extra%20Curricular/Handball',
            },
            {
              label: 'Volunteering',
              to: '/docs/tutorial-basics/Volunteering/Volunteering',
            },
            {
              label: 'Projects',
              to: '/docs/tutorial-basics/Projects/AidNet',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/hariharan-i-s-85aa10246/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ISHariharan',
            },
            {
              label: 'Linktree',
              href: 'https://linktr.ee/hariharanis',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/UnderProcess',
            },
            {
              label: 'Download CV',
              href: 'https://linktr.ee/hariharanis',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 My Project, Inc. Built with Docusaurus.`,
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
