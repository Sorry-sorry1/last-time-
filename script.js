document.addEventListener('DOMContentLoaded', () => {
    const callButton = document.getElementById('callButton');

    callButton.addEventListener('click', () => {
        const phoneNumber = '9940731536';
        // Initiate phone call using tel: link
        window.location.href = `tel:${phoneNumber}`;
    });

    // Function to create falling emojis
    const createEmoji = () => {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.innerText = '🥺';
        emoji.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        emoji.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
        document.querySelector('.emoji-container').appendChild(emoji);

        // Remove emoji after it falls
        setTimeout(() => {
            emoji.remove();
        }, 5000); // Adjust time to match fall duration
    };

    // Create emojis at intervals
    setInterval(createEmoji, 300); // Adjust frequency of emoji creation
});
