const y = document.querySelector('.yes');
const h = document.querySelector('.heading');
const b = document.querySelector('.no');

function sendEmail(userName) {
    Email.send({
        SecureToken: "de087071-8373-483d-adfb-160d92781367",
        To: 'tomparker036@gmail.com',
        From: "thevanshgallery@gmail.com",
        Subject: "Her Reply on your Proposal",
        Body: `Yeeyy ! Finally 🤩❤️ <br/><br/><br/> Congrats Vansh! ${userName} said Yessss...`,
    });
}

b.addEventListener('mouseover', function() {
    const i = Math.floor(Math.random() * 900) + 1;
    const j = Math.floor(Math.random() * 500) + 1;
    b.style.left = i + 'px';
    b.style.top = j + 'px';
});

y.addEventListener('click', function() {
    const img = document.querySelector('.img');
    h.innerHTML = 'Yeeyy ! Finally 🤩❤️';
    b.style.visibility = 'hidden';
    y.style.visibility = 'hidden';
    img.src = 'yes.gif';

    // Assuming you have a variable called userName which contains the user's name
    // You would retrieve this from your authentication system
    const userName = "She"; // Replace "John Doe" with the actual user's name
    sendEmail(userName);
});
