//const btn = document.querySelector('.button');
//const output = document.querySelector('.activity-data');
let ctr = 0;

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
 



/*fetch('https://create-eagleeye.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=&username=Sabando.com&password=passkey&scope=&client_id=&client_secret='
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
    });

function outjson(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += `<div class="activity-data"><div class="data names"><span class="data-title">${ind+1}. ${ele.title} ${ele.content} (${ele.id})</span></div> </div>`;
    })
    html += `<small>${JSON.stringify(val)}</small>`;
    output.innerHTML = html;
}

btn.onclick = () => {
    output.innerHTML = 'Connecting...'
    getData();

}

*/

const buttonAll = document.querySelector('.buttonAll');
//const btn1 = document.querySelector('.btn1');
const output = document.querySelector('.activity-data');
const url = 'jsontest.json';

// All Button
buttonAll.onclick = ()=>{
    //output.innerHTML = 'Connecting...'
    getDataAll();

}

/*btn1.onclick = ()=>{
    output.innerHTML = ''

}
*/



function getDataAll(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outDataAll(data.friends);
    })
}

function outDataAll(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += ` <div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ind+1}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">First Name</span>
                        <span class="data-list">${ele.first}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Last Name</span>
                        <span class="data-list">${ele.last}</span>
                    </div>

                    <div class="data joined">
                        <span class="data-title">Type of Job</span>
                        <span class="data-list">${ele.type}</span>
                    </div>
                    
                    <div class="data type">
                        <span class="data-title">Status</span>

                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick="window.location.href='jobview.html' ">View</button>   
                            </span>
                            </span>
                            </div>
                        
                        
                    </div>`;
    })
    //html += `${JSON.stringify(val)}`;
    //document.getElementById(nice).innerHTML = `<div class="activity-data"><div class="data names"><span class="data-title">Name</span><span class="data-list">${ind+1}. ${ele.first} ${ele.last} (${ele.id})</span> </div>`;
    output.innerHTML = html;
}

//Button for Paper
const buttonPaper = document.querySelector('.buttonPaper');
buttonPaper.onclick = ()=>{
    getDataPaper();

}

function getDataPaper(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outDataPaper(data.friends);
    })
}

function outDataPaper(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += ` <div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ind+1}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">First Name</span>
                        <span class="data-list">${ele.first}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Last Name</span>
                        <span class="data-list">${ele.last}</span>
                    </div>

                    <div class="data joined">
                        <span class="data-title">Type of Job</span>
                        <span class="data-list">${ele.type}</span>
                    </div>
                    
                    <div class="data type">
                        <span class="data-title">Status</span>

                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick="window.location.href='jobview.html' ">View</button>   
                            </span>
                            </span>
                            </div>
                        
                        
                    </div>`;
    })
    //html += `${JSON.stringify(val)}`;
    
    output.innerHTML = html;
}

//Button for Model
const buttonModel = document.querySelector('.buttonModel');
buttonModel.onclick = ()=>{
    getDataModel();

}
function getDataModel(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outDataModel(data.friends);
    })
}

function outDataModel(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += ` <div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ind+1}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">First Name</span>
                        <span class="data-list">${ele.first}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Last Name</span>
                        <span class="data-list">${ele.last}</span>
                    </div>

                    <div class="data joined">
                        <span class="data-title">Type of Job</span>
                        <span class="data-list">${ele.type}</span>
                    </div>
                    
                    <div class="data type">
                        <span class="data-title">Status</span>

                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick="window.location.href='jobview.html' ">View</button>   
                            </span>
                            </span>
                            </div>
                        
                        
                    </div>`;
    })
    //html += `${JSON.stringify(val)}`;
    
    output.innerHTML = html;
}

//Button for Coding
const buttonCoding = document.querySelector('.buttonCoding');
buttonCoding.onclick = ()=>{
    getDataCoding();

}
function getDataCoding(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outDataCoding(data.friends);
    })
}

function outDataCoding(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += ` <div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ind+1}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">First Name</span>
                        <span class="data-list">${ele.first}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Last Name</span>
                        <span class="data-list">${ele.last}</span>
                    </div>
                    
                    <div class="data joined">
                        <span class="data-title">Type of Job</span>
                        <span class="data-list">${ele.type}</span>
                    </div>

                    <div class="data type">
                        <span class="data-title">Status</span>

                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick="window.location.href='jobview.html' ">View</button>   
                            </span>
                            </span>
                            </div>
                        
                        
                    </div>`;
    })
    //html += `${JSON.stringify(val)}`;
    
    output.innerHTML = html;
}

//Button for Tutor
const buttonTutor = document.querySelector('.buttonTutor');
buttonTutor.onclick = ()=>{
    getDataTutor();

}
function getDataTutor(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outDataTutor(data.friends);
    })
}

function outDataTutor(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += ` <div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ind+1}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">First Name</span>
                        <span class="data-list">${ele.first}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Last Name</span>
                        <span class="data-list">${ele.last}</span>
                    </div>

                    <div class="data joined">
                        <span class="data-title">Type of Job</span>
                        <span class="data-list">${ele.type}</span>
                    </div>
                    
                    <div class="data type">
                        <span class="data-title">Status</span>

                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick="window.location.href='jobview.html' ">View</button>   
                            </span>
                            </span>
                            </div>
                        
                        
                    </div>`;
    })
    //html += `${JSON.stringify(val)}`;
    
    output.innerHTML = html;
}

//Button for Assist
const buttonAssist = document.querySelector('.buttonAssist');
buttonAssist.onclick = ()=>{
    getDataAssist();

}
function getDataAssist(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outDataAssist(data.friends);
    })
}

function outDataAssist(val){
    console.log(val);
    let html = '';
    val.forEach((ele,ind) => {
        console.log(ele);
        html += ` <div class="dash-content">
                    <div class="activity">
                    <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">ID</span>
                        <span class="data-list">${ind+1}.</span> 
                    </div>
                    <div class="data email">
                        <span class="data-title">First Name</span>
                        <span class="data-list">${ele.first}</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Last Name</span>
                        <span class="data-list">${ele.last}</span>
                    </div>
                    
                    <div class="data type">
                        <span class="data-title">Status</span>

                            <span class="buttonsView">
                            <span class="data-list">
                            <button type="button" class="button" onclick="window.location.href='jobview.html' ">View</button>   
                            </span>
                            </span>
                            </div>
                        
                        
                    </div>`;
    })
    //html += `${JSON.stringify(val)}`;
    
    output.innerHTML = html;
}
