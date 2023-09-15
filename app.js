const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
});

function origin(){
    $card.style.backgroundImage="url(https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)"
    document.getElementById("orgin").style.display="none"
    document.getElementById("tyl1").style.display="block"
    document.getElementById("tyl2").style.display="block"
    document.getElementById("tyl3").style.display="block"
    document.getElementById("tyl4").style.display="block"
}

function change1(){
    $card.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39lEEBXeaaX1MdNq4S7Lk1eimKA8tpjlCutCfwt7BeNihA15-mc_T_8a8I4OeSv-xM68&usqp=CAU)"
    document.getElementById("tyl1").style.display="none"
    document.getElementById("tyl2").style.display="block"
    document.getElementById("tyl3").style.display="block"
    document.getElementById("tyl4").style.display="block"
    document.getElementById("orgin").style.display="block"
}

function change2(){
    $card.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmL33iK8k5JLb9rM8cjFNNrfwEGqmtSrnK0g&usqp=CAU)"
    document.getElementById("tyl1").style.display="block"
    document.getElementById("tyl2").style.display="none"
    document.getElementById("tyl3").style.display="block"
    document.getElementById("tyl4").style.display="block"
    document.getElementById("orgin").style.display="block"
}

function change3(){
    $card.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljK8-irjNwLUOMskZV4ihScR9bkD8Y_txSA&usqp=CAU)"
    document.getElementById("tyl1").style.display="block"
    document.getElementById("tyl2").style.display="block"
    document.getElementById("tyl3").style.display="none"
    document.getElementById("tyl4").style.display="block"
    document.getElementById("orgin").style.display="block"
}

function change4(){
    $card.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU)"
    document.getElementById("tyl1").style.display="block"
    document.getElementById("tyl2").style.display="block"
    document.getElementById("tyl3").style.display="block"
    document.getElementById("tyl4").style.display="none"
    document.getElementById("orgin").style.display="block"
}

function uzytk(){
    const uztk = document.getElementById("uzytkownik").value
    document.getElementById("uzytk").innerText=uztk
    document.getElementById("uzytk").style.color="yellow"
}
function nr_kar(){
    const numer = document.getElementById("nr_kar").value
    document.getElementById("nr_karty").innerHTML=numer
  }
function data(){
    const date = document.getElementById("data").value
    document.getElementById("date1").innerHTML=date
}
function obrot1(){
  $card.classList.remove("flip-vertical-right-alter")
  $card.classList.add("flip-vertical-right")
  console.log("jeden")
}
function obrot2(){
  $card.classList.remove("flip-vertical-right")
  $card.classList.add("flip-vertical-right-alter")
  console.log("dwa")
}