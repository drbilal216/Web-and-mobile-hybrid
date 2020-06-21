// ########### Chapter 21-25 ###########

// Task 1
var firstName = prompt("Write your First Name");
var lastName = prompt("Write your Last Name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// Task 2
var phone = prompt("Enter your Favorite Mobile Phone Model");
document.write("My favorite phone is: "+ phone+"<br>");
var len = phone.length;
document.write("Length of string: "+ len+"<br>");

// Task 3
var str = "Pakistani";
document.write("String: "+ str +"<br>");
var ind = str.indexOf('n')
document.write("Index of 'n': "+ ind+"<br>");

// Task 4
var str2 = "Hello World";
document.write("String: "+ str2 +"<br>");
var ind2 = str2.lastIndexOf('l')
document.write("Last Index of 'l': "+ ind2 +"<br>");

// Task 5
var str3 = "Pakistani";
document.write("String: "+ str3 +"<br>");
var ind_char = str3.charAt(3)
document.write("Character at index 3: "+ ind_char +"<br>");

// Task 6
var firstName = prompt("Write your First Name");
var lastName = prompt("Write your Last Name");
var fullName = firstName.concat(lastName);
alert("Hello " + fullName);

// Task 7
var city1 ="Hyderabad";
var city2 = city1.replace("Hyder","Islam");
document.write("City: "+ city1 +"<br>");
document.write("After replacement: "+ city2 +"<br>");

// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Message: "+ message +"<br>");
document.write("New Message: " + newMessage +"<br>");

// Task 9
var val_str = "472"
document.write("Value: "+ val_str +"<br>");
document.write("Type: "+ typeof(val_str) +"<br>");
var val_int = parseInt(val_str);
document.write("Value: "+ val_int +"<br>");
document.write("Type: "+ typeof(val_int) +"<br>");

// Task 10
var inp = prompt("Enter any Word");
document.write("User input: "+ inp+"<br>");
var caps = inp.toUpperCase();
document.write("Upper case: "+ caps +"<br>");

// Task 11
function toTitleCase(string){
    var lower = string.toLowerCase().split(" ");
    for (var i=0;i<lower.length;i++){
        lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].slice(1); 
        // first letter capital + remaining text
    }
    return lower.join(" ");
}
var inp2 = prompt("Enter any Word");
document.write("User input: "+ inp2 +"<br>");
var title = toTitleCase(inp2);
document.write("Title case: "+ title +"<br>");

// Task 12
var num = 35.36;
var str = num.toString()
var result = str.replace(".","");
document.write("Number: "+ num +"<br>");
document.write("Result: "+ result +"<br>");

// Task 13
var userName = prompt("Enter your User Name:");
var chars = ["@",".",",","!"];
for(var i=0;i<userName.length;i++){
    if(chars.includes(userName[i])){
        alert("Please Enter a valid username");
    }
}

// Task 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var i = 0; i<A.length;i++){
    if( A.includes(item.toLowerCase())){
        document.write(item+" is <strong>available</strong> at index "+ A.indexOf(item.toLowerCase())+ " in our bakery")
    break;
    }
    else{
        document.write("We are sorry. "+item+" is <strong>not available</strong> in our bakery")
        break;
    }
}

// Task 14
var password = prompt("Enter your Password:");
var number, upper, lower,first,length = false;
for(var i=0;i<password.length;i++){
    ascii = password.charCodeAt(i)
    
    if(ascii > 47 && ascii < 58){
        number = true;
    }
    if(ascii > 64 && ascii < 91){
        upper = true;
    }
    if(ascii > 96 && ascii <123){
        lower = true;
    }
    if(password.charCodeAt(0)>47 && password.charCodeAt(0)<58){
        first = true;
    }
    if(password.length <6){
        length = true;
    }
}
document.write("Entered password: "+ password + "<br>");
if(!(number && (upper || lower))){
    document.write("Password should contain alphabets and numbers"+ "<br>");
}
if(first){
    document.write("Password can not begin with a number"+ "<br>");
}
if(length){
    document.write("Password must be at least 6 charachters long"+ "<br>");
}
if(!(number && (upper || lower))||first||length){
    document.write("Please enter a valid password"+ "<br>");

}

// Task 16
var university = "University of Karachi";
var array = university.split("");
for(var i = 0; i<array.length;i++){
    document.write(array[i]+ "<br>");
}

// Task 17
var userinput = prompt("Enter any word");
document.write("User input: "+ userinput +"<br>");
document.write("Last character of input: "+ userinput[userinput.length-1] +"<br>");

