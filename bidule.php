<?PHP
//Arguments are given in $ POST global association array
$place = $_POST['Place'];
$pays = $_POST['Pays'];
$nom = $_POST['Nom'];
$poids = $_POST['Poids'];
$imc = $_POST['IMC'];

$db = new mysqli('localhost','patoulachi','patoulachi','patoulachi');
$sql =" INSERT INTO classement values (NULL, '".$pays."', '".$nom."', '".$poids."', '".$imc."')";

$db->close();
?>