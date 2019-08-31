data = {}
data.users = null;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1Mn3EHzCIH2LIx6YV8Rwo8y_EtvETK6I",
  authDomain: "group-86f76.firebaseapp.com",
  databaseURL: "https://group-86f76.firebaseio.com",
  projectId: "group-86f76",
  storageBucket: "group-86f76.appspot.com",
  messagingSenderId: "751378419287",
  appId: "1:751378419287:web:450e0336b229fd2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
data.checkUserId = (roomName) => {
 return db.collection("conversation").doc("Users").get().then(function(doc){
   let check = false; 
    doc.data().users.forEach((data) => {
 if (data.username === roomName){
   check = true;
 }
    })
    return check;
  })
}
data.checkPassUserId = (password) => {
  return db.collection("conversation").doc("Users").get().then(function(doc){
    let check = false; 
     doc.data().users.forEach((data) => {
  if (data.password === password){
    check = true;
  }
     })
     return check;
   })
}
data.checkRoomId = (roomName) => {
  return db.collection("conversation").get().then((docs)=>{
    let check = false
    docs.forEach(data => {
      if (data.data().room === roomName){
        check = true
      }
    })
    return check
  })
}
data.checkPassId = (password) => {
  return db.collection("conversation").get().then((docs)=>{
    let check = false
    docs.forEach(data => {
      if (data.data().password === password){
        check = true
      }
    })
    return check
  })
}
data.signInUser = () => {
  document.getElementById('create-user').addEventListener('click',function(){
    controll.signUpUser();
  });
  document.getElementById('button').addEventListener('click',function(){
    
    let roomName = document.getElementById('room-name').value;
    let password = document.getElementById('password').value;  
      
    data.checkUserId(roomName).then((result) => {
      data.checkPassUserId(password).then((pass) => {
        if (result == true & pass == true){
        data.users = `${roomName}`
        controll.renderComponentHome();
         }
         else {
          alert("Maybe your account or password is not correct!");
        }
      })
    })
  }) 
}
data.signUpUser = () => {
  
  document.getElementById('button').addEventListener('click',function(){
      let roomName = document.getElementById('room-name').value;
      let password = document.getElementById('password').value;
      data.checkUserId(roomName).then((result) => {
        if (result == true){
          alert('UserID has already exised');
        }
        else{
          let washingtonRef = db.collection("conversation").doc(`Users`);
          washingtonRef.update({
            users: firebase.firestore.FieldValue.arrayUnion({username:`${roomName}`,password:`${password}`})
      });
          alert('Your UserID is ready!')
          controll.renderUserLogin();
        }
      })
  });
}
data.signInRoom = () => {
  document.getElementById('create-room').addEventListener('click',function(){
    controll.signUpRoom();
  });
    document.getElementById('button').addEventListener('click',function(){
    
    let roomName = document.getElementById('room-name').value;
    let password = document.getElementById('password').value;  
      
    data.checkRoomId(roomName).then((result) => {
      data.checkPassId(password).then((pass) => {
        if (result == true & pass == true){
          containter.innerHTML = view.chat;
          data.getDataFormUser(`${roomName}`);
         }
         else {
          alert("Maybe your account or password is not correct!");
        }
      })
    })
  }) 
  // console.log(checkRoomId(roomName))
  // if (checkRoomId(roomName)){
  //   console.log("ok")
  // } else {
  //   console.log("not oke")
  
//  if (checkR == true){
//   db.collection("conversation").doc(`${roomName}`).get().then(function(doc){
// if (doc.data().password == password){
//     return true;
// }
// else {alert('Wrong password')}
//   });
//  }
//  else {alert('Wrong Roomname')}
// // });

} 

