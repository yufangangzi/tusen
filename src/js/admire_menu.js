let menu = require('../template/admire_menu.art')
let admireList = require('../template/admire_list.art')
const list = [
  {
    fontcss: 'icon-tianqi_icon',
    fontdir: '港式现代系列',
    maodian: '#1'
  },
  {
    fontcss: 'icon-ouyuan01',
    fontdir: '简欧系列',
    maodian: '#2'
  },
  {
    fontcss: 'icon-icon-test',
    fontdir: '现代简约系列',
    maodian: '#3'
  },
  {
    fontcss: 'icon-oushiyiguianzhuang',
    fontdir: '法式系列',
    maodian: '#4'
  },
  {
    fontcss: 'icon-meiyan',
    fontdir: '美式系列',
    maodian: '#5'
  },
  {
    fontcss: 'icon-yigui',
    fontdir: '新中代系列',
    maodian: '#6'
  },
]
document.getElementById('menu').innerHTML  = menu({list: list})
const admire_imgs = [
  {
    imgrul: '/admire_01.jpg'
  },
  {
    imgrul: '/admire_01.jpg'
  },
  {
    imgrul: '/admire_01.jpg'
  },
  {
    imgrul: '/admire_01.jpg'
  },
  {
    imgrul: '/admire_01.jpg'
  },
  {
    imgrul: '/admire_01.jpg'
  },
  {
    imgrul: '/admire_01.jpg'
  }
]

function page (index=0) {
  const indexLast = index + 6
  const showList = admire_imgs.slice(index, indexLast)
  console.log(showList)
  document.getElementById('admire_list').innerHTML  = admireList({list: showList})
}
page()