//mobile bar icon clicked
var barClicked = document.getElementById("barButton");

var bar = document.querySelector(".bar");


barClicked.addEventListener('click', function() {
      
    if (bar.style.display === 'none' || bar.style.display === '') {
        console.log("active");
      bar.style.display = 'block';
    } else {
        console.log("deactive");
      bar.style.display = 'none';
    }
  });

//redirection start

document.querySelector(".examCollectors").addEventListener("click",function (){
   window.location.href = "examCollectors.html";
});
document.querySelector(".Habitomic").addEventListener("click",function (){
  window.location.href = "habitomic.html";
});
document.querySelector(".shega-store").addEventListener("click",function (){
  window.location.href = "shegaStore.html";
});
document.querySelector(".tourTok").addEventListener("click",function (){
  window.location.href = "tourTok.html";
});

//redirection end
console.log();

//for mob

document.querySelector('.download-cv').addEventListener('click', function() {
  console.log("download cv");
  const link = document.createElement('a');
  link.href = 'cv/my-cv.pdf'; 
  link.download = 'yaredDereje-cv.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// for desktop

document.querySelector('.download-my-cv ').addEventListener('click', function() {
  console.log(".download-my-cv ");
  const link = document.createElement('a');
  link.href = 'cv/my-cv.pdf'; 
  link.download = 'yaredDereje-cv.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});