// Task 18
var sentence = "The quick brown fox jumps over the lazy dog"
var l_sentence = sentence.toLowerCase();
var arr = l_sentence.split(" ");
var count = 0;
for(var i = 0;i<arr.length;i++){
    if(arr[i]==="the"){
    count++;
    }
}
document.write("Text: "+ sentence +"<br>");
document.write("There are "+ count +" occurence(s) of the word 'the'"+"<br>");

// ########### Chapter 26-30 ###########

// Task 1
var inp = +prompt("Enter any positive number");
document.write("number: "+ inp+"<br>");
document.write("round off value: "+ Math.round(inp)+"<br>");
document.write("floor value: " + Math.floor(inp)+"<br>");
document.write("ceil value: " + Math.ceil(inp)+"<br>");

// Task 2
var inp = +prompt("Enter any negtive number");
document.write("number: "+ inp+"<br>");
document.write("round off value: "+ Math.round(inp)+"<br>");
document.write("floor value: " + Math.floor(inp)+"<br>");
document.write("ceil value: " + Math.ceil(inp)+"<br>");

// Task 3
var inp = +prompt("Enter any number");
document.write("The absolut value of "+ inp +" is "+Math.abs(inp)+"<br>");

// Task 4
var randomValue1 = Math.floor(Math.random()*6+1);
var randomValue2 = Math.floor(Math.random()*6+1);
document.write("Random dice value: " + randomValue1+"<br>");
document.write("Random dice value: " + randomValue2+"<br>");

// Task 5
var randomCoinValue = Math.floor(Math.random()*2+1);
document.write(randomCoinValue+"<br>");
if(randomCoinValue === 2){
    document.write("random coin value: Heads <br>");

}
else{
    document.write("random coin value: Tails <br>");

}

// Task 6
var rndValue = Math.floor(Math.random()*(100-1)+1);
document.write("random number between 1 and 100: " + rndValue+"<br>");

// Task 7
var weight = prompt("Enter your weight in kilograms");
weight = weight.replace(/[^0-9\.]+/g, "");
document.write("The weight of user is "+weight+" kilograms <br>");

// Task 8
var secret = Math.floor(Math.random()*10);
var input = +prompt("Enter a number between 1 and 10");
if(input === secret){
    alert("Congratulations");
}
else{
    alert("Try again!");
}

// ################ 30-34 #####################

// Task 1
var time = new Date();
document.write(time+"<br>");

// Task 2
var months = ["January","February","March","April","May","June","July", "August","September","October","November","December"]; 
var month = new Date().getMonth();
document.write(months[month]+"<br>");

// Task 3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 
var day = new Date().getDay();
document.write("Today is " + days[day]+"<br>");

// Task 4
var day = new Date().getDay();
if(day === 0 || day === 6){
document.write("It's Fun day"+"<br>");
}

// Task 5
var date = new Date().getDate();
if(date < 16){
document.write("First fifteen days of the month"+"<br>");
}
else{
    document.write("Last days of the month"+"<br>");
}

