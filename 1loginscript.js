const database = [
    "Stefan.auticko123",
    "Pepa.kaktus7",
    "Tomas.profik1",
    "Ruda.csgopro2",
]

function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    console.log("jjjj");

    const logindata = username + "." + password

    console.log(logindata);
    
    for (let i = 0; i < database.length; i++) {
      if(logindata == database[i]) {
        
        document.getElementById("logOutput").innerHTML = "Úspěšně přihlášeno"

        setTimeout(() => {
        window.location.href = "/index.html"

        }, "1000");
      }else if (logindata != database[i]){
        alert("Nesprávně zadané údaje")
        break
      }
    }

}


