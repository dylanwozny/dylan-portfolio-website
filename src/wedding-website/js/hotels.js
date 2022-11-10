// hotels
// hotels
let hotelDomList = document.querySelector(".location-card-container");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "456889fbd7mshbf0f71b95261d81p17ea1djsnde60c2fb4269",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  },
};

fetch(
  "https://hotels-com-provider.p.rapidapi.com/v1/hotels/nearby?locale=en_US&sort_order=BEST_SELLER&latitude=42.518437&adults_number=1&checkout_date=2023-09-27&currency=CAD&checkin_date=2023-09-26&longitude=18.656604&guest_rating_min=3&accommodation_ids=20%2C8%2C15%2C5%2C1&star_rating_ids=3%2C4%2C5&amenity_ids=527%2C2063&price_min=6&page_number=1&theme_ids=14%2C27%2C25&price_max=900&children_ages=4%2C0%2C15",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.searchResults.results);
    let fiveHotels = response.searchResults.results;
    console.log(fiveHotels);
    fiveHotels.map((element) => getAndRenderHotel(element));
  })
  .catch((err) => console.error(err));

// ---go through json and render the hotel on page----
getAndRenderHotel = (element) => {
  hotelDomList.innerHTML += `<div class="card">
          <h3>${element.name}</h3>
          <ul class="card-list">
            <li class="card-star">
              <h5>Star Rating: ${element.starRating}</h5>
            </li>
            <li class="card-price">
              <p>${element.ratePlan.price.current}</p>
            </li>
            <li class="card-img">
              <img
                src="${element.optimizedThumbUrls.srpDesktop}"
                alt="Girl in a
              jacket"
              />
            </li>
            <li class="card-address">
              <h5>Hotel address</h5>
              <p>Street: ${element.address.streetAddress}</p>
              <p>Postal Code:${element.address.postalCode}</p>
            </li>
            <li class="card-review">
              <h5>Guest Reviews</h5>
              <p>${element.guestReviews.rating}</p>
            </li>
          </ul>
        </div>`;
};
