const buttons = document.querySelectorAll('.btn');
const allLang = ['en', 'ru', 'ro'];

console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', changeURLLanguage)
});

// перенаправить на url с указанием языка
function changeURLLanguage(event) {
    let lang = event.target.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    document.querySelector('title').innerHTML = langArr['title-h3'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}


changeLanguage();
    const image = document.getElementById("main-image");
    // const dog = document.getElementById("dog-image");
    // const cat = document.getElementById("cat-image");
    const sound = document.getElementById("sound");
    // const dogSound = document.getElementById("dog-sound");

function changeFrontground(img) {
  const isDog = image.alt === 'dog'
  image.src = img === 'cat' ? 'img/main-pic-cat.png' : 'img/main-pic.png'
  image.alt = img
  
  if (isDog && img === 'dog') {
    sound.src = 'audio/dog.mp3'
    sound.play()
  } else if (!isDog && img === 'cat') {
    sound.src = 'audio/cat.mp3'
    sound.play()
  }
}

// function hideDog() {
//     if (dog.style.display === "none") {
//       dog.style.display = "block"
//       cat.style.display = "none"
//     } else {
//     //   dog.style.display = "block";
//     //   cat.style.display = "none";
//       dogSound.play();
//     }
//   }

//   function hideCat() {
//     if (cat.style.display === "none") {
//       cat.style.display = "block";
//       dog.style.display = "none"
//     } else {
//     //   cat.style.display = "block";
//     //   dog.style.display = "none"
//       catSound.play();
//     }
//   }

