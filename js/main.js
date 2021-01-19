/*
1. console & alert
2. Arithmetic Operators
3. JS Data Types
4. Variables
5. Comparisons
6. Conditionals (if alive say congrats/else) Data Validation
7. Functions
6. DOM (Pull data from html objects & display )
7. Concatenate Data (Make a paragraph of information)
8. Edit Existing Elements and Add new element
9. 
10. Modal
11. Stop Start Audio

*/
count=0;
console.log()
for(var i=0; i<=10;i++){
  setTimeout(function(){
    document.getElementsByClassName('btn-counter')[0].setAttribute('data-count',count++)
},500*i);
}