//countDown

function countDown(num){
   
      let time = setInterval(function(){
        if (num > 0) {
          console.log(num);
          num--;
        }  
        else{
          clearInterval(time);
          console.log ("DONE!");
        }

    }, 1000);
  
}


//randomGame

function randomGame (num){

  let count = 0;

  let time = setInterval(function(){
    for (let i=0; i <= 1; i++){
      num = Math.random();
      count++;
   //   console.log(num);
   }

      if( num > .75){
      clearInterval(time);
      console.log(count + " " + "times before getting greater than .75" );
   }   
    
},1000);

}