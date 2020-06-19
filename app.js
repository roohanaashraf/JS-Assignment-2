// //CHAPTER 21-25


// // TASK 1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello" + " " + fullName);


// // TASK 2
// var Model = prompt("Enter your favourite mobile phone model:");
// var length1 = Model.length;
// alert("Length of string:" + " " + length1);

// // TASK 3
// var string1 = "Pakistani";
// alert(" String : " + " " + string1);
// var index1 = string1.indexOf("n") ;
// alert("Index of 'n' : " + " " + index1);

// //TASK 4
// var string2 = "Hello World";
// alert("String : " + " " + string2 );
// var index2 = string2.lastIndexOf("l");
// alert("Last Index of 'l' : " + " " + index2);

// //TASK 5
// var string3 = "Pakistani";
// alert("String : " + " " + string3);
// var char1 = string3.charAt(3);
// alert("Character at Index 3 : " + " " + char1);

// //TASK 6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(lastName);
// alert("Hello" + " " + fullName);

// //TASK 7
// var city = "Hyderabad";
// alert("City : " + " " + city);
// var replaced = city.replace("Hyder", "Islam");
// alert("After replacement : " + " " + replaced);

// //TASK 8
// var message = "Ali and Sami are bestfriends. They play Cricket and football together.";
// alert("Real Message :" + " " + message);
// var newmsg = message.replace(/and/g, "&")
// alert("After required changes : " + " " + newmsg);

// //TASK 9
// var value = "472";
// alert("Value " + " " + value);
// var type1 = typeof(value);
// alert("Type : " + " " + type1);
// var value2 = parseInt(value);
// alert("Value " + " " + value2);
// var type2 = typeof(value2);
// alert("Type : " + " " + type2);

// //TASK 10
// var input1 = prompt("User Input:");
// var output1 = input1.toUpperCase();
// alert("Upper Case : " + " " + output1);

// //TASK 11
// var input2 = prompt("User Input:");
// var firstchar = input2.slice(0,1);
// var otherchar = input2.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var output2 = firstchar + otherchar;
// alert("Title Case : " + " " + output2);

// //TASk 12
// var num = 35.36;
// alert("Number : " + " " + num);
// var str = num.toString();
// var result = str.replace(".","");
// alert("Result :" + " " + result);

// //TASK 13
// var username = prompt("Enter your username: ");
// for( var i=0;i<=username.length;i++)
// {
//     if (username[i]==="!")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]===",")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]===".")
//     {
//         alert("Please Enter a valid username!");
//     }
//     if (username[i]==="@")
//     {
//         alert("Please Enter a valid username!");
//     }
// }

// //TASK 14
// var bakery = ["cake","apple pie","cookie","chips","patties"];
// var item = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?:");
// var item1 = item.toLowerCase();
// for(var i=0; i<=bakery.length; i++)
// {
//     if(item1 === bakery[i])
//     {
//       alert( item1 + " " +"is available at index" + " "+ i + " " +"in our Bakery");
//       break;
//     }
//     else{
//         alert("We are sorry " + " "+ item1 + " "+ "is not available in our Bakery.");
//         break;
//     }
// }

// //TASK 15
// var password = prompt("Enter password:");
// if (password.length <6){
//     alert("The password must be atleast 6 characters long, Please enter a valid password");
// }
// if(password.charAt(0)==="0")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="1")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="2")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="3")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="4")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="5")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="6")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="7")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="8")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }
// if(password.charAt(0)==="9")
// {
//     alert("The password cannot start with a number, Please enter a valid password");
// }

// //TASK 16
// var university = "University of Karachi";
// var result = university.split('');
// for( var i=0; i<=result.length-1;i++)
// {
//     document.write("<br>"+ result[i]);
// }

// //TASK 17
// var ip = prompt("Enter a word:");
// alert("User Input :" + " "+ ip);
// var result = ip.slice(-1);
// alert("Last character of input :" + " "+ result);

// //TASK 18
// var message = "The quick brown fox jumps over the lazy dog";
// alert("Text : " + " " + message);
// message = message.toLowerCase();
// var count =0;
// for (var i=0; i<=message.length ; i++){
//     if(message.slice(i,i+3)==="the"){
//         count += 1;
//     }
// }
// alert("There are " + " " + count + " " +"occurences of the word 'the'");





// //CHAPTER 26-30

// //TASK 1
// var no = prompt("Enter a positive integer:");
// alert("Number :"+ " "+ no);
// var round= Math.round(no);
// var floor = Math.floor(no);
// var ceiling = Math.ceil(no);
// alert("Round off value: " + " " + round);
// alert("Floor value: " + " " + floor);
// alert("Ceil value : " + " " + ceiling);

