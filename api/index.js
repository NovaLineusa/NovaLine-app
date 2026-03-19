const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>NovaLine</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          color: white;
          background:
            radial-gradient(circle at top left, rgba(124, 58, 237, 0.35), transparent 28%),
            radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.25), transparent 30%),
            linear-gradient(135deg, #050505, #12081f 45%, #090909);
          overflow-x: hidden;
        }

        .bg-orb {
          position: fixed;
          border-radius: 999px;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.45;
          pointer-events: none;
        }

        .orb1 {
          width: 260px;
          height: 260px;
          top: 40px;
          left: -50px;
          background: #7c3aed;
        }

        .orb2 {
          width: 300px;
          height: 300px;
          bottom: 60px;
          right: -80px;
          background: #a855f7;
        }

        .orb3 {
          width: 180px;
          height: 180px;
          top: 45%;
          right: 18%;
          background: rgba(255,255,255,0.08);
        }

        .page {
          position: relative;
          z-index: 1;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 40px;
        }

        .hero-card {
          width: 100%;
          max-width: 1000px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 28px;
          padding: 50px 30px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .badge {
          display: inline-block;
          padding: 8px 14px;
          background: rgba(124, 58, 237, 0.18);
          border: 1px solid rgba(167, 139, 250, 0.35);
          border-radius: 999px;
          color: #d8b4fe;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }

        h1 {
          margin: 0 0 16px;
          font-size: 54px;
          line-height: 1.05;
        }

        .subtext {
          max-width: 720px;
          margin: 0 auto;
          color: #ddd6fe;
          font-size: 20px;
          line-height: 1.6;
        }

        .hero-buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          padding: 14px 22px;
          border-radius: 14px;
          font-weight: bold;
          display: inline-block;
        }

        .btn-primary {
          background: #7c3aed;
          color: white;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.35);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .hero-stats {
          margin-top: 35px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .stat {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 20px;
        }

        .stat h3 {
          margin: 0;
          font-size: 28px;
        }

        .stat p {
          margin: 8px 0 0;
          color: #d1c4ff;
          font-size: 14px;
        }

        .section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 30px 20px 80px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 14px;
          font-size: 38px;
        }

        .section-text {
          text-align: center;
          color: #d1c4ff;
          max-width: 700px;
          margin: 0 auto 35px;
          line-height: 1.6;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 14px 40px rgba(0,0,0,0.3);
        }

        .card h3 {
          margin-top: 0;
          font-size: 24px;
        }

        .card p {
          color: #d1c4ff;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .why-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-top: 25px;
        }

        .why-item {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 20px;
          color: #f3e8ff;
        }

        .form-wrap {
          max-width: 760px;
          margin: 0 auto;
        }

        .form-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 14px 40px rgba(0,0,0,0.35);
        }

        .form-card h2 {
          margin-top: 0;
          font-size: 34px;
        }

        label {
          display: block;
          margin-top: 16px;
          margin-bottom: 8px;
          font-weight: bold;
          color: #f5eaff;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 14px;
          font-size: 16px;
          outline: none;
          background: rgba(255,255,255,0.96);
          color: #111;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .submit-btn {
          margin-top: 22px;
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 14px;
          background: #7c3aed;
          color: white;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.35);
        }

        .note {
          margin-top: 14px;
          color: #d1c4ff;
          font-size: 14px;
          line-height: 1.5;
        }

        .chat-toggle {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 10;
          background: #7c3aed;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 15px 18px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(0,0,0,0.4);
        }

        .chat-box {
          position: fixed;
          right: 20px;
          bottom: 85px;
          width: 330px;
          max-width: calc(100vw - 30px);
          background: #151525;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.45);
          overflow: hidden;
          display: none;
          z-index: 10;
        }

        .chat-header {
          background: #7c3aed;
          padding: 14px 16px;
          font-weight: bold;
        }

        .chat-body {
          padding: 14px;
          max-height: 340px;
          overflow-y: auto;
        }

        .bot-msg, .user-msg {
          padding: 10px 12px;
          border-radius: 14px;
          margin-bottom: 10px;
          line-height: 1.4;
          font-size: 14px;
        }

        .bot-msg {
          background: #241b41;
          color: #f3e8ff;
        }

        .user-msg {
          background: #35354d;
          color: white;
          text-align: right;
        }

        .chat-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 0 14px 14px;
        }

        .chat-option {
          background: transparent;
          color: white;
          border: 1px solid #7c3aed;
          border-radius: 12px;
          padding: 10px;
          cursor: pointer;
          text-align: left;
        }

        .footer {
          text-align: center;
          padding: 30px 20px 50px;
          color: #bba7ef;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          h1 {
            font-size: 42px;
          }

          .grid-3,
          .hero-stats,
          .why-list {
            grid-template-columns: 1fr;
          }

          .hero-card {
            padding: 40px 22px;
          }

          .section-title {
            font-size: 30px;
          }
        }
      </style>
    </head>

    <body>
      <div class="bg-orb orb1"></div>
      <div class="bg-orb orb2"></div>
      <div class="bg-orb orb3"></div>

      <div class="page">
        <section class="hero">
          <div class="hero-card">
            <div class="badge">NovaLine • Smart Phone Services</div>
            <h1>Your Number. Your Control. No Contracts.</h1>
            <p class="subtext">
              Get a personal or business phone line in minutes.
              Port-ready numbers, flexible service options, and a smooth digital experience built for modern users.
            </p>

            <div class="hero-buttons">
              <a class="btn-primary" href="#get-started">Get Your Number</a>
              <a class="btn-secondary" href="#services">View Services</a>
            </div>

            <div class="hero-stats">
              <div class="stat">
                <h3>Fast</h3>
                <p>Quick requests and easy onboarding</p>
              </div>
              <div class="stat">
                <h3>Flexible</h3>
                <p>Personal, business, and port-ready options</p>
              </div>
              <div class="stat">
                <h3>Modern</h3>
                <p>Built for digital-first communication</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="services">
          <h2 class="section-title">Our Services</h2>
          <p class="section-text">
            NovaLine gives you options whether you need a second number for privacy,
            a business line for professionalism, or a port-ready number for transfer use.
          </p>

          <div class="grid-3">
            <div class="card">
              <h3>Personal Lines</h3>
              <p>Secure a private number for daily use, side hustles, selling online, or keeping your real number protected.</p>
            </div>

            <div class="card">
              <h3>Business Lines</h3>
              <p>Build a stronger business presence with a separate number designed for clients, branding, and professional communication.</p>
            </div>

            <div class="card">
              <h3>Port-Ready Numbers</h3>
              <p>Get a number that’s ready for transfer when you need quick account access and flexible movement options.</p>
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Why NovaLine</h2>
          <p class="section-text">
            Clean setup, flexible options, and a modern system designed to make communication easier without all the extra mess.
          </p>

          <div class="why-list">
            <div class="why-item">✔ Fast activation</div>
            <div class="why-item">✔ No contracts</div>
            <div class="why-item">✔ Affordable options</div>
            <div class="why-item">✔ More control over your number</div>
          </div>
        </section>

        <section class="section" id="get-started">
          <div class="form-wrap">
            <div class="form-card">
              <h2>Get Started</h2>
              <p class="section-text" style="text-align:left; margin:0 0 10px; max-width:none;">
                Tell us what kind of line you need and we’ll guide you to the best fit.
              </p>

              <form action="https://formspree.io/f/xkoqkdnb" method="POST">
              <input type="hidden" name="_subject" value="New NovaLine Request">
              <input type="hidden" name="_captcha" value="false">
                <<label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label for="email">Email</label>
              <input type="email" name="email" placeholder="Your email" required />
                <label for="service">Service Type</label>
                <select id="service" name="service">
                  <option>Personal Number</option>
                  <option>Business Line</option>
                  <option>Port-Ready Number</option>
                </select>

                <label for="areaCode">Preferred Area Code</label>
                <input type="text" id="areaCode" name="areaCode" placeholder="Example: 601" />

                <label for="notes">Notes</label>
                <textarea id="notes" name="notes" placeholder="Tell us what you need"></textarea>

                <button type="submit" class="submit-btn">Submit Request</button>
              </form>

              <div class="note">
                Use the NovaLine assistant in the bottom corner for quick guidance before submitting.
              </div>
            </div>
          </div>
        </section>

        <div class="footer">
          NovaLine © 2026 • Private lines, business lines, and smarter communication
        </div>
      </div>

   <script src="//code.tidio.co/w8d5hptk5jvfc5y6kjrsrfwizvh6dn5u.js" async></script>
    </body>
  </html>
  `);
});

app.post('/submit', (req, res) => {
  const { name, service, areaCode, notes } = req.body;

  res.send(`
  <html>
    <head>
      <title>NovaLine Request Received</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(124, 58, 237, 0.35), transparent 28%),
            linear-gradient(135deg, #050505, #12081f 45%, #090909);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }

        .success-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          padding: 34px;
          max-width: 650px;
          width: 100%;
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
          text-align: center;
        }

        h1 {
          margin-top: 0;
          font-size: 40px;
        }

        p {
          color: #ddd6fe;
          font-size: 18px;
          line-height: 1.6;
          margin: 12px 0;
        }

        .btn {
          display: inline-block;
          margin-top: 18px;
          padding: 13px 20px;
          border-radius: 14px;
          text-decoration: none;
          background: #7c3aed;
          color: white;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="success-card">
        <h1>Request Received ✅</h1>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not provided'}</p>
        <p><strong>Preferred Area Code:</strong> ${areaCode || 'Not provided'}</p>
        <p><strong>Notes:</strong> ${notes || 'None'}</p>
        <a class="btn" href="/">Back to Home</a>
      </div>
    </body>
  </html>
  `);
});

module.exports = app;
