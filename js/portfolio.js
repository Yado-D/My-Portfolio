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



  //container bounce up

//   document.querySelector('.common-containers').addEventListener('mouseover', function() {
//     this.animate([
//       { transform: 'translateY(0)' },
//       { transform: 'translateY(-20px)' },
//       { transform: 'translateY(0)' }
//     ], {
//       duration: 300,
//       iterations: 1
//     });
//   });