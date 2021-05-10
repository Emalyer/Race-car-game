canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d"); 



car1_width = 120;
car1_height = 70;
car1_image = "car1.png"; 
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png"; 
car2_x = 10;
car2_y = 100;

background_image="racing2.jpg";
  
   function add() 
   { background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car1_image;
     } 
     
     
     function uploadBackground()
      { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
     }
     
     
     function uploadcar1()
      { ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height); 
    }

    function uploadcar2()
      { ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
    }
      window.addEventListener("keydown",My_keydown);
      function My_keydown(e){
          keypress=e.keyCode;
          console.log(keypress);
          
          if(car2_x>700){
            console.log("car 2 Won");
            document.getElementById('game_status').innerHTML="Car 2 Won yay!"
          }
          else if(car1_x>700){
            console.log("car 1 Won");
            document.getElementById('game_status').innerHTML="Car 1 Won yay!"
          }
          
          if(keypress=="38"){
              up();
              console.log("up");
          }

          if(keypress=="40"){
            down();
            console.log("down");
        }
        if(keypress=="68"){
          right2();
          console.log("right2");
      }
        if(keypress=="37"){
            left();
            console.log("left");
        }
        if(keypress=="65"){
          left2();
          console.log("left2");
      }
        if(keypress=="83"){
          down2();
          console.log("down2");
      }
        if(keypress=="39"){
            right();
            console.log("right");
        }
        if(keypress=="87"){
          up2();
          console.log("up2");
      }
      }

      function up(){
        if(car1_y>=0){
          car1_y=car1_y-10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }

      function down(){
        if(car1_y<=500){
          car1_y=car1_y+10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }

      function left(){
        if(car1_x>=0){
          car1_x=car1_x-10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }

      function right(){
        if(car1_x<=700){
          car1_x=car1_x+10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }
      function up2(){
        if(car2_y>=0){
          car2_y=car2_y-10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }

      function down2(){
        if(car2_y<=500){
          car2_y=car2_y+10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }

      function left2(){
        if(car2_x>=0){
          car2_x=car2_x-10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }

      function right2(){
        if(car2_x<=700){
          car2_x=car2_x+10;
          uploadBackground();
          uploadcar1();
          uploadcar2();
        }
      }