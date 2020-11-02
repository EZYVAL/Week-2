let yes=["45", "57", "1234","33333333"];
let sum=0
yes.forEach(element => {
    for (let i = 0; i < element.length; i++) {
        sum=sum+parseInt(element[i]);
    }
    console.log(sum);
    
    if(sum%3==0) {
        console.log('true');
        
    } else {
        console.log('false');
        
    }
    
    
});