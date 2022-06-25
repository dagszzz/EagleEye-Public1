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

function loginId (){
let username = document.querySelector('#loginEmail').value;
let password = document.querySelector('#loginPassword').value;

var details = {
  'username' : username,
  'password' : password,
}

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");


  fetch('https://create-eagleeye.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
    
  }).then(res => {
    return res.json();
  }).then(json => {
    console.log(json);
    console.log(json['access_token']);
    localStorage.setItem('access_token',json.access_token);
    localStorage.setItem('user',details.username);
    location.href = "/pages/dashboard.html"
  })

  }

function signupId () {
  let username = document.querySelector('#regEmail').value;
  let password = document.querySelector('#regPassword').value;
  let formData = { username, password }
  fetch('https://create-eagleeye.herokuapp.com/login', {
            method: 'POST',
            headers: {
                    
                Accept: "application/json, text/plain, */*",
                    'Content-Type' : 'application/json'
                },    
                body: JSON.stringify(formData), 
            }).then((response) => response.json())
            .then((data) => {
              console.log(data);
                if (response.ok) {
                    console.log("post success");
                    }
                    else {
                        console.log("post failed");
                    }
                    return response;

               }).then(response => console.log(response));
               }