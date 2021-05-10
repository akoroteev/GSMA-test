const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  // title: 'GSMA test',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  base: 'GSMA-test',
  description: description,
  // theme: 'api',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: 'red' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/images/logo.png',
    nav: [
      {
        text: 'Introduction',
        link: '/introduction/'
      },
      {
        text: 'Examples page',
        link: '/examples/'
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Api',
        link: '/api/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/examples/': [
        {
          title: 'Examples',
          collapsable: false,
          children: [
            '#introduction',
            'swagger-page',
          ]
        }
      ],
      '/api/': [
        {
          title: 'API',
          collapsable: false,
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/register-components',
    'vuepress-plugin-element-tabs',
  ]
}
