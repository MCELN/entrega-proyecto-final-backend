const socket = io();

const chatBox = document.getElementById('chatBox');

const chat = async (chatBox) => {
    const swal = await Swal.fire({
        title: 'Identifícate',
        input: 'text',
        text: 'Ingresa el usuario para identificarte',
        inputValidator: (value) => {
            return !value && 'Debes identificarte';
        },
        allowOutsideClick: false,
    });

    const user = swal.value;

    socket.emit('auth', user);

    chatBox.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            if (chatBox.value.trim().length > 0) {
                socket.emit('message', { user, message: chatBox.value });
                chatBox.value = '';
            };
        };
    });

    socket.on('messageLogs', data => {
        const log = document.getElementById('messageChat');
        let messages = '';
        data.forEach(message => {
            messages += (`${message.user} dice: ${message.message}<br>`);
        });

        log.innerHTML = messages;
    });

    socket.on('newUser', data => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${data} se ha unido al chat`,
            showConfirmButton: false,
            timer: 2000,
        });
    });
};

chat(chatBox);