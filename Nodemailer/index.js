// // Please don't change the pre-written code
// // Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here
  const qinterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  qinterface.question("please enter your mail: ", (e_address) => {
    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: e_address,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };

    //3 Send the email
    try {
      transporter.sendMail(mailOptions);
      console.log(`Success: Email sent to ${e_address}`);
    } catch (err) {
      console.log("Email send failed with error: " + err);
    }
  });
};

export default Solution;
