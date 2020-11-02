let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let order=names.sort();
let s_name=''
console.log(order);
for (let i = 0; i < order.length; i++) {
    console.log('society name=',s_name=s_name+order[i].charAt(0));
}