'use strict';

var Package = require('./package');


exports.register = function (plugin, options, next) {

    plugin.dependency('chivebot', function (plugin, next) {

        plugin.plugins.chivebot.registerCommand('how', function (raw, args, cb) {
            cb(null, 'it\'s CLOUD easy:tm:, friend!');
        });

        next();
    });

    next();
};


exports.register.attributes = {
    pkg: Package
};