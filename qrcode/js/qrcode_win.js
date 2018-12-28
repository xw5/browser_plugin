function createQrcodeWinHtml () {
  var html=`<div class="xw-qrcode__win555">
            <div class="xw-qrcode__con555" id="xwQrcodeCon555">
            </div>
            <a class="xw-qrcode__close555" id="xwQrcodeClose555">×</a>
          </div>`;
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  document.body.appendChild(tempDiv);
}
function createQrcodeWin () {

}

createQrcodeWinHtml();