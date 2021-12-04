
function createRegisteredTable(users){
    let tbody = document.getElementById('tbody');
    let th = "<tr><th>First Name:</th><th>Last Name:</th><th>Email:</th><th>Age:</th><th>Phone:</th><th>Address:</th><th></th></tr>";
    tbody.innerHTML = th;
    let td;
    users.map(listedUser => (td = `<tr id =${listedUser.id} class='petRow'><td>` + listedUser.fname +`</td><td>` + listedUser.lname + `</td><td>` + listedUser.email + `</td><td>` + listedUser.age + `</td><td>` + listedUser.phone + `</td><td>` + listedUser.address + `</td><td><button class="delBtn" onclick='deleteUser(${listedUser.id})'>Delete</button></td></tr>`, tbody.innerHTML += td));             
}

function init() {
    console.log("Listing Users!");
    let users = readUsers();// this on storeManager
    console.log(users);
    createRegisteredTable(users);
}

window.onload = init;