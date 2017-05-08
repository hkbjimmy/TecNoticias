var app={
  inicio: function(){
    //Inicializar Firebase
     var config = {
      apiKey: "AIzaSyCmIWv85sOyJ3gJKw9WmV2nwJTtOY3gCHE",
      authDomain: "apppruebas-d0c34.firebaseapp.com",
      databaseURL: "https://apppruebas-d0c34.firebaseio.com",
      projectId: "apppruebas-d0c34",
      storageBucket: "apppruebas-d0c34.appspot.com",
      messagingSenderId: "863663908832"
    };

    firebase.initializeApp(config);

    // Obtener elementos
      var txtEmail = document.querySelector('#txtEmail');
      var txtPassword = document.querySelector('#txtPassword');
      var btnLogin = document.querySelector('#btnLogin');
      var btnSignUp = document.querySelector('#btnSignUp');
      var btnGoogle = document.querySelector('#btnGoogle');
      

    // Añadir Evento login

  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass)
    .then(function(result){
      window.location.href = "subir.html"
    });
    promise.catch(e => console.log(e.message));   
  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass)
    .then(function(result){
      window.location.href = "subir.html"
    });
    promise.catch(e => console.log(e.message));

  });

  // creo el provider de autenticación
    var provider = new firebase.auth.FacebookAuthProvider();

    // opcionalmente modifico el scope
    provider.addScope('public_profile');

    // accedo al servicio de autenticación
    var authService = firebase.auth();

    // evento para el botón de login con facebook
    document.getElementById('loginfacebook').addEventListener('click', function() {
    // autentico con Facebook
    authService.signInWithPopup(provider)
            .then(function(result) {
                //todo correcto
                console.log('autenticado usuario ', result.user);
            })
            .catch(function(error) {
                console.log('Detectado un error:', error);
            });
    })
  
  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('no logueado');
    }    
  });
   

  },

};




   
  

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
    app.inicio();
  }, false);
}
