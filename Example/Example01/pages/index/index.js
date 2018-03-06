const app = getApp();
Page({
  testAddress() {
    wx.chooseAddress({
      success: (res) => {
        console.log(res)
      },
      fail: (error) => {
        console.log(error);
        app.checkAuthorize('scope.address')
      }
    })
  },

  TestWeRunData() {
    wx.chooseInvoiceTitle({
      success: (res) => {
        console.log(res)
      },
      fail: (error) => {
        console.log(error);
        app.checkAuthorize('scope.address')
      }
    })
  }
})