function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}



const sidebar = document.querySelector('.left-sidebar');
const overlay = document.getElementById('leftSidebarOverlay');

function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('sidebar-open');
}

function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('sidebar-open');
}

function toggleLeftSidebar() {
  if (sidebar.classList.contains('active')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}


overlay.addEventListener('click', closeSidebar);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeSidebar();
  }
});