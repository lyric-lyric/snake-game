/**
 * Created by 罗雨婷 on 2017/8/22.
 */
(function(window){
  function Game(){
     this.version = 1.0;
     this.map = new Map({});
     this.food = new Food({map:this.map});
     this.snake = new Snake({map:this.map});
     this.timer = null;
  }

  Game.prototype = {
    constructor:Game,
    gameStart:function(){
      this.map.render();
      var that = this;
      this.userControl();
      this.timer = setInterval(function(){
        that.map.map.innerHTML="";
         that.render();
        that.impact();
        that.gameOver();
      },300);
    },
    render:function(){
      this.snake.render();
      this.food.render();
    },
    impact:function(){
      var head = this.snake.body[0];
      if(head.x == this.food.x&&head.y == this.food.y){
        this.snake.eat();
        this.food.setPos();
      }
    },
    gameOver:function(){
      var head = this.snake.body[0];
      if(head.x<0||head.y<0||head.x>this.map.cell-1||head.y>this.map.row-1){
        clearInterval(this.timer);
        alert("gamerOver!");
      }
    },
    userControl:function(){
      var that = this;
      window.onkeydown=function(e){
        var code = e.keyCode;
        switch (code){
          case 37:
            that.snake.direction = "left";
            break;
          case 38:
            that.snake.direction = "up";
            break;
          case 39:
            that.snake.direction = "right";
            break;
          case 40:
            that.snake.direction = "down";
            break;
        }
      }
    }
  }
  window.Game=Game;
})(window)