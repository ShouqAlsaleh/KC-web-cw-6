alert (`Welcom, my website will calculate yuor score`)

let grade = ( prompt`write your score `)

console.log(grade)

if ( grade >= 90 && grade <= 100)
{console.log(`%c لقد حصلت على امتياز 🥳`,"color : green")}

else if (grade >= 80 && grade <=   89)
 {console.log (`%cلقد حصلت على جيد جداً🤩`,"color : blue")}

 else if (grade >= 70 && grade <= 79)
 {console.log (`%c لقد حصلت على جيد🙂`,"color : orange")}



 else if (grade >= 60 && grade <= 69)
 {console.log (`%c لقد حصلت على مقبول😕`,"color : yellow")}



 else if (grade >= 50 && grade <= 59)
 {console.log (`%cلقد حصلت على ضعيف☹️`,"color: red")}

 else if(grade < 50 )
 { console.log(`%c راسب💔`,"color : grey")}

// JavaScript not Java
