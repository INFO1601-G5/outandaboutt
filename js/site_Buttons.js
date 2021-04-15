//url=explore.html
async function loadList(locations,tag){
    let locList=document.querySelector("#homeinfo");
    let html="";

    let tagArr=locations.filter(location => {
  return location.tags.type.includes(`${tag}`);
});
   for(let tags of tagArr){
     //console.log(tags.name);
     html+=`<ul>
      <li><a href="#" onclick="getLocation(${placeid})">${tags.name}</a></li>
      </ul`;
   }
   locList.innerHTML=html;
  }

 async function loadExplore(tagList){
    let explore=document.querySelector("#menu1");
    let html="";

    for(let tagg of tagList){
      html+=`
      <li><a href="#" onclick="loadList(locations,'${tagg}')">${tagg}</a></li>`;
    }
    explore.innerHTML=html;
  }
 
 function getName(){
    let place_name=document.querySelector(".search-bar");
    let placeName;
      return place_name.value;
  }
  async function searchbut(locations){
    let name=getName().toUpperCase();
    let locSearch=document.querySelector("#homeinfo");
    let html="";

    let nameArr=locations.filter(location => {
  return location.name.toUpperCase().includes(`${name}`) || `${location.tags.type}`.toUpperCase().includes(`${name}`);
});

 for(let names of nameArr){
     console.log(names.name);
     html+=`<ul>
      <li><a href="#" onclick="getLocation(${placeid})">${names.name}</a></li>
      </ul`;
   }
   locSearch.innerHTML=html;
  }

async  function sortTrending(locations){
  let ascending = locations.sort((a, b) => b.tags.popularity - a.tags.popularity )

    let trendlist=document.querySelector("#Tester");
    let html="";

    for(let member of ascending){
      console.log(`${member.name}    ${member.tags.popularity}` );
      html+=`<ul>
      <li><a href="#" onclick="getLocation(${placeid})">${member.name}</a></li>
      </ul`;
    }
    trendlist.innerHTML=html;
}