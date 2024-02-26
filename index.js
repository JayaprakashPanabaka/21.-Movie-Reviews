let titleEl = document.getElementById("title");
let reviewEl = document.getElementById("review");

let reviewContainerEl = document.getElementById("reviewContainer");

function onAddReview() {
    let movieTitle = titleEl.value;
    let movieReview = reviewEl.value;

    if(titleEl.value === '') {
        alert("Enter Movie Title")
        return;
    }else if(reviewEl.value === '') {
        alert("Enter Movie Rerview")
        return;
    }
    // console.log('Dalng');

    let title = document.createElement('h1');
    title.textContent = "Movie Title: " + movieTitle;
    title.classList.add('movie-title');

    reviewContainerEl.appendChild(title);

    let review = document.createElement('p');
    review.textContent = "Review: " + movieReview;
    review.classList.add("movie-review")

    reviewContainerEl.appendChild(review);

    titleEl.value = '';
    reviewEl.value = '';
}



















