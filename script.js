function filterByAnyTeam() {
    let Userinput = document.getElementById("search");
    let searchWord = Userinput.value.toLowerCase();
    let tables = document.querySelectorAll(".Schedule");
    for (table of tables) {
      let rows = document.querySelectorAll("tbody tr");
      doFilter(rows, 1, searchWord);
    }
  }

  function filterByTopTeams() {
    let dropDownChoice = document.getElementsByClassName("Teams")[0];
    let searchWord = dropDownChoice.value.toLowerCase();
    let tables = document.querySelectorAll(".Schedule");
    for (table of tables) {
      let rows = document.querySelectorAll("tbody tr");
      doFilter(rows, 1, searchWord);
    }
  }

  function doFilter(rows, column, searchWord) {
    
    for (let i = 0; i < rows.length; i++) {
      let td = rows[i].getElementsByTagName("td")[column];
      let txtValue = td.innerText
      if (txtValue.toLowerCase().indexOf(searchWord) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }