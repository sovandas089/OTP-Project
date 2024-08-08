//////////////////////////////////////=> Sovan Das <=///////////////////////////////
function sendOTP() {
  const email = document.getElementById("email");
  const otpverify = document.getElementsByClassName("otpverify")[0];

  let otp_val = Math.floor(Math.random() * 10000);

  let emailbody = `<h2>Your otp is </h2>${otp_val}`;

  Email.send({
    SecureToken: "a83e189d-13fc-4120-9620-2be7d3dfc1a1",
    To: email.value,
    From: "sovandas089@gmail.com",
    Subject: "OPJU Hackathon.!",
    Body: emailbody,
  }).then((message) => {
    if (message === "OK") {
      alert("OTP sent to your email " + email.value); //bold email.value
      otpverify.style.display = "flex";
      const otp_inp = document.getElementById("otp_inp");
      const otp_btn = document.getElementById("otp_btn");

      otp_btn.addEventListener("click", () => {
        if (otp_inp.value == otp_val) {
          alert("Email address Varified..!");
          //window.location = "C:\Users\Owner\Desktop\C for Coding\otp_project\landing-page.html";
          window.location = "./all-form-templates.html";
        } else {
          alert("Invalid OTP");
        }
      });
    } else {
      alert("Something went wrong..!");
    }
  });
}
