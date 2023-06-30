document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  const btn = document.getElementById("btn");
  inputField.addEventListener("keypress", (e) => {


    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });

  btn.addEventListener("click", () => {


    {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) {
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "bitch watch the spell first!"
  }
  else if (text.match(/fuck you/gi)) {
    product = "fuck you too"
  }
  else if (text.match(/ljk/gi)) {
    product = "maddagoodu"
  }
  else if (text.match(/erripooka/gi)) {
    product = "you are erri pooka"
  }
  else if (text.match(/lanja/gi)) {
    product = "you are big lanja"
  }
  else if (text.match(/bastard/gi)) {
    product = "you are big bastard"
  }
  else if (text.match(/loafer/gi)) {
    product = "you are big loafer"
  }
  else if (text.match(/puka/gi)) {
    product = "you are only puka"
  }
  else if (text.match(/erri pukaka/gi)) {
    product = "you are only erri pooka"
  }
  else if (text.match(/erripooka/gi)) {
    product = "you are erri pooka"
  }
  else if (text.match(/chutiya/gi)) {
    product = "you are bosidikey"
  }
  else if (text.match(/ass/gi)) {
    product = "you are big ass"
  }
  else if (text.match(/lawde/gi)) {
    product = "teri maaki chu"
  }
  else if (text.match(/lawde/gi)) {
    product = "teri maaki chu"
  }
  else if (text.match(/will you be my gf/gi)) {
    product = "buffalo i am a boy"
  }
  else if (text.match(/what is your name/gi)) {
    product = "my name is sanju"
  }
  else if (text.match(/who are you/gi)) {
    product = "my name is sanju"
  }
  else if (text.match(/who founded you/gi)) {
    product = "sanju"
  }
  else if (text.match(/dengutha/gi)) {
    product = "come i will fuck you"
  }
  else if (text.match(/dengey/gi)) {
    product = "you only fuck off"
  }
  else if (text.match(/i love you/gi)) {
    product = "i will give my heart for you if your are girl"
  }
  else if (text.match(/will you be my bf/gi)) {

    product = "yeah definately i will be"

  }
  else if (text.match(/are you mad/gi)) {
    product = "yeah absoulutely beauty for you if you are girl "
  }
  else if (text.match(/bc/gi)) {
    product = "you are only bc "
  }
  else if (text.match(/mc/gi)) {
    product = "you are mc"

  }
  else if (text.match(/tell me about yourself/gi)) {
    product = "contact . https://sanjusazid.netlify.app"

  }
  else if (text.match(/insta id/gi)) {
    product = "sanju__crazy"

  }
  else if (text.match(/she cheated on me/gi)) {
    product = "bro dont worry follow the goals, girls will automatically follows you"
  }
  else if (text.match(/good morning/gi)) {
    product = "good morning sunshine , Have a good day"
  }
  else if (text.match(/good afternoon/gi)) {
    product = "good afternoon beautiful"
  }
  else if (text.match(/good evening/gi)) {
    product = "good evening!!"
  }
  else if (text.match(/good night/gi)) {
    product = "good night, have a good nap"
  }
  else if (text.match(/where are you from/gi)) {
    product = "i am born from html,css,javascript"
  }
  else if (text.match(/what are you doing/gi)) {
    product = "i am thinking"
  }
  else if (text.match(/Praise me/gi)) {
    product = "you are absolutely marvelous"
  }
  else if (text.match(/i miss my ex/gi)) {
    product = "dont belive snakes if you accept them now they will again leave you"
  }
  else if (text.match(/will you marry me/gi)) {
    product = "Nope i am only interested in flirtationship"

















  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}