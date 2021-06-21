const search = document.getElementById('search');
const btn = document.getElementById('btn');
const grid = document.querySelector('.grid');



search.addEventListener('keydown', (event) => {
   if(event.key === 'Enter') 
      loadImg();
})

function loadImg() {
   removeImages();
   const url = 
   'https://api.unsplash.com/search/photos/?query='
   +search.value+
   '&per_page=9&client_id=ejzCvm2uzSgL8MeUjizqqIVHPpy6KubHs5gSUWvuO7I'

   fetch(url)
   .then(response => {
      if(response.ok) {
         return response.json();
      } else {
         alert(response.status)
      }
   })
   .then(data => {
      const imagesNodes = [];
      for(let i = 0; i < data.results.length; i++) {
         imagesNodes[i] = document.createElement('div')
         imagesNodes[i].className = 'img';
         imagesNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
         imagesNodes[i].addEventListener('dblclick', () => {
            window.open(data.results[i].links.download,'_blank');
         })
         grid.appendChild(imagesNodes[i]);
      }
   })
}

function removeImages() {
   grid.innerHTML = '';
}


