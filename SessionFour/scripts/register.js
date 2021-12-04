console.log("User Register");

let usersList = [];

let x = 0;
//create constructor
class User {
    constructor(email, password, fname, lname, age, address, phone, payment, color){
        this.email = email;
        this.password = password;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
        this.id = x++;
    }
}

let Dave = new User("dave@gmail", "Hero", "Dave", "Wall", 55, "222 shadow dr", 2222222222, "PayPal", "#0000FF");
usersList.push(Dave);

function registerUser(){
    clearTable();
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let age = $("#age").val();
    let address = $("#address").val();
    let phone = $("#phone").val();
    let payment = $("#payment").val();
    let color = $("#color").val();
    let user = new User(email, password, fname, lname,age, address, phone, payment, color);
    if(isValid(user)){
        if(usersList.every(listedUser => listedUser.email !== user.email)){
            usersList.push(user);
        }
        //createRegisteredTable(); 
        saveUser(user); //this fn is on the storeManager.js
    }
    clearInputs();
}

function clearTable() {
    let tr = $('#tbody').children();
    tr.remove()    
}

function createRegisteredTable(){
    let tbody = document.getElementById('tbody');
    let th = "<tr><th>First Name:</th><th>Last Name:</th><th>Email:</th><th>Age:</th><th>Phone:</th><th>Address:</th><th></th></tr>";
    tbody.innerHTML = th;
    let td;
    usersList.map(listedUser => (td = `<tr id =${listedUser.id}><td>` + listedUser.fname +`</td><td>` + listedUser.lname + `</td><td>` + listedUser.email + `</td><td>` + listedUser.age + `</td><td>` + listedUser.phone + `</td><td>` + listedUser.address + `</td><td><button class="delBtn" onclick='deleteUser()'>Delete</button></td></tr>`, tbody.innerHTML += td));             
}

function clearInputs(){
    $('#txtEmail').val("");
    $("#txtPassword").val("");
    $("#fname").val("");
    $("#lname").val("");
    $("#age").val("");
    $("#address").val("");
    $("#phone").val("");
    $("#payment").val("");
    $("#color").val("");
}

function isValid(user){
    // return false when the user is not valid
    // return true when the suer is valid
    let valid = true;
    if(user.fname.length <= 0){
        //is not valid name
        valid = false;
        $('#fname').css('border', '1px solid #FF0000');
    }

    if(user.lname.length <= 0){
        //is not valid name
        valid = false;
        $('#lname').css('border', '1px solid #FF0000');
    }

    if(user.password.length <= 0){
        //is not valid name
        valid = false;
        $('#txtPassword').css('border', '1px solid #FF0000');
    }

    return valid
}

function init(){
    console.log("Init function");
    $(".btnSave").click(registerUser);
    
}

window.onload=init;