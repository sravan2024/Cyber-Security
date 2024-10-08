function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
    const strengthBar = document.getElementById('strength-bar');
  
    let strength = 0;
    let feedbackText = '';
  
    
    if (password.length >= 8) strength++; 
    if (/[a-z]/.test(password)) strength++; 
    if (/[A-Z]/.test(password)) strength++; 
    if (/\d/.test(password)) strength++; 
    if (/[\W_]/.test(password)) strength++; 
  
    
    if (strength <= 1) {
      feedbackText = 'Very Weak';
      strengthBar.innerHTML = '<div class="strength weak"></div>';
    } else if (strength === 2) {
      feedbackText = 'Weak';
      strengthBar.innerHTML = '<div class="strength medium"></div>';
    } else if (strength === 3) {
      feedbackText = 'Medium';
      strengthBar.innerHTML = '<div class="strength strong"></div>';
    } else if (strength === 4) {
      feedbackText = 'Strong';
      strengthBar.innerHTML = '<div class="strength very-strong"></div>';
    } else if (strength === 5) {
      feedbackText = 'Very Strong';
      strengthBar.innerHTML = '<div class="strength very-strong"></div>';
    }
  
    feedback.textContent = `Password strength: ${feedbackText}`;
  }
  