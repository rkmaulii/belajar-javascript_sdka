/*Function ada 2
f.deklaration = tidak disimpan dalam sebuah varibel, lebih fleksibel bisa didiklarasi di belakang
f.expression = disimpan dalam sebuah varibel, dan parameternya opsional, bisa digunakan untuk argumen funtion lain, selalu tulis definisi sebelum di proses
*/

//function deklaration
/*function jumlhDuaBilangan (a,b){
    var total;
    total = a+b;

    return total;
};
*/

//function expression
/*var jumlhDuaBilangan = function (a,b){
    var total;
    total=a+b;

    return total
}
console.log()
*/


//contoh
function jumlahVolumeKubus(a,b){

    var volumeA;
    var volumeB;
    var total;

    volumeA = a*a*a;
    volumeB = b*b*b;

    total =volumeA+volumeB;
    return total;
}
 
alert (jumlahVolumeKubus(8,3));
alert (jumlahVolumeKubus(10,3));



