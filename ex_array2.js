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
//6. splice: menambahkan elemen ditengah" index
//7. slice: mengambil beberapa elemen index
//8. foreach
//9. Map
//10.Sort: mengurutkan aray
//11. filter: bisa mengambalikan 1 nilai, bisa mencari banyak nilai
//12. find: bisa mengembalikan banyak nilai, hanya bisa mencari 1 nilai saja


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
/*
var arr = ['uli', 'budi', 'tono'];
arr.shift();
console.log(arr.join(' - '));//yang didalam kurung belakang join itu untuk tanda pemisah, defaultnya adalah tanda koma
*/


//6. SPLICE digunakan untuk menambahkan index ditengah" array dengan cara menuliskan no index yg akan ditambkah setelah itu,
     // kemudian menambahkan angka mo berapa index yang dihapus dan bisa menambahkan beberapa index baru
     //splice(index awal, mau dihapus beberapa setelah no index yg ditambkan, elemenBaru, elemenBaru2)
/*
     var arr = ['uli', 'budi', 'tono', 'cimeng', 'caca'];
arr.splice(1,3,'tuti', 'rehan');
console.log(arr.join('-'));
*/

//7. SLICE digunakan untuk mengambil beberapa index yg ada didalam array
    //slice(awal, akhir);
    //index pertama tidak akan berubah, hanya index yang terbaru yang berubah sesuai request
    //pengambilannya adalah menyertakan urutan no angka index pertama dan mengurangi 1 no angka index terakhir
    //a <= X > b
    //a= index awal
    //b= index terakhir
    //X= hasil slice
/*
var arr = ['uli', 'budi', 'tono', 'cimeng', 'caca','susan', 'jarjit'];
var arr2 = arr.slice(1,3);
var arr3 = arr.slice(2,6);
console.log(arr2.join('-'));
console.log(arr3.join('-'));
*/



//8. ForEach
/*
var angka=[1,2,3,4,5,6,7,];
var nama = ['uli', 'budi', 'tono', 'cimeng', 'caca','susan', 'jarjit'];

nama.forEach(function(e,i){
    console.log('Mahasiswa ke-' +(i+1)+ 'adalaha: '+e);
})
*/
//i=untuk index(angka)
//e=untuk elemennya(nama)


//9. MAP
    //bisa mengembalikan nilai
/*
    var angka=[1,2,3,4,5,6,7,];
var angka2=angka.map(function(e){
    return e*2;
});
console.log(angka2.join('-'));
*/

//10. SORT
    //untuk mengurutkan isi array nya
/*
    var angka=[1,2,8,4,5,3,6,7,];
angka.sort();
console.log(angka.join('-'));

    //untuk mengurutkan agar tidak mengurutkan dari karakter pertamanya aja
var angka=[1,2,8,4,5,10,30,20,3,6,7,];
angka.sort(function(a,b){ //itu namanya function perbandingan
    return a-b
});
console.log(angka.join('-'));
*/


//11. Filter
    //untuk mencari di array dan mengembalikan nilainya
/*
    var angka=[1,2,8,4,5,3,6,7,];
var angka2= angka.filter(function(x){
    return x == 5;
});
console.log(angka2);
*/
    //atau bisa untuk mencari beberapa nilai dengan operator logika
/*
var angka=[1,2,8,4,5,3,6,7,];
var angka3= angka.filter(function(x){
    return x >5;
});
console.log(angka3.join('-'));
*/


//12. Find
//hanya menampilkan 1 nilai yang ditemukan
//dan tidak menggunakan join
var angka=[1,2,8,4,5,3,6,7,];
var angka3= angka.find(function(x){
    return x >5;
});
console.log(angka3);
