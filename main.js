const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.json');
const bodyParser = require('body-parser');
const request = require('request-promise');
app.use(bodyParser.urlencoded({ extended: true }));

sendMessage = (channelid) => {
    request({
        method: "POST",
        url: `https://discordapp.com/api/v6/channels/${channelid}/messages`,
        headers: {
          'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0",
          "Authorization" : config.token,
        },
        body: {
            "content" : "https://discordapp.com/__development/link?s=hEhKpE5RO5tViZoa4CjQeN3lKj3PeG3KJTuF%2BEtwf4A%3D.eyJ0YXJnZXRCdWlsZE92ZXJyaWRlIjp7ImRpc2NvcmRfd2ViIjp7InR5cGUiOiJicmFuY2giLCJpZCI6InBlcmYvc2Vzc2lvbnMvcmVhZHlfc3VwcGxlbWVudGFsX3RzeCJ9fSwicmVsZWFzZUNoYW5uZWwiOm51bGwsInZhbGlkRm9yVXNlcklkcyI6W10sImV4cGlyZXNBdCI6IlN1biwgMjMgQXVnIDIwMjAgMDY6MDM6NTMgR01UIn0%",
            "nonce": null, 
            "tts": false
        },
        json: true
    }).then(data => {
        console.log(data)
    });
}

app.post('/send', (req,res) => {
    sendMessage(req.body.cid);
}); 

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(820, console.log('Listening on port 820'));