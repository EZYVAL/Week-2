let people = ["Greg", "Mary", "Devon", "James"];
people.forEach(element => { console.log(element)  
});

people.shift();
console.log(people);


people.splice(2, 1,'Jason');
console.log(people);

people.push('Valentin');
console.log(people);

people.forEach(element => { 
    if (element=="Mary") {
       console.log(element);
    }
      
});

let le=people.slice(0,3);
console.log(le);
console.log(people.indexOf("Mary"));
console.log(people.indexOf('Fooo'));


let last=people[3];
console.log(last);
console.log(people.length);