////////////// Js Console.log() ///////////////
//jab bhi hum console window kay uper kuch print kervana chatay hai tu uss kay liye hum aik function ka use kertay hai jiss ka naam hai console.log jab hum iss mai double quotes mai cheezay likhtay hai tu woh string ban jati hai means woh cheez wesi ki wesi hi print ho jati hai. but jab hum variable ka naam likhtay hai tu console.log mai uss ki value print ho ker ati hai hum multiple operation bhi console.log say print kerva sakhtay hai console aik tareeqa jiss say js ki bani huee file ko apnay browser kay console kay saat link kervanay ka 


//////////////// Linking Js file ///////////////
//hum Html ki file mai Js ko link kernay kay liye script tag ka use krtay hai 
//Example
//<script src="./practice.js"></script>
// script tag body tag say just pehlay ata hai
//console.log("Hello World");
//let a = 8;
//let b = 5;
//console.log("sum is: ", a + b);


/////////////// Template Literals ///////////////
let pencilPrice = 10;
let shopnerPrice = 7;
//let output = `` //back ticks
let output = `the total price is: ${pencilPrice + shopnerPrice} Rupees`;
//let output = "The final price:" + (pencilPrice + shopnerPrice) + " Rupees "; 
//console.log(output);

//jab bhi string kay andar variable ko add kerna chatay hai tu uss kay liye humay bari sari cheezay kerni parhti hai ussi kaam ko easy kernay ky liye template literals atay hai


//////////////// Operator in Js /////////////////
//operators ka kaam hota hai kisi bhi operation ko perform kerna operation means calculation kerna jesay humaray pass math kay operator hotay hai wesay hi js mai bhi hotay hai 
//Example
//Arithemtic(+, -, *, /, %, **) yeh Mathematicatly calculation kernay kay kaam atay hai 
//Practice
//let a = 67;
//let b = 6;
//console.log(a + b);
//console.log(a - b);
//console.log(a * b);
//console.log(a / b);
//console.log(a % b);
//console.log(a ** b);


//Unary operator(++, --)
//yeh humaray pass single operend mai likha jata hai
//Example
//a++, ++a
//Practice
//let a = 20;
//let b = 12;
//console.log(a++); //20
//console.log(++a);//22

//Assignment(=, +=, -=, /=, %= etc)
//Expression ki value ko variable kay andar assign kerna
//Example
//a = b
//Practice
//let a = 5;
//let b = 6;
//b = a;
//console.log(b);

//Comparison Operator
//yeh do values ko compare kernay ka kaam kertay hai 
//Example
//>, >=, <, <=, == equal to, != not equal to 
//Practice
//let age = 17;
//console.log(age > 17); greater then
//console.log(age >= 17);
//console.log(age < 17); lesser then
//console.log(age <= 17);
//iss tarah hum absolutes value kay bhi ker sakhtay hai
//Example
//3 < 7
//3 > 7
//==
//iss mai hum do equal value ko compare kertay hai 
//Example
//6 == 6
//Means kya six equal hai six kay iss ka Answer humay true or false mai milta hai == type nahi dekhta bulkay uss ki value dekhta hai 
//Example
//5 == "5" (true) hoga
//!= not equal
//5 != 5

//== yeh sirf value ko compare kerta hai 
//=== say hum apni type aur value dono ko compare ker sakhtay hai 

///Comparison for non-number
//iss mai humaray keyboard kay uper jitnay bhi character hotay hai unn kay uni code add hotay hai Means kai value kay unicode add hojatay hai


//////////////////// Conditional Statement ////////////////////
//if js ka keyword hai means reserved keyword hai aghir if kay andar likha hua code valid hai tu uss ki condition true hogi aur aghir if kay andar code likha hua galat hai tu condition false ho gi
//Example
//console.log("before my if statement");
//age = 32;
//if (age >= 18) { 
    //console.log("You can vote");
    
