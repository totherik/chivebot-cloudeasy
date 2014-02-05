'use strict';

var pkg = require('./package'),
    cool = require('cool-ascii-faces');


module.exports = {

    name: pkg.name,

    version: pkg.version,

    register: function (plugin, options, next) {

        plugin.dependency('chivebot', function (plugin, next) {

            plugin.plugins.chivebot.registerCommand('how', function (raw, args, cb) {
                cb(null, 'it\'s CLOUD easy:tm:, friend!');
            });

            next();

        });

        next();

    }

};