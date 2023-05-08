// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '阅读3服务器版',
  tagline: '桌面端、iOS可用',
  favicon: 'img/legado.jpg',

  // Set the production url of your site here
  url: 'http://docs.legado-3-server-version.suto.eu.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Suto-Commune', // Usually your GitHub org/user name.
  projectName: 'Docs4Legado', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Suto-Commune/Docs4Legado/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Suto-Commune/Docs4Legado/tree/main/',
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
      navbar: {
        title: '主页',
        logo: {
          alt: '阅读3服务端',
          src: 'img/legado.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tutorial',
            label: '文档',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'API文档',
          },
          {
            href: 'https://github.com/Suto-Commune/Docs4Legado',
            label: '文档项目地址',
            position: 'right',
          },
          {
            href: 'https://github.com/hectorqin/reader',
            label: '项目地址',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '联系方式',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+pQ8HDlANPZ84ZWNl',
              },
              {
                label: '微信公众号',
                href: 'http://weixin.qq.com/r/onXx6X3EbiARrTmK9yCw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '文档项目地址',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: '项目地址',
                href: 'https://github.com/hectorqin/reader',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Suto-Commune, Inc. Built with Docusaurus.<br/>转载请遵循CC 3.0协议<br/>文档内所提到的软件均为hectorqin所创作<br/>本站与阅读3（安卓版）没有从属关系。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
