 function playGame(option){
            let x = document.getElementById("result");
            let arr = ['Rock','Paper','Scissors'];
            let comp=arr[Math.floor(Math.random()*3)]
            console.log(option)
            console.log(comp)

            if(option === comp){
              x.innerHTML = "<h1> tie! </h1> " + "my option: " + option + "<br>" + "computer's option: " + comp;
            }
            else if((option=="Rock" && comp=="Scissors") || (option=="Paper" && comp=="Rock") || (option=="Scissors" && comp=="paper")){
              x.innerHTML = "<h1> You win! </h1> " + "my option: " + option + "<br>" + "computer's option: " + comp;
            }

            else{
              x.innerHTML="<h1> You lose! </h1> " + "my option: " + option + "<br>" + "computer's option: " + comp;
            }


        }

