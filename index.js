// Initialize opacity
const opacityLight = 0.4;
// Get all img inside .imgs div
const imgs = document.querySelectorAll('.imgs img');
// Get current image element
const current = document.querySelector('#current');
// Set src to img-1 
current.src = '/img/img-1.jpg';
// Lighten thumbnail of img-1
imgs[0].style.opacity = opacityLight;

// Iterate over node list and attach event listener to each img
imgs.forEach(img => img.addEventListener('click', imgClick));

// image click event handler
function imgClick(e) {
  // Reset opacity of all images 
  imgs.forEach(img => img.style.opacity = 1);
  
  // Set src of current to image clicked
  current.src = e.target.src;
  
  // Add fade in class 
  current.classList.add('fade-in'); 
  // Remove fade-in after  
  setTimeout(() => current.classList.remove('fade-in'), 500);
  
  // Change opacity to opacityLight 
  e.target.style.opacity = opacityLight;
}