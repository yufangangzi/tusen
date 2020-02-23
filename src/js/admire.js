let admireList = require('../template/admire_list.art')
const imgs = {
  '卧房': [
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
  '卫生间': [
    {
      imgrul: '/admire_02.jpg'
    },
    {
      imgrul: '/admire_02.jpg'
    },
  ],
  '书房': [
    {
      imgrul: '/admire_01.jpg'
    },
    {
      imgrul: '/admire_01.jpg'
    },
  ],
  '儿童房': [
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
  '门厅': [
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
  '餐厅': [
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

function getTopic () {
  // title
  var topic = decodeURI(location.search); 
  if (topic && topic.includes('topic=')) {
    topic = topic.split('topic=')[1].includes('&')? topic.split('topic=')[1].split['&'][0] : topic.split('topic=')[1]
  } else {
    topic = '全部'
  }
  return topic
}

function getCorrcetImages () {
  var topic = getTopic()
  var resultImages = [];
  if (topic === '全部') {
    for (var li in imgs) {
      resultImages = resultImages.concat(imgs[li])
    }
  } else {
    resultImages = imgs[topic]
  }
  return resultImages
}

function page (index, admire_imgs) {
  let indexLast = index*6 + 6 > admire_imgs.length ? admire_imgs.length : index*6 + 6;
  const showList = admire_imgs.slice(index*6, indexLast)
  const pageNum = Math.ceil(admire_imgs.length/6);
  const pageList = new Array(pageNum)
  var topic = getTopic()
  document.getElementById('admire_list').innerHTML  = admireList({list: showList, pageList: pageList, topic: topic, currentPage: index});
  $('#admire_list .fenye a').bind('click', function () {
    const index = $(this).context.name
    $('.fenye').find('a').siblings().removeClass('thisclass')
    $(this).addClass('thisclass')
    page(Number(index), admire_imgs)
  })
}

page(0, getCorrcetImages())
