function myFunction() {
    var x = document.getElementById("TowNav");
    if (x.className === "T-nav") {
      x.className += " responsive";
    } else {
      x.className = "T-nav";
    }
  } 