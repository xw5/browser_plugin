chrome.contextMenus.create({
  type: 'normal',
  title: '生成二维码',
  id: 'qrcodeCm',
  contexts: ['selection'],
  onclick: createQrcode
});

function createQrcode(info, tab) {
  console.log('点击我的右键菜单了，哈哈哈!',info, tab);
  sendMessageToContentScript(tab.id, info.selectionText, function(response){
    console.log('来自content的回复：'+response);
});
}

// 发送消息
function sendMessageToContentScript(id, message, callback){

  chrome.runtime.sendMessage(id+'', message, {includeTlsChannelId:true}, function(response){
      if(callback) callback(response);
  });
      // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      // });
}
