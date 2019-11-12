function list(){
  var url = "superheroes.php";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState === this.DONE && this.status === 200){
      alert(this.responseText);
    }
  };

  xhttp.open("GET",url);
  xhttp.send();
}
