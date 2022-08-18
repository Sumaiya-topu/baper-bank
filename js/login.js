document.getElementById('submit-button').addEventListener('click', function () {
    let userEmail = document.getElementById('user-email').value;
    let userPassword = document.getElementById('user-password').value;
    console.log(userEmail, userPassword)
    if (userEmail === 'habijabi@anda.com' && userPassword === '00000') {
        window.location.href = 'main.html';
    }
    else {
        console.log("Invalid User...");
    }


})