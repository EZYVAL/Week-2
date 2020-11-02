const SwapCase = (phrase) => { 
    let vide=''
    for (let i= 0; i < phrase.length; i++) {
        if (phrase[i]==phrase[i].toUpperCase()) {
            vide+=phrase[i].toLowerCase(); 
        }
        else if(phrase[i]==phrase[i].toLowerCase()) {
            vide+=phrase[i].toUpperCase();
        }  
    }
    console.log(vide);
}
SwapCase('The Quick Brown Fox');
