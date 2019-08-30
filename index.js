
controll = {}


let containter = document.getElementById('container')
controll.renderUserLogin = () => {
containter.innerHTML = view.signInUser;
data.signInUser();
}
controll.renderComponentHome = () => {
    containter.innerHTML = view.signInRoom;
    controll.renderChat();
}
controll.signUpRoom = () => {
  containter.innerHTML = view.signUpRoom;
  data.signUpRoom();
}
controll.signUpUser = () => {
  containter.innerHTML = view.signUpUser;
  data.signUpUser();
}
controll.renderChat = () => {
    // let signUp = document.getElementById('sign-up')
    // signUp.addEventListener('click', () => {
    //     containter.innerHTML = ""
    //     containter.innerHTML = view.chat
    //     data.getDataFormUser();
    // })
   data.signInRoom();



    // document.getElementById('button').addEventListener('click',function(){
    //   containter.innerHTML = view.chat;
    // data.getDataFormUser();
    // });
  }
  controll.renderUserLogin(); 

  

