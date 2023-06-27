function openTab(event, tabName) {
    var i, tabContent, tabButton;
  
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].classList.remove("active");
    }
  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  