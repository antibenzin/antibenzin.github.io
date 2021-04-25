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

function hide_pass_errors() {
	document.getElementById('count').style.display = 'none';
	document.getElementById('numbers').style.display = 'none';
	document.getElementById('upper').style.display = 'none';
	document.getElementById('letter').style.display = 'none';
	document.getElementById('spec').style.display = 'none';
}

function check_data() { /*При помощи регулярных выражений проверят корректность логина и пароля*/
    var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,63}$/i;
    var mail = document.getElementById('email').value;
    var valid = re.test(mail);
	
	if (document.getElementById('email').value == '') {
		document.getElementById('non_mail').style.display = 'block';
	} else {
		document.getElementById('non_mail').style.display = 'none';
	}
	
    if ((!valid) && (mail != '')) {
		document.getElementById('wrong_mail').style.display = 'block';
	} else {
		document.getElementById('wrong_mail').style.display = 'none';
	}
    
	var re1 = /^(?=.*[^А-ЯA-Zа-яa-z0-9ёЁ]+.*)(?=.*[a-zа-яё]+.*)(?=.*[A-ZА-ЯЁ]+.*)(?=.*[\d]+.*).{6,}$/;   
	var pas = document.getElementById('pass').value;
	var test_pas = re1.test(pas);
	
	if (document.getElementById('pass').value == '') {
		document.getElementById('non_pass').style.display = 'block';
		hide_pass_errors();
	} else {
		document.getElementById('non_pass').style.display = 'none';
	}
	
	if ((!test_pas) && (pas != '')) {
		
		if (pas.length < 6) {
			document.getElementById('count').style.display = 'block';
		} else {
			document.getElementById('count').style.display = 'none';
		}
		if (!(pas.match(/[0-9]/g))){
			document.getElementById('numbers').style.display = 'block';
		} else {
			document.getElementById('numbers').style.display = 'none';
		}
		if (!(pas.match(/[A-ZА-ЯЁ]/g))){
			document.getElementById('upper').style.display = 'block';
		} else {
			document.getElementById('upper').style.display = 'none';
		}
		if (!(pas.match(/[a-zа-яё]/g))){
			document.getElementById('letter').style.display = 'block';
		} else {
			document.getElementById('letter').style.display = 'none';
		}
		if (!(pas.match(/[^А-ЯA-Zа-яa-z0-9ёЁ]/g))){               
			document.getElementById('spec').style.display = 'block';
		} else {
			document.getElementById('spec').style.display = 'none';
		}
	} else {
		hide_pass_errors();
	}
	
	var re2 = /^((8|\+7)[\-]?)?(\(?\d{3,4}\)?[\-]?)?[\d\-]{5,10}$/;
	var tel = document.getElementById('tel').value;
	var test_tel = re2.test(tel);
	
	if (document.getElementById('tel').value == '') {
		document.getElementById('non_tel').style.display = 'block';
		document.getElementById('wrong_tel').style.display = 'none';
	} else {
		document.getElementById('non_tel').style.display = 'none';
	}
	
	if ((!test_tel) && (tel != '')) {
		document.getElementById('wrong_tel').style.display = 'block';
	} else {
		document.getElementById('wrong_tel').style.display = 'none';
	}
	
	if (test_pas && valid && test_tel) { /*Выводит сообщение об успешной авторизации*/
		document.getElementById('success').style.display = 'block';
	} else {
		document.getElementById('success').style.display = 'none';
	}
}

setInterval(function() { /*Показывает день недели, дату, время*/
  document.getElementById('date_time').innerText = new Date().toLocaleDateString("ru-RU", {weekday:"long"}) + ", " + new Date().toLocaleString("ru-RU");
}, 1000);

