// // Problem 1
// Literal Notation
let myname = [];

// // Problem 2
// // Object Notation
let username = new Array ();

// //Problem 3
let studentsname = ['Amna', 'Laiba','Wari'];
console(studentsname);

// // Problem 4
let num = [1, 2, 3];
console(num);

// // Problem 5
let condition = ['True', 'False'];
console(condition);

// // Problem 6
let mixed = ['Ali', 2,];
console(mixed);

// Problem 7
let list = ['SSC' ,'HSC' , 'BCS' , 'BS' , 'BCOM' , 'MS' , 'M.Phil..'  , 'PhD'];
document.writeln(`<h1> Qualification </h1> <br>`);
document.writeln(`<ol>
   <li>${list[1]}</li> 
   <li>${list[2]}</li> 
   <li>${list[3]}</li>  
   <li>${list[4]}</li>  
   <li>${list[5]}</li>  
   <li>${list[6]}</li> 
   <li>${list[7]}</li> 
   <li>${list[8]}</li> 
    </ol> `);

    // Problem 8
    let nameofstudents = ['Michael', 'John' ,'Tony'];
    let numofstudents = [320, 230, 480,];
   document.writeln(`Score of ${nameofstudents[0]} is ${numofstudents[0]}. Percentage: 64% <br>
    Score of ${nameofstudents[1]} is ${numofstudents[1]}. Percentage: 46% <br>
    Score of ${nameofstudents[2]} is ${numofstudents[2]}. Percentage: 96%
    `);

// Problem 9
let colors = [' Red ',' Green ', ' Yellow '];
document.writeln(`${colors} <br>`);

// a
let usercolor = prompt('Which color do you add at the start?');
colors.unshift(usercolor);
document.write(usercolor);

// b
let usercolorend = prompt('Which color do you add at the end?');
colors.push (usercolorend);
document.write(usercolorend);

// c
colors.unshift('Aqua ' , ' Navyblue ' );
document.writeln(`${colors} <br>`);

// d
colors.shift();
document.writeln(`${colors} <br>`);

// e
colors.pop();
document.writeln(`${colors} <br>`);
