const array = [ ]

function registrar(){
    const inpEmail = document.getElementById("inpEmail"); 
    const inpPassword = document.getElementById("inpPassword"); 
    if (inpEmail.value && inpPassword.value) {
        const objeto = {
            email: inpEmail.value,
            password: inpPassword.value
        }
        array.push(objeto);
        inpEmail.classList.remove("error");
        inpPassword.classList.remove("error");
        alert("se añadio correctamente")

    }else{
        if (!inpEmail.value) {
            inpEmail.classList.add("error");
        }else{
            inpEmail.classList.remove("error");
        }
        if (!inpPassword.value) {
            inpPassword.classList.add("error");
        }else{
            inpPassword.classList.remove("error");
        }

    }
    
    
}
