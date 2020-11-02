const Is_Blank = (str) => 
{if (typeof(str)=='string') {
    return false;
} 
else if(str=='') {
   return true;
}
}
console.log(Is_Blank('bghnhgnfty'));