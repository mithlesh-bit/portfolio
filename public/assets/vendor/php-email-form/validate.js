// function handleLoginFormSubmission() {

//   const form = document.getElementById('msgForm');

//   const email = form.querySelector('input[name="email"]').value;
//   const name = form.querySelector('input[name="name"]').value;
//   const subject = form.querySelector('input[name="subject"]').value;
//   const message = form.querySelector('input[name="message"]').value;

//   fetch('/home', {
//     method: 'POST',
//     body: JSON.stringify({ email, password, subject, message }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.success);
//       if (data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: data.message
//         }).then(() => {
//           window.location.href = '/';
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: data.message
//         });
//       }
//       loginnowtext.innerHTML = "Login Now"
//       loginnowtext.disabled = false;
//     });
// }