let myLuck;
let counter1 = 0;
let counter2 = 0;

const button=document.getElementById("button");
const player1=document.getElementById("player1");
const player2=document.getElementById("player2");
const counterPlayer1 = document.getElementById("counter1");
const counterPlayer2 = document.getElementById("counter2");
const resultado=document.getElementById("resultado");


const throwDice=()=>{
    let p1=Math.round(Math.random()*2+1);
    let p2=Math.round(Math.random()*2+1);
    return [p1,p2];
}

button.onclick=()=>{
    myLuck=throwDice();
    player1.value=myLuck[0];
    player2.value=myLuck[1];

    if(player1.value == 1){
        player1.src="rock.png";
        if(player2.value == 1){
            player2.src="rock.png";
            resultado.innerText="Draw";
        }
        else if(player2.value == 2){
            player2.src="paper.png";
            resultado.innerText="You lose";
            counter2++;
        }
        else{
            player2.src="scissor.png";
            resultado.innerText="You won";
            counter1++;
        }
    }
    else if(player1.value == 2){
        player1.src="paper.png";
        if(player2.value == 1){
            player2.src="rock.png";
            resultado.innerText="You won";
            counter1++;
        }
        else if(player2.value == 2){
            player2.src="paper.png";
            resultado.innerText="Draw";
        }
        else{
            player2.src="scissor.png";
            resultado.innerText="You lose";
            counter2++;
        }
    }
    else if(player1.value == 3){
        player1.src="scissor.png";
        if(player2.value == 1){
            player2.src="rock.png";
            resultado.innerText="You lose";
            counter2++;
        }
        else if(player2.value == 2){
            player2.src="paper.png";
            resultado.innerText="You won";
            counter1++;
        }
        else{
            player2.src="scissor.png";
            resultado.innerText="Draw";
        }
    }
    else{
        alert("error")
    }


    if(counter1 == 3){
        Swal.fire({
            position: 'top',
            title: 'You won',
            timer: 1500,
            allowOutsideClick: false,
            showConfirmButton: false
          })
        setTimeout(()=>
        location.reload(),1600
        )
    }
    else if(counter2 == 3){
        Swal.fire({
            position: 'top',
            title: 'You lose',
            timer: 1500,
            allowOutsideClick: false,
            showConfirmButton: false
          })
        setTimeout(()=>
        location.reload(),1600
        )
    }
    counterPlayer1.innerText = counter1;
    counterPlayer2.innerText = counter2;
}



