/*
    Konsep permainan
menangkap pilihan user
menangkap pilihan komputer
merandom pilihan komputer
membuat peraturan
tampilkan hasilnya
*/
var tanya = true;
while(tanya){
    var u = prompt ('silahkan pilih semut, gajah, orang: '); //untuk inputan user
    var c = Math.random();//untuk random

    //pengkondisian hasil random
    if(c<0.34){
        c ='gajah';
    }
    else if(c>=0.34 && c <0.67){
        c ='orang';
    }
    else {
        c ='semut';
    }

    //membuat pengaturan
    var hasil='';
    if (u == c){
        hasil = 'Seri'
    }
    else if (u=='gajah'){
        hasil= (c=='orang')? 'Menang' : 'Kalah';
    }
    else if (u=='orang'){
        hasil = (c=='gajah')?  'Kalah' :  'Menang';
    }
    else if (u=='semut'){
        hasil = (c=='orang')? 'Kalah' :  'Menang';
    }

    else{
        hasil='salah menginputkan pilihan';
    }


    //untuk menampilkan hasil menggunakan alert
    alert ('Kamu memilih' + ' ' +  u + ' '  + 'dan pilihan komputer adalah' + ' ' +  c +'\n jadi kamu' + ' '  + hasil);

    tanya = confirm ('lagi?');

}

alert ('terimakasih sudah bermain dan mau bertahan hidup')