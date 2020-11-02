let ezane={
user_name:"EZYVAL",
password:"valentin",
}
console.log(ezane);


let database=[ezane];
console.log(database);


let newsfeed=[ezane, {user_name:"BOUBA", timeline:25}]
console.log(newsfeed[1].user_name)
newsfeed.push({ user_name:'Sandrine', password:'oscar201'})

console.log(newsfeed)