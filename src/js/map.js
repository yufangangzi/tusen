
// 定义自定义覆盖物的构造函数  
function SquareOverlay(center, length, color){
  this._center = center;
  this._length = length;
  this._color = color;
}
// 继承API的BMap.Overlay
SquareOverlay.prototype = new BMap.Overlay();
// 实现初始化方法  
SquareOverlay.prototype.initialize = function(map){
  // 保存map对象实例
  this._map = map;
  // 创建div元素，作为自定义覆盖物的容器
  var div = document.createElement("div");
  div.className = "self_map_point"
  //div.style.position = "absolute";
  // 可以根据参数设置元素外观
  // div.style.width = this._length + "px";
  // div.style.height = this._length + "px";
  //div.style.background = this._color;
  // 将div添加到覆盖物容器中
  map.getPanes().markerPane.appendChild(div);
  // 保存div实例
  this._div = div;
  // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
  // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
  return div;
}
// 实现绘制方法   
SquareOverlay.prototype.draw = function(){    
  // 根据地理坐标转换为像素坐标，并设置给容器    
      var position = this._map.pointToOverlayPixel(this._center);    
      this._div.style.left = position.x - this._length / 2 + "px";    
      this._div.style.top = position.y - this._length / 2 + "px";    
  }
  // 实现显示方法    
SquareOverlay.prototype.show = function(){    
  if (this._div){    
      this._div.style.display = "";    
  }    
}      
// 实现隐藏方法  
SquareOverlay.prototype.hide = function(){    
  if (this._div){    
      this._div.style.display = "none";    
  }    
}
var map = new BMap.Map("container"); 
// 设置具体位置经纬度
var point = new BMap.Point(116.726232,39.862082);
map.centerAndZoom(point, 15);
var mySquare = new SquareOverlay(map.getCenter(),102, 'red')
// console.log(map.getCenter())
map.addOverlay(mySquare)
map.setMapStyle({style:'dark'})

// 右上角添加缩放控件
var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
map.addControl(top_right_navigation); 
// var opts = {    
//   width : 250,     // 信息窗口宽度    
//   height: 100,     // 信息窗口高度    
//   title : "Hello"  // 信息窗口标题   
// }    
// var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象    
// map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口