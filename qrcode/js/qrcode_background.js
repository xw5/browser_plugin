chrome.contextMenus.create({
  type: 'normal',
  title: '生成二维码:',
  id: 'qrcodeCm',
  contexts: ['selection'],
  onclick: createQrcode
});

function createQrcode(info, tab) {
  console.log('点击我的右键菜单了，哈哈哈!',info);
}