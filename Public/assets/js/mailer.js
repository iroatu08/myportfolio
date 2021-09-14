const form = document.querySelector('.contact__form');
let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let project = document.getElementById('project');
let message = document.getElementById('message');


let formData = {
    fullname: fullname.value,
      email: email.value,
     project: project.value,
     message: message.value
}





function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "iroatu7@gmail.com",
	Password : "chibuzor007",
	To : 'iroatu7@gmail.com',
	From : 'iroatu8@gmail.com',
	Project : 'book',
	Message : 'gmail',
	}).then(
		message => alert("mail sent successfully")
	);
}

// form.addEventListener('sendEmail', (e) =>{
//     e.preventDefault();

// let formData = {
//     fullname: fullname.value,
//     email: email.value,
//     project: project.value,
//     message: message.value

// }

// let xhr = new XMLHttpRequest();
// xhr.open('POST', '/'); 
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.onload = () =>{
//     console.log(xhr.responseText);
//     if (xhr.responseText === 'success'){
//         alert('Email sent');
//         fullname.value = '';
//         email.value = '';
//         project.value = '';
//         message.value = '';
//     }

//     else{
//         alert('Email failed')
//     }
// }

// xhr.send(JSON.stringify(formData));


// })