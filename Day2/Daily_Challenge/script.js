let str="this is not a bad thing"
console.log(x=str.indexOf("not"));
console.log(y=str.indexOf("bad"));
if(x>0 & y>0){
    console.log(str.substring(0,x)+' good '+str.substring(y+3,str.length))
}
else{
    console.log(str)
}