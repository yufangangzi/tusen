import '../style/foot.less'
let foot = require('../template/foot.art')
const list = [
  {name:'首页'},
  {name:'品牌介绍'},
  {name:'展厅鉴赏'},
  {name:'案例赏析'},
  {name:'设计大咖'},
  {name:'新闻资讯'},
  {name:'联络信息'},
]
document.getElementById('foot').innerHTML  = foot({list: list})