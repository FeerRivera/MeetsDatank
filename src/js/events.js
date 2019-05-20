document.getElementById('google').addEventListener('click', event => {
    event.preventDefault();
    window.userRegister.loginGoogle();
  });
  
  
  document.getElementById('face').addEventListener('click', event => {
    event.preventDefault();
    window.userRegister.loginFacebook();
  });
  
  
  