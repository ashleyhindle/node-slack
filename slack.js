var https = require('https');
var url = require('url');

var Slack = {
    channel: '#general',
    username: 'NodeSlack'
};

Slack.setHookUrl = function(hookUrl) {
    var parsed = url.parse(hookUrl);
    this.path = parsed.path;
    this.host = parsed.host;
    this.port = (parsed.protocol == 'https:') ? 443 : 80;
    return this;
};

Slack.setChannel = function(channel) {
    this.channel = channel;
    return this;
};

Slack.setUsername = function(username) {
    this.username = username;
    return this;
};

Slack.send = function(message) {
    var body = JSON.stringify({
        channel: this.channel,
        username: this.username,
        text: message
    });

    var options = {
        hostname: this.host,
        path: this.path,
        port: this.port,
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'application/json'
        }
    };

    var req = https.request(options);
    req.write(body, 'utf8');
    req.end();
};

module.exports = Slack;
