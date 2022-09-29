function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "steven.hai.ta856@gmail.com",
	Password : "0917152452",
	To : 'steven.hai.ta856@gmail.com',
	From : 'steven.hai.ta856@gmail.com',
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}