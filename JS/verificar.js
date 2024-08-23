function verificar () {
    let input = document.getElementById("name").value;

    if (input == "" || input == null) {
        let p = document.getElementById("mensagem");

        p.innerHTML = "O campo precisa ser preenchido!";
        p.style.color = "red";
        p.style.fontFamily = "Poppins, sans-serif";
        p.style.textAlign = "center";
    } else {
        let p = document.getElementById("mensagem");

        p.innerHTML = "Parábens, o campo foi preenchido!";
        p.style.color = "green";
        p.style.fontFamily = "Poppins, sans-serif";
        p.style.textAlign = "center";
    }
};