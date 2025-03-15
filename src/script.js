document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const ramenImages = document.querySelectorAll('#ramen img');
    const ramenName = document.querySelector('.name');
    const ramenRestaurant = document.querySelector('.restaurant');
    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');
    const newRamenForm = document.querySelector('#new-ramen');

    // Define an array of ramen objects (you can expand this with more data)
    const ramenData = [
        {
            name: 'Gyukotsu',
            restaurant: 'Ichiran',
            image: 'assets/ramen/gyukotsu.jpg',
            rating: 8,
            comment: 'Mouth-watering.',
        },
        {
            name: 'Kojiro',
            restaurant: 'Menya',
            image: 'assets/ramen/kojiro.jpg',
            rating: 6,
            comment: 'Very flavorful.',
        },
        {
            name: 'Naruto',
            restaurant: 'Ramen Nagi',
            image: 'assets/ramen/naruto.jpg',
            rating: 7,
            comment: 'Yummy.',
        },
        {
            name: 'Nirvana',
            restaurant: 'Ramen-ya',
            image: 'assets/ramen/nirvana.jpg',
            rating: 8,
            comment: 'Sweet and tasty.',
        },
        {
            name: 'Shoyu',
            restaurant: 'Ichiran',
            image: 'assets/ramen/shoyu.jpg',
            rating: 9,
            comment: 'Delicious!',
        }
    ];

    // Function to display ramen details
    function displayRamenDetails(index) {
        const ramen = ramenData[index];
        ramenName.textContent = ramen.name;
        ramenRestaurant.textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating;
        commentDisplay.textContent = ramen.comment;
        document.querySelector('.holder').src = ramen.image;
    }

    // Add click event listeners to each ramen image
    ramenImages.forEach((img, index) => {
        img.addEventListener('click', () => displayRamenDetails(index));
    });

    // Handle form submission for adding new ramen
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting

        // Get form values
        const name = document.querySelector('#new-name').value;
        const restaurant = document.querySelector('#new-restaurant').value;
        const image = document.querySelector('#new-image').value;
        const rating = document.querySelector('#new-rating').value;
        const comment = document.querySelector('#new-comment').value;

        // Create a new ramen object
        const newRamen = {
            name,
            restaurant,
            image,
            rating,
            comment
        };

        // Add the new ramen to the ramenData array
        ramenData.push(newRamen);

        // Create a new image element for the ramen
        const newImg = document.createElement('img');
        newImg.src = newRamen.image;
        newImg.alt = newRamen.name;

        // Add a click event listener to the new image
        newImg.addEventListener('click', () => displayRamenDetails(ramenData.length - 1));

        // Append the new image to the #ramen div
        document.querySelector('#ramen').appendChild(newImg);

        // Reset the form
        newRamenForm.reset();
    });
});