function isIE() { /*Осуществляет проверку на IE*/
	const ua = window.navigator.userAgent;
	const msie = ua.indexOf('MSIE ');
	const trident = ua.indexOf('Trident/');
	return (msie > 0 || trident > 0);
}

if (isIE()) { /*Если браузер IE, то будет сообщение о том, что браузер нужно сменить*/
	document.getElementById('its_ie').style.display = 'block';
	document.getElementById("form_auth_block").style.display = 'none';
} else {
	document.getElementById('its_ie').style.display = 'none';
	document.getElementById("form_auth_block").style.display = 'block';
}

function check_data() { /*При помощи регулярных выражений проверят корректность логина и пароля*/
    var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,63}$/i;
    var mail = document.getElementById('email').value;
    var valid = re.test(mail);
    if (!valid) {
		document.getElementById('wrong_mail').style.display = 'block';
	} else {
		document.getElementById('wrong_mail').style.display = 'none';
	}
    
	var re1 = /^(?=.*[\W_]+.*)(?=.*[a-zа-я]+.*)(?=.*[A-ZА-Я]+.*)(?=.*[\d]+.*).{6,}$/;
	var pas = document.getElementById('pass').value;
	var test_pas = re1.test(pas);
	if (!test_pas) {
		document.getElementById('wrong_pass').style.display = 'block';
	} else {
		document.getElementById('wrong_pass').style.display = 'none';
	}
}

setInterval(function() { /*Показывает день недели, дату, время*/
  document.getElementById('date_time').innerText = new Date().toLocaleDateString("ru-RU", {weekday:"long"}) + ", " + new Date().toLocaleString("ru-RU");
}, 1000);

