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
      <li><a href="#" >${tags.name}</a></li>
      </ul`;
   }
   locList.innerHTML=html;
  }

 async function loadExplore(tagList){
    let explore=document.querySelector("#homeinfo");
    let html="";

    for(let tagg of tagList){
      html+=`<ul>
      <li><a href="#" onclick="loadList(locations,'${tagg}')">${tagg}</a></li>
      </ul>`;
    }
    explore.innerHTML=html;
  }
 
 function getName(){
    let place_name=document.querySelector(".search-bar");
    let placeName;
      return place_name.value;
  }
  async function searchbut(locations){
    //console.log("HERE");
    const name=getName().toUpperCase();
    let locSearch=document.querySelector("#homeinfo");
    let html="";

    let nameArr=locations.filter(location => {
  return location.name.toUpperCase().includes(`${name}`);
});

 for(let names of nameArr){
     console.log(names.name);
     html+=`<ul>
      <li><a href="#" onclick="">${names.name}</a></li>
      </ul`;
   }
   locSearch.innerHTML=html;
  }