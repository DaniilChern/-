let  progB,tempOut;

progB = Math.floor((Math.random() * 10) +1);//случайное число от 1 до 10
//tempOut = document.getElementById("temp-out");
//tempOut.innerHTML = progB;//скроем перем.,чтобы не показывать в <p>
console.log(progB); //подглядываем в консоли

function f1(){
   let numA, out;
   
    numA = document.getElementById("myNum").value;// переменная которую ввел пользователь
    out = document.getElementById("out");//перем. которую нужно вывести в параграфе <p>

   if (numA == progB){
       out.innerHTML = "Вы угадали !!!";
       }
       else if (numA > progB){
          out.innerHTML = " Вы ввели число больше, чем загадано.";
       }
       else {
          out.innerHTML = " Вы ввели число меньше , чем загадано.";
       }
}