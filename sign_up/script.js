document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const notification = document.getElementById('notification');
    const closeNotificationBtn = document.getElementById('close-notification');
    const notificationMessage = document.getElementById('notification-message');
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error messages
        clearErrors();
        
        // Get form values
        const email = document.getElementById('email').value.trim();
        const firstName = document.getElementById('firstname').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validate form
        let isValid = true;
        
        // Email validation
        if (!email) {
            showError('email-error', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        }
        
        // First name validation
        if (!firstName) {
            showError('firstname-error', 'First name is required');
            isValid = false;
        }
        
        // Surname validation
        if (!surname) {
            showError('surname-error', 'Surname is required');
            isValid = false;
        }
        
        // Password validation
        if (!password) {
            showError('password-error', 'Password is required');
            isValid = false;
        } else if (password.length < 8) {
            showError('password-error', 'Password must be at least 8 characters');
            isValid = false;
        }
        
        // Confirm password validation
        if (!confirmPassword) {
            showError('confirm-password-error', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirm-password-error', 'Passwords do not match');
            isValid = false;
        }
        
        // If form is valid, submit (or show success message for demo)
        if (isValid) {
            // For demo purposes, we'll just show a notification
            // In a real application, you would submit the form to a server
            
            // Simulate a random success/failure response
            const isSuccess = Math.random() > 0.5;
            
            if (isSuccess) {
                // Success - would normally redirect to dashboard or show success message
                alert('Account created successfully! You can now log in.');
                form.reset();
            } else {
                // Show error notification
                notificationMessage.textContent = 'Wrong password or email address!';
                showNotification();
            }
        }
    });
    
    // Close notification when clicking the close button
    closeNotificationBtn.addEventListener('click', function() {
        hideNotification();
    });
    
    // Helper functions
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }
    
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification() {
        notification.classList.add('show');
        
        // Auto-hide notification after 5 seconds
        setTimeout(hideNotification, 5000);
    }
    
    function hideNotification() {
        notification.classList.remove('show');
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
    
    // Password confirmation real-time validation
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    confirmPasswordInput.addEventListener('input', function() {
        const errorElement = document.getElementById('confirm-password-error');
        if (this.value && passwordInput.value !== this.value) {
            errorElement.textContent = 'Passwords do not match';
        } else {
            errorElement.textContent = '';
        }
    });
    
    // Update password validation when password changes
    passwordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value) {
            const errorElement = document.getElementById('confirm-password-error');
            if (this.value !== confirmPasswordInput.value) {
                errorElement.textContent = 'Passwords do not match';
            } else {
                errorElement.textContent = '';
            }
        }
    });
});