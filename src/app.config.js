export default ({
  pages: [
    'pages/Login/index',
    'pages/Square/Square',
    'pages/Goods-details/index',
    'pages/Search/index',
    'pages/Add-good/index',
    'pages/Homepage/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'QQ',
    navigationBarTextStyle: 'black',
    onReachBottomDistance: 0,
    enablePullDownRefresh:true,
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/Square/Square',
        text:'主页',
        iconPath: './Images/ground.png',
        selectedIconPath: './Images/selected-ground.png'
      },
      {
        pagePath: 'pages/Add-good/index',
        text:'  ',
        iconPath: './Images/add.png',
        selectedIconPath: './Images/add.png',

      },
      {
        pagePath: 'pages/Homepage/index',
        text:'我的',
        iconPath: './Images/home.png',
        selectedIconPath: './Images/selected-home.png'
      }],
      backgroundColor: '#FFFFFF'
    }
  
    })