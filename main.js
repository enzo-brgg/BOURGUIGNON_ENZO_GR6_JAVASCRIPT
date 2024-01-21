const lightbox = new SimpleLightbox(".portfolio-elements")
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 


  function setMode(oEvent){
    document.body.classList.replace(aModes[Number(!this.checked)],aModes[Number(this.checked)]);
    localStorage.setItem('mode',aModes[Number(this.checked)]);
    this.parentNode.nextElementSibling.innerHTML = (this.checked)? "Dark mode":"White mode"
  }
  
function loadMode(){
  let sMode = localStorage.getItem('mode');
    document.forms["mytheme"]["theme-mode"].checked = sMode == aModes[1];
    setMode.call(document.forms["mytheme"]["theme-mode"])
  }
let aModes = ["mode-white", "mode-dark"];
  document.addEventListener('DOMContentLoaded',function(){
    document.body.classList.add(aModes[0]);
    document.forms["mytheme"]["theme-mode"].addEventListener('click', setMode);
    loadMode()
  });


  let form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Envoi du form detecté !')

    let email = document.querySelector('#email')

    if (email.value == '') {
        console.log("invalide")
    } else {
        email.classList.add('success')
    }

    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    if (email.value == '') {
        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas être vide"
        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }

    let pseudo = document.querySelector('#pseudo')

    if(pseudo.value.length < 6) {

        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"

        errorList.appendChild(err)

    } else {
        pseudo.classList.add('success')
    }

})

const options ={
  gutterPixels:50,
};
const filterizr= new Filterizr('.portfolio-elements', options);

let filtersList= document.querySelectorAll('.filters li')
filtersList.forEach(function(filterItem){
  filterItem.addEventListener('click',function(){
    document.querySelector('.filters .active').classList.remove('active')
    this.classList.add('active')
  })
})

