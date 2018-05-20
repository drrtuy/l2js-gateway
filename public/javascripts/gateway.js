'use strict';
const ws = new WebSocket('ws://'+window.location.hostname+':8080');

ws.onopen = function() {
  var obj = {
    op: 'transfer',
    from: '0xAAAAAAAAAAAAAAAAAAAAAA',
    to: '0xAAAAAAAAAAAAAAAAAAAAAA',
    amount: 314
  }
  ws.send(JSON.stringify(obj));
};

ws.onmessage = function(data) {
  console.log(data.data);
};