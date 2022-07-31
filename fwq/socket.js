var sd = require('silly-datetime');
var http = require('http')
var WebSocketServer = require('websocket').server

const httpServer = http.createServer((request, response) => {
  console.log('[' + new Date + '] Received request for ' + request.url)
  response.writeHead(404)
  response.end()
})

const wsServer = new WebSocketServer({
  httpServer,
  autoAcceptConnections: true
})

wsServer.on('connect', (connection) => {
  connection.on('message', (message) => {
    console.log('>>message ', message);
    if (message.type === 'utf8') {
      //console.log(message.utf8Data)
      var msg
      var num=Math.floor(Math.random()*arr.length)
      var arr=[
        "您好",
        "吃啦吗",
        "我在想你",
        "好的，宝贝"
      ]
      if(message.utf8Data=='小爱同学'){
         msg='我在'
      }else if(message.utf8Data=='我爱你'){
         msg='我也爱你(๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤'
     }else if(message.utf8Data=='你好'){
         msg='你好呀！'
     }else{
      msg=arr[num]
     }
      var data = {'content': msg, 'date': sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')}
      // 服务器返回的信息
      connection.sendUTF( JSON.stringify(data) )
    }
  });
  // 连接的关闭监听
  connection.on('close', (reasonCode, description) => {
    console.log('[' + new Date() + '] Peer ' + connection.remoteAddress + ' disconnected.')
  })
  // 接收控制台的输入
  process.stdin.on('data', function(data){
    data = data.toString().trim()
    var data = {'content': data, 'date': sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')}
    connection.sendUTF( JSON.stringify(data) )
  })
})

httpServer.listen(8000, () => {
  console.log('[' + sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss') + ']  server is listening on port 8000')
})
