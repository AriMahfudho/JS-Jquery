$(document).ready(function() {

  var chatBox = $('#chat-box');
  var userInput = $('#user-input');
  var sendBtn = $('#send-btn');

  sendBtn.click(function() {
     sendMessage();
  });

  $("#user-input").keypress(function(event) {
    if (event.which === 13) {
      sendMessage();
    }
  });

  function appendMessage(sender, message) {
      chatBox.append(`<div><strong>${sender}:</strong> ${message}</div>`);
      chatBox.scrollTop(chatBox[0].scrollHeight);
  }

  function sendMessage()
  {
    var userMessage = userInput.val();
    if (userMessage.trim() === '') return;

    appendMessage('You', userMessage);

    fetchResponse(userMessage)
        .then(response => response.json()) 
        .then(data => {
            appendMessage('Ai Asistant', data.choices[0].message.content);
        })
        .catch(error => {
            console.error('Error:', error);
            appendMessage('Error', 'Sorry, something went wrong.');
        });
    userInput.val('');
  }

  function fetchResponse(message) {
      return fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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'
          },
          body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                { role: "system", content: "Kamu adalah asisten virtual yang di ciptakan oleh Rizqy Resha Prameswara seorang peserta Studi Independen Game Lab, kamu dapat menjawab semua pertanyaan yang di tanyakan"},
                { role: 'user', content: message }],
              max_tokens: 50
          })
      });
  }
});