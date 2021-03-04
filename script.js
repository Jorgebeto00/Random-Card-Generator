window.onload = function () {
    let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack", "Ace"];
    let symbol = ['♦', '♥', '♠', '♣'];

    let result1 = Math.floor(Math.random() * number.length);
    let result2 = Math.floor(Math.random() * symbol.length);

    let num;
    let sym;
    let symColor;

    for(let i = 0; i < number.length; i++){
        if(i == result1){
            num = number[i];
        }
    }
    for(let i = 0; i < symbol.length; i++){
        if(i == result2){
            sym = symbol[i];
        }
        if(sym == '♥' || sym == '♦'){
            symColor = 'red';
        }
    }

    
    let newSymbol = document.querySelector(".symbol");
    let newNumber = document.querySelector(".letter");
    let newSymbol2 = document.querySelector(".symbol2");
    newSymbol.innerHTML = sym;
    newNumber.innerHTML = num;
    newSymbol2.innerHTML = sym;
    newSymbol.style.color = symColor;
    newSymbol2.style.color = symColor;

    
};