function saveUser(user) {
    //load the old data
    let data = readUsers();
    //merge the data
    data.push(user);
    let val = JSON.stringify(data);
    localStorage.setItem("users", val);
    //val is the string
    // user is the object
}

function readUsers() {
    let data = localStorage.getItem("users");
    if(!data){ //Not data?
        return []; // create an array the first registration
    }else{
        let list = JSON.parse(data);//parse string back into object
        return list;//return array of objects
    }
}

function deleteUser(userId) {
    let data = JSON.parse(localStorage.getItem("users"));
    for(let i=0; i<data.length; i++){
        if(data[i].id === userId){
            data.splice(i, 1);
        }
    }
    let val = JSON.stringify(data);
    localStorage.setItem("users", val);
    location.reload();
    return false;
}