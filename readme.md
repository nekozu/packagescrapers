# Packages Scraper

A NPM Packages To Search Packages On Github, Npmjs, Or Pypi

# installation
```
npm i packagescrapers
```

# Usage

NPM

```
const pack = require('packagescrapers')

pack.npm('telegram').then(res => console.log(res))
```

Pypi
```
const pack = require('packagescrapers')

pack.pypi('telegram').then(res => console.log(res))
```

Github
```
const pack = require('packagescrapers')

pack.github('telegram').then(res => console.log(res))
```

# Result

NPM
```
[
  { title: 'telegram', link: 'https://npmjs.com/package/telegram' },
  {
    title: 'winston-telegram',
    link: 'https://npmjs.com/package/winston-telegram'
  },
  { title: 'slimbot', link: 'https://npmjs.com/package/slimbot' },
  {
    title: 'messaging-api-telegram',
    link: 'https://npmjs.com/package/messaging-api-telegram'
  },
  {
    title: 'node-telegram-bot-api',
    link: 'https://npmjs.com/package/node-telegram-bot-api'
  },
  {
    title: 'ln-telegram',
    link: 'https://npmjs.com/package/ln-telegram'
  },
  { title: 'telegraf', link: 'https://npmjs.com/package/telegraf' },
  {
    title: 'react-social-login-buttons',
    link: 'https://npmjs.com/package/react-social-login-buttons'
  },
  {
    title: 'telegram-ninja-msg',
    link: 'https://npmjs.com/package/telegram-ninja-msg'
  },
  {
    title: 'pinyin-bot-core',
    link: 'https://npmjs.com/package/pinyin-bot-core'
  },
  {
    title: 'rubik-telegram',
    link: 'https://npmjs.com/package/rubik-telegram'
  },
  {
    title: '@mdeathted/mtproto',
    link: 'https://npmjs.com/package/@mdeathted/mtproto'
  },
  {
    title: '@a-soul/sender-telegram',
    link: 'https://npmjs.com/package/@a-soul/sender-telegram'
  },
  {
    title: 'telegram-bot-api',
    link: 'https://npmjs.com/package/telegram-bot-api'
  },
  {
    title: 'fastify-telegraf',
    link: 'https://npmjs.com/package/fastify-telegraf'
  },
  {
    title: '@actionsflow/trigger-telegram_bot',
    link: 'https://npmjs.com/package/@actionsflow/trigger-telegram_bot'
  },
  {
    title: '@johnpower71/mtproto-core',
    link: 'https://npmjs.com/package/@johnpower71/mtproto-core'
  },
  {
    title: '@rundik/telegram-text-entities-filler',
    link: 'https://npmjs.com/package/@rundik/telegram-text-entities-filler'
  },
  {
    title: 'telegraf-markup4-ts',
    link: 'https://npmjs.com/package/telegraf-markup4-ts'
  },
  {
    title: 'node-red-contrib-chatbot',
    link: 'https://npmjs.com/package/node-red-contrib-chatbot'
  }
]
```

Pypi
```
[
  { title: 'telegram', link: 'https://pypi.org//project/telegram/' },
  {
    title: 'marbaloo_telegram',
    link: 'https://pypi.org//project/marbaloo-telegram/'
  },
  {
    title: 'lifeguard-telegram',
    link: 'https://pypi.org//project/lifeguard-telegram/'
  },
  {
    title: 'telegram-cloud',
    link: 'https://pypi.org//project/telegram-cloud/'
  },
  {
    title: 'python-telegram',
    link: 'https://pypi.org//project/python-telegram/'
  },
  {
    title: 'telegram-me',
    link: 'https://pypi.org//project/telegram-me/'
  },
  {
    title: 'listenclosely-telegram',
    link: 'https://pypi.org//project/listenclosely-telegram/'
  },
  {
    title: 'mautrix-telegram',
    link: 'https://pypi.org//project/mautrix-telegram/'
  },
  {
    title: 'telegram-notbot',
    link: 'https://pypi.org//project/telegram-notbot/'
  },
  {
    title: 'telegram-notifier',
    link: 'https://pypi.org//project/telegram-notifier/'
  },
  {
    title: 'botify-telegram',
    link: 'https://pypi.org//project/botify-telegram/'
  },
  {
    title: 'logging2telegram',
    link: 'https://pypi.org//project/logging2telegram/'
  },
  {
    title: 'roboto-telegram',
    link: 'https://pypi.org//project/roboto-telegram/'
  },
  {
    title: 'wcpan.telegram',
    link: 'https://pypi.org//project/wcpan-telegram/'
  },
  {
    title: 'telegram-rss',
    link: 'https://pypi.org//project/telegram-rss/'
  },
  {
    title: 'telegram-alpa',
    link: 'https://pypi.org//project/telegram-alpa/'
  },
  {
    title: 'django-telegram',
    link: 'https://pypi.org//project/django-telegram/'
  },
  {
    title: 'logbot-telegram',
    link: 'https://pypi.org//project/logbot-telegram/'
  },
  {
    title: 'telegram-send',
    link: 'https://pypi.org//project/telegram-send/'
  },
  {
    title: 'nucleusapp-telegram',
    link: 'https://pypi.org//project/nucleusapp-telegram/'
  }
]
```

