function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
    openFixedSidebar.style.display = "none"; 
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
    openFixedSidebar.style.display = "block"; 
}


function toggleFixedSidebar() {
    const sidebar = document.getElementById("fixedSidebar");
    sidebar.classList.toggle("sidebar-open");
  }
  
  function hideFixedSidebar() {
    const sidebar = document.getElementById("fixedSidebar");
    sidebar.classList.remove("sidebar-open");
  }
  
 
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("fixedSidebar");
    const toggleButton = document.getElementById("open-fixedSidebar");
  
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = toggleButton.contains(event.target);
  
    if (!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.remove("sidebar-open");
    }
  });