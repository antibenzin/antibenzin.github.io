function isIE() {
    const ua = window.navigator.userAgent; 
    const msie = ua.indexOf('MSIE '); 
    const trident = ua.indexOf('Trident/'); 

    return (msie > 0 || trident > 0);
	}

if (isIE()) {
	document.getElementById('its_ie').style.display = 'block';
	document.getElementById("form_auth_block").style.display = 'none';
} else {
	document.getElementById('its_ie').style.display = 'none';
	document.getElementById("form_auth_block").style.display = 'block';
}