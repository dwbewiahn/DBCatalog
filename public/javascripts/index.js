async function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user.length == 0 || password.length ==0) {
        document.getElementById("errorLogin").innerHTML = "Inform User/Password to login";
        return;
    }
    try{
        let userInfo = await $.ajax({
            
        })
    }
}   