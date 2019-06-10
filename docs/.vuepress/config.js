module.exports = {
  title: 'smallfish',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'An React solution for back-office system.',
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '一个专注于中台系统的 React 前端解决方案',
    },
  },

  themeConfig: {
    repo: 'smallfishjs/smallfish',
    lastUpdated: 'Last Updated',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        algolia: {},
        nav: [
          { text: 'Using smallfish', link: '/start/' },
          { text: 'Scene', link: '/scene/' },
          { text: 'Tool', link: '/tool/' },
        ],
        sidebar: {
          '/start/': [
            {
              title: 'Using smallfish',
              collapsable: false,
              children: [
                '',
                'getting-started',
                'deploy',
                'dirs',
                'config',
                'router',
                'library',
                'cli',
                'i18n',
              ],
            },
          ],
          '/scene/': [
            {
              title: 'Scene Solution',
              collapsable: false,
              children: [
                '',
                'antd-form',
                'form-modal',
                'lego',
                'proxy',
                'request',
              ],
            },
          ],
          '/tool/': [
            {
              title: 'Tools',
              collapsable: false,
              children: [''],
            },
          ],
        },
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '使用 smallfish', link: '/zh/start/' },
          { text: '场景化方案', link: '/zh/scene/' },
          { text: '提效工具', link: '/zh/tool/' },
        ],
        sidebar: {
          '/zh/start/': [
            {
              title: '使用 smallfish',
              collapsable: false,
              children: [
                '',
                'getting-started',
                'deploy',
                'dirs',
                'config',
                'router',
                'library',
                'cli',
                'i18n',
              ],
            },
          ],
          '/zh/scene/': [
            {
              title: '场景化方案',
              collapsable: false,
              children: [
                '',
                'antd-form',
                'form-modal',
                'lego',
                'proxy',
                'request',
              ],
            },
          ],
          '/zh/tool/': [
            {
              title: '提效工具',
              collapsable: false,
              children: [''],
            },
          ],
        },
      },
    },
  },
};
