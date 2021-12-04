function hello(arg){
    console.log("Hello " + arg);
    return "Traveling to London";
}

let menu = document.getElementById("menu_container");
console.log(menu);
console.log(document.getElementsByClassName("menu"));
console.log(document.getElementsByTagName("a"));

$("#menu_container").hide();
$("#menu_container").show();
$("#menu_container").css({'background': 'gray'});
$("body").css({'background': 'blue'});