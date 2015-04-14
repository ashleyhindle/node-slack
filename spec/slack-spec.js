var slack = require('../slack');

describe('setHookUrl', function () {
    var result = slack.setHookUrl('https://hooks.slack.com/Taaaaa/Raaaaa/Yaaaaa');
    
    it('should return object', function () {
        expect(typeof result).toBe('object');
    });

    it('should set host to hooks.slack.com', function () {
        expect(result.host).toBe('hooks.slack.com');
    });

    it('should set path to /Taaaaa/Raaaaa/Yaaaaa', function () {
        expect(result.path).toBe('/Taaaaa/Raaaaa/Yaaaaa');
    });

    it('should set port to 443', function () {
        expect(result.port).toBe(443);
    });
});

describe('setUsername', function () {
    it('should return object', function () {
        var result = slack.setUsername('MrSlack');
        expect(typeof result).toBe('object');
    });

    it('should not modify usernamej', function () {
	var username = 'MrSlack';
        var result = slack.setChannel(username);
        expect(result.username).toBe(username);
    });
});

describe('setChannel', function () {
    it('should return object', function () {
        var result = slack.setChannel('#MrSlack');
        expect(typeof result).toBe('object');
    });

    it('should not modify channel', function () {
	var channel = '#MrSlack';
        var result = slack.setChannel(channel);
        expect(result.channel).toBe(channel);
    });
});
