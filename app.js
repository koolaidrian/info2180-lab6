function list(){
  var input = document.getElementsByTagName("input")[0].value;
  var url = "superheroes.php";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState === this.DONE && this.status === 200){
      let result = document.getElementById("result");
      result.innerHTML = this.responseText;
      // alert(this.responseText);
    }
  };

  xhttp.open("GET", url + "?query=" + input);
  xhttp.send();
}
