function calculate(){

let unit = document.getElementById("input").value
let amt = 0

if (unit<=100){
    amt = 0               //100 units Rs.0
} 
else if(unit<=200){
    amt = (unit-100)*2.35 //RS.235 for 101 to 200 units
}        //The 100 units is difference
else if(unit<=400){
    amt = (unit-200)*4.7 + (100*2.35)  
}       //The 200 units is difference
else if (unit<=500){
    amt = (unit-400)*6.3 + (100*2.35)  + (200*4.7)  //Rs.940 for 201 to 400 units
}       //The 100 units is difference

// Above 500 units 

else if (unit<=600){
    amt = (unit-500)*8.4 + (300*4.7) +(100*6.3)   // 101 to 400 units is 300*4.7 Rs.1410
}        //The 100 units is difference
else if(unit<=800){
    amt = (unit-600)*9.45 + (300*4.7) + (100*6.3)  + (100*8.4)  //Rs.840 for 501 to 600 units
}        //The 200 units is difference
else if (unit<=1000){
    amt = (unit-800)*10.5 + (300*4.7) + (100*6.3) + (100*8.4) + (200*9.45) //Rs.1890 for 601 to 800 units
}        //The 200 units is difference
else if (unit>1000){
    amt = (unit-1000)*11.55 + (300*4.7) + (100*6.3) + (100*8.4) + (200*9.45) + (2100)
}
document.getElementById("value").innerHTML ="₹ " + amt;

}