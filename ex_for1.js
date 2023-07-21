//untuk kebwawah pake \n


//untuk bintang ke samping
var s=" ";
for ( var i =0; i<5; i++){
    s+= '*';
}
console.log(s);



//untuk bintang kebawah
var s='';
for ( var i =0; i<5; i++){
    s+= '*';
    s+= '\n';
}
console.log(s);




//untung bintang kesamping 5 kebawah 8
//ada pengulangan untuk mengulang baris dan ada pengulangan untuk mengulang baris
var s='';
for ( var i =0; i<5; i++)//untuk pengulangan baris
{
    for (var j=0; j<5; j++)//untuk pengulangan kesamping
    {
    s+= '*';
    }
    s+= '\n';
}
console.log(s);



//untuk penambahan bintang setiap baris
var s='';
for ( var i =0; i<10; i++)//untuk pengulangan baris
{
    for (var j=0; j<=i; j++){
    s+= '*';
    }
    s+= '\n';
}
console.log(s);



//untuk pengurangan bintang setiap baris
var s='';
for ( var i =10; i>0; i--)//untuk pengulangan baris
{
    for (var j=0; j<i; j++){
    s+= '*';
    }
    s+= '\n';
}
console.log(s);