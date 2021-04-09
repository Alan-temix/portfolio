function demo() {
    let name = prompt("Ingresa tu nombre");
    let email = prompt("Ahora ingrese su correo");
    if (name != null){
        alert("Gracias por contactarte conmigo " + name + " tan pronto como me sea posible te contactare a el correo " + email + " excelente día!");
        }
        //Detectamos si el usuario NO ingreso un valor
        else {
        alert("No has ingresado ningun valor, que pedo!");
        }
}