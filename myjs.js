var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function(){
	// Username
	var txtUsername = document.forms["register-form"]["username"];
	var msgUsername = txtUsername.nextElementSibling;
	if (txtUsername == null || txtUsername.value.length == 0){
		msgUsername.innerHTML = "* Vui lòng nhập tên";
		msgUsername.classList.remove("hidden-text");
	} else if (txtUsername.value.length < 5){
		msgUsername.innerHTML = "* Tên quá ngắn";
		msgUsername.classList.remove("hidden-text");
	} else if (txtUsername.value.length > 20) {
		msgUsername.innerHTML = "* Tên quá dài";
		msgUsername.classList.remove("hidden-text");
	} else {
		msgUsername.innerHTML = "* Tên hợp lệ";
		msgUsername.classList.remove("hidden-text");
		msgUsername.classList.remove("danger-text");
		msgUsername.classList.add("success-text");
	}
	// Password
	var txtPassword = document.forms["register-form"]["password"];
	var msgPassword = txtPassword.nextElementSibling;
	if ( txtPassword == null || txtPassword.value.length == 0){
		msgPassword.innerHTML = "* Vui lòng nhập mật khẩu";
		msgPassword.classList.remove("hidden-text");
	} else {
		msgPassword.innerHTML = "* Mật khẩu hợp lệ";
		msgPassword.classList.remove("hidden-text");
		msgPassword.classList.remove("danger-text");
		msgPassword.classList.add("success-text");
	}
	// Fullname
	var txtFullName = document.forms["register-form"]["fullName"];
	var msgFullName = txtFullName.nextElementSibling;
	if ( txtFullName == null || txtFullName.value.length == 0){
		msgFullName.innerHTML = "* Vui lòng nhập tên đầy đủ";
		msgFullName.classList.remove("hidden-text");
	} else if (txtFullName.value.length < 5){
		msgFullName.innerHTML = "* Tên quá ngắn";
		msgFullName.classList.remove("hidden-text");
	} else if (txtFullName.value.length > 30) {
		msgFullName.innerHTML = "* Tên quá dài";
		msgFullName.classList.remove("hidden-text");
	} else {
		msgFullName.innerHTML = "* Tên hợp lệ";
		msgFullName.classList.remove("hidden-text");
		msgFullName.classList.remove("danger-text");
		msgFullName.classList.add("success-text");
	}
	// Email
	var txtEmail = document.forms["register-form"]["email"];
	var msgEmail = txtEmail.nextElementSibling;
	var valueTxtEmail = txtEmail.value
	if ( txtEmail == null || txtEmail.value.length == 0){
		msgEmail.innerHTML = "* Vui lòng nhập email";
		msgEmail.classList.remove("hidden-text");
	} else {
		if (valueTxtEmail.search('@') == -1){
		msgEmail.innerHTML = "* Email không hợp lệ";
		msgEmail.classList.remove("hidden-text");
		} else {
		    msgEmail.innerHTML = "* Email hợp lệ";
			msgEmail.classList.remove("hidden-text");
			msgEmail.classList.remove("danger-text");
			msgEmail.classList.add("success-text"); 
		}
	}
}
	
	// if ( txtEmail == null || txtEmail.value.length == 0){
	// 	msgEmail.innerHTML = "* Vui lòng nhập email";
	// 	msgEmail.classList.remove("hidden-text");
	// } else {
	// 	var filter = /(a-zA-Z0-9)+\@/;
 //        if (!filter.test(txtEmail.value)) {
 //            msgEmail.innerHTML = "* Email không hợp lệ";
	// 		msgEmail.classList.remove("hidden-text");
 //            txtEmail.focus;
 //            return false;
 //        }
 //        else {
 //        	msgEmail.innerHTML = "* Email hợp lệ";
	// 		msgEmail.classList.remove("hidden-text");
	// 		msgEmail.classList.remove("danger-text");
	// 		msgEmail.classList.add("success-text");   
 //        }
	// }
