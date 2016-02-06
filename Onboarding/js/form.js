var x = document.getElementById('sign-up');
var createform = document.createElement('form');
createform.id = "sign-up-form";
createform.method = 'POST';
createform.action = 'Submit';

var y = document.createElement('input');
y.id = "email";
y.type = "email";
y.name = "Email";
y.placeholder = "example@gmail.com";

var phone = document.createElement('input');
phone.id = "phone";
phone.type = "phone";
phone.name = "Phone-Number";
phone.placeholder = "(xxx)-xxx-xxxx";

var labelemail = document.createElement('label');
labelemail.id = "email_name";
var labelphone = document.createElement('label');
labelphone.id = "phone_number";

var text1 = document.createTextNode("Email Address: ");
var text2 = document.createTextNode("Phone Number: ");


var lnbreak = document.createElement('br');



labelemail.appendChild(text1);
labelphone.appendChild(text2);

createform.appendChild(labelemail);
createform.appendChild(y);
createform.appendChild(lnbreak);
createform.appendChild(lnbreak.cloneNode(true));
createform.appendChild(labelphone);
createform.appendChild(phone);
createform.appendChild(lnbreak.cloneNode(true));
createform.appendChild(lnbreak.cloneNode(true));

x.appendChild(createform);