data.signUpRoom = () => {
    document.getElementById('button').addEventListener('click',function(){
        let roomName = document.getElementById('room-name').value;
        let password = document.getElementById('password').value;
        data.checkRoomId(roomName).then((result) => {
          if (result == true){
            alert('roomID has already exised');
          }
          else{
            db.collection("conversation").doc(`${roomName}`).set({
              message: [],
               password:`${password}`,
               room: `${roomName}`,
            });
            alert('Your chat room is ready!')
            controll.renderComponentHome();
          }
        })
    });
  
}
data.getDataFormUser = (room) => {
   
 // Your web app's Firebase configuration
  //  var firebaseConfig = {
  //   apiKey: "AIzaSyA1Mn3EHzCIH2LIx6YV8Rwo8y_EtvETK6I",
  //   authDomain: "group-86f76.firebaseapp.com",
  //   databaseURL: "https://group-86f76.firebaseio.com",
  //   projectId: "group-86f76",
  //   storageBucket: "group-86f76.appspot.com",
  //   messagingSenderId: "751378419287",
  //   appId: "1:751378419287:web:450e0336b229fd2d"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // db = firebase.firestore();
  // console.log(db);




  // document.getElementById("icon").addEventListener('click', function(){
  //   let input = document.getElementById('input').value;
  //   db.collection("conversation").add({
  //     first: `${input}`,
  //   });
  // })

// db.collection("conversation").doc('gsOU1OgUb8bsDqf2QTDa').onSnapshot(function(querySnapshot) {
//   var cities = [];
//   querySnapshot.forEach(function(doc) {
//      console.log('hehe');
//   });

let chatArea = document.getElementById("chatArea");
function scrollToBottom() {
  chatArea.scrollTop = chatArea.scrollHeight;
}

// shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight


let user = data.users;
document.getElementById('intro').innerText += `ROOM: ${room}`
// });
let startLength = 0;
db.collection("conversation").doc(`${room}`).get().then(function(doc) { 
   doc.data().message.forEach((item,index) => {
    startLength++;
    // console.log(user);
    
    if (item.user == user){ 
      document.getElementById('chatArea').innerHTML += `
    <div class="to">
      <div class="user text-right">${doc.data().message[index].user}</div>
      <div class="content-avatar row-rev">
        <div class="avatar-user"><div class="character">${item.user[0]}</div></div>
        <div class="content-user">
        ${doc.data().message[index].content}
         </div>
      </div>
    </div>`
    }
    else {    
      document.getElementById('chatArea').innerHTML += `
      <div class="to">
        <div class="user">${doc.data().message[index].user}</div>
        <div class="content-avatar">
        <div class="avatar-friend"><div class="character">${item.user[0]}</div></div>
          <div class="content-friend">
          ${doc.data().message[index].content}
           </div>
        </div>
      </div>`
    }
   });
});

db.collection("conversation").doc(`${room}`).onSnapshot(function(doc) {
  let last = 0; 
   doc.data().message.forEach((item,index) => {
    last++;
   })
   if(last>startLength){
   if (doc.data().message[last-1].user == user){
    document.getElementById('chatArea').innerHTML += `
  <div class="to">
    <div class="user text-right">${doc.data().message[last-1].user}</div>
    <div class="content-avatar row-rev">
      <div class="avatar-user"><div class="character">${doc.data().message[last-1].user[0]}</div></div>
      <div class="content-user">
      ${doc.data().message[last-1].content}
       </div>
    </div>
  </div>`
  }
  else {
    document.getElementById('chatArea').innerHTML += `
    <div class="to">
      <div class="user">${doc.data().message[last-1].user}</div>
      <div class="content-avatar">
        <div class="avatar-friend"><div class="character">${doc.data().message[last-1].user[0]}</div></div>
        <div class="content-friend">
        ${doc.data().message[last-1].content}
         </div>
      </div>
    </div>`
  }
  }

});
const pushData = () => {
  window.addEventListener('keypress',pushMessage,false);
  function pushMessage(key){
    if (key.keyCode == "13"){
      let washingtonRef = db.collection("conversation").doc(`${room}`);
      let content = document.getElementById('input').value;
        // Atomically add a new region to the "regions" array field.
        washingtonRef.update({
            message: firebase.firestore.FieldValue.arrayUnion({user:`${user}`,content:`${content}`})
      });
    }
  }
  console.dir(document.getElementById('text-submit'))
  document.getElementById('text-submit').addEventListener('submit',function(e){
    e.preventDefault()
    let washingtonRef = db.collection("conversation").doc(`${room}`);
    let content = document.getElementById('input').value;
    document.getElementById('input').value = '';
    // Atomically add a new region to the "regions" array field.
    washingtonRef.update({
        message: firebase.firestore.FieldValue.arrayUnion({user:`${user}`,content:`${content}`})
  });
  setTimeout(function(){scrollToBottom()}, 500)
  });
}

pushData();

// const realTime = () => { 

  // db.collection("conversation").doc('gsOU1OgUb8bsDqf2QTDa').onSnapshot(function(querySnapshot) {
  //   let chat = [];
  //   querySnapshot.forEach((doc) => {
  //     let name = Object.keys(doc.data());
  //     console.log(doc.data());
  //    chat.push(doc.data());  
  //   });
  //   //roi ram vl
  //   document.getElementById('chatArea').innerHTML += chat;
   
//     // document.getElementById('chatArea').innerHTML = `${Object.keys(doc.data())}: ${doc.data()[name]} <br>`;
// console.log(chat);
// }); 

// } 

//   db.collection('conversation').get().then((snapshot) => {
//       console.log(snapshot)
//   })
// const add = () => {
//  console.dir(document.getElementById('chatArea'));
// }
// realTime();
// add();
}