Github
```
[
  {
    title: '\n                Sign up\n              ',
    link: 'https://github.com//signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2Fsearch&source=header'
  },
  {
    title: 'DrKLO/Telegram',
    link: 'https://github.com//DrKLO/Telegram'
  },
  {
    title: '\n              \n    \n\n              17.9k\n            ',
    link: 'https://github.com//DrKLO/Telegram/stargazers'
  },
  {
    title: 'peter-iakovlev/Telegram',
    link: 'https://github.com//peter-iakovlev/Telegram'
  },
  {
    title: '\n              \n    \n\n              3k\n            ',
    link: 'https://github.com//peter-iakovlev/Telegram/stargazers'
  },
  {
    title: 'overtake/telegram',
    link: 'https://github.com//overtake/telegram'
  },
  {
    title: '\n              \n    \n\n              1.7k\n            ',
    link: 'https://github.com//overtake/telegram/stargazers'
  },
  {
    title: 'rubenlagus/TelegramBots',
    link: 'https://github.com//rubenlagus/TelegramBots'
  },
  {
    title: '\n              \n    \n\n              2.6k\n            ',
    link: 'https://github.com//rubenlagus/TelegramBots/stargazers'
  },
  {
    title: 'overtake/TelegramSwift',
    link: 'https://github.com//overtake/TelegramSwift'
  },
  {
    title: '\n              \n    \n\n              3.4k\n            ',
    link: 'https://github.com//overtake/TelegramSwift/stargazers'
  },
  {
    title: 'telegramdesktop/tdesktop',
    link: 'https://github.com//telegramdesktop/tdesktop'
  },
  {
    title: '\n              \n    \n\n              16.8k\n            ',
    link: 'https://github.com//telegramdesktop/tdesktop/stargazers'
  },
  {
    title: 'python-telegram-bot/python-telegram-bot',
    link: 'https://github.com//python-telegram-bot/python-telegram-bot'
  },
  {
    title: '\n              \n    \n\n              16.5k\n            ',
    link: 'https://github.com//python-telegram-bot/python-telegram-bot/stargazers'
  },
  { title: 'vysheng/tg', link: 'https://github.com//vysheng/tg' },
  {
    title: '\n              \n    \n\n              5.4k\n            ',
    link: 'https://github.com//vysheng/tg/stargazers'
  },
  {
    title: 'TelegramMessenger/Telegram-iOS',
    link: 'https://github.com//TelegramMessenger/Telegram-iOS'
  },
  {
    title: '\n              \n    \n\n              3k\n            ',
    link: 'https://github.com//TelegramMessenger/Telegram-iOS/stargazers'
  },
  {
    title: 'zhukov/webogram',
    link: 'https://github.com//zhukov/webogram'
  },
  {
    title: '\n              \n    \n\n              7.5k\n            ',
    link: 'https://github.com//zhukov/webogram/stargazers'
  }
]
```

# Buy Me Coffe For Other API
You Can Buy Me A Coffe With This [Links](https://ko-fi.com/nekozu)

# License
MIT

# Thank You!
Thanks For Using This Project. Love You All
