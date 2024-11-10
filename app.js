    const teamA = document.getElementById("teamAScore");
    const teamB = document.getElementById("teamBScore");

    const teamAScoreValue = document.getElementById("teamAScore");
    const teamBScoreValue = document.getElementById("teamBScore");

    
    const buttonArtı = document.getElementById("incrementScore");
    const customScore = document.getElementById("custom-score");

    customScore.addEventListener("click", function(){
        let userInput = prompt("FORECAST BOX")
    
        if(userInput !== null && userInput.trim() !== ""){
            counterA.innerHTML = userInput;
        }
    })
    buttonArtı.addEventListener("click", function(){
    
    const counterA = document.getElementById("counterA");
    let counterANumber = Number(counterA.innerHTML);

    counterANumber++;
    counterA.innerHTML = counterANumber;
   

})

const buttonEksiA = document.getElementById("decrementScore");
    buttonEksiA.addEventListener("click", function(){
    
    const counterA = document.getElementById("counterA");
    let counterANumber = Number(counterA.innerHTML);

    counterANumber--;

    if(counterANumber <=0){
        counterA.innerHTML =0;
    }else{
         counterA.innerHTML = counterANumber; 
    }   
})

const buttonArtıB = document.getElementById("incrementScoreB");
    const customScoreB = document.getElementById("custom-scoreB");

    customScoreB.addEventListener("click", function(){
        let userInput = prompt("FORECAST BOX")
    
        if(userInput !== null && userInput.trim() !== ""){
            counterB.innerHTML = userInput;
        }
    })
    buttonArtıB.addEventListener("click", function(){
    
    const counterB = document.getElementById("counterB");
    let counterBNumber = Number( counterB.innerHTML);

    counterBNumber++;
    counterB.innerHTML = counterBNumber;
   

})

const buttonEksiB = document.getElementById("decrementScoreB");
    buttonEksiB.addEventListener("click", function(){
    
    const counterB = document.getElementById("counterB");
    let counterBNumber = Number(counterB.innerHTML);

    counterBNumber--;

    if(counterBNumber <=0){
        counterB.innerHTML =0;
    }else{
         counterB.innerHTML = counterBNumber; 
    }
})

    const changeA = document.getElementById("change-A");
    let changeNameA = 'Fenerbahçe';

    document.getElementById("change-A").addEventListener("click", function(){
        document.getElementById("change-A").textContent = `${changeNameA}`;
    })

    const changeB = document.getElementById("change-B");
    let changeNameB = 'Galatasaray';

    document.getElementById("change-B").addEventListener("click", function(){
        document.getElementById("change-B").textContent = `${changeNameB}`;
    })


   
