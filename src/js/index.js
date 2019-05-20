

// / Registro Usuarios Nuevos
const btnSignUpModal = document.getElementById('registerUser');


const registrar = () => {
  const email = document.getElementById('emailReg').value;
  const password = document.getElementById('passwordReg').value;
  // cons t userName = document.getElementById('userName').value;
  localStorage.setItem('emailReg', email);
  // alert('Ingresa tus Datos');

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    verificar();
    location.href = ('views/view1.html');
    console.log(verificar);
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // alert('Verifica datos');
    // ...
  });
};
btnSignUpModal.addEventListener('click', registrar);

// Ingreso de Usuario y contraseña
const btnentrar = document.getElementById('enter');


const entrar = () => {
  const email1 = document.getElementById('emailUser').value;
  const password1 = document.getElementById('passwordUser').value;
  localStorage.setItem('email1', email1);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(function() {
      // promise.catch(console.log(e.message));
      window.location.href = '../views/admin.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
      // ...
    });
};
btnentrar.addEventListener('click', entrar);

// verificar correo
const verificar = () => {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
};

// Observador
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let usuarioAct = user.usuarioAct;
    console.log('usuario activo');
    localStorage.setItem('usuarioAct', usuarioAct);
    window.location.href = 'views/admin.html';
    // User is signed in.
  } else {
    console.log('No hay usuario activo');

    // No user is signed in.
  }
});


// login
window.userRegister = {

  loginGoogle: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('views/view1.html');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },


  loginFacebook: () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(result => {
        location.href = ('');
      })
        .catch(e => alert(e.message));
    } else {
      firebase.auth().signOut();
    }
  },

  
};

//Registro de charla 
// const btnRegister = document.getElementById('register');


// const registerTitle = () => {
//   const postListRef = db.collection('user').orderBy('time', 'desc');
//   const name = document.getElementById('name').value;
//   const email2 = document.getElementById('email').value;
//   const password2 = document.getElementById('password').value;
//   const titleC = document.getElementById('titleC').value;
//   const abstractC = document.getElementById('abstractC').value;
//   // cons t userName = document.getElementById('userName').value;
//   localStorage.setItem('email', email);
//   // alert('Ingresa tus Datos');

//   function writeUserData(name, email2, password2, titleC, abstractC) {
//     firebase.database().ref('users/' + name, email2, password2, titleC, abstractC).set({
//       username: name,
//       email: email,
//       title: titleC,
//       abstract: abstractC
//     });
//   }

// };
// btnRegister.addEventListener('click', registerTitle);

const btnRegister = document.getElementById('register');

const registerCharla = () => {
  btnRegister.addEventListener('click', register = () =>{


    const name = document.getElementById('name').value;
    const email2 = document.getElementById('email').value;
    const password2 = document.getElementById('password').value;
    const titleC = document.getElementById('titleC').value;
    const abstractC = document.getElementById('abstractC').value;
    if (name,email2,titleC,abstractC === '') {
      alert('Te falta llenar algun dato');
    } else {
      const newMessageKey = firebase.database().ref().child('user').push().key;
      let update = {
        usr: name,
        email: email2,
        title: titleC,
        abstract, abstractC

      };
      firebase.database().ref(`user/${newMessageKey}`).set(update);
      // document.getElementById('publicText').value = '';
      alert('Registraste tu charla');
    }
  });
};



  

window.onload = function() {
  registerCharla();
};
