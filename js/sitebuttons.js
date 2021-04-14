<script src="locations-data.js"></script>
<script>
  //console.log(locations.length);

  /*async function LoadHome(){
    let carousel=document.querySelector("#Carouselsect");
    let html="";

    html+=`
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style ="position: relative;">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    
    <div class="carousel-inner" role="listbox">
      <div id="item1" class="item active" style = "height: 450px;"></div>
      
      
     <div id= "item2" class="item" style = "height: 450px;"></div>
    </div>

   
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <div>`

    carousel.innerHTML=html;
  }*/

  async function loadExplore(locations){
    let explore=document.querySelector("#Carouselsect");
    let html="";

    for(let location of locations){
     //console.log(location.name)
      html+=`<ul>
      <li><a href="#" onclick="loadList(locations,'${location.tags.type[0]}')">${location.tags.type[0]}</a></li>
      </ul>`;
    }
    explore.innerHTML=html;
  }

  async function loadList(locations,tag){
    let locList=document.querySelector("#Carouselsect");
    let html="";
    //console.log(`dealin wiff ${tag}`);

    let tagArr=locations.filter(location => {
  return location.tags.type.includes(`${tag}`);
});
   for(let tags of tagArr){
     //console.log(tags.name);
     html+=`<ul>
      <li><a href="#" >${tags.name}</a></li>
      </ul`;
   }
   locList.innerHTML=html;
  }

  //LoadHome();
</script>