// Task 6
var millisDate = new Date().getTime();
document.write("Current Date: " + Date() +"<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisDate +"<br>");
document.write("Elapsed minutes since January 1, 1970: " + millisDate/(1000*60) +"<br>");

// Task 7
var hours = new Date().getHours();
if(hours<12){
    alert("It's AM");
}
else{
    alert("Its PM");
}

// Task 8
var laterDate = new Date("Dec 31 2020");
document.write("Later date: " + laterDate+"<br>");

// Task 9
var RamadanDate = new Date("Apr 24 2020");
var todayDate = new Date();
var daysRamadan = (todayDate.getTime()-RamadanDate.getTime())/(1000*60*60*24);
document.write(Math.floor(daysRamadan) +" days have passed since 1st Ramadan, 2020"+"<br>");

// Task 10
var refDate = new Date("Dec 5 2015");
var anotherDate = new Date("Jan 1 2015");
var dif = refDate.getTime()-anotherDate.getTime();
document.write("On refernce date "+ refDate +","+ dif/(1000) + " seconds had passed since beginning of 2015" +"<br>");

// Task 11
var currentTime = new Date();
document.write("current date: " + currentTime+"<br>");
var currentHours = currentTime.getHours();
var prevTime = currentTime.setHours(currentHours-1);
document.write("1 hour ago, it was " + currentTime+"<br>");

// Task 12
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
var prevTime = currentTime.setFullYear(currentYear-100);
alert("current date:"+ Date()+"\n100 years back, it was " + currentTime)

// Task 13
var age = +prompt("enter your age");
var birthYear = new Date().getFullYear()-age;
document.write("Your age is " + age +"<br>");
document.write("Your birth year is " + birthYear +"<br>");

// Task 14
document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name: <strong>Syed Rafay Hashmi</strong><br>");
document.write("Month: <strong>February</strong><br>");
var units = 410;
document.write("No of Units: <strong>"+units+"</strong><br>");
var rate = 16;
document.write("Charges per unit: <strong>"+rate+"</strong><br><br>");
document.write("Net Amount Payable (within Due Date): <strong>"+units*rate+"</strong><br>");
var late = 350;
document.write("Late payment surcharge: <strong>"+late+"</strong><br>");
document.write("Gross Amount Payable (after Due Date): <strong>"+ (units*rate+late) +"</strong><br>");

//  ######### 35-38 ##############

// Task 1
function dateTime(){
    time = new Date();
    return document.write(time+"<br>");
}
dateTime();

// Task 2
function greet(){
   var first = prompt("Enter First Name")+" ";
   var last = prompt("Enter Last Name");
   var fullName = first.concat(last)
   return document.write("Hello "+fullName+"<br>");
}
greet();

// Task 3
function sum(){
    var num1 = +prompt("Enter number 1");
    var num2 = +prompt("Enter number 2");
    return document.write(num1+num2+"<br>");
}
sum();

// Task 4
function calculator(num1,num2,operator){
     if(operator === "+"){
        return document.write(num1+num2+"<br>");   
    }
    if(operator === "-"){
        return document.write(num1-num2+"<br>");
    }
    if(operator === "*"){
        return document.write(num1*num2+"<br>");
    }
    if(operator === "/"){
        return document.write(num1/num2+"<br>");
    }
    if(operator === "%"){
        return document.write(num1%num2+"<br>");
    }
    else{
        return document.write("Wrong Input<br>");
    }
}
calculator(5,4,"+");
calculator(40,8,"/");
calculator(5,4,"*");

// Task 5
function square(num){
    document.write(Math.pow(num,2)+"<br>");
}
square(6);

// Task 6
function factorial(number){
    if(number === 0 || number === 1){
        return 1;
    }
    else{
        out = factorial(number-1) * number;
         return out;
    }
}

document.write(factorial(5)+"<br>");

// Task 7
function counting(){
    var start = +prompt("Enter Starting Number");
    var end = +prompt("Enter Ending Number");
    for (start;start<=end;start++){
        document.write(start+"<br>");
    }
}
counting();

// Task 8
function calculateHypotenuse(base,perp){
    function calculateSquare(n){
        return Math.pow(n,2);
    }
    return Math.sqrt(calculateSquare(base)+calculateSquare(perp));
}
document.write(calculateHypotenuse(3,4)+"<br>");

// Task 9
function area(width,height){
    return width*height;
}
document.write(area(4,5)+"<br>");
var width = 6;
var height = 5;
document.write(area(width,height)+"<br>");

// Task 10
function palindromeChecker(word){
    
    var temp= "";
    for (var j = word.length - 1; j>=0; j--){
        temp += word[j];
    } 

    if( word === temp){
        document.write(temp + " is a palindrome"+"<br>");
    }
}
palindromeChecker("madam");

// Task 11
function toTitleCase(string){
    var lower = string.toLowerCase().split(" ");
    for (var i=0;i<lower.length;i++){
        lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].slice(1); 
        // first letter capital + remaining text
    }
    return lower.join(" ");
}
document.write(toTitleCase("the quick brown fox")+"<br>");

// Task 12
function longest(string){
    var ar = string.split(" ");
    var longest = 0
    var idx = 0
    for( var i = 0;i<ar.length;i++){
        if(ar[i].length>longest){
            longest = ar[i].length;
            idx = i;
        }
    }
    return ar[idx];
}
document.write(longest("Web Development Tutorial")+"<br>");

// Task 13
function occurence(string,letter){
    var string = string.toLowerCase();
    var count = 0;
    for(var i = 0;i<string.length;i++){
        if(string[i]===letter){
        count++;
        }
}
    return count;
}
document.write(occurence("JSResourceS.com","o")+"<br>");

// Task 14
function calcCircumference(radius){
    return "The circumference is " + 2*Math.PI*radius+ "<br>"
}
function calcArea(radius){
    return "The area is " + Math.PI*Math.pow(radius,2) + "<br>"
}
document.write(calcCircumference(5));
document.write(calcArea(5));

// ######## finish #############

