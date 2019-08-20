
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

  const db = firebase.firestore()

  console.log(db);
 
  
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

let user = prompt('Enter your name please:');
// });
let startLength = 0;
db.collection("conversation").doc("gsOU1OgUb8bsDqf2QTDa").get().then(function(doc) { 
   doc.data().message.forEach((item,index) => {
    startLength++;
    document.getElementById('chatArea').innerHTML += `${doc.data().message[index].user}: ${doc.data().message[index].content} <br>`
   });
});
db.collection("conversation").doc("gsOU1OgUb8bsDqf2QTDa")
.onSnapshot(function(doc) {
  let last = 0; 
   doc.data().message.forEach((item,index) => {
    last++;
   })
   if(last>startLength){
   document.getElementById('chatArea').innerHTML += `${doc.data().message[last-1].user}: ${doc.data().message[last-1].content} <br>`;
   }
});


document.getElementById('icon').addEventListener('click',function(){
  let washingtonRef = db.collection("conversation").doc("gsOU1OgUb8bsDqf2QTDa");
let content = document.getElementById('input').value;
  // Atomically add a new region to the "regions" array field.
  washingtonRef.update({
      message: firebase.firestore.FieldValue.arrayUnion({user:`${user}`,content:`${content}`})
});
});



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