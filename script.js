document.addEventListener('DOMContentLoaded', function() {
    const scanButton = document.getElementById('scanButton');
    const message = document.getElementById('message');
    const accessGrantedAudio = document.getElementById('accessGrantedAudio');
    const scanAudio = document.getElementById('scanAudio');
    const palmOutline = document.querySelector('.palm-outline');

    palmOutline.addEventListener('click', function() {
        // Simulate scanning effect
        let scanLine = document.createElement('div');
        scanLine.classList.add('scan-line');
        palmOutline.appendChild(scanLine);

        // Play scanning audio
        scanAudio.currentTime = 0;
        scanAudio.play();

        // Simulate scanning (e.g., blinking)
        palmOutline.classList.add('scanning');

        setTimeout(() => {
            palmOutline.classList.remove('scanning');
            scanLine.remove();

            // Stop scanning audio
            scanAudio.pause();
            scanAudio.currentTime = 0;

            // Play access granted audio
            accessGrantedAudio.play();

            // Show message
            message.classList.remove('hidden');

            // Reset after a few seconds
            setTimeout(() => {
                message.classList.add('hidden');
            }, 3000); // 3 seconds
        }, 2000); // 2 seconds for "scanning"
    });
});