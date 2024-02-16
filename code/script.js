// DOM selectors (variables that point to selected DOM elements) goes here 👇

const chat = document.getElementById("chat");
const helpButton = document.getElementById("helpButton");
const nameForm = document.getElementById("name-form")

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
   // The if statement checks if the sender is the user and if that's the case it inserts
   // an HTML section inside the chat with the posted message from the user
   if (sender === "user") {
      console.log(`The sender is:`, sender);
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
      // The else if statement checks if the sender is the bot and if that's the case it inserts
      // an HTML section inside the chat with the posted message from the bot
   } else if (sender === "bot") {
      console.log(`The sender is: ${sender}`);
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
   }

   // This little thing makes the chat scroll to the last message when there are too many to
   // be shown in the chat box
   chat.scrollTop = chat.scrollHeight;
};

const userMessage = (message) => {
  showMessage(message, "user");
};

const botMessage = (message) => {
  showMessage(message, "bot");
};

// A function to start the conversation

const greetUser = () => {
   // Here we call the function showMessage, that we declared earlier with the argument:
   // "Hello there, what's your name?" for message, and the argument "bot" for sender
  botMessage("Welcome to PlantBot. My name is Palm! What's your name?");
  helpButton.remove()
  getUserName()
};

const getUserName = () => {
  nameForm.innerHTML = `<input id="name-input" type="text"/>
  <button class="send-btn" id="sendButton" type="button">Send
  </button>`
  const sendButton = document.getElementById("sendButton")
  const nameInput = document.getElementById("name-input")
  sendButton.addEventListener("click", () => returnUserName(nameInput))
}

const returnUserName = (userName) => {
  console.log(userName.value)
userMessage(`My name is ${userName.value}`)
nameForm.innerHTML = ""
setTimeout(() => {botMessage(`Nice to meet you, ${userName.value}, what plant size would you like?`);}, 1000)
setTimeout(() => getPlantSize(userName), 2000)
}

const getPlantSize = () => {
nameForm.innerHTML = `<button name="plant-button" class="small-button" id="smallButton" value="small" type="button">small</button>
  <button name="plant-button" class="medium-button" id="mediumButton" value="medium" type="button">medium</button>
  <button name="plant-button" class="large-button" id="largeButton" value="large" type="button">large</button>`

const smallButton = document.getElementById("smallButton")
const mediumButton = document.getElementById("mediumButton")
const largeButton = document.getElementById("largeButton")

smallButton.addEventListener("click", chosedPlantSize)
mediumButton.addEventListener("click", chosedPlantSize)
largeButton.addEventListener("click", chosedPlantSize)
}
const chosedPlantSize = (event) => {
  const selectedSize = event.target.value
  userMessage(`I choose ${selectedSize}`)
  nameForm.innerHTML = ""
  setTimeout(handlePlantSize, 1000, selectedSize)
}



  const handlePlantSize = (selectedSize) => {
  if (selectedSize === "small") {
    botMessage(`You want a ${selectedSize}`)
  nameForm.innerHTML = `<select name="small-plants">
  <option disabled selected>Choose your plant</option>
  <option>Spiderplant</option>
  <option>Mini succulent</option>
  <option>Air plant</option>`
  } else if (selectedSize === "medium") {
    botMessage(`You want a ${selectedSize}`)
    nameForm.innerHTML = `<select name="medium-plants">
  <option disabled selected>Choose your plant</option>
  <option>Money Tree</option>
  <option>Schefflera</option>
  <option>Peach Lily</option>`
  } else {
    botMessage(`You want a ${selectedSize}`)
    nameForm.innerHTML = `<select name="large-plants">
  <option disabled selected>Choose your plant</option>
  <option>Monstera</option>
  <option>Bird of Paradise</option>
  <option>Olive Tree</option>`
  }
}
// Eventlisteners goes here 👇
helpButton.addEventListener("click", greetUser);






// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000);
