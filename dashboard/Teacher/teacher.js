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


