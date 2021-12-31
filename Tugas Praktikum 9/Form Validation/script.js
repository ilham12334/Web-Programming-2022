var harga = ['20000','30000','45000','50000'];
var kereta = ['PASAR MINGGU','MANGGARAI','CITAYAM','BOJONG GEDE'];
function Tujuan() {
 // body...
 var tujuan = document.getElementById('inp_tujuan').value;
 var kereta2 = document.getElementById('kereta2');
 kereta2.innerHTML="<option>--PILIH KERETA--</option>"
 if (tujuan=='jkt') {
  for (var i = 0; i < 2; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
 else if (tujuan=='bgr') {
  for (var i = 2; i < 4; i++) {
   result="<option value="+i+">"+kereta[i]+"</option>";
   kereta2.innerHTML+=result;
  }
 }
}
function harganya(){
 var harga2 = document.getElementById('kereta2').value;
  tampil.value="Rp. "+harga[parseInt(harga2)];
}

function Total() {
 // body...
var harga2 = document.getElementById('kereta2').value;
var jumlah;
jumlah=parseInt(document.getElementById('inp_jumlah').value);
total= jumlah*parseInt(harga[parseInt(harga2)]);
total2.value="Rp. "+total;
}
function pesan() {
 // body...
 var nama=document.getElementById('inp_nama').value;
 var email=document.getElementById('inp_email').value;
 alert('Hai !! ' + nama +" Pesanan tiket kamu sudah berhasil dengan email " +email);
 alert('Silahkan lakukan pembayaran dengan total ' + total ); 
}