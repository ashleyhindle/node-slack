# node-slack
Use Slacks Incoming Webhooks to send messages into slack

`npm install `

```
var slack = require('./slack')
    .setHookUrl('https://hooks.slack.com/services/TAAAAAA/BAAAAAA/siyefyiUH7DUU2bud7')
    .setUsername('MyAppIsAwesome!')
    .setChannel('#awesome-notifications');

slack.send('Well howdy partner!');
slack.send('Come on Mario, we have a plane to catch');
slack.setChannel('#secret').send('Mario is on his way!');
```
