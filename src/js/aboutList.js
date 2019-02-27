import '../style/aboutList.less'
let aboutList = require('../template/aboutList.art')
const list = [
  {dir:'卧房', classname: 'list_0',imgsrc: 'li-bg1',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '图森-卧房产品'}},
  {dir:'卫生间', classname: 'list_1',imgsrc: 'li-bg2',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '图森-卧房产品'}},
  {dir:'餐厅', classname: 'list_2',imgsrc: 'li-bg3',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '图森-卧房产品'}},
  {dir:'书房', classname: 'list_3',imgsrc: 'li-bg4',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '图森-卧房产品'}},
  {dir:'儿童房', classname: 'list_4',imgsrc: 'li-bg5',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '图森-卧房产品'}},
  {dir:'门厅', classname: 'list_5',imgsrc: 'li-bg6',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '图森-卧房产品'}}
]
document.getElementById('aboutList').innerHTML  = aboutList({list: list})
$('.wrap_list li').bind('mouseenter',function (e) {
  $(this).siblings().removeClass('select')
  $(this).addClass('select')
  const index = $(this).index()
  $('.pro-nav-img').find('li').eq(index).addClass('select').siblings().removeClass('select')
  console.log()
})