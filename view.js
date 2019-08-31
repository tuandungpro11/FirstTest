view = {}
view.signInRoom = `
<link rel="stylesheet" href="Session08.css">
<div class="login-form">   
 <div class="user-login">
     <h1>Room Login</h1>
 </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-tie fa-lg icon"></i>
        <input id="room-name" class="input" type="text" placeholder="Room Name">

        </div>
    </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-secret fa-lg icon"></i>  
        <input id="password" class="input" type="password" placeholder="Password">
        
        </div>
    </div> 
    <div class="login">
        <button id="button">Login</button>
    </div>
    <div id="create-room" class="link">
        <b>Create an Room chat now?</b>
    </div>
</div>
`
view.signInUser = `
<link rel="stylesheet" href="Session08.css">
<div class="login-form">   
 <div class="user-login">
     <h1>User Login</h1>
 </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-tie fa-lg icon"></i>
        <input id="room-name" class="input" type="text" placeholder="User Name">

        </div>
    </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-secret fa-lg icon"></i>  
        <input id="password" class="input" type="password" placeholder="Password">
        
        </div>
    </div> 
    <div class="login">
        <button id="button">Login</button>
    </div>
    <div id="create-user" class="link">
        <b>Create an userID now?</b>
    </div>
</div>
`
view.signUpUser = `
<link rel="stylesheet" href="Session08.css">
<div class="login-form">   
 <div class="user-login">
     <h1>User Sign Up</h1>
 </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-tie fa-lg icon"></i>
        <input id="room-name" class="input" type="text" placeholder="User Name">

        </div>
    </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-secret fa-lg icon"></i>  
        <input id="password" class="input" type="password" placeholder="Password">
        
        </div>
    </div> 
    <div class="login">
        <button id="button">Sign Up</button>
    </div>
    
</div>
`
view.signUpRoom = ` 
<link rel="stylesheet" href="Session08.css">
<div class="login-form">   
 <div class="user-login">
     <h1>Sign Up Room</h1>
 </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-tie fa-lg icon"></i>
        <input id="room-name" class="input" type="text" placeholder="Room Name">

        </div>
    </div>
    <div class="div-input">
        <div class="block">
            <i class="fas fa-user-secret fa-lg icon"></i>  
        <input id="password" class="input" type="password" placeholder="Password">
        
        </div>
    </div> 
    <div class="login">
        <button id="button">Sign Up</button>
    </div>
</div>
`
view.chat = `
<link rel="stylesheet" href="Chatbox.css"> 
<div class="boxchat">
            <div id="intro" class="intro"></div>
        <div class="cover-chat">
           
            <div id="chatArea" class="chat-area">
          <b>

          </div>
          </div>
          <div class="cover-text">

              <form id="text-submit" class="text-area">
                  <input id="input" class="input" type="text" placeholder="Type text here...">          
                  <button class="btn-lg scrollToBottom button" id="icon">Push</button>
              </form>
          </div>

      </div>

`


