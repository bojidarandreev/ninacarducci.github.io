function loadScripts() {
    let scriptElem1 = document.createElement("script");
    let scriptElem2 = document.createElement("script");
    let scriptElem3 = document.createElement("script");
    // let getScriptElem2 = fetch('https://code.jquery.com/jquery-3.4.1.min.js');
    scriptElem1.src = "./assets/bootstrap/bootstrap.bundle.js";
    // scriptElem2 = `<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>`;
    scriptElem2.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    scriptElem2.integrity = 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=';
    scriptElem2.crossOrigin = 'anonymous';
    scriptElem3.src = "./assets/maugallery.js";
    scriptElem3.type = "module";
  
    document.getElementsByTagName("head")[0].appendChild(scriptElem2);
    document.getElementsByTagName("head")[0].appendChild(scriptElem1);
    document.getElementsByTagName("head")[0].appendChild(scriptElem3);
  
    console.log(scriptElem1);
    console.log(scriptElem2);
    console.log(scriptElem3);
    // return scriptElem3;
  }
loadScripts();

//   async function ldScripts() {
//     const scriptElem1 = 
//   } 
//   loadScripts();


//   $(document).ready(function () {
//     $(".gallery").mauGallery({
//       columns: {
//         xs: 1,
//         sm: 2,
//         md: 3,
//         lg: 3,
//         xl: 3,
//       },
//       lightBox: true,
//       lightboxId: "myAwesomeLightbox",
//       showTags: true,
//       tagsPosition: "top",
//     });
//   });
  
//   function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//       console.log(`Making request to ${location}`);
//       if (location === "Google") {
//         resolve("Google says hi");
//       } else {
//         reject("We can only talk to Google");
//       }
//     });
//   }
  
//   function processRequest(response) {
//     return new Promise((resolve, reject) => {
//       console.log(`Processing response`);
//       resolve(`Extra information + ${response}`);
//     });
//   }
  
//   async function doWork() {
//     const response = await loadScripts(scriptElem3.src);
//     console.log(`Processing response`);
//   }
  


// const login = async (data) => {
//     const user = {
//         email : data.get('email'),
//         password : data.get('password'),
//     }
//     //console.log('test')
//     return await fetch('http://localhost:5678/api/users/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user),
//     })
// }

 
// loginForm.addEventListener('submit', async (event) => {
//     clearError();
//     event.preventDefault()
//     const data = new FormData(loginForm)

//     const response = await login(data)
//     const user = await response.json()
//     //console.log(user)

//     if (response.status === 200) {
//         sessionStorage.setItem('token', user.token)
//         window.location.assign('/index.html')
//         document.querySelector("#loginBtn").innerHTML = "log out";
//         } else if (response.status !== 200) {
//         //console.log(response.status);
//         loginError();
//     }

// })


// // ORIGINAL VARIANT
// const login = async (data) => {
//     const user = {
//         email : data.get('email'),
//         password : data.get('password'),
//     }
//     //console.log('test')
//     return await fetch('http://localhost:5678/api/users/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user),
//     })
// }

 
// loginForm.addEventListener('submit', async (event) => {
//     clearError();
//     event.preventDefault()
//     const data = new FormData(loginForm)

//     const response = await login(data)
//     const user = await response.json()
//     //console.log(user)

//     if (response.status === 200) {
//         sessionStorage.setItem('token', user.token)
//         window.location.assign('/index.html')
//         document.querySelector("#loginBtn").innerHTML = "log out";
//         } else if (response.status !== 200) {
//         //console.log(response.status);
//         loginError();
//     }

// })