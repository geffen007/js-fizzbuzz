var numero;
for (var i = 1; i <= 100; i++) {
    numero=i;
    if ((i%3 ==0)&&(i%5==0)){
        numero="fizz"+"buzz";
    } else if (i%5 == 0) {
        numero= "buzz"
    } else if (i%3 == 0) {
        numero = "fizz"
    }

    // console.log(i);
    console.log(numero);
}
