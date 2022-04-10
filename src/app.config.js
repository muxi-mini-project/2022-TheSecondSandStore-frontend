export default ({
  pages: [
    'pages/Square/Square',
    'pages/Login/index',
    'pages/Search/index',
    'pages/Addgoods/index',
    'pages/Goods-details/index',
    'pages/Homepage/index',
    'pages/changeUserinfo/index',
    'pages/Favourites/index',
    'pages/Lists/index',
    // 'pages/Tags/index',
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
        pagePath: 'pages/Addgoods/index',
        text:'发布',
        iconPath: './Images/add.png',
        selectedIconPath: './Images/add.png',

      },
      {
        pagePath: 'pages/Homepage/index',
        text:'我的',
        iconPath: './Images/home.png',
        selectedIconPath: './Images/selected-home.png'
      }],
      color: '#000000',
      backgroundColor: '#FFFFFF',
      selectedColor: '#FFFFFF'
    }
  
    })
