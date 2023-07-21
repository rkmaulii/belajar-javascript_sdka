var item = prompt ('masukkan salah satu menu ini= perkedel, pecel, seblak, soda gembira');

//hasil inpuntan berupa string, 
//==untuk membandingkan nilai saja
//===untuk membandingkan nilai dan tipe datanya
//break digunakan agar alert yang ditampilkan adalah yg terakhir sebelum break
//switch tidak bisa memasukan kondisi dengan <,>,==, && atau yang lainnya harus berupa nilai langsung
//habis prompt kasih tanda kurung dan titik koma ();

switch (item){
    case 'perkedel':
    case 'pecel':
        alert ('makanan ini sehat');
        break;
    case 'seblak':
    case 'soda gembira':
        alert ('makanan enak tapi nteu sehat');
         break;

    default :
        alert ('isi yang bener napa :(');
        break;
}