document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    const notification = document.querySelector('.notification');
    const closeNotificationBtn = document.querySelector('.notification-close');
    const notificationHeading = document.querySelector('.notification-heading');
    const notificationMessage = document.querySelector('.notification-message');
    
    // Mobile menu functionality
    const openMenu = document.querySelector('#open-menu');
    const closeMenu = document.querySelector('#close-menu');

    if (openMenu && closeMenu) {
        openMenu.addEventListener('click', function() {
            document.querySelector('.mobile-header').style.height = '100vh';
            document.querySelector('.open-menu').style.display = 'none';
            document.querySelector('.close-menu').style.display = 'block';
        });

        closeMenu.addEventListener('click', function() {
            document.querySelector('.mobile-header').style.height = '70px';
            document.querySelector('.close-menu').style.display = 'none';
            document.querySelector('.open-menu').style.display = 'block';
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show notification with fixed message
        showErrorNotification();
        
        // Always reset the form after submission
        form.reset();
    });
    
    // Close notification when clicking the close button
    closeNotificationBtn.addEventListener('click', function() {
        hideNotification();
    });
    
    function showErrorNotification() {
        notificationHeading.textContent = 'Failed Sign Up!';
        notificationMessage.textContent = 'Wrong password or email address!';
        
        showNotification();
    }
    
    function showNotification() {
        notification.classList.add('notification-visible');
        
        // Auto-hide notification after 5 seconds
        setTimeout(hideNotification, 5000);
    }
    
    function hideNotification() {
        notification.classList.remove('notification-visible');
    }
    
    // Add input event listeners for real-time validation
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Clear the error message for this input when user starts typing
            const errorId = this.id + '-error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });
});