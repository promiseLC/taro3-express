export default defineAppConfig({
  pages: ['pages/index/index', 'pages/order/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#0066e6',
    navigationBarTitleText: '远方',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    color: '#7F8389',
    selectedColor: '#0066E6',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assects/icon/index-unselected.png',
        selectedIconPath: 'assects/icon/index-selected.png',
      },
      {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: 'assects/icon/order-unselected.png',
        selectedIconPath: 'assects/icon/order-selected.png',
      },
    ],
  },
});
