var express = require('express');           // include the express library
var app = express();					            // create a server using express
app.listen(8000);                        // listen for HTTP
app.use('/',express.static('public'));   // set a static file directory




    var hue = require("node-hue-api"),
        HueApi = hue.HueApi,
        lightState = hue.lightState;

    var displayResult = function(result) {
        console.log(result);
    };

    var displayError = function(err) {
        console.error(err);
    };

    var host = "172.22.151.148",
        username = "a7tMkZm7OfvRa2kkNn2d4kUbw-1SmqA2a0eLrQBQ",
        api = new HueApi(host, username),
        state = lightState.create();

    // --------------------------
    // Using a promise

    // Set the lamp with id '32' to on
    api.setLightState(32, state.on())
        .then(displayResult)
        .fail(displayError)
        .done();

    // Now turn off the lamp
    api.setLightState(32, state.off())
    	.then(displayResult)
        .fail(displayError)
        .done();

    // --------------------------
    // Using a callback
    // Set the lamp with id '2' to on
    api.setLightState(32, state.on(), function(err, result) {
    	if (err) throw err;
    	displayResult(result);
    });

    // Now turn off the lamp
    api.setLightState(32, state.off(), function(err, result) {
    	if (err) throw err;
    	displayResult(result);
    });
