//base casenya adalah yg didalam tanda {} setelah function

function tampilanAngka(n){
    if (n===0)//untuk menghentikan perulangan sampai situ
    return;//ini base case
    console.log(n);//untuk menampilkan di console
    return tampilanAngka(n-1)
}
 tampilanAngka(10);


//ini ga jadi g tau sih bingung
//contoh pemanfaatan rekursif pada faktorial
/*function faktorial(n){
    if (n===0) return 1;
    console.log (n);
    return n*faktorial (n-1);

}

faktorial(10)*/