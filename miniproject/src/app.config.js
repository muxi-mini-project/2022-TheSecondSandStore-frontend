export default ({
  pages: [
   
    'pages/Square/index',
    'pages/Login/index',
    'pages/Goods-details/index',
    'pages/Homepage/index'

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'QQ',
    navigationBarTextStyle: 'black',
    onReachBottomDistance: 0
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/Square/index',
       
        iconPath: './Images/ground.png',
        selectedIconPath: './Images/selected-ground.png'
      },
      {
        pagePath: 'pages/Add-good/index',
      
        iconPath: './Images/add.png',
        selectedIconPath: './Images/add.png',

      },
      {
        pagePath: 'pages/Homepage/index',
        
        iconPath: './Images/home.png',
        selectedIconPath: './Images/selected-home.png'
      }],
      backgroundColor: '#FFFFFF'
    }
  
    })
