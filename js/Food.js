/**
 * Created by 罗雨婷 on 2017/8/21.
 */
(function(window){
  function Food(option){
    this.map = option.map;//引入地图对象.可以使用地图对象的属性
    this.color = option.color||"gray";
    this.size  = option.size||25;
    this.x =0;
    this.y = 0;

  }
  Food.prototype.render = function(){
    var food = document.createElement("div");
    food.style.backgroundColor = this.color;
    food.style.size = this.size+"px";
    food.style.position = "absolute";
    food.style.borderRadius ="50%";
    food.style.width = this.size+"px";
    food.style.height = this.size+"px";
    food.style.left = this.size*this.x+"px";
    food.style.top = this.size*this.y+"px";
    this.map.map.appendChild(food);
  };

  Food.prototype.setPos = function(){
    this.x = parseInt(Math.random()*this.map.cell);
    this.y = parseInt(Math.random()*this.map.row);
    //console.log(this.x);
    //console.log(this.y);
  };
  window.Food = Food;
})(window);