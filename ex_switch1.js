var angka = prompt('masukin angka bebas');

//hasil inpuntan berupa string, 
//==untuk membandingkan nilai saja
//===untuk membandingkan nilai dan tipe datanya
//break digunakan agar alert yang ditampilkan adalah yg terakhir sebelum break
//switch tidak bisa memasukan kondisi dengan <,>,==, && atau yang lainnya harus berupa nilai langsung
//habis prompt kasih tanda kurung dan titik koma ();

switch (angka){
    case '1' :
        alert ('anda memasukan angka 1');
        break;
    case '2' :
        alert ('anda memasukan angka 2');
        break;  
    case '3':
        alert ('anda memasukan angka 3');
        break;
    default :
        alert ('Cuma nrima angka 1, 2, 3 hehe:v')
}