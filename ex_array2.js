//Manipulasi array

//1.menambah isi array
//disini harus hafal urutan arraynya jgn sampe kelewatan
/*
var arr=[]; //disini hanya menjelaskan pembuatan array dengan nama variable arr
arr[0]='uli';//baris ini untuk mengisi/menambahkan isi array diatas
arr[1]='1';
arr[2]='budi';
arr[3]='tono';

console.log (arr);//pemanggilan array di console
*/

//2. menghapus array
/*
var arr = ['uli', 'budi', 'tono'];
arr[1]=undefined;//tidak langsung dihapus tapi dengan tidak mendefinisikan isinya
console.log (arr);
*/

//3.menampilkan isi array
/*var arr = ['uli', 'budi', 'tono'];
for(var i = 0; i<arr.length; i++){
    console.log('Mahasiswa ke-' + (i+1)+':'+arr[i]);
}*/



//array method
//1. length: untuk mengetahui jumlah array
//2. join: menggabungkan seluruh isi array menjadi string
//3. push(menambahkan elemen baru diakhir array)
//4. pop(menghilangkan elemen terakhir dari sebuah array)
//5. shift, unshift

//2. join
/*
var arr = ['uli', 'budi', 'tono'];
console.log(arr.join(' - '));//yang didalam kurung belakang join itu untuk tanda pemisah, defaultnya adalah tanda koma
*/

//3.push
/*
var arr = ['uli', 'budi', 'tono'];
arr.push('doddy', 'fika');//bisa langsung beberapa
console.log(arr.join(' - '));//yang didalam kurung belakang join itu untuk tanda pemisah, defaultnya adalah tanda koma
*/

//4.pop
/*
var arr = ['uli', 'budi', 'tono'];
arr.pop();
arr.pop();//untuk menghapusnya harus satu persatu
console.log(arr.join(' - '));//yang didalam kurung belakang join itu untuk tanda pemisah, defaultnya adalah tanda koma
*/

//5. unshift & shift 
//unshift untuk menambahkan elemen pertama diawal
/*
var arr = ['uli', 'budi', 'tono'];
arr.unshift('kirana','caca');
console.log(arr.join(' - '));//yang didalam kurung belakang join itu untuk tanda pemisah, defaultnya adalah tanda koma
*/

//shift untuk menghapus elemen pertama diawal
var arr = ['uli', 'budi', 'tono'];
arr.shift();
console.log(arr.join(' - '));//yang didalam kurung belakang join itu untuk tanda pemisah, defaultnya adalah tanda koma
