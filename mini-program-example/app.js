App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("[ onLaunch");
    this.userLogin();
    console.log("]");
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("[ onShow");
    console.log(options);
    console.log("]");
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("[ onHide");
    console.log("]");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("[ onError");
    console.log('onError');
    console.log('msg');
    console.log("]");
  },

  /**
   * 全局变量
   */
  globalData: {},

  /**
   * 登陆
   */
  userLogin() {
  },

  /**
   * 授权
   * scope.userInfo	wx.getUserInfo	用户信息
      scope.userLocation	wx.getLocation, wx.chooseLocation	地理位置
      scope.address	wx.chooseAddress	通讯地址
      scope.invoiceTitle	wx.chooseInvoiceTitle	发票抬头
      scope.werun	wx.getWeRunData	微信运动步数
      scope.record	wx.startRecord	录音功能
      scope.writePhotosAlbum	wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum	保存到相册
      scope.camera		摄像头
   */
  checkAuthorize(scope) {
    wx.getSetting({
      success: (res) => {
        console.log(res.authSetting[scope])
        if (!res.authSetting[scope]) {
          wx.showModal({
            title: '用户未授权',
            content: '拒绝授权将不能体验小程序完整功能，点击确定开启授权',
            success: (res) => {
              console.log(res)
              if (res.confirm) {
                wx.openSetting({})
              }
            }
          })
        }
      }
    })
  }
})