// //TASK 2
// var no = prompt("Enter a negative integer:");
// alert("Number :"+ " "+ no);
// var round= Math.round(no);
// var floor = Math.floor(no);
// var ceiling = Math.ceil(no);
// alert("Round off value: " + " " + round);
// alert("Floor value: " + " " + floor);
// alert("Ceil value : " + " " + ceiling);

// //TASK 3
// var no = prompt("Enter a number:");
// var absol = Math.abs(no);
// alert(" The absolute value of " + " " + no +" " + "is " + " " +absol);

// //TASK 4
// var dice = Math.random()*6;
// var ceil = Math.ceil(dice);
// alert("Random dice value: " + " " + ceil);

// //TASK 5
// var toss = Math.random()*2;
// var ans = Math.ceil(toss);
// if(ans===2)
// {
//     alert("Random coin value: Heads");
// }
// if(ans===1)
// {
//     alert("Random coin value: Tails");
// }

// //TASK 6
// var random = Math.random()*100;
// var numberr = Math.ceil(random);
// alert("Random number between 1 and 100: " + " " + numberr);

// //TASK 7
// var kg = prompt("Enter your weight in kilograms:");
// alert("The weight of user is: " + " " + kg + " " + "kilograms");

// //TASK 8
// var secret = Math.random()*10;
// var secretno = Math.ceil(secret);
// var numb = prompt ("Enter a number between 1 and 10:");
// if (numb == secretno){
//     alert("Congratulations! You guessed it right! ")
// }
// else{
//     alert("Try Again!");
// }




// //CHAPTER#31-34

// //TASK 1
// var a = new Date();
// document.write(a);

// //TASK 2
// var monthNames = ["Jannuary" , "February", "March", "April", "May" , "June", "July", "August", "September", "October" ,"November","December"];
// var now = new Date();
// var month = now.getMonth();
// var name = monthNames[month];
// alert("Current Month : " + " " + name); 

// //TASK 3
// var dayNames = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay= now.getDay();
// var named = dayNames[theDay];
// alert("Today is " + " " + named);

// //TASK 4
// var dayNames = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var theDay= now.getDay();
// var named = dayNames[theDay];
// alert("Today is " + " " + named);
// if(named == "Sat")
// {
//     alert("It's fun day");
// }
// if(named == "Sun")
// {
//     alert("It's fun day");
// }

// //TASK 5
// var now = new Date();
// var dayno = now.getDate();
// if(dayno < 16)
// {
// alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

// //TASK 6
// var now = new Date();
// var milisec = now.getTime();
// var minutes = milisec/(1000*60);
// alert("Current Date: " + " " + now);
// alert("Elapsed miliseconds since January 1,1970: " + " " + milisec);
// alert("Elapsed minutes since January 1, 1970 : " + " " + minutes); 

// //TASK 7
// var now = new Date();
// var hour = now.getHours();
// if(hour <= 12)
// {
//     alert("It's A.M.");
// }
// else{
//     alert("It's P.M.");
// }

// //TASK 8
// var laterDate = new Date("Dec 31,2020");
// alert("Later Date: " + " " + laterDate);

// //TASK 9
// var ramzan = new Date("Mar 23,2020");
// var now = new Date();
// var ramzandays = ramzan.getTime();
// var nowdays = now.getTime();
// var dayspass = nowdays-ramzandays;
// va r daysno = dayspass/(1000*60*60*24);
// var daysno = Math.floor(daysno);
// alert(daysno + " " + "days have passed since 1st Ramzan,2020");

// //TASK 10
// var refDate = new Date();
// alert("On Reference Date:" + " " + refDate);
// var begin = new Date("Jan 1,2020");
// var begmil = begin.getTime();
// var begsec = begmil/(1000);
// alert(begsec + " " + "seconds had passed since beginning of 2020"); 

// //TASK 11
// var now = new Date();
// alert("Current Date : " + " " + now);
// var result = new Date(now.getTime() - (1000*60*60));
// alert("1 hour ago, It was :" + " " + result);

// //TASK 12
// var now = new Date();
// alert("Current Date : " + " " + now);
// var result = new Date(now.getTime() - (1000*60*60*24*30*12*100));
// alert("100 years back, It was :" + " " + result);

// //TASK 13
// va r agein = prompt("Enter your age : ");
// prompt ("Your age is : " + " " + agein);
// var now = new Date();
// var curyear = now.getFullYear();
// var result = curyear - agein;
// prompt("Your Birth Year is :" + " " + result);

