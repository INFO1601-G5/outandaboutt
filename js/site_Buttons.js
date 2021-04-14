//url=explore.html
async function loadList(locations,tag){
    let locList=document.querySelector("#Tester");
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

 