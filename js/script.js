// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('contactForm');
  
//     form.addEventListener('submit', function (event) {
//       event.preventDefault(); // Mencegah pengiriman form default
  
//       // Mengirim form menggunakan fetch
//       fetch(form.action, {
//         method: 'POST',
//         body: new FormData(form),
//       })
//       .then(response => {
//         console.log(response); // Tambahkan log untuk memeriksa respons
//         if (response.ok) {
//           form.reset(); // Reset form setelah sukses
//           alert('Pesan terkirim dengan sukses!');
//         } else {
//           alert('Terjadi kesalahan saat mengirim pesan. Coba lagi.');
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error); // Tambahkan log kesalahan untuk debugging
//         alert('Terjadi kesalahan, coba lagi.');
//       });
//     });
//   });
  