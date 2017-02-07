"use strict";
const http = require('http');
const url = require('url');

function start_server(route, handle) {
    function onRequest(req, res) {
        let pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received');

        route(handle, pathname, res, req);
        // req.setEncoding('utf8');
        // req.addListener('data', (postDataChunk) => {
        //     postData += postDataChunk;
        //     console.log(`Received POST data chunk ${postDataChunk}.`);
        // });
        //
        // req.addListener('end', () => {
        //     route(handle, pathname, res, postData);
        // });
    }

    http.createServer(onRequest).listen(8080);
    console.log('Server has started');
}

exports.start_server = start_server;
