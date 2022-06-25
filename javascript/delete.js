const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
const update = document.querySelector('#update');

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

token = localStorage.getItem('access_token');
posts_url = `https://create-eagleeye.herokuapp.com/posts/`;


    fetch(posts_url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(res => {
            return res.json();
        }).then(json => {
            console.log(json);
            outjson(json);
        });


        


                function deleteMember(id){
                token = localStorage.getItem('access_token')
                    fetch(posts_url + `${id}`, {
                        method: 'DELETE',
                        headers: {
                           
                            'Content-Type' : 'application/json',
                            'Authorization': 'Bearer ' + token
                        }

                    }).then(response => response.text())
                    .then(response => console.log(response))
                    .catch(error => console.log(error));
                }

                function ViewMember(id){
                    token = localStorage.getItem('access_token')
                    fetch(posts_url + `${id}`,{
                        method: 'GET',
                        headers :{
                            'Content-Type' : 'application/json',
                            'Authorization': 'Bearer ' + token
                        }
                    }).then(response => {
                        return response.json();
                    }).then(json => {
                        console.log(json);
                        idjson(json);
                    });
                            
                            }

        
            //sa taas maglagay ng new codes
        // });



            

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
                                        <button type="button" class="button" href="javascript:void(0)" onClick="deleteMember(${ele.id})">Delete</button> <button type="button" class="button" href="javascript:void(0)" onClick="ViewMember(${ele.id})">Edit</button>
                                        </span>
                                        </span>
                                        </div>
                                </div>
                                `;
                    
                })
                //view += `<small>${JSON.stringify(val)}</small>`;

                JSON.stringify(val);
                showJobs(view);
            

                
            }

                    function showId(view){
                            viewId.innerHTML = view;
                        }

                    function showJobs(view){
                        output.innerHTML = view;
                    }

            const viewId = document.querySelector('.activity');
            function idjson(val){
                console.log(val);
                let view = '';
                    view = `<div class="dash-content">
           

            <div class="activity">
                <div class="title">
                    <i class="uil uil-pen"></i>
                    <span class="text">Edit Job</span>
                </div>

                <div class="activity-reflect">
                    <div class="data categories">
                        <span class="data-title">Present Title</span>
                        <span class="data-title" id="title">${val.title}</span>
                        <span class="data-title">Present Information</span>
                        <span class="data-title" id="info">${val.content}</span>
                        
                    </div>
                    <br>
                    <div class="data info">
                    <span class="data-list">
                    <span class="data-title">Title Replacement</span>
                        <div class="input-box">
                            <input type="text" placeholder="Title" id="jobtitle">
                        </div>
                    </span>
                
                   
                    
                    <span class="data-list">
                    <span class="data-title">Information Replacement</span>
                        <div class="input-box">
                            <input type="text" placeholder="Information" id="jobinfo">
                        </div>
                    </span>

                    <span class="buttons">
                        <span class="data-list">
                        <button type="button" class="button" onclick="window.location.href='/pages/taskguard.html' ">Back</button>
                        <button type="button" class="button" href="/pages/manage.html" onClick="updateId(${val.id})" id="update">Update</button>
                        </span>
                    </span>
                
                </div>
                   
                    
                    

                    

                    
                </div>
            </div>
        </div>
                    `;
                    
                
                JSON.stringify(val);
                showId(view);
            }

        
 
            function editMember(id){
            let title = document.querySelector('#jobtitle').value;
            let content = document.querySelector('#jobinfo').value;
            token = localStorage.getItem('access_token');
                    fetch(posts_url + `${id}`,{
                    method: 'GET',
                        headers :{
                            'Content-Type' : 'application/json',
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    .then( res => res.json())  
                    .then( data => {
                        document.querySelector('#title').value = data.title; 
                        document.querySelector('#info').value = data.content;
                    })
                    };
                
                
          

                function updateId(id){ 
                token = localStorage.getItem('access_token');
                let title = document.querySelector('#jobtitle').value;
                let content = document.querySelector('#jobinfo').value;
                let formData = { title,content };

                

                fetch(posts_url + `${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(formData),
                    headers: {
                        'accept': 'application/json',
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                })
            }
                
                    

        
//LOGOUT
function logout(){
    window.localStorage.clear(); //clear all localstorage
    location.href = "/pages/index.html"
}
