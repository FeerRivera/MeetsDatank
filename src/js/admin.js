
let newPost = document.getElementById('newPost');
let wallPost = document.getElementById('wallPost');
let deletePost = document.getElementById('deletePost');
let editPost = document.getElementById('editPost');


let sesionUser = document.getElementById('sesionUser');



let adminUser;

const postCommit = () => {
  newPost.addEventListener('click', saveData = () => {

    const postTxt = inputTxt.value;
    const eventDate = eventDate.value;
    if (postTxt == '') {

    } else {
      const userKey = firebase.database().ref().child('user').push().key;
      let update = {

        post: postTxt,
        date: eventDate

      };
      firebase.database().ref(`user/${userKey}`).set(update);
      document.getElementById('postTxt').value = '';
    }
  });
};


const userPorfile = () => {
  
  firebase.database().ref('user')
    .on('child_added', (userKey) => {
      wallPost.innerHTML +=
                `<div id="wallPost" class="card publication">
      <div  class="card-body">
        <p>${userKey.val().usr}</p>
        <p>${userKey.val().title}</p>
        <p>${userKey.val().abstractC}</p>
        <p>${userKey.val().email}</p>
        <div class="text-right">
        <a  class="btn btn-outline-secondary" onclick="editPost"><i class="fas fa-edit"></i></a>
        <a class="btn btn-outline-danger" onclick="deletPost"><i class="fas fa-trash-alt"></i></a>
        </div>
      </div>
    </div>`;
    });
};

// const deletePost = (userKey) => {
//   swal({
//     title: '¿Estas seguro de eliminar la publicación?',
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#ffc107',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Aceptar'
//   }).then(confirm => {
//     if (confirm.value) {
  
//       firebase.database().ref('user').on('delete',(userKey) .then(element => { 
//           swal({
//             confirmButtonText: 'Aceptar',
//             type: 'success',
//             title: 'Publicación eliminada'
//           });
//           drawPostByUser();
//         }).catch(element => {
//           swal({
//             confirmButtonText: 'Aceptar',
//             type: 'error',
//             title: 'Error al eliminar la publicación',
//             text: 'Inténtalo de nuevo'
//           });
//         });
//     }
//   });
// };



window.onload = function() {
  postCommit();
  userPorfile();
  
};