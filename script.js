let isSubscribed = "user is subscribed";

window.onload = setTimeout( function(){
    if (!(document.cookie === isSubscribed)) {
        let modal = document.querySelector("#openModal");
        modal.style.opacity = 1;
        modal.style.pointerEvents = "auto";
    }
}, 3000);

function closeModal(){
    let modal = document.querySelector(".close");
    modal.style.display = "none";
}

function subscribe(){
    document.cookie = isSubscribed;
    closeModal();
}
 const kb = [
  {
    name:"kb-1",
    source: "images/1.jpg",
    id: 0,
  },
  {
    name: "kb-2",
    source: "images/3.jpg",
    id: 1,
  },
  {
    name: "kb-3",
    source: "images/6.jpg",
    id: 2 ,
  }
  ];

  function getKb(){
    let divInfo = document.querySelector(".info");
    let inner = "";
    for(let i = 0; i < kb.length ; i++){
        let img = "<img title='Kb' src='" + kb[i].source + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}
const mouse = [
  {
    name:"mouse-1",
    source: "images/4.jpg",
    id: 0,
  },
  {
    name: "mouse-2",
    source: "images/7.jpg",
    id: 1,
  },
  {
    name: "mouse-3",
    source: "images/9.jpg",
    id: 2 ,
  }
  ];

  function getMouse(){
    let divInfo = document.querySelector(".info");
    let inner = "";
    for(let i = 0; i < mouse.length ; i++){
        let img = "<img title='Headphone' src='" + mouse[i].source + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}

const headphones = [
  {
    name:"hd-1",
    source: "images/2.jpg",
    id: 0,
  },
  {
    name: "hd-2",
    source: "images/5.jpg",
    id: 1,
  },
  {
    name: "hd-3",
    source: "images/8.jpg",
    id: 2 ,
  }
  ];

  function getHeadphone(){
    let divInfo = document.querySelector(".info");
    let inner = "";
    for(let i = 0; i < headphones.length ; i++){
        let img = "<img title='Headphone' src='" + headphones[i].source + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}

