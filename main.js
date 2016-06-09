function adduser() {
  var pays=getElementById('pays').value;
  var nom=getElementById('nom').value;
  var poids=getElementById('poids').value;
  var imc=getElementById('imc').value;
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "adduser", true);
  xhttp.setRequestHeader("Content-type" "application/x-www-form-url-encoded");
  xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("result").innerHTML = xhttp.responseText;
    }
  };
  xhttp.send("pays ="+pays+". nom ="+nom+". poids ="+poids+". imc ="+imc+".");

}

function dostuff(){
setTimeout(
function(){
document.getElementById("image1").style.transform = "rotateZ(1050deg)";
},1000);
}

function dostuf2(){
setTimeout(
function(){
document.getElementById("image2").style.transform = "rotateZ(-1075deg)";
},1000);
}