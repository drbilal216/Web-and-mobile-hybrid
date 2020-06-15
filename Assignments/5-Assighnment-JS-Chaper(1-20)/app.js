// Chapter 1

// Answer 1
//alert("greeting visitor")

//Answer 2
//alert("Error! Please enter a valid password")

//Answer 3
//alert("Wellcome to JS Land..\nHappy Coding")

//Answer 4
//alert("Wellcome to JS Land..")
//alert("Prevent this page from creating additional dialogs.")

//Answer 5
//console.log("Hello.. I can run JS through my web browser console")

//Answer 6                  ?
// already created

//Answer 7(a)               ?
// already put it there
//Answer 7(b)
// done
//Answer 7(c)
// done
//Answer 7(d)
// done

// Chapter 2 


// Answer 1
//var username;

// Answer 2
//var myName = "Bilal Khan";

// Answer 3
// var message;
// message="Hello World";
// alert(message)

// Answer 4
// var name = "Danyal Khan";
// var age = 31;
// var course = "Web and Mobile App" ;
// alert(name) 
// alert(age) 
// alert(course) 

// Answer 5
// my_string = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(my_string)

// Answer 6
// var email = "abc@gmail.com" ;
// alert("My email address is "+email) ;

// Answer 7
// var book;
// book =  'A smarter way to learn JavaScript';
// alert("I am trying to learn from the book "+book)

// Answer 8
//document.write("Yah! I can write HTML content through javaScript")

// Answer 9 
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)
// document.write(design)


// Chapter 3

// Answer 1
// var age;
// age = 15;
// alert("I am "+age+" years old")

// Answer 2
// var count = 3;
// alert("You have visited this site "+count+" times")


// Answer 3
// var birth_year;
// birth_year = 2007;
// document.write("My birth year is " ,birth_year);
// document.write("<br>Data type of my declared variable is number");


// Answer 4
// var site = "XYZ Clothing Store" 
// var name = 'John Doe';
// var pro_title = "T-Shirt" ;
// var quantity = 5 ;

// document.write("<strong>" ,name, "</strong> ordered <strong>" , quantity , " ", pro_title , "</strong>(s) on ",site)


// Chapter 4

//Answer 1
// var a , b , c;

//Answer 2
// Legal ------->      _name , name1 , $name_2 , f_name, name 
// Illegal -------->    1age , #age , my age , my-age , @age

//Answer 3
// document.write(" <h3> Rules for naming JS Variables </h3> <br>")
// document.write("a) Variable names can only contain numbers, $ and _.For example $my_1stVariable <br>")
// document.write("b) Variables must begin with a letter ,$ or _. For example $name, _name or name <br>")
// document.write("c) Variable names are case sensitive <br>")
// document.write("d) Variable names should not be JS keyword <br>")


// Chapter 5

//Answer 1

// var num1 = 2 , num2 = 8 , sum;
// sum = num1+num2;
// document.write("Sum of ",num1," and ",num2," is ",sum)

//Answer 2
// var sub , mul , div , mod , num1 = 2 , num2 = 8 ;
// sub = num2 - num1;
// mul = num1 * num2 ;
// div = num2 / num1;
// mod = num2 % num1 ;

// document.write("After subtraction of ",num1," and ",num2," the answer is ",sub, "<br>");
// document.write("After multiplication of ",num1," and ",num2," the answer is ",mul, "<br>");
// document.write("After division of ",num1," and ",num2," the answer is ",div, "<br>");
// document.write("The modulus of ",num1," and ",num2," is ",mod, "<br>");

// Answer 3
// var a ;
// document.write("Value after variable declaration is ",a, "<br>");
// a = 5 ;
// document.write("Initial value: ",a, "<br>");
// a++ ;
// document.write("Value after increment is: ",a, "<br>");
// a = a + 7;
// document.write("Value after addition is: ",a, "<br>");
// a-- ;
// document.write("Value after decrement is: ",a, "<br>");
// document.write("The remainder is: ",a%3);

// Answer 4
// var ticket = 600;
// document.write("Total cost to buy 5 tickets to a movie is ",ticket*5,"PKR")

// Answer 5
// var num = 2 ;
// document.write("<h2>Table of ",num,"</h2>")
// for(var i = 1 ; i<=10 ; i++)
// {
//     ans = num * i;
//     document.write(num," * " ,i, " = ",ans, "<br>");
// }

// Answer 6

// var c = 25 , f; 
// var f = (c * (9/5))+32;
// document.write(c ,"<sup>o</sup>C is ",f,"<sup>o</sup>F <br>");
// var f = 70 , c;
// var c = (f -32) * 5/9;
// document.write(f ,"<sup>o</sup>F is ",c,"<sup>o</sup>C <br>");