//}
//if(age > 23) {
   // console.log("You cannot Vote");
//}
//console.log("after my if statement");
//iss mai code tab execute hota hai jab yeh wali condition hoti hai jab if kay agay likhi huee condition true hoti hai aghir yeh condition true nahi hai tu humarah code execute nahi hu ga
//let firstName = "Riaz";
//if(firstName = "Riaz"){
   // console.log(`Welcome ${firstName}`);
//}

////////////////// Traffic light system practice //////////////////
//let color = "green";
//if(color === "red"){
    //console.log("Stop! light color is red");
//}

//if(color === "yellow"){
    //console.log("Slow down light color is yellow");
//}

//if(color === "green"){
   // console.log("Go. light color is green");
//}


///////////////////// else if statement /////////////////////
//Means jesay hi hum nay koi if statement likhi if statement kisi bhi condition ko check kerti hai if statement kay baad hum else if statement ko bana sakhtay hai yeh humaray pass uss waqt hota hai jab humari if statement false ho jati hai tu uss waqt humari else if statement work kerti hai else if ka kaam hota hai unn condition ko check kerna jo if statement nay false day di hai
//Practice
//let age = 14;
//if(age >= 18){
  //  console.log("You can vote");
//}
//else if(age < 18){
  //  console.log("You cannot vote");
//} 
//else if(age >= 18){
  //  console.log("You cannot vote2");
//}

//let mark = 75;
//if(mark >= 80){
  //  console.log("A+");
//}
//else if(mark >= 60){
    //console.log("A");
//}
//else if(mark >= 33){
  //  console.log("B");
//}
//else if(mark < 23){
  //  console.log("F");
//}

//let month = "january";
//if(month === "january"){
  //  console.log("Winter is here");
//}
//else if(month === "April"){
  //  console.log("summar is here");
//}


///////////////////// else statement /////////////////////
//iss mai jab uper ki sari condition false ho jati hai jo else statement hum nay jo likha woh check nahi ho ga bulkay jesa hum nay likha hai woh wesa hi execute ho jye ga
//Practice
//let age = 17;
//if(age >= 18){
  //  console.log("You can vote");
//}
//else {
  //  console.log("You cannot vote");
//}
//let color = "green";

//if(color === "red"){
  //  console.log("Stop!");
//}
//else if(color === "Yellow"){
  //  console.log("Slow down");
//}
//else if(color === "green"){
  //  console.log("Go");
//}
//else {
  //  console.log("Traffic light is broken");
//}


////////////////// Practice /////////////////
//let size = "k";

//if(size === "XL"){
  //  console.log("439")
//}
//else if(size === "L"){
 //   console.log("345");
//}
//else if(size === "M"){
 //  console.log("200");
//}
//else {
  //  console.log("100");
//}


///////////////////// Nested if-else ////////////////////
//iss ka matlab hota hai hai aik statement kay andar dosri statement ko likhna
// Practice
//let marks = 100;
//if(marks >= 33){
  //  console.log("Pass");
    //if(marks >= 89){
      //  console.log("Grade : 0");
    //}
   //else {
    //console.log("Grade : A");
   //}
//}
//else {
 //   console.log("Better luck next time");
//}


///////////////////// Logical Operator /////////////////////
//iss ka kaam hota hai expression ko combine kerna humaray pass 3 type kay logical operator hotay hai
//Example
//&& (Logical And); iss mai dono expression true hai tu humaray pass true print hoga 
//|| (Logical Aur); iss mai dono mai say koi aik expression true hoga
//! (Logical Not); yeh single expression per work kerta hai !not laghanay expression ki value reverse ho jati hai
// Practice
//let marks = 100;

//if(marks >= 33 && marks >= 80){
  //  console.log("Pass");
    //console.log("A+");
//}
//if(marks >= 33 || marks >= 80){
  //  console.log("Pass");
    //console.log("A+");
