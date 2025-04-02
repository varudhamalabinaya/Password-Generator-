document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    
    // Function to generate random password
    const generatePassword = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    };

    // Display generated password
    const password = generatePassword(length);
    document.getElementById('password').textContent = `Generated Password: ${password}`;
});
