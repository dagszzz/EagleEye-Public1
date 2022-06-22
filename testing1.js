const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

 // Ripple Effect JavaScript Code
 let buttons = document.querySelectorAll(".button");

 for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", (e)=>{
     e.preventDefault(); // preventing form submitting

     let overlay = document.createElement('span'); //creating a tag(span)
     overlay.classList.add("overlay"); //adding a class inside the span
     e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML

     let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
     let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click

      overlay.style.left = xValue + "px"; //changing the position of the overlay according to our clicks on the button
      overlay.style.top = yValue + "px"; //changing the position of the overlay according to our clicks on the button
 });
 }

 function limitNum(input){
     var limit = /[^0-5]/g;
     input.value = input.value.replace(limit,"");
 }
 
//API CALLING
/*
let   logEmail = document.querySelector('#loginEmail').value,
      logPassword = document.querySelector('#loginPassword').value,
      signEmail = document.querySelector('#regEmail').value,
      signPassword = document.querySelector('#regPassword').value;

const log = document.querySelector('#signIn'),
      register = document.querySelector('#register'); 

log.addEventListener('click', (e) => {
  e.preventDefault();
  

  fetch('https://create-eagleeye.herokuapp.com/login', {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
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

register.addEventListener('click', () => {
  fetch('https://create-eagleeye.herokuapp.com/login', {
    method: "POST",
    body: JSON.stringify({signEmail,signPassword}),
    headers: {
      'accept': 'application/json',
      'Content-Type' : 'application/json',
    }
    
  });
});
*/

activeCounter = document.querySelector('#activeCounter');
activeCounter.innerHTML = `${posts.length}`
fetch('https://create-eagleeye.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=&username=jeadelante2018@plm.edu.ph&password=passkey&scope=&client_id=&client_secret='
    }).then(res => {
        return res.json();
    }).then(json => {
        console.log(json['access_token']);

    fetch('https://create-eagleeye.herokuapp.com/posts/', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + json['access_token']
            }
        }).then(res => {
            return res.json();
        }).then(json => {
            console.log(json);
            outjson(json);
        });
    
const   submit = document.querySelector("#submit");  
        submit.addEventListener('click', ()=> {
        let title = document.querySelector('#jobtitle').value;
        let content = document.querySelector('#jobinfo').value;
        let formData = { title,content };

        fetch('https://create-eagleeye.herokuapp.com/posts/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + json['access_token'],
                    'Content-Type' : 'application/json'
                },     
            });



const   delPost = document.querySelector("#delPost");
        delPost.addEventListener('click', ()=> {
        fetch('https://create-eagleeye.herokuapp.com/posts/' + idCatcher, {
        method: 'DELETE',
        headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + json['access_token'],
                'Content-Type' : 'application/json'
            },     
    });
    



    });

});

    
    });

    let idCatcher;
const output = document.querySelector('.activity-data');
function outjson(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += `<div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ele.id}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">Title</span>
                        <span class="data-list">${ele.title}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Posted by</span>
                        <span class="data-list">${ele.owner.email}</span>
                    </div>

                    <div class="data joined">
                        <span class="data-title">Created at</span>
                        <span class="data-list">${ele.owner.created_at}</span>
                    </div>
                    
                    <div class="data type">
                        <span class="data-title"></span>
                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick='idCatcher=${ele.id}'>View</button>
                            <button type="button" class="button" id='delPost' onclick='idCatcher=${ele.id}'>Delete</button>
                            </span>
                            </span>
                            </div>
                    </div>
                    `;
                    
    
    }
    )
    //html += `<small>${JSON.stringify(val)}</small>`;
    output.innerHTML = html;
     
    
}


function storeVar() {
    var amount = document.getElementById('btn').getAttribute('ind');
    console.log(amount);
}

function editPost(id){

    fetch(`https://create-eagleeye.herokuapp.com/posts/`)
    .then(res => res.json())
    .then( (data) => {

        document.querySelector('#jobtitle').value = data[0].title;
        document.querySelector('#jobinfo').value = data[0].content;
        
    });
}

//LOGOUT
const logout = document.querySelector("#logout");
logout.addEventListener('click', ()=> {
    window.localStorage.clear(); //clear all localstorage
    window.open(
          "login.html"
        ); /*opens the target page while Id & password matches*/
});


//LOGIN-SIGNUP JS

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

