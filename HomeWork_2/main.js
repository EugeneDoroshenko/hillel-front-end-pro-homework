Homework2

F(0)=0; F(1)=1, 
Fn = F(n-1)+F(n-2), n >= 2
// ------------------------------------------------
for(i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i*i)
    }
}

Задание № 1 (Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры)

var a = +prompt("Введите количество чисел из ряда Фибоначчи которые надо вывести на экран");

function factorial( n ) {
    if ( n === 1 ) {
      return 1;
    }
    console.log(n);
       return n * factorial( n - 1 );
}
alert(factorial(a));


console.log("n = " + n + " * " + factorial( n - 1 ));

Задание № 3 (Выведите столбец четных чисел в промежутке от 0 до 100. (в document в виде таблицы)

(function tableCreate() {
  
    var table = document.getElementById("table");

    for (var j = 0; j <= 100; j++) {
            if(j%2 ==0){
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            
            cell.textContent = j;
            
            row.appendChild(cell);
            
            table.appendChild(row);
    }
]

})()


================================lesson3

Task 2
do {
    var a = +prompt('enter a');
    var b = +prompt('enter b');
}while((isNaN(a) && isNaN(b)));


var summ = 0;

if (a > b){
    for ( i = b; i <= a; i++) {
            if(i%2 !== 0 ){
                console.log(i);
                summ += i;
            }
    }
    

    }else{
            for (i = b; i => a; i--){
                if(i%2 == 0){
                    console.log(i);
                    summ +=i;
                }
            }

    }

    alert(summ);

Task 3

do {
    var a = +prompt('enter a');
    var b = +prompt('enter b');
}while((isNaN(a) && isNaN(b)));


for(i = a; a < b; i++ ){
    // if (i < 0){
        res = i*i;
        // res= -res;     не доделал!
        console.log(res)
    }
}
