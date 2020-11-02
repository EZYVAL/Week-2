/*Exercise 1: Simple If/Else Statement
1-Create 2 variables, x and y. Each of them has a different numeric value.
2-Write an if/else statement that checks the biggest number.
If x equals 5 and y equals 2, the program should display:x is the biggest number
*/
let x=prompt('enter x value');
let y=prompt('enter y value');
if(x>y){
    console.log('x is the biggest number');
}
else if(x<y){
    console.log('Y is the biggest number');
}
else{
    console.log('x is equals to y')
}

