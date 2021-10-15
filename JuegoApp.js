let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos

        let  puntos=0;
        let colorFondo = color(0,255,0)
        
        let x=500;
        direccion = 0;


        let y=0;
        let xAleatorio = 500;
        let dhr=1 // direccion horizontal del rectangulo
        let dvr=1  // direccion vetical del rectangulo

        draw=function(){
            background(colorFondo);

            textSize(50);
            fill(0,0,0);
            text("Puntos: "+puntos ,380,100);
            
            /// RECTANGULO _________________________________________________________________________
            fill(0,0,222)
            rect(xAleatorio,y,10,10);
            y=y+dvr;  
            xAleatorio = xAleatorio + dhr;
            //console.log(y)

            if(xAleatorio >= 1000 )  // al chocar al borde derecho 
            {
                dhr=-1;
            }
            if( y >=600 ){ // Al Chocar ABAJO
                dvr = 0;
                textSize(100);
                fill(0,0,0);
                text("GAME OVER" ,200,300);
            }

            if( y==0 ){// al chocar ARRIBA
                dvr = +1;
            }
            if( xAleatorio == 0) //al chocar al borde izquierdo 
            {
                dhr = +1;
            }

           /*  if( y >= 600 ){
                y=0;
                xAleatorio = random(1 , 1000); 
               
            } */

            if(xAleatorio <= x+50 && xAleatorio >= x-50  &&  y>=450 && y<=550 ){
                textSize(60);
                fill(0,0,0);
                text("CHOQUE" ,200,200);
                dvr = - 1;
                puntos = puntos +1;
                
            } 

            /// ELIPSE __________________________________________________________________________
            fill(255,0,0);
            ellipse(x,500,100,100);
        

            x = x + direccion;

            keyPressed=function(){
                //colorFondo = color(0,255,0)
                if (key.code == 65){
                    direccion = -2;
                    
                } 
                if (key.code == 68){
                    direccion = +2;
                    
                }  
            }

            mousePressed=function(){
               
                if (mouseX < 500){
                    direccion = -2;
                    
                } 
                if (mouseX > 500){
                    direccion = +2;
                    
                }  
            }


      

            if( x >= 975 ){
                direccion=-2;
            }
            if( x <= 25 ){
                direccion=+2;
            }
        }



        /* fill(255,0,0);
        keyPressed=function(){
            //textSize(50);
            //console.log(key.code); // key.code Almacena el codigo de la tecla presionada

            if (key.code == 65){
                ellipse(mouseX,mouseY,50,50)
            } 
        } */




   //------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc); 
