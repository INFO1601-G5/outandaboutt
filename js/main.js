function featuredPlaces() {
  let placeid = Math.floor(Math.random() * locations.length);
  let featuredPlace = locations[placeid];
  let html = '';

  html += `<a href="#item2" onclick="getLocation(${placeid})" class="item">
                        <img src= "${featuredPlace.img_url}">
                    </a>
                    <div class="carousel-caption">
                      <h1>${featuredPlace.name}</h1>
                      <p>Read more on this featured experience...</p>
                    </div>`;
  document.querySelector('#item1').innerHTML = html;

  if (placeid == locations.length - 1)
    featuredPlace = locations[placeid - 1];
  else featuredPlace = locations[placeid + 1];
  html = '';
  html += `<a href="#item1" onclick="getLocation(${placeid})" class="item">
                      <img src= "${featuredPlace.img_url}">
                    </a>
                    <div class="carousel-caption">
                      <h1>${featuredPlace.name}</h1>
                      <p>Read more on this featured experience...</p>
                    </div>`;
  document.querySelector('#item2').innerHTML = html;
}
featuredPlaces();
