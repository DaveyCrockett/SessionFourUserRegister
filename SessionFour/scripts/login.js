function login() {
    let userName = $('#txtUserName').val();
    let password = $('#txtPassword').val();
    console.log(userName, password);
    let userList = readUsers();

    let flag = false;
    userList.map(user => (user.email===userName && user.password===password)? (flag=true,window.location="users.html", console.log("You are logged in!")):null);
    if(flag===false){
        console.log("Invalid Credentials");
        $('#alertError').removeClass('hide');
        setTimeout(function(){
            $("#alertError").addClass("hide");
        }, 3000);
    }
}

function init(){
    console.log("Home Page");
    $("#btnLogin").click(login);
}

window.onload=init;