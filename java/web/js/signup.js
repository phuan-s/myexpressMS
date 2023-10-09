  var flag = 0; // 1表示明文显示， 0表示密文显示
// 图片点击+密码框修改
function changeEye(id) {
	var pw = document.getElementById("password");
	var eye = document.getElementById("eye");

	if (flag == 1) {
		pw.type = "password";
		eye.src = "img/eye_open.png";
		flag = 0;
	} else {
		pw.type = "text";
		eye.src = "img/eye_close.png";
		flag = 1;
	}
}

function signup() {
	var phone = document.getElementById("phone").value;
	var nickname = document.getElementById("nickname").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var verificationCode = document.getElementById("verificationCode").value;
	var genderRadios = document.getElementsByName("SEX");
	var gender = "";

	for (var i = 0; i < genderRadios.length; i++) {
		if (genderRadios[i].checked) {
			gender = genderRadios[i].value;
			break;
		}
	}

	if (!phone) {
		layer.msg("手机号不能为空！");
		return;
	}

	// 验证手机号是否为11位数字
	if (!/^\d{11}$/.test(phone)) {
		layer.msg("无效的手机号");
		return;
	}

	if (!nickname) {
		layer.msg("昵称不能为空！");
		return;
	}
	
	// 避免基础的非法字符输入
	var illegalCharacters = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
	if (illegalCharacters.test(phone) || illegalCharacters.test(nickname)) {
		layer.msg("请不要输入非法字符");
		return;
	}

	if (!password) {
		layer.msg("密码不能为空！");
		return;
	}

	if (password.length < 6) {
		layer.msg("密码长度必须至少为6位！");
		return;
	}

	if (password !== confirmPassword) {
		layer.msg("两次输入的密码不匹配！");
		return;
	}

	if (!verificationCode) {
		layer.msg("验证码不能为空！");
		return;
	}

	if (!gender) {
		layer.msg("请选择性别！");
		return;
	}
	// 与服务器交互的代码，比如使用AJAX来发送数据
	layer.msg("注册成功！");
}