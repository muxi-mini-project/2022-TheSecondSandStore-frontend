export default ({
  pages: [
   
    'pages/Square/Square',
    'pages/Search/index',
    'pages/Login/index',
    'pages/Add-good/index',
    'pages/Goods-details/index',
    /* 'pages/Goods-details/index', */
    
    /* 'pages/Add-good/index', */
    'pages/Homepage/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'QQ',
    navigationBarTextStyle: 'black',
    onReachBottomDistance: 0,
    enablePullDownRefresh:true,
    backgroundColor:'#fff'

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
