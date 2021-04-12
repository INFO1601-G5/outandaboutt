      let map;
      let place = locations[0];
    
      function featuredPlaces(){
        let placeid = Math.floor(Math.random() * locations.length);
        let featuredPlace=locations[placeid];
        let html='';
        
        html += `<a href="#item2" onclick="getLocation(${placeid})" class="item">
                    <img src= "${featuredPlace.img_url}">
                </a>
                <div class="carousel-caption">
                  <h3>${featuredPlace.name}</h3>
                  <p>Read more...</p>
                </div>`;
        document.querySelector('#item1').innerHTML = html;

        if (placeid==locations.length-1)
          featuredPlace=locations[placeid-1];
        else featuredPlace=locations[placeid+1];
        html='';
        html += `<a href="#item1" onclick="getLocation(${placeid})" class="item">
                  <img src= "${featuredPlace.img_url}">
                </a>
                <div class="carousel-caption">
                  <h3>${featuredPlace.name}</h3>
                  <p>Read more...</p>
                </div>`;
        document.querySelector('#item2').innerHTML = html;
      }
      featuredPlaces();

      function initMap(x,y){
        map = new google.maps.Map(document.getElementById("map"), {
          //center: {lat: locations[0].coords.latitude, lng: locations[0].coords.longitude},
          center: {lat: 60, lng: 80},
          //center: {lat: x,lng: y},
          zoom: 8,
        });
      }

      function showLocation(location){
        let html = '';

        html += `<div class="col">
          <img src= "${location.img_url}" width = "50%" height = "50%">
                </div>
                <div class="col">
                  <p> Name: ${location.name}</p>
                  <p> Description: ${location.description}</p>
                </div>`;
        document.querySelector('#placeDetail').innerHTML = html;
        
        const x = new Number(location.latitude);
        const y = new Number (location.longitude);
        //initMap(x,y);
      }
      //initMap(50,80)
      //showLocation(place);

      function getLocation(id){
        showLocation(place);
      }

