function cambiar(){
    document.getElementById("login").innerHTML = "Logout";
}
document.getElementById("btn-azul").onclick = function (){
    cambiar();
}

function remove(add) {
    var element = this.add;
    element.remove();
}

function like(){
    alert("Ninja was liked");
}
like()
