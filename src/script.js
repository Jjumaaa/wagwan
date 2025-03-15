// script.js

const ramenItems = document.querySelectorAll('.ramen-item');
const selectedRamenImage = document.getElementById('selected-ramen-image');
const selectedRamenName = document.getElementById('selected-ramen-name');
const ratingInput = document.getElementById('rating');
const commentInput = document.getElementById('comment');
const submitButton = document.getElementById('submit-rating');

ramenItems.forEach(item => {
    item.addEventListener('click', () => {
        const image = item.getAttribute('data-image');
        const name = item.getAttribute('data-name');
        selectedRamenImage.src = image;
        selectedRamenName.textContent = name;
    });
});

submitButton.addEventListener('click', () => {
    const rating = ratingInput.value;
    const comment = commentInput.value;
    const ramenName = selectedRamenName.textContent;
    const ramenImage = selectedRamenImage.src;

    // Here you can add logic to store the rating and comment
    // For example, you can send it to a server or store it in local storage

    console.log('Ramen:', ramenName);
    console.log('Image:', ramenImage);
    console.log('Rating:', rating);
    console.log('Comment:', comment);

    // Clear the form
    ratingInput.value = '';
    commentInput.value = '';
});