//}
//if(!(marks < 33)){
  //  console.log("Pass");
   // console.log("A+");
//}
//let marks = 23;
//if((marks > 33 && marks <= 80) || !false) {
  // console.log("Pass");
//}


//////////////////// Practice ////////////////////
//let str = "apple";

//if((str [0] === 'a') && (str.length > 3)) {
   // console.log("Good string");
//}
//else {
   // console.log("not a good string");
//}
//let num = 12;

//if((num % 3 === 0) && ((num + 1 === 15) || (num - 1 === 11))){
   // console.log("safe");
//}
//else {
    //console.log("unsafe");
//}


////////////////// truthy aur falsy ///////////////////
//yeh dono true or false say banay hai js kay andar har kisi kay pass uss ki boolean value associated  hoti hai woh value ya tu true ho sakhti hai ya false ho sakhti hai aur har baar true aur false dikhanay kay liye humay ussay kisi kay saat compare nahi kerna parhta kuee kay her kisi kay pass uss ki truthy true ya falsy false value associated hoti hai 
//Practice
//if("0"){
    //console.log("It has true value");
//}
//else{
    //console.log("It has false value");
//}
///False values in js///
//false, 0, -0, ""(empty string), on(BigInt value), null, undefined, NaN
///Truth values///
//everything else
//Practice
//let num = -90;
//if(num){
    //console.log("num is not equal to zero");
//}
//else {
    //console.log("num is equal to zero");
//}


/////////////////// Switch Statement ////////////////////
//switch ka kaam hota hai kay aghir koi condition such hai uss ki koi value di gye hai tu uss value ki bases per humara koi kaam perform ho jye switch ka bhi yehi kaam hota hai kay woh condition ko check kerta hai switch statement if else kay lighnay ka hi dosra tareeqa hota hai 
//Practice
//let color = "green";

//switch (color) {
    //case "red":
        //console.log("Stop!");
        //break;
        //case "yellow":
           // console.log("slow down");
            //break;
            //case "green":
              //  console.log("go");
                //break;
                //default:
                  //  console.log("light is broken");

//}


//////////////////// Practice //////////////////
//let day = 5;

//switch (day) {
  //  case 1:
       // console.log("Monday");
        //break;
        //case 2:
          //  console.log("Tuesday");
           // break;
            //case 3:
                //console.log("Wednesday");
                //break;
                //case 4:
                //console.log("Thursday");
                //break;
              //  case 5:
                //console.log("Friday");
                //break;
                //case 6:
                //console.log("Saturday");
                //break;
                //case 7:
                //console.log("Sunday");
                //break;
               // default:
                    //console.log("Wrong day!");
//}


///////////////// Alert & Prompt /////////////////
//jab bhi humay screen per asa kuch dikhana hota hai jesay kuch galat ho gya ya kuch galat typed ker dya tu iss tarah ki cheezu ko dikhanay kay liye hum js mai alert ka use kertay hai alert jo humaray screen per aik poppat typed message nikal ker ata hai
//Practice
//alert("something is wrong");
//jab bhi error msg ko print kervana chatay hai tu uss kay liye hum likhtay hai
//console.log("this is a simple log");
//console.error("this is an error msg");
//console.log say humarah simple msg create hota hai
//jesay humaray pass error hota hai ussi tarah humaray pass warning message bhi hota hai
//console.warn("this is a warning message");

///// Prompt /////
//jesay humaray pass alert hotay hai wesay hi humaray pass prompt hotay hai iss mai aghir hum chahay tu user say input bhi lay sakhtay hai means kuch enter kerva sakhtay hai cheez ko tu uss kay liye hum prompt ka use kertay hai
//Practice
//prompt("Enter name: ");
//let firstName = prompt("Enter your firstName : ");
//console.log(firstName);
//let firstName = prompt("Enter first name");
//let lastName = prompt("Enter last name");
//let msg = " Welcome "+ firstName + " " + lastName + "!";
//alert(msg);