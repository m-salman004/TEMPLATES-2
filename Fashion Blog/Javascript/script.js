window.onload = function() {
    let message = ('Good Day !');
    let name = prompt ('Please Enter Your Name to visit the Website');

    document.getElementById('nameUser').innerHTML = message + " " + name; 
}; 