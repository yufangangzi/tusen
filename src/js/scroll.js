class Scroll {
  constructor (container) {
    this.container = container
    this.timer = null
    this.indexNum = 0
  }
  init () {
    
    const width = $(this.container)[0].clientWidth
    const childnum = $(this.container+ ' ul')[0].children.length
    this.width = width
    this.childnum = childnum
    
    $(this.container+ ' li').width(width)
    $(this.container+ ' ul').width(width*childnum)
    const height = $(this.container+ ' img')[0].height
    $(this.container).height(height)
    console.dir($(this.container))
    console.dir(width)
    this.swiper()
  }
  swiper () {
    const self = this
    window.clearTimeout(this.timer)
    this.timer = null
    this.timer = setTimeout (() => {
      const movelen = this.indexNum*this.width
      $(this.container+ ' ul').animate({'margin-left': movelen+'px'}, {duration:1000,easing:'easeInOutCirc',complete:() => {
        this.indexNum--
        if (this.indexNum <= -this.childnum){
          this.indexNum = 0
        }
        this.swiper()
      }})
      
    },2000)
  }
}
module.exports = Scroll