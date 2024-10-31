const path = require("path");
const pug = require("pug");
const Mailjet = require("node-mailjet");

class Email {
  from;
  recipients;
  constructor(recipients) {
    this.from = process.env.MJ_SENDER_MAIL;
    this.recipients = recipients;
  }

  async sendHtml(html, subject) {
    const mailjet = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

    try {
      const request = await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: this.from,
              Name: "Dankan.T Contact",
            },
            To: [
              {
                Email: this.recipients,
                Name: "User x",
              },
            ],
            Subject: subject,
            TextPart: "",
            HTMLPart: html,
          },
        ],
      });
      console.log("mail sent");
      console.log("response status", request.response.status);
    } catch (err) {
      console.log("Error sending mail:", err.statusCode);
    }
  }

  async sendContactUs(name, email, message) {
    const html = pug.renderFile(
      path.join(__dirname, "../views/email/contact.pug"),
      {
        subject: "Contact Message",
        name: name,
        message: message,
        senderEmail: email,
      }
    );
    await this.sendHtml(html, "Contact  Message");
  }
}

module.exports = Email;
