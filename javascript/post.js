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
activeCounter = document.querySelector('#activeCounter');
//activeCounter.innerHTML = `${posts.length}`
fetch('https://create-eagleeye.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=&username=ncrriego2019@plm.edu.ph&password=passkey&scope=&client_id=&client_secret='
    }).then(res => {
        return res.json();
    }).then(json => {
        console.log(json['access_token']);
    /*
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
    */
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
            }).then(response => {
                if (response.ok) {
                    console.log("post success");
                    }
                    else {
                        console.log("post failed");
                    }
                    return response;

               }).then(response => console.log(response));
               });
   
    //sa taas maglagay ng new codes
    });

const logout = document.querySelector("#logout");
logout.addEventListener('click', ()=> {
    window.localStorage.clear(); //clear all localstorage
    window.open(
          "login.html"
        ); 
        
});