// //TASK 14
// document.write("K ELECTRIC BILL " + "<br>"+ "<br>");
// document.write("Customer Name: ABC Customer" + "<br>");
// document.write("Month : February" + "<br>");
// document.write("Number of Units: 410" + "<br>");
// document.write("Charges per unit: 16" + "<br>" + "<br>" + "<br>");
// var amount= 410*16;
// var gross = amount+350;
// document.write("Net Amount payable (within due date) :" + amount + "<br>");
// document.write("Late Payable surcharge: 350" + "<br>");
// document.write("Gross Amount Payable (after due date) :" + gross + "<br>");





// CHAPTER 35-38

// //TASK 1
// function dateTime(){
//     var now = new Date();
//     document.write(now);
// }
// dateTime();

// //TASK 2
// function greetuser(fname, lname)
// {
//     alert (" Hello!," + " " + fname + " " + lname);
// }
// greetuser("Ariba" , "Asif");

// //TASK 3
// function add(num1 , num2)
// {
//     return num1+num2;
// }
// alert(add(2,2));

// //TASK 4
// function calculation(num1 , num2 , op){
//     if(op=="+"){
//         return num1+num2;
//     }
//     else if(op=="-"){
//         return num1-num2;
//     }
//     else if(op=="*"){
//         return num1*num2;
//     }
//     else if(op=="/"){
//         return num1/num2;
//     }
//     else{
//         return "Please enter a valid operator"
//     }
// }
// var no1=+prompt("Enter first number:");
// var no2=+prompt("Enter second number:");
// var ope=prompt("Enter the operator:");
// alert(calculation(no1,no2,ope));

// //TASK 5
// function square (num)
// {
//     return num*num;
// }
// alert(square(5));

// //TASK 6
// function factorial(num){
//     var count =1;
//     for(var i=1; i<=num; i++){
//      count = count *i;
//     }
//     return count;
// }
// var num= prompt("Enter a number to calculate its factorial:");
// alert(factorial(num));

// //TASK 7
// function counting(start,end){
//     for(var i=start; i<=end; i++){
//        document.write(i + "<br>");
//     }
// }
// sta=+ prompt("Enter a number to start counting from:");
// en= +prompt("Enter a number to stop the counting at:");
// counting(sta,en);

// //TASK 8
// function calculatesquare(num)
// {
//     return num*num;
// }
// function calculatehypotenuse(base, perp){
//     return calculatesquare(base)+calculatesquare(perp);
// }
// var baseip = +prompt("Enter the value of base of triangle:");
// var perpip = +prompt("Enter the value of perpendicular of traingle:");
// var hyp = calculatehypotenuse(baseip,perpip);
// alert("The value of hypotenuse of this triangle is: " + " " + hyp);

// //TASK 9
// function calcarea(width,height)
// {
//     return width*height;
// }
// alert("The are of a triangle is :" + " " +calcarea(2,3));
// var wid= +prompt("Enter the width of triangle: ");
// var hei= +prompt("Enter the height of triangle: ");
// alert("The are of a triangle is :" + " " +calcarea(wid,hei));

// //TASK 10
// function palindromecheck(password)
// {
// var check ="";
// for( var i=password.length-1;i>=0;i--){
//     check +=password[i];
// }
// if (check==password)
// {
// alert(password+ " " + "is a palindrome word")
// }
// else{
//     alert(password + " "+ "is not a palindrome word");
// }
// }
// var pass = prompt("Enter your password:");
// palindromecheck(pass);

// //TASK 11
// function titleCase(str) {  
//     str = str.toLowerCase().split(' ');
  
//     for(var i = 0; i < str.length; i++){
//       str[i] = str[i].split('');
//       str[i][0] = str[i][0].toUpperCase(); 
//       str[i] = str[i].join('');
//     }
//     return str.join(' ');
//   }
// var string=prompt("Enter a string:");
// var result =titleCase(string);
// document.write(result);

// //TASK 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var string= prompt("Enter any string:");
// var res= find_longest_word(string);
// document.write(res);

// //TASK 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// var string= prompt("Enter a string:");
// var check = prompt("Enter a letter to check the occurences of:");
// document.write(char_count(string,check));


// //TASK 14
// function calcGeometry(radius) {
//     var circumference = Math.PI * 2*radius;
//     document.write("The circumference is " + circumference);
//     }
// function calcArea(radius){
//     var area = Math.PI * radius*radius;
//     document.write("The area is " + area);
// }
// calcArea(2);
// document.write("<br>");
// calcGeometry(2);