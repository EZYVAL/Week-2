let current=[];
function my_f(num) {
    let display=document.getElementById('display');
    if (num==='=') {
        numb=''
        for (let i of current) {
            numb+=i;
            
        }
        let total= eval(numb);
        display.innerHTML=total;
        
    }
    else{
        current.push(num);
        display.innerHTML=current.join('');
    }

}