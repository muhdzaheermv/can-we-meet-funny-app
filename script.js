document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    noButton.addEventListener('mouseover', () => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // Define a small fixed distance for movement
        const moveDistance = 20;
        let newTop = noButton.offsetTop + (Math.random() < 0.5 ? -moveDistance : moveDistance);
        let newLeft = noButton.offsetLeft + (Math.random() < 0.5 ? -moveDistance : moveDistance);

        // Ensure the button stays within the container
        newTop = Math.max(0, Math.min(newTop, containerRect.height - noButtonRect.height));
        newLeft = Math.max(0, Math.min(newLeft, containerRect.width - noButtonRect.width));

        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'index2.html'; // Replace with the actual URL or path to your target page
    });
});
