import '../style/aboutList.less'
let aboutList = require('../template/aboutList.art')
const list = [
  {img:'./banner.jpg'},
  {img:'./banner01.jpg'},
  {img:'./banner987.jpg'},
]
document.getElementById('aboutList').innerHTML  = aboutList({list: list})