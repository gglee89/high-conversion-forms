var env = process.env.NODE_ENV;

if (env === undefined) {
    var errorMessage = 'Environment Variables not set';
    console.log(errorMessage);
    throw new Error(errorMessage);
} else {
    console.log("Server is healthy");
}

var myDomain = require('domain').create();

myDomain.on('error', function(err) {
    if (err.message) {
        console.log("RED ALERT: " + err.message);
        console.log(err.stack);
    } else {
        console.log(err);
    }
    process.exit(1);
});

myDomain.run(function() {
    "use strict";

    console.log("server start process executing...");

    // https://newrelic.com/
    // require('newrelic');

    // minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
    var express = require('express');

    // Utilities for working with file and directory paths
    var path = require('path');

    var _ = require('lodash');

    // operating system-related utility methods
    var os = require('os');

    console.log("os: " + os.arch());
    console.log("os: " + _.forEach(os.cpus(), function(value, key) {

    });
});