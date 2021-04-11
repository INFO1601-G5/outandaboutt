      let map;
      let place = locations[0];
    


      function featuredPlaces(){
        let placeid = Math.floor(Math.random() * 11);
        let html='';
        let featuredPlace=locations[placeid-1];
        html += `<div class="col">
          <img src= "${featuredPlace.img_url}" width = "50%" height = "50%">
                </div>
                <div class="col">
                  <p> Name: ${featuredPlace.name}</p>
                  <p> Description: ${featuredPlace.description}</p>
                </div>`;
        document.querySelector('#myCarousel').innerHTML = html;
        


        showFeaturedLocation(locations[placeid-1])
      }
 

      function initMap(x,y){
        map = new google.maps.Map(document.getElementById("map"), {
          //center: {lat: locations[0].latitude, lng: locations[0].longitude},
          center: {lat: x,lng: y},
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
        initMap(x,y);
      }
      //initMap(50,80)
      showLocation(place);

      function getLocation(id){
        showLocation(place);
      }

