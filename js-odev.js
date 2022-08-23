function zamanF(){
	let zaman = document.querySelector("#zaman")
	const tarih=new Date();
	let gun=tarih.getDay();
	let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
	let saat=tarih.getHours();
	let dakika=tarih.getMinutes();
	let saniye=tarih.getSeconds();
	let goster = `${saat}:${dakika}:${saniye} ${gunler[gun]}`
	zaman.innerHTML = `${goster}`
	setInterval(zamanF, 1000);
	

}   
let fullname = prompt("Site anasayfasına erişebilmek için isminizi giriniz:");
let textgiris;
let giris = document.querySelector("#giris")

if (fullname.length > 0)  { 
   zamanF();
     giris.innerHTML = `Merhaba, ${fullname}! Hoşgeldin! `}
     
else {alert('İsminizi giriniz')
     window.location = '/index.html'
     }

