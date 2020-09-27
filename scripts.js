

const card = document.querySelector("div.card")
const starsContainer = document.querySelector("div.starsContainer")
const reviewCard = document.querySelector("div.reviewCard")
const reviewsContainer = document.querySelector("div.reviewContainer")


const ratings = [
    {
        title: 'Rated 5 Stars in Reviews'
    },
    {
        title: 'Rated 5 Stars in Report Guru'
    },
    {
        title: 'Rated 5 Stars in BestTech'
    }
]

const clientReviews = [
    {
        name: "Colton Smith",
        text: `"We needed the same printed design as the one we had ordered a week prior.
        Not only did they find the original order, but we also received it in time.
        Excellent!"`,
        image: `images/image-colton.jpg`
    },
    {
        name: "Irene Roberts",
        text: `"Customer service is always excellent and very quick turn around. Completely
        delighted with the simplicity of the purchase and the speed of delivery."`,
        image: 'images/image-irene.jpg'
    },
    {
        name: "Anne Wallace",
        text: `"Put an order with this company and can only praise them for the very high
        standard. Will definitely use them again and recommend them to everyone!"`,
        image: 'images/image-anne.jpg'
    }
]

ratings.map(rating => {
    const cardClone = card.cloneNode(true);
    cardClone.querySelector("p").innerHTML = rating.title
    starsContainer.appendChild(cardClone)
})

card.remove();


clientReviews.map(review => {
    const cardClone = reviewCard.cloneNode(true);
    cardClone.querySelector("#name").innerHTML = review.name
    cardClone.querySelector(".reviewText > p").innerHTML = review.text
    cardClone.querySelector('img').src = review.image
    reviewsContainer.appendChild(cardClone)
})

reviewCard.remove()