var x = document.getElementById('sign-up');
var createform = document.createElement('form');
createform.id = "sign-up";
createform.method = 'POST';
createform.action='Submit';

var y = document.createElement('input');
y.id="email";
y.type="email";
y.name="Email";
y.placeholder="example@gmail.com"

var labelemail = document.createElement('label');
labelemail.id="email_name";

var text1 = document.createTextNode("Email Address: ");



labelemail.appendChild(text1);
createform.appendChild(labelemail);
createform.appendChild(y);
x.appendChild(createform);