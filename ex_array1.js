//penulisan array di dalam kurung siku, dipisahkan dengan tanda koma(,)
//array dimulai dari 0 disebut dengan index
//length digunakan untuk melihat jumlah elemen
//bisa nyimpan funtion dan array(array didalam array)

//penulisan array
/*
var binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];
*/
//atau 
var binatang =[];//bisa dideklarasiin dulu variablenya
binatang=['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];



//contoh penggunaan
var myArr=['teks', 2, false, binatang,[4,5,6]];
console.log(myArr [4][1]);
console.log(myArr[3][1]);
console.log(myArr[1]);