/* Fetch the search data */
async function displaySearch(search) {
    console.log(API_URL);
    fetch(API_URL+search)
      .then(res => res.json())
      .then(data => {
        const {
          items,
        } = data.collection;
        displayImages(items);
      })
  }
  
  /* Handler for the items[] array */
  function displayImages(items) {
    for(let i = 0; i<items.length; i++){
      if(items[i].links != null)
        displayImage(items[i]);
    }
  }
  
  /* Creates the div and img of the item */
  function displayImage(item) {
    const image = item.links[0].href;
    let div = document.createElement("div");
        div.classList.add("block");
        document.getElementById("searchResults").appendChild(div);
    let img = document.createElement("img");
        img.src = image;
        div.appendChild(img);
  }
  
  /* Function to clear/delete all of the search result divs */
  function clearSearch() {
    let elems = document.getElementsByClassName("block");
    while(elems[0]) elems[0].parentNode.removeChild(elems[0]);
  }