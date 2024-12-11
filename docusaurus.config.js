// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aur',
  tagline: 'Guide for pkgs submit in aur',
  favicon: 'img/archlinux-original.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'docusaurus',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'carch-org', // Usually your GitHub org/user name.
  projectName: 'pkgs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

    // Plugins
  plugins: [
    // News Blog Section
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'news',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'news',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './news',
        /**
         * Options
         */
        showReadingTime: false,
        blogTitle: 'News',
        blogSidebarTitle: 'Latest News',
        blogSidebarCount: 15,
      },
    ],
    // Premium Blog Section
/**    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'premium',
        routeBasePath: 'premium',
        path: './premium',
        showReadingTime: false,
        blogTitle: 'Premium',
        blogSidebarTitle: 'Latest News',
        blogSidebarCount: 10,
      },
    ], **/
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/carch-org/docusaurus/edit/main',
    
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/carch-org/pkgs/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

 themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        //respectPrefersColorScheme: true,
      },
      // The meta image URL for the site. Relative to your site's "static" directory. Cannot be SVGs. Can be external URLs too.
      image: 'img/meta.jpg',
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `⭐️ If you love this guide, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/carch-org/pkgs">GitHub</a>️ ⭐`,
        //backgroundColor: '#f5f6f7',
        //textColor: '#1e2128',
        isCloseable: true,
      },
      // Replace with your project's social card
      navbar: {
		hideOnScroll: false,
        title: 'Aur',
        logo: {
          alt: 'Arch Linux  Logo',
          src: 'img/archlinux-original.svg',
          srcDark: 'img/archlinux-original.svg',
          href: '/',
          target: '_self',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
          style: {},
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Tutorials', position: 'left'},
          { to: '/news', label: 'News', position: 'left' },
          //{ to: '/premium', label: 'Premium', position: 'left' },
          {
			html: "<a href='https://opencollective.com/carch' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://opencollective.com/spotube/donate/button.png?v=3' border='0' alt='Donate to open-collective' /></a>",
			href: 'https://ko-fi.com/adi1090x',
			position: 'right',
			target: '_blank',
		  },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                to: 'docs/contrib/contrib-translate',
                label: 'Help me translate',
              },
            ],
          },
          {
            href: 'https://github.com/carch-org',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
          /**{
            type: 'search',
            position: 'right',
          },**/
        ],
      },
        algolia: {
      // The application ID provided by Algolia
      appId: 'BEK8CQ83XZ',

      // Public API key: it is safe to commit it
      apiKey: '0c9c93fc5b16d7f76b2fb03890712522',

      indexName: 'carch',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/docs/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
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
                label: 'Telegram',
                href: 'https://t.me/harilvfs',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/8NJWstnUHd',
              },
              {
                label: 'X',
                href: 'https://x.com/harilvfs',
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
                href: 'https://github.com/harilvfs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carch Org | Hari Chalise`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
