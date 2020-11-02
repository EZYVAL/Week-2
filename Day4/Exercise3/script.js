const abbrev_name=(name) => {
    if (name.includes(' ')==true) 
    { let levide=name.indexOf(' ');
    console.log(levide);
    console.log(name.substring(0,levide)+' '+name.substring(levide+1,levide+2)+'.');
    }  
}
abbrev_name('EZANE VALENTIN');


