import '../style/aboutList.less'
let aboutList = require('../template/aboutList.art')
const list = [
  {dir:'卧房', classname: 'list_0',imgsrc: 'li-bg1',info: {t1: '卧房系列', t21: '拥有一个温馨和美的家是幸福温暖的，', t22: '拥有一个灵魂歇息畅游的卧室是幸运惬意的！', t3: '锦泊豪斯-卧房产品'}},
  {dir:'卫生间', classname: 'list_1',imgsrc: 'li-bg2',info: {t1: '卫生间系列', t21: '卫生间是家中最常用的领域，是一个比较私密的空间。', t22: '精心对待卫生间的设计，提升对生活品质的追求，是一种对待精品生活的态度。', t3: '锦泊豪斯-卫生间产品'}},
  {dir:'餐厅', classname: 'list_2',imgsrc: 'li-bg3',info: {t1: '餐厅系列', t21: '餐厅可谓是家居生活的心脏，', t22: '更好地为你创造一个温馨、健康的家庭环境', t3: '锦泊豪斯-餐厅产品'}},
  {dir:'书房', classname: 'list_3',imgsrc: 'li-bg4',info: {t1: '书房系列', t21: '书房是家中文化气息最浓的地方，也是为个人 而设的私人天地，更是自己的一个家庭工作室，', t22: '它可以是幽雅、宁静的静态空间，也可以是思考、学习的创作天地。', t3: '锦泊豪斯-书房产品'}},
  {dir:'儿童房', classname: 'list_4',imgsrc: 'li-bg5',info: {t1: '儿童房系列', t21: '儿童房的设计装修风格，鲜活的生命力，', t22: '色彩的搭配更能抓住孩子敏感的眼球。', t3: '锦泊豪斯-儿童房产品'}},
  {dir:'门厅', classname: 'list_5',imgsrc: 'li-bg6',info: {t1: '门厅系列', t21: '最简洁、最质朴的家具定制设计理念，将西方的极简文化与东方传统的居家归属感相融合，', t22: '以线条色块来区分点缀，做到功能的最直白表达。', t3: '锦泊豪斯-门厅产品'}}
]
document.getElementById('aboutList').innerHTML  = aboutList({list: list})
$('.wrap_list li').bind('mouseenter',function (e) {
  $(this).siblings().removeClass('select')
  $(this).addClass('select')
  const index = $(this).index()
  $('.pro-nav-img').find('li').eq(index).addClass('select').siblings().removeClass('select')
  console.log()
})