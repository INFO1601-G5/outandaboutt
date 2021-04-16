function initMap(a,b) {
    
    //const bangalore = { lat: 12.97, lng: 77.59 };

    const mapOptions = {
      zoom: 15,
      center: {lat: (a*1), lng: (1*b)},
    };
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
      position: {lat: a, lng: b},
      map: map,
    });
  
    const infowindow = new google.maps.InfoWindow({
      content: "<p>Marker Location:" + marker.getPosition() + "</p>",
    });
    google.maps.event.addListener(marker, "click", () => {
      infowindow.open(map, marker);
    });
  }
  
  function showLocation(location) {
    let locLoad=document.querySelector("#placeDetail")
    let html = '';
    
    html += `<div class="col-sm-8">
    <h1>${location.name}</h1>
      <div>
        <i></i>
        <span>liked!</span>
      </div>
    
      <div class="container">
        <div class="card">
        <img src="${location.img_url}" edit.jpg alt="${location.name}" style="max-width: 100%;  
        max-height: auto;">
      </div>
  
      <div class="card">
        <h4>Description</h4>
        <p>${location.description}</p>
      </div>
    </div>
    
  </div>
  
  <div id="other" class="col-sm-4">
    <div class="card">
      <h4>popularity: ${location.tags.popularity}</h4>
    </div>
    
      <div id= map class="card"></div>
    
  </div>`;
    locLoad.innerHTML = html;
  
    //const x = new Number(location.coords.latitude);
    //const y = new Number (location.coords.longitude);

    //var placeLatlng = new google.maps.LatLng(location[0].coords.longitude, location[0].coords.latitude);

    initMap(location.coords.longitude, locations.coords.longitude);
  }
  
  function getLocation(id) {
    let thisPlace = locations[id - 1];
    showLocation(thisPlace);
  }
  
  
  function showAllLocations(locations) {
    for (let thislocation of locations) {
      showLocation(thislocation);
    }
  }