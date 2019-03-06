let menu = require('../template/admire_menu.art')
let admireList = require('../template/admire_list.art')
const list = [
  {
    fontcss: 'icon-tianqi_icon',
    fontdir: '港式现代系列',
    maodian: 'gx'
  },
  {
    fontcss: 'icon-ouyuan01',
    fontdir: '简欧系列',
    maodian: 'jo'
  },
  {
    fontcss: 'icon-icon-test',
    fontdir: '现代简约系列',
    maodian: 'xj'
  },
  {
    fontcss: 'icon-oushiyiguianzhuang',
    fontdir: '法式系列',
    maodian: 'fs'
  },
  {
    fontcss: 'icon-meiyan',
    fontdir: '美式系列',
    maodian: 'ms'
  },
  {
    fontcss: 'icon-yigui',
    fontdir: '新中代系列',
    maodian: 'xz'
  },
]
document.getElementById('menu').innerHTML  = menu({list: list})
const imgs = {
  gx: [
    {
      imgrul: '/admire_01.jpg'
    },
    {
      imgrul: '/admire_01.jpg'
    },
    {
      imgrul: '/admire_01.jpg'
    }
  ],
  jo: [
    {
      imgrul: '/admire_02.jpg'
    },
    {
      imgrul: '/admire_02.jpg'
    },
  ],
  xj: [
    {
      imgrul: '/admire_01.jpg'
    },
    {
      imgrul: '/admire_01.jpg'
    },
    {
      imgrul: '/admire_01.jpg'
    },
  ],
  fs: [
    {
      imgrul: '/admire_02.jpg'
    },
    {
      imgrul: '/admire_02.jpg'
    },
    {
      imgrul: '/admire_02.jpg'
    },
    {
      imgrul: '/admire_02.jpg'
    },
  ],
  ms: [
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
  ],
  xz: [
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
  ]
}

function page (index, admire_imgs) {
  let indexLast = Number(index) + 6 > admire_imgs.length ? admire_imgs.length : Number(index) + 6;
  const showList = admire_imgs.slice(index*6, indexLast)
  const pageNum = Math.ceil(admire_imgs.length/6);
  const pageList = new Array(pageNum)
  const html = admireList({list: showList, pageList: pageList});
  document.getElementById('admire_list').innerHTML  = admireList({list: showList, pageList: pageList});
  $('#admire_list .fenye a').bind('click', function () {
    const index = $(this).context.name
    page(index, admire_imgs)
  })
}
page(0, imgs.gx)
$("#menu li a").bind('click', function () {
  const index = $(this).context.name
  page(0, imgs[index])
})