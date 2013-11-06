var Cookies = {
	setCookie: function (name, value, days) {
		alert(name+"="+value);
		var date = new Date(new Date().getTime() + 24*60*60*1000);
		document.cookie = "name=value; expires " + date.toUTCString();

	},
	getCookie: function (name) {
		return document.cookie;
	},
	checkCookie: function (name) {
		var current = cookies.getCookie(name);
		if (current === null && current === "") {
			cookies.setCookie(name, current, 365);
		}
		else setCookie(name, cookies.generateCookie(name).name, 365);
		return "OK."
	}
}

function generateCookie(name) {
	return {name: "asasaasaa"};
}

