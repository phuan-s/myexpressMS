var flag = 0; // 1表示明文显示， 0表示密文显示
function login1() {    
	// alert("登录成功");
	var acc1 = document.getElementById("account1").value;
	var pw1 = document.getElementById("pw1").value;
	var inputCaptcha = document.getElementById("input_captcha").value;
	// 检查用户名和密码是否为空
	if (acc1 === "") {
		layer.msg('用户名不能为空！');             
		return;
	}
	if (pw1 === "") {
		layer.msg('密码不能为空！');    
		return;
	}
	
	// 检查输入的验证码是否正确
	if(inputCaptcha != window.generatedCaptcha) {
	    layer.msg("验证码错误");
		return;
	}
	
	if (acc1 === "admin" && pw1 === "111") {
		layer.msg("登录成功");
	} else {
		layer.msg("登录失败，用户名或密码错误");
	}
}

// 图片点击+密码框修改
function changeEye() {
	var pw1 = document.getElementById("pw1");
	var eye = document.getElementById("eye");

	if (flag == 1) {
		pw1.type = "password";
		eye.src = "img/eye_open.png";
		flag = 0;
	} else {
		pw1.type = "text";
		eye.src = "img/eye_close.png";
		flag = 1;
	}
}
// 	// BOM
// $("button").click(function(){
// 	$(this).css("background", "pink")
// 	$(this).siblings("button").css("background","")
// }
// )

// 生成一个四位数的随机验证码
function generateCaptcha() {
    var ctx = document.getElementById("captchaCanvas").getContext("2d");
    ctx.clearRect(0, 0, 100, 40); // 清除之前的内容

    var captcha = "";
    for(var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 10);
        captcha += num;
    }

    // 设置字体、颜色等
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(captcha, 10, 20);

    // 将验证码存储为全局变量或其他方法，以便验证
    window.generatedCaptcha = captcha;
}

// 在页面加载时生成验证码
window.onload = generateCaptcha;