/*
Exercise 4: Group Chat
1- let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
- Using the array above, console.log the number of users in a group conversation based on the following rules:
- If there is no one, display “no one is online”.
- If there is 1 person, display “<name_user> is online”.
- If there are 2 people, display “<name_user1> and <name_user2> are online”.
- If there are n>2 people, display the first two names and add “and n-2 more are online”.
For example, if there are 5 users, it should display:
name_user1, name_user2 and 3 more are online
*/
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users) {
  case '':
    console.log('no one is online');
    break;
    case 'users[0]':
        console.log('one user is online');
        break;
  case 'users[0]':
  case 'users[1]':
    console.log(users[0], 'and', users[1], 'are online');

    break;
  default:
    console.log(users[0], ';', users[1] , "and all reste are one line")
}