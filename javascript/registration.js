const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

let   logEmail = document.querySelector('#loginEmail').value;
let   logPassword = document.querySelector('#loginPassword').value;

const log = document.querySelector('#signIn');
      
/*
log.addEventListener('click', (e) => {
  

fetch('https://create-eagleeye.herokuapp.com/login', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      logEmail,logPassword
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // code here //
      if (data.error) {
        alert("Error Password or Username"); 
      } else {
        window.open(
          "dashboard.html"
        ); 
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
*/


const register = document.querySelector('#register'); 
register.addEventListener('click', () => {
let username = document.querySelector('#regEmail').value;
let password = document.querySelector('#regPassword').value;
let formData = { username, password };

  fetch('https://create-eagleeye.herokuapp.com/user', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({formData})
    
  }).then(res => {
    return res.json()
  }).then(data => console.log(data))
  .catch(error => console.log(error))
})

