function generatePassword(){
    const length = parseInt(document.getElementById("length").value);

    if(length < 4){
        alert("length must be at least 4")
        return ;
    }

    const lower  = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    const allChars = upper + lower + number + symbols;
    let password = [
        upper[Math.floor(Math.random()*upper.length)],
        lower[Math.floor(Math.random()*lower.length)],
        numbers[Math.floor(Math.random()*numbers.length)],
        symbols[Math.floor(Math.random()*symbols.length)]
    ]
    for(let i=0; i<length; i++){
        password.push(allChars[Math.floor(Math.random()*allChars.length)]);

    }

    password = password.sort(() => 0.5-Math.random());

    document.getElementById("result").innerHTML = password.join("");
}