var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;


for  (var noAngkot =1; noAngkot<=jmlAngkot; noAngkot++){

    if (noAngkot <= 6 && noAngkot!==5){
    console.log("Angkot no" + " " + noAngkot + " " + " Sedang beroperasi")
}
    else if (noAngkot===8 || noAngkot ===10 || noAngkot ===5){
    console.log("No Angkot" + " " + noAngkot + " " + "Sedang lembur");
}
else {
    console.log("Angkot no" + " " + noAngkot + " " + " Sedang tidak beroperasi")
}
}
