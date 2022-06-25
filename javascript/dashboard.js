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
 

//CALLING FROM REGISTER HTML


token = localStorage.getItem('access_token');
username = localStorage.getItem('user');
document.getElementById("helloUser").innerHTML = "Hello " + "\n" + username;

// DASHBOARD PROPER
const posts_url = 'https://create-eagleeye.herokuapp.com/posts/';

fetch(posts_url, {
    method: 'GET',
    headers : {
        'accept' : 'application/json',
        'Authorization': 'Bearer ' + token
    }
}).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    outjson(json);
})

const output = document.querySelector('.activity-data');
function outjson(val){
    console.log(val);
    let view = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        view += `<div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
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
                            </span>
                            </span>
                            </div>
                    </div>
                    `;
        
    })
    showJobs(view);
    }

    function showJobs(view){
        output.innerHTML = view;
   }
//LOGOUT
function logout(){
    window.localStorage.clear(); //clear all localstorage
    location.href = "/pages/index.html"
}