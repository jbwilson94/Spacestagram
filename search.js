/* Fetch the search data */
async function displaySearch(search) {
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
    setBlockSize();
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
    div.onclick = function(){openImage(item,)};
  }
  
  /* Function to clear/delete all of the search result divs */
  function clearSearch() {
    let elems = document.getElementsByClassName("block");
    while(elems[0]) elems[0].parentNode.removeChild(elems[0]);
  }

  function openImage(item){
    clearSearch();
    let div = document.createElement("div");
        div.classList.add("imageShowcase");
        document.getElementById("searchResults").appendChild(div);
    let caption = document.createElement("div");
        caption.classList.add("caption");
        div.appendChild(caption);
        caption.innerHTML = "<p>"+item.data[0].title+"</p>";
        caption.innerHTML += "<p>"+item.data[0].description+"</p>";
        caption.innerHTML += "<p>"+item.data[0].date_created+"</p>";
    let img = document.createElement("img");
        img.src = item.links[0].href;
        div.appendChild(img);
    let heart = document.createElement("i");
        if(!isLiked(item)) heart.classList.add("far");
        else {
          heart.classList.add("fas");
          heart.style.color = "red";
        }
        heart.classList.add("fa-heart");
        caption.appendChild(heart);

        heart.onclick = function() {
          if(!isLiked(item)) {
          addCookie(item);
          heart.classList.remove("far");
          heart.classList.add("fas");
          heart.style.color = "red";
        } else {
          removeCookie(item);
          heart.classList.remove("fas");
          heart.classList.add("far");
          heart.style.color = "black";
        }
      }
  }

  function addCookie(item) {
    setCookie(""+item.links[0].href, "1", 30);
  }

  function removeCookie(item) {
    deleteCookie(""+item.links[0].href);
  }

  function isLiked(item) {
    if(getCookie(""+item.links[0].href)!="") return true;
    else return false;
  }
  
  function clearImage() {
    let elems = document.getElementsByClassName("imageShowcase");
    while(elems[0]) elems[0].parentNode.removeChild(elems[0]);
  }

  function setBlockSize() {
    let div = document.getElementById("searchResults");
    let imgs = document.getElementsByClassName("block");
    for(let i = 0; i<imgs.length; i++){
      imgs[i].style.width = ((div.offsetWidth/3)+2)+"px";
      imgs[i].style.height = imgs[i].offsetWidth;
    }
  }