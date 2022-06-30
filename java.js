const pass = document.getElementById('password');
const passconfirm = document.getElementById('password2');

if(pass == passconfirm){
    console.log("good")
} else if(pass !== passconfirm){
    console.log("bad")
}