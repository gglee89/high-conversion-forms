var env = process.env.NODE_ENV;
var debug = false;

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

    // require('newrelic'); // https://newrelic.com/
    var express = require('express'); // Minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.    
    var path = require('path'); // Utilities for working with file and directory paths
    var _ = require('lodash'); // A modern JavaScript utility library delivering modularity, performance & extras.    
    var os = require('os'); // Operating system-related utility methods
    var bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, availabe under the req.body property.
    var async = require('async'); // Higher-order functions and common patterns for asynchronous code.
	var helmet = require('helmet'); // For automatic security policy handling.
    var favicon = require('express-favicon'); // Favicon for express middleware.
    var session = require('express-session'); // Create a session middleware with the given options.
    var multer = require('multer'); // middleware for handling multipart/form-data, which is primarily used for uploading files.
    var storage = multer.memoryStorage(); // Stores the files in memory as Buffer objects. It doesn't have any options.
    var upload = multer({ storage: storage });
    var cookieParser = require('cookie-parser'); // Populate req.cookies with an object keyed by the cookie names.
    var https = require('https'); // HTTP protocol over TLS/SSL implemented as a separate module.
    var fs = require('fs'); // File I/O is provided by simple wrappers around standard POSIX functions. Methods have asynchronous and synchronous forms.

    /**
     * a. Load EXTERNAL/INTERNAL libraries;
     * b. Bring in and initialize logger, if logger not working exit by throwing
     * c. Initialize connection to local db pass logger to module;
     * d. Load utilities object;
     */

    /**
     * Debug - Load OS Information
     */
    if(debug) {
        console.log("\n==== OS Info. Array of objects containing information about each CPU/core installed. ====\n")
        _.forEach(os.cpus(), function(value, key) {
            key +=1;
            console.log("Core " + key);
            _.forEach(value, function(value, key) {
                console.log("\t" + key + ": " + typeof value === {} ? JSON.stringify(value) : value);
            });
            console.log("\n");
        });
        console.log("OS Architecture: " + os.arch());
        console.log("OS Hostname: " + os.hostname());
        console.log("OS Platform: " + os.platform());
        console.log("OS Type: " + os.type());
        console.log("OS Total amount of system memory: " + os.totalmem() / 1073741824 + " GB" + " [" + os.totalmem() / 1048576 + " MB]");
    }

    /**
     * Set run-time variables and constants
     */
    var HOST;
    if(env === 'production') 
        HOST = process.env.PROD_SERVER_HOST;
    else 
        HOST = process.env.DEV_SERVER_HOST;

    var HTTPS_PORT = process.env.SERVER_HTTPS_PORT;    

    /**
     * Generate app
     */
    var app = express();

    /**
     * Set logger debug option
     */
    // logger.setDebug()

    /**
     * Set express options
     */
    express.static.mime.default_type = "text/html";
    if(env === "production") {
        app.use(helmet());
    }
    app.use(express.static(path.join(__dirname, '../dist')));
	app.get('/*', function (req, res,next) {
		if(req.originalUrl&&(req.originalUrl.includes("/files/stream-file/"))){
			next();
			return;
		}
		res.sendFile(path.join(__dirname,'index.html'));
	});
	app.use(bodyParser.json()); //support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
	app.use(cookieParser());

	// logger.debug('server.js : Set express options');

    /**
	 * This function sets the session option and uses the same
	 * connection as the localdb connection
	 */
    // app.use(session({
	// 	secret: process.env.SERVER_SESSION_SECRET,
	// 	resave: true,
	// 	saveUninitialized: false,
	// 	store: new mongoStore({
	// 		mongooseConnection: aadb.db,
	// 		ttl: 6 * 60 * 60, // = 6 hours. Default
	// 		autoRemove: 'native' // Default
	// 	})
	// }));

    /**
     * Log current status
     */
    // logger.debug('server.js : App session settings done');
	// logger.debug('setting up router');

    /*
	Set errorLogging for forms_app
	 */
	// app.use(logger.handleHttpErrors());

    /**
     * Define the private keys and certificate in an appOptions object
     */
    // var certPath = path.resolve('../certs/');
    // appOptions = {
	// 	key: fs.readFileSync(path.join(certPath, process.env.SERVER_KEY)),
	// 	cert: fs.readFileSync(path.join(certPath, process.env.SERVER_CERT))
	// }

	/*
	Running the server
	 */    
	app.listen(HTTPS_PORT);
    console.log("Server listening to port " + HTTPS_PORT);
	// logger.info('server.js: Server Running on '+ HOST+':'+HTTPS_PORT);


});