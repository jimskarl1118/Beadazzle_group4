function toggleChatbot() {
    var chatbot = document.getElementById('chatbot');
    chatbot.style.display = (chatbot.style.display === 'flex') ? 'none' : 'flex';
}

function sendMessage() {
    var userMessage = document.getElementById('user-input').value;
    if (userMessage.trim()) {
        var messageContainer = document.getElementById('chatbot-messages');
        messageContainer.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        document.getElementById('user-input').value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight;

        setTimeout(() => {
            messageContainer.innerHTML += `
                <p><strong>Zelly🌸:</strong> Thank you so much for visiting Beadazzle's website...</p>
                <div class="chat-options">
                    <button onclick="handleProductInquiry('Ask Question')">Ask Question</button>
                    <button onclick="window.location.href='product.html'">Browse Our Products</button>
                </div>
            `;
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }, 1000);
    }
}

function handleProductInquiry(answer) {
    var messageContainer = document.getElementById('chatbot-messages');
    if (answer === 'Ask Question') {
        setTimeout(() => {
            messageContainer.innerHTML += `<p><strong>Zelly🌸:</strong> Do you have an inquiry about our products?</p><div class="loading"></div>`;
            messageContainer.scrollTop = messageContainer.scrollHeight;
            
            setTimeout(() => {
                document.querySelector('.loading').remove();
                messageContainer.innerHTML += `
                    <div class="chat-options">
                        <button onclick="handleProductInquiry('yes')">Yes</button>
                        <button onclick="handleProductInquiry('no')">No</button>
                    </div>
                `;
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }, 2000);
        }, 1000);
    } else if (answer === 'yes') {
        setTimeout(() => {
            messageContainer.innerHTML += `<p><strong>Zelly🌸:</strong> Here are some questions I can help with:</p><div class="loading"></div>`;
            messageContainer.scrollTop = messageContainer.scrollHeight;

            setTimeout(() => {
                document.querySelector('.loading').remove();
                messageContainer.innerHTML += `
                    <div class="chat-options">
                        <button onclick="askProductQuestion('What products do you offer?')">What products do you offer?</button>
                        <button onclick="askProductQuestion('Can you tell me more about this product?')">Can you tell me more about this product?</button>
                        <button onclick="askProductQuestion('What are the features of this product?')">What are the features of this product?</button>
                    </div>
                `;
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }, 2000);
        }, 1000);
    } else if (answer === 'no') {
        setTimeout(() => {
            messageContainer.innerHTML += `<p><strong>Zelly🌸:</strong> No worries! Feel free to ask anything else.</p><div class="loading"></div>`;
            messageContainer.scrollTop = messageContainer.scrollHeight;

            setTimeout(() => {
                document.querySelector('.loading').remove();
            }, 2000);
        }, 1000);
    }
}

function askProductQuestion(question) {
    var messageContainer = document.getElementById('chatbot-messages');
    messageContainer.innerHTML += `<p><strong>You:</strong> ${question}</p>`;
    messageContainer.innerHTML += `<p><strong>Zelly🌸:</strong> Let me provide more details about that...</p>`;
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});





