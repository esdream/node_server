"use strict";
const querystring = require('querystring'),
        fs = require('fs'),
        formidable = require('formidable');

// let exec = require('child_process').exec;
function start(res) {
    console.log("Request handler 'start' was called");
    let body = '<html>' +
                '<head>' +
                '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
                '</head>' +
                '<body>' +
                '<form action="/upload" enctype="multipart/form-data" method="post">' +
                '<input type="file" name="upload" multiple="multiple">' +
                '<input type="submit" value="Upload file" />' +
                '</form>' +
                '</body>' +
                '</html>';
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();

    // exec('ls', function(error, stdout, stderr) {
    //     res.writeHead(200, {"Content-Type": "text/plain"});
    //     res.write(stdout);
    //     res.end();
    // });

    // function sleep(milliSeconds) {
    //     let startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + milliSeconds);
    // }
    //
    // sleep(10000);
    // return "Hello Start";
}

function upload(res, req) {
    console.log("Request handler 'upload' was called");

    let form = new formidable.IncomingForm();
    console.log('about to parse...');
    form.parse(req, (error, fields, files) => {
        console.log('parse done');
        fs.renameSync(files.upload.path, 'test.jpg');
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("received image:<br>");
        res.write("<img src='/show'>");
        res.end();
    });
}

function show(res) {
    console.log('Request hanlder "show" was called.');
    fs.readFile('test.jpg', 'binary', function(error, file) {
        if(error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + '\n');
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.write(file, "binary");
            res.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
