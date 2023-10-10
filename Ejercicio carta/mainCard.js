let array=['./card-front.png','./card-front2.jpg','./card-front1.png','./card-front3.png'];
        let front="front";
        let start=document.getElementById('start');

        function shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
        }
        
        start.onclick=function(){
            shuffleArray(array);
            for (let index = 0; index < array.length; index++) {
                /* console.log(front+index); */
                document.getElementById(front+index).src=array[index];
                
            }
            
        }