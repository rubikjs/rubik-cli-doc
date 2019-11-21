module.exports = {
  base: '/rubik-cli-doc/',
  title: 'Rubik Cli',
  description: 'One command, one structure',
  themeConfig: {
    repo: 'rubikjs/rubik-cli',
    logo: '/rubik.png',
    sidebar: 'auto',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文'
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  }
}
