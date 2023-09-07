// Review Form Submit Event
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get the form input values
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    // Create the review card HTML
    var reviewCard = `
    <div class="card review-card">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${message}</p>
        </div>
    </div>
        `;
    // Append the review card to the review cards container
    var reviewCardsContainer = document.getElementById('review-cards');
    //method of elemrnt interface inserts dom into a specified position
    reviewCardsContainer.insertAdjacentHTML('beforeend', reviewCard);
    // Reset the form input values
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});