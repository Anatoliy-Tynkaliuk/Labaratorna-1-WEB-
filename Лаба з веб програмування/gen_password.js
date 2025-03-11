
function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}

/*
Згенеруйте рандомний пароль. 
Напишiть функцiю JavaScript, яка генерує рандомний 
пароль заданої довжини, використовуючи комбiнацiю лiтер, цифр i спецiальних символiв
*/

//START CODE

function generatePassword() {
    const length_password = document.getElementById('length').value;
    
    if (isNaN(length_password) || length_password < 1) {
        document.getElementById('passwordResult').innerText = 'Будь ласка, введіть коректну довжину пароля.';
        return;
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length_password; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('passwordResult').innerText = password;
}

function copyToClipboard() {
    const password = document.getElementById('passwordResult').innerText;
    
    if (!password) {
        alert('Немає пароля для копіювання!');
        return;
    }

    try{
        navigator.clipboard.writeText(password);
        alert('Пароль скопійовано до буфера обміну!')
    }catch(err){
        alert('Не вдалося скопіювати пароль: ' + err);
    }
}

//END CODE