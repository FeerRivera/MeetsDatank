const btnLogOut = document.getElementById('btnLogout');

btnLogOut.addEventListener('click', event => {
  firebase.auth().signOut();
  window.location.href = '../index.html';
});



