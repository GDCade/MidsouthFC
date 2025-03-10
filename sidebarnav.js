document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
        document.querySelector('.overlay').classList.toggle('active');
    });
    
    
    // Close sidebar when clicking on the overlay
    document.querySelector('.overlay').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    });
});