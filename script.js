function generatePassword(){
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for(let i=0; i<length; i++){
        const char = charset[Math.floor(Math.random()*charset.length)];
        password += char;

    }
    document.getElementById("password").value = password;
}