// Answer 7
// var item1 = 650 , item2 = 100 , quan1 = 3 , quan2 = 7 , shipping_charges = 100;
// var total = (item1*quan1) + (item2*quan2) + shipping_charges;
// document.write("<h2> Shopping Cart </h2>");
// document.write("Price of item 1 is ",item1,"<br>");
// document.write("Quantity of item 1 is ",quan1,"<br>"); 
// document.write("Price of item 2 is ",item2,"<br>");
// document.write("Quantity of item 2 is ",quan2,"<br>");
// document.write("Shipping Charges ",shipping_charges,"<br><br>");
// document.write("Total cost of your order is ",total);

// Answer 8
// var total = 980 , obtained = 804 , per;
// per = obtained*100/total ;
// document.write("<h2> Mark Sheet </h2>")
// document.write("Total Marks: ",total,"<br>");
// document.write("Obtained Marks: ",obtained,"<br>");
// document.write("Percentage: ",per,"%");

//Answer 9
// var $ = 10 , riyals = 25 , pkr ;
// pkr = $*104.80 + riyals*28; 
// document.write("<h2> Currency in PKR </h2>");
// document.write("Total currency in PKR: ",pkr);

// Answer 10
// var  num = 2;
// exp = ((num + 5) * 10) / 2;
// document.write("Answer: ",exp); 

// Answer 11
// var cur = 2020 , birth = 2000 ; 
// var age = cur - birth ;
// document.write("<h1> Age Calculator </h1>");
// document.write("Current Year: ",cur,"<br>");
// document.write("Birth Year: ",birth,"<br>");
// document.write("Your age is: ",age,"<br>");

// Answer 12
// var r = 20;
// const pie = 3.142;
// var circum = 2*pie*r;
// var area = pie *r*r;
// document.write("<h1> The Geometrizer </h1>");
// document.write("Radius of a circle: ",r,"<br>");
// document.write("Circumference of a circle: ",circum,"<br>");
// document.write(" Area of a circle: ",area); 

// Answer 13
// var snacks = "Lays" , age = 15 , max_age = 65 ,per_day = 3 , total ;
// total = (max_age-age)*per_day ;
// document.write("<h1>The Lifetime Supply Calculator </h1>");
// document.write("Current age: ",age,"<br>");
// document.write("Estimated Maximum Age: ",max_age,"<br>");
// document.write("Amount of snacks per day: ",per_day,"<br>");
// document.write("You will need ",total," ",snacks," to last you until the ripe old age of ",max_age);

// Chapter 6

// Answer 1
// var a = 10;
// document.write("Result:<br>")
// document.write("The value of a is: ",a,"<br>");
// document.write(".................................<br><br>");
// document.write("The value of ++a is: ",++a,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");
// document.write("The value of a++ is: ",a++,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");
// document.write("The value of --a is: ",--a,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");
// document.write("The value of a-- is: ",a--,"<br>");
// document.write("Now the value of a is: ",a,"<br><br>");

// Answer 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is ",a,"<br>");
// document.write("b is ",b,"<br>");
// document.write("result is ",result);

// EXPLANATION:
// --a;  1
// --a - --b;  1-0
// --a - --b + ++b;  1 + 1 
// --a - --b + ++b + b--;   2 + 1  = 3    after execution of b-- , b will be 0 in the end

// Answer 3
// var name ;
// name = prompt("Enter your name : ");
// document.write("Hello ! ",name);

// Answer 5
// var default_num = 5 ;
// num = prompt("Enter a number : " , default_num);
// document.write("<h2> Table of ",num,"</h2>");
// for(var i = 1 ; i<=10 ; i++)
// {
//     ans = num * i ;
//     document.write(num," * ",i," = ",ans,"<br>"); 
// }

