const API_Key = "8nMA10s1le3Fl9htKrfM8bEAvdvl9mfbxkXC85gY";
const API_URL = "https://images-api.nasa.gov/search?q=";
const containerWidth = parseInt(getComputedStyle(document.body).getPropertyValue("--container-width"));

/* Displaying random search results */
window.onload = () => {
  displaySearch("mars");
  let width = window.innerWidth;
  if(width >= containerWidth) setPadding(containerWidth);
  else if(width >= 882) {
    setWidth();
    setPadding(882);
  } else {
    console.log(width);
    setWidth();
    setBlockSize();
  }
}

/* Changes padding on resize (larger than containerWidth) */
window.onresize = () => {
  let width = window.innerWidth;
  if(width >= containerWidth) setPadding(containerWidth);
  else if(width >= 882){
    setWidth();
  } else {
    setWidth();
    setBlockSize();
  }
}

/* Function to set the padding on the navbar and container 975 */
function setPadding(w) {
  width = window.innerWidth-w;
  let nav = document.getElementById("nav");
  let container = document.getElementById("searchWrapper");
  nav.style.paddingLeft = (width/2)+"px";
  container.style.paddingLeft = (width/2)+"px";
}

function setWidth() {
  let width = innerWidth;
  let nav = document.getElementById("nav-container");
  let container = document.getElementById("searchResults");
  nav.style.width = width+"px";
  container.style.width = width+"px";
}

function setBlockSize() {
  console.log(((window.innerWidth/3)+2)+"px")
  let imgs = document.getElementsByClassName("block");
  for(let i = 0; i<imgs.length; i++){
    imgs[i].style.width = ((window.innerWidth/3)+2)+"px";
    imgs[i].style.height = ((window.innerWidth/3)+2)+"px";
  }
}

/* If you type something, wipes and searches */
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
  clearSearch();
  const searchString = e.target.value.toLowerCase();
  displaySearch(searchString);
});
