const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>NovaLine</title>
      <style>
        body {
          margin: 0;
          font-family: Arial;
          background: #0b0b12;
          color: white;
        }

        .container {
          text-align: center;
          padding: 60px 20px;
        }

        .btn {
          margin-top: 20px;
          padding: 12px 20px;
          background: purple;
          color: white;
          border-radius: 10px;
          text-decoration: none;
        }

        .chat-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: purple;
          padding: 12px;
          border-radius: 50px;
          border: none;
          color: white;
          cursor: pointer;
        }

        .chat-box {
          display: none;
          position: fixed;
          bottom: 70px;
          right: 20px;
          width: 250px;
          background: #222;
          border-radius: 10px;
          padding: 10px;
        }

        .msg {
          background: #333;
          margin: 5px 0;
          padding: 8px;
          border-radius: 8px;
        }

        .option {
          margin-top: 5px;
          padding: 6px;
          background: purple;
          border: none;
          color: white;
          width: 100%;
          border-radius: 6px;
          cursor: pointer;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>NovaLine 📱</h1>
        <p>Private numbers & business lines</p>
        <a class="btn" href="#">Get Started</a>
      </div>

      <button class="chat-btn" onclick="toggleChat()">Chat</button>

      <div class="chat-box" id="chatBox">
        <div class="msg">Hi 👋 what do you need?</div>

        <button class="option" onclick="reply('Personal')">Personal</button>
        <button class="option" onclick="reply('Business')">Business</button>
        <button class="option" onclick="reply('Port')">Port</button>

        <div id="chatArea"></div>
      </div>

      <script>
        function toggleChat() {
          let box = document.getElementById("chatBox");
          box.style.display = box.style.display === "block" ? "none" : "block";
        }

    function reply(type) {
  let area = document.getElementById("chatArea");

  let msg = document.createElement("div");
  msg.className = "msg";

  if (type === "Personal") {
    msg.innerText = "Personal numbers are great for privacy. I’m taking you to the form now.";
  } else if (type === "Business") {
    msg.innerText = "Business lines help branding and keep work separate. I’m taking you to the form now.";
  } else {
    msg.innerText = "Port-ready numbers are ready to transfer. I’m taking you to the form now.";
  }

  area.appendChild(msg);

  setTimeout(() => {
    const formSection = document.getElementById("get-started");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 800);
}
      </script>
    </body>
  </html>
  `);
});
app.post('/submit', (req, res) => {
  res.send('Request received ✅');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});