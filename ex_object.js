//membuat object
/*
var mhs={
    nama: 'uli aja', //object bisa sekumpulan yang terdiri dari string, int, array dan function
    umur: 22,
    ip_semester: [3.99, 3.80, 3.70],
    alamat:{
        jl: 'jl. raya no 1',
        kota: 'Sragen',
        provinsi: 'Jateng'
    }
} 
*/



//object yang sering dikenal ada 3
//1. object literal: penulisan atributnya lengkap setiap golongan
/*
var mhs1={
    nama: 'uli aja', //object bisa sekumpulan yang terdiri dari string, int, array dan function
    umur: 22,
    ip_semester: [3.99, 3.80, 3.70],
    alamat:{
        jl: 'jl. raya no 1',
        kota: 'Sragen',
        provinsi: 'Jateng'
    }
} 

var mhs2={
    nama: 'yoga aja', //object bisa sekumpulan yang terdiri dari string, int, array dan function
    umur: 23,
    ip_semester: [3.80, 3.87, 3.99],
    alamat:{
        jl: 'jl. raya no 2',
        kota: 'klaten',
        provinsi: 'Jateng'
    }
} 
*/

//2. function declaration, harus ada returnya
/*
function iniContohFDeclartion(nama, nim, email, jurusan)//deklarasiin dulu nama objek dan isinya
    {
    var cthVar={};//jadi isinya ditampung dulu di variable tapi disini kosong..diisinya dibawahnya
    cthVar.nama=nama;
    cthVar.nim=nim;
    cthVar.email=email;
    cthVar.jurusan=jurusan;
    return cthVar;
    }

//lek mo masukan data/nambah data baru tinggal buat variable baru dan panggil objectnya langsung isi
var mhs4= iniContohFDeclartion('budi', '2344409','budi@gmail.com','sastra mesin')
var mhs5= iniContohFDeclartion('dodo', '8922287','dodo@gmail.com','teknologi pangan')
*/


//3. Constructor, sama kaya yg no 2 tp g ada return pakenya this, gaperlu nyimpen di variable dulu dan harus pake new
function IniContohConstructor(nama, nim, email, jurusan){
    this.nama=nama;
    this.nim=nim;
    this.email=email;
    this.jurusan=jurusan;
}

var mhs6=new IniContohConstructor( 'Gita', '22502920', 'gita@gmail.com', 'teknik mesin')
var mhs7=new IniContohConstructor( 'Didi', '19920167', 'didi@gmail.com', 'teknik if')
