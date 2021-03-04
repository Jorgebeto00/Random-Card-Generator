window.onload = function () {
    let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let symbol = ["King", "Queen", "Jack", "Ace"];

    let result1 = Math.floor(Math.random() * number.length);
    let result2 = Math.floor(Math.random() * symbol.length);

    let num;
    for(let i = 0; i < number.length; i++){
        if(i == result1){
            num = number[i];
        }
    }


    let newDiv = document.createElement("P");
    let newDiv2 = document.createElement("P");
    let newDiv3 = document.createElement("P");
    newDiv.innerHTML = "hello";
    newDiv2.innerHTML = num;
    newDiv3.innerHTML = result2;
    document.body.appendChild(newDiv);
    document.body.appendChild(newDiv2);
    console.log(num);
};