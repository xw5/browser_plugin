var nowUrl = "https://www.baidu.com";
chrome.windows.getCurrent((win) => {
  chrome.tabs.query({
    active:true,
    windowId:win.id
  },(tab) => {
    nowUrl = tab[0].url;
    createQrcode(nowUrl);
  });
});

// 生成自定义二维码
$('#createBtn').on('click', function () {
  let str = $("#qrcodeCon").val();
  if (str.trim().length < 0 ) {
    alert('请输入你想生成二维码的内容！');
    return;
  }
  createQrcode(str);
})

// 生成二维码
function createQrcode (str) {
  return new QRCode($("#qrcodeMain")[0], {
    text: str,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
}