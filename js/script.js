var numero;


// creo un ciclo for che va da 1 a 100
for (var i = 1; i <= 100; i++) {

    // creo una variabile uguale a i da andare a sovrascrivere in modo che i va fino a 100 senza problemi e "numero" possa essere sovrascritta senza problemi
    numero=i;
    if ((i%3 ==0)&&(i%5==0)){
        numero="fizz"+"buzz";    //prima la consizione più complessa
    } else if (i%5 == 0) {
        numero= "buzz";           // e poi il resto
    } else if (i%3 == 0) {
        numero = "fizz";
    }

    // console.log(i);
    console.log(numero);
}