// Answer 6
// var sub1 , sub2 , sub3 , obt_sub1 , obt_sub2 , obt_sub3 , each_total = 100;
// sub1 = prompt("Enter 1st Subject name : ");
// sub2 = prompt("Enter 2nd Subject name : ");
// sub3 = prompt("Enter 3rd Subject name : ");
// obt_sub1 = Number(prompt("Enter obained marks of 1st Subject : "));
// obt_sub2 = Number(prompt("Enter obained marks of 2nd Subject : "));
// obt_sub3 = Number(prompt("Enter obained marks of 3rd Subject : "));
// var sub1_per = obt_sub1 * 100 / each_total;
// var sub2_per = obt_sub2 * 100 / each_total;
// var sub3_per = obt_sub3 * 100 /each_total;
// var total_obt = obt_sub1 + obt_sub2 + obt_sub3;
// var total = each_total + each_total + each_total;
// var per = (sub1_per + sub2_per + sub3_per) / 3 ;
// document.write("<table>")
// document.write("<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");
// document.write("<tr> <td>", sub1 ,"</td> <td>", each_total,"</td> <td>",obt_sub1,"</td> <td>",sub1_per,"%</td> </tr>");     
// document.write("<tr> <td>", sub2 ,"</td> <td>", each_total,"</td> <td>",obt_sub2,"</td> <td>",sub2_per,"%</td> </tr>");  
// document.write("<tr> <td>", sub3 ,"</td> <td>", each_total,"</td> <td>",obt_sub3,"</td> <td>",sub3_per,"%</td> </tr>");       
// document.write("<tr> <th> </th> <th>",total,"</th> <th>",total_obt,"</th> <th>",per,"</th> </tr>");
// document.write("</table>");


// Chapter 9-11

// Answer 1
// var city = prompt("Enter city name :");
// if (city=='Karachi'){
//     document.write("Welcome to city of lights")
// }

// Answer 2
// var gender = prompt("Male/Female ? ");
// if (gender=='Male'){
//     document.write(" Good Morning Sir");
// }
// else{
// document.write("Good Morning Ma'am")
// }

// Answer 3
// var signal_color = prompt("Enter signal color : ");
// if (signal_color == 'Red'){
//     document.write("Must Stop");
// } 
// else if (signal_color == 'Yellow'){
//     document.write("Ready to move");
// }
// else{
//     document.write("Move now");
// }

// Answer 4
// var fuel = prompt("Enter remaining fuel in liters : ");
// if (fuel == 0.25){
//     document.write("Please refill the fuel in your car");
// }

// Answer 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// OUTPUT:  displayed

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// OUTPUT:  Not displayed

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// OUTPUT: Condition 2 and 4 displayed

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// OUTPUT:  displayed

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// OUTPUT:  True displayed

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// OUTPUT: displayed

// Answer 6 
// var grade , remarks ;
// var sub1 = Number(prompt("Enter obtained marks of subject 1: "));
// var sub2 = Number(prompt("Enter obtained marks of subject 2: "));
// var sub3 = Number(prompt("Enter obtained marks of subject 3: "));
// var total = Number(prompt("Enter total marks: "));
// var per = (sub1 + sub2 + sub3) * 100 / total;

// if (per >= 80){
//     grade = 'A-one';
//     remarks = 'Excellent';
// }
// else if (per >= 70){
//     grade = 'A';
//     remarks = 'Good';
// }
// else if (per >= 60){
//     grade = 'B';
//     remarks = "You need to improve";
// }
// else{
//     grade = "Fail";
//     remarks = 'Sorry';
// }
// document.write("<h1> Marks Sheet </h1><br>");
// document.write("Total marks :",total);
// document.write("<br>Marks Obtained : ", sub1+sub2+sub3);
// document.write("<br>Percentage : ",per,"%");
// document.write("<br>Grade : ",grade);
// document.write("<br>Remarks : ",remarks);

// Answer 7
// var secret_num = 7;
// var guessed_num = Number(prompt("Guess the number : "));
// document.write("<h1> GUESSING GAME </h1>")
// if (guessed_num == secret_num){
//     document.write("<h3> Bingo! Correct answer</h3>");
// } 
// else if ((guessed_num+1) == secret_num){
//     document.write("<h3> Close enough to the correct answer </h3>");
// } 

// Answer 8
// var num = Number(prompt("Enter the number to check whether the given number is divisible by 3 or not : "));
// if (num % 3 == 0){
//     document.write(num ," is divisible by 3");
// }
// else{
//     document.write(num ," is not divisible by 3");
// }

// Answer 9
// var num = Number(prompt("Enter the number : "));
// if (num % 2 == 0){
//     document.write(num ," is <b>Even</b> ");
// }
// else{
//     document.write(num ," is <b>Odd</b> ");
// }

// Answer 10
// var T = Number(prompt("Enter temperature : "));
// if (T > 40){
//     document.write("It is too hot outside.");
// }
// else if (T > 30){
//     document.write("The Weather today is Normal.");
// }
// else if (T > 20){
//     document.write("Today’s Weather is cool.");
// }
// else if (T > 10){
//     document.write("OMG! Today’s Weather is cool.");
// }

