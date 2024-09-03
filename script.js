const chatBox = 
    document.getElementById('chat-box');
const userInput = 
    document.getElementById('user-input');
const sendButton = 
    document.getElementById('send-button');
const sidebarToggle = 
    document.getElementById('sidebar-toggle');
const modeToggle = 
    document.getElementById('mode-toggle-checkbox');
const sidebar = 
    document.querySelector('.sidebar');

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const newConversationBtn = 
            document.getElementById('new-conversation-btn');
    const conversationContent = 
            document.querySelector('.conversation-content');
    const sidebarToggle = 
            document.getElementById('sidebar-toggle');
    const chatContainer = 
            document.querySelector('.chat-container');

    sidebarToggle.addEventListener('click', function () {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');

        if (sidebar.classList.contains('collapsed')) {
            chatContainer.style.width = '96%';
            chatContainer.style.marginLeft = '3%';
        } else {
            chatContainer.style.width = 'calc(100% - 300px)';
            chatContainer.style.marginLeft = '300px';
        }
    });
    newConversationBtn.addEventListener('click', function () {
        conversationContent.textContent = "New Conversation Started!";
    });

    modeToggleCheckbox.addEventListener('change', function () {
        chatContainer.classList.toggle('light-mode');
        chatContainer.classList.toggle('dark-mode');
    });
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        appendMessage('user', message);
        getResponse(message);
        userInput.value = '';
    }
}

function appendMessage(sender, message) {
    const p = document.createElement('p');
    p.textContent = `${sender}: ${message}`;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(message) {
    let response;
    const greetings = 
        ["Hello!, I'm Jumia Customer Care Chatbot", "How can I help you"];
    const affirmatives = 
        ["Yes", "Certainly", "Of course", "Absolutely"];
    const negatives = 
        ["Please Contact customer care via whatsapp, gmail or phone", ];
    const thanks = 
        ["You're welcome!", "No problem!", "Glad to help!", "Anytime!"];
    const questions = 
        ["What can I help you with?"];

    const commands = {
        "help": "You can ask me questions ",
        "payment issues": "voucher issues",
        "wrong order":"please",
        "time": getCurrentTime(),
        "date": getCurrentDate(),
        "weather": getWeatherInfo(),
        "joke": getJoke(),
        "fact": getFact(),
        "quote": getQuote(),
        
        
        // Add more commands here as needed
    };

    if (message.toLowerCase() in commands) {
        response = commands[message.toLowerCase()];
    } else if (message.toLowerCase().includes("thank")) {
        response = getRandomElement(thanks);
    } else if (message.toLowerCase().includes("yes")) {
        response = getRandomElement(affirmatives);
    } else if (message.toLowerCase().includes("no")) {
        response = getRandomElement(negatives);
    } else {
        response = getRandomElement(greetings);
    }

    setTimeout(() => appendMessage('ChatGPT', response), 1000);
}

function getCurrentTime() {
    const now = new Date();
    return `Current time is ${now.toLocaleTimeString()}`;
}

function getCurrentDate() {
    const now = new Date();
    return `Today's date is ${now.toDateString()}`;
}

function getWeatherInfo() {

    // Simulate getting weather information from an API
    const weatherData = {
        temperature: getRandomNumber(10, 35),
        condition: getRandomElement(["Sunny", "Cloudy", "Rainy", "Windy"]),
    };
    return `Current weather: ${weatherData.temperature}°C,
                             ${weatherData.condition}`;
}

function getJoke() {
    
    // Simulate getting a random joke
    const jokes = ["Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It's a shame they'll never meet.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!"
    ];
    return getRandomElement(jokes);
}

function getFact() {
    
    // Simulate getting a random fact
    const facts = ["Ants stretch when they wake up in the morning.", 
                   "A group of flamingos is called a flamboyance.",
                   "Honey never spoils.",
                   "The shortest war in history lasted only 38 minutes.",
                   "Octopuses have three hearts."
    ];
    return getRandomElement(facts);
}

function gethelp() {
    
    // Simulate getting a random fact
    const help = ["Order Confirmation. Order Tracking. Payment Issue. Delivery Issue", 
                   
    ];
    return getRandomElement(facts);
}

function getQuote() {
    
    // Simulate getting a random quote
    const quotes = 
        ["The only way to do great work is to love what you do. – Steve Jobs",
        "In the middle of difficulty lies opportunity. – Albert Einstein",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
    ];
    return getRandomElement(quotes);
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getResponse('Hello');




var currentStep = 1; // Track the current step of the conversation

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Append user message to chat box
    chatBox.innerHTML += "<div>You: " + userInput + "</div>";

    // Clear user input field
    document.getElementById("user-input").value = "";

    // Scroll chat box to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Handle different steps of the conversation
    switch (currentStep) {
        case 1:
            if (userInput.toLowerCase().includes("HI,HELLO")) {
                // Provide options for types of complaints
                chatBox.innerHTML +=
                currentStep = 2;
            } else {
                // Prompt user to provide a complaint
                chatBox.innerHTML += "<div>Bot: How may we be of help.KINDLY SELECT FROM THE OPTION GIVEN :<br>1. Product Quality<br>2. Delivery Delay<br>3. Billing Issue<br>4. Order Confirmation<br>5. Order Tracking<br>6. Payment Issue<br>7. Delivery Issue<br>8. Order Cancellation</div>";
            }
            break;
        case 2:
            // Handle user selection of complaint type
            var complaintType = parseInt(userInput);
            switch (complaintType) {
                case 1:
                    chatBox.innerHTML += "<div>Bot: We apologize for any issues with the product quality. Please provide details so we can assist you further.</div>";
                    currentStep = 3;
                    break;
                case 2:
                    chatBox.innerHTML += "<div>Bot: We're sorry for any delays with your delivery. Please provide your order number so we can track it.</div>";
                    currentStep = 3;
                    break;
                case 3:
                    chatBox.innerHTML += "<div>Bot: We understand your concern about billing. Please provide more information so we can investigate.</div>";
                    currentStep = 3;
                    break;
                case 4:
                    chatBox.innerHTML += "<div>Bot: We'll be happy to assist you with your order confirmation. Please provide your order number.</div>";
                    currentStep = 3;
                    break;
                case 5:
                    chatBox.innerHTML += "<div>Bot: To track your order, please provide your order number.</div>";
                    currentStep = 3;
                    break;
                case 6:
                    chatBox.innerHTML += "<div>Bot: We're sorry to hear about the payment issue. Please provide more details so we can assist.</div>";
                    currentStep = 3;
                    break;
                case 7:
                    chatBox.innerHTML += "<div>Bot: We apologize for any issues with the delivery. Please provide more details so we can assist.</div>";
                    currentStep = 3;
                    break;
                case 8:
                    chatBox.innerHTML += "<div>Bot: If you wish to cancel your order, please provide your order number and reason for cancellation.</div>";
                    currentStep = 3;
                    break;
                default:
                    chatBox.innerHTML += "<div>Bot: Invalid option. Please select a valid option.</div>";
            }
            break;
        case 3:
            // Handle complaint details provided by the user
            chatBox.innerHTML += "<div>Bot: Thank you for providing the details. Your complaint has been submitted.</div>";
            currentStep = 1; // Reset the conversation
            break;
    }

    // Scroll chat box to bottom after bot response
    chatBox.scrollTop = chatBox.scrollHeight;
}