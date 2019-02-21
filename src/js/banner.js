import '../style/scroll.less'
let scroll = require('../template/scroll.art')
import Scrolls from './scroll.js'

const list = [
  {img:'./banner.jpg'},
  {img:'./banner01.jpg'},
  {img:'./banner987.jpg'},
]
document.getElementById('banner').innerHTML  = scroll({list: list})
const scrolls = new Scrolls('.index-banner')
const Img = new Image();
Img.src = '/banner.jpg'
Img.onload = function () {
  scrolls.init()
}


