/**
 * Created by 罗雨婷 on 2017/8/21.
 */
(function(window){
    function Map(option){
      this.color = option.color||"#ddd520";
      this.row = option.row||20;
      this.cell = option.cell||30;
      this.size = option.size ||25;
    }

  Map.prototype.render = function(){
    var div = document.createElement("div");
    this.map = div;
    div.style.backgroundColor = this.color;
    div.style.position = "relative";
    div.style.width = this.cell*this.size+"px";
    div.style.height = this.row*this.size+"px";
    window.document.body.appendChild(div);
  };
  window.Map = Map;
})(window);