// Answer 11
// var num1 = Number(prompt("Enter first number : "));
// var num2 = Number(prompt("Enter Second number : "));
// var op = prompt("Enter operator (+, -, *, /, %) : ");
// if (op == '+'){
//      document.write("The answer after Addition is : ",num1+num2);
// }
// else if (op == '-'){
//     document.write("The answer after Subtraction is : ",num1-num2);
// }
// else if (op == '*'){
//     document.write("The answer after Multiplication is : ",num1*num2); 
// }
// else if (op == '/'){
//     document.write("The answer after Division is : ",num2/num1);
// }
// else if (op == '%'){
//     document.write("The answer after Modulo is : ",num2%num1);
// }
// else{
// document.write("Invalid operator");
// }

// Chapter 12-13

// Answer 1
// var inp = prompt("Enter a character : ");
// if (inp >= 'A' && inp <= 'Z'){
//     document.write("The inputted character is Upper case");
// }
// else if (inp >= 'a' && inp <= 'z'){
//     document.write("The inputted character is Lower case");
// }
// else if (inp >= '0' && inp <= '9'){
//     document.write("The inputted character is a Number");
// }

// Answer 2
// var num1 = Number(prompt("Enter number 1 : "));
// var num2 = Number(prompt("Enter number 2 : "));
// if (num1 > num2){
//     document.write(num1);
// }
// else if (num1 < num2){
//     document.write(num2);
// }
// else if (num1 == num2){
//     document.write(num1);
// }

// Answer 3
// var num = Number(prompt("Enter any number : "));
// if (num > 0){
//     document.write("The number ",num," is Positive");
// }
// else if (num < 0){
//     document.write("The number ",num," is Negative");
// }
// else{
//     document.write("The number is 0");
// }

// Answer 4
// var inp = prompt("Input a single character :");
// if (inp =='a' || inp =='e' || inp =='i' || inp =='o' || inp =='u' || inp =='A' || inp =='E'
// || inp =='I' || inp =='O' || inp =='U'){
//     document.write('True')
// } 
// else{
//     document.write("False");
// }

// Answer 5
// var store_pass = prompt("Store your password : ");
// var inp_pass = prompt("Re enter your password : ");
// if (inp_pass == ""){
//     alert("Enter your password :");
//     var inp_pass = prompt("Re-enter your password !");
// }
// if (inp_pass == store_pass){
//     document.write("Correct! The password you entered matches the original password")
// } 
// else{
//     document.write("Incorrect Password");   
// }

// Answer 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// Answer 7
// var time = Number(prompt("Enter time in 24 hours format : "));
// if (time >= 0000 && time < 1200){
//     document.write("<h2> Good Morning! </h2>")
// }
// else if (time >= 1200 && time < 1700){
//     document.write("<h2> Good Afternoon! </h2>")
// }
// else if (time >= 1700 && time < 2100){
//     document.write("<h2> Good Evening! </h2>")
// }
// else if (time >= 2100 && time <= 2359){
//     document.write("<h2> Good Night! </h2>")
// }

//  Chapter 13-15

// Answer 1
// var std_names = []

// Answer 2
// var std_names = new Array();

// Answer 3
// var str_arr = ["a","b","c"];

// Answer 4
// var num_arr = [1,2,3,4];

// Answer 5
// var bool_arr = [true,false,false,true];

// Answer 6
// var mix_arr = ["a" , 1 , true];

// Answer 7
// var qual = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"];
// var series = 1
// document.write("<h2> Qualifications </h2>");
// for(i = 0 ; i<qual.length ; i++){
//     document.write(series,") ",qual[i],"<br>");
//     series++;
// }

// Answer 8
// var names = ["Mahnoor" , "Subhan" , "Rafay"];
// var scores = [320 , 230 , 480] , per;
// for(i = 0 ; i<scores.length ; i++){
//     per = scores[i]/500*100;
//     document.write("Score of ",names[i]," is ",scores[i],".Percentage: ",per,"%<br>");
// }

// Answer 9
// var colors = ["Yellow" , "Black" , "Red" , "Blue"] , series = 1;
// for(i = 0 ; i<colors.length ; i++){
//     document.write(series ,".  " , colors[i],"<br>");
//     series++
// }
// var inp = prompt("Enter the color you want to add in the beginning : ");
// colors.unshift(inp);
// document.write("The updated array of colors : ",colors);
// var inp = prompt("Enter the color you want to add in the end : ");
// colors.push(inp);
// document.write("<br>The updated array of colors : ",colors);
// colors.unshift("White" , "Orange");
// document.write("<br>The updated array of colors : ",colors);
// colors.shift();
// document.write("<br>The updated array of colors : ",colors);
// colors.pop();
// document.write("<br>The updated array of colors : ",colors);
// var ind = Number(prompt("At which index you want to add color : "));
// var name = prompt("Color Name : ");
// colors.splice(ind , 0 , name);
// document.write("<br>The updated array of colors : ",colors);
// var del_ind = Number(prompt("At which index you want to delete color(s) : "));
// var count = Number(prompt("How many colors you want to delete ? "));
// colors.splice(del_ind , count);
// document.write("<br>The updated array of colors : ",colors);

// Answer 10
// var score = [320,230,480,120];
// var sorted = score.sort();
// document.write("Scores of Students : ",score);
// document.write("<br>");
// document.write("Ordered Scores of Students : ",sorted);

// Answer 11
// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// var selected_cities = [];
// selected_cities.splice(0,0,cities[2],cities[3]);
// document.write("<h4> Cities List: </h4>");
// document.write(cities);
// document.write(" <h4> Selected Cities List: </h4>");
// document.write(selected_cities);

// Answer 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array :<br>",arr);
// document.write("<br><br> String : <br>",arr.join(" ")); 

// Answer 13
// var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
// document.write("Devices: <br>",arr);
// for(i=0 ; i<arr.length ; i++){
//     document.write("<br><br> Out: <br>",arr[i]);
// }

// Answer 14
// var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
// document.write("Devices: <br>",arr);
// for(i=arr.length-1 ; i>=0 ; i--){
//     document.write("<br><br> Out: <br>",arr[i]);
// }

// Answer 15
// var manufacturers = ["Apple", "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("<select name='devices' size='1'> <option value='apple'>", manufacturers[0] ,"</option>")
// document.write("<option value='samsung'>", manufacturers[1] ,"</option>");
// document.write("<option value='moto' selected>", manufacturers[2] ,"</option>");
// document.write("<option value='nokia'>", manufacturers[3] ," </option>");
// document.write("<option value='sony'>", manufacturers[4] ," </option>");
// document.write("<option value='haier'>", manufacturers[5] ," </option> </select>");

// Chapter 17-20

// Answer 1
// var mul_arr = [[]];

// Answer 2
// var mul_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Answer 3
// for (i=1;i<=10;i++){
//     document.write(i,"<br>");
// }

// Answer 4
// var num = Number(prompt("Enter a number : "));
// var len = Number(prompt("Enter length of a table : "));
// document.write("Multiplication of table of ",num);
// document.write("<br>Length ",len,"<br><br>");
// for (i=1 ; i<=len ; i++){
//     var ans = num*i;
//     document.write(num," * ",i," = ",ans);
//     document.write("<br>");
// }

// Answer 5
// var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];
// for (i=0 ; i<fruits.length ; i++){
//     document.write(fruits[i],"<br>");
// }
// document.write("<br>");

// for (i=0 ; i<fruits.length ; i++){
//     document.write("Element at index ",i," is ",fruits[i],"<br>");
// }

// Answer 6
// document.write("<b> Counting: </b><br><br>")
// for (i=1 ; i<=15 ; i++){
//     document.write(i,",");
// }

// document.write("<br><br><b> Reverse Counting: </b><br><br>")
// for (i=10 ; i>0 ; i--){
//     document.write(i,",");
// }

// document.write("<br><br><b> Even: </b><br><br>")
// for (i=0 ; i<21 ; i++){
//     if (i % 2 == 0)
//     document.write(i,",");
// }

// document.write("<br><br><b> Odd: </b><br><br>")
// for (i=0 ; i<21 ; i++){
//     if (i % 2 != 0)
//     document.write(i,",");
// }

// document.write("<br><br><b> Series: </b><br><br>")
// for (i=2 ; i<21 ; i++){
//     if (i % 2 == 0)
//     document.write(i,"k,");
// }

// Answer 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am ?");
// var bool = A.includes(order);
// var ind = A.indexOf(order); 
// if (bool == true){
//     document.write(order," is <b>available</b> at index ", ind ," in our bakery");
// }
// else{
//     document.write("We are sorry.",order," is <b>not available</b> in our bakery");
// }

// Answer 8
// var A = [24, 53, 78, 91, 12];
// var max = A[0] ;
// for (i=0 ; i<A.length ; i++){
//     if (max < A[i]){
//         max = A[i];
//     }
// }
// document.write("Arrays Items : ",A);
// document.write("<br>The Largest Number is ",max);

// Answer 9
// var A = [24, 53, 78 , 91, 12];
// var min = A[0];
// for (i=1 ; i<A.length ; i++){
//    if (min > A[i]){
//       min = A[i];
//    }
// }
// document.write("Arrays Items : ",A);
// document.write("<br>The Smallest Number is ",min);

// Answer 10
// let num = 5;
// for (i=1 ; i<=20 ; i++){
//     document.write(num*i,",");
// }