const formular = document.forms[0];

const name = document.forms[0]["name"];
name.required = 'true'

const surname = document.forms[0]["surname"];
surname.required = 'true'

const email = document.forms[0]["email"];
email.required = 'true'

const legal= document.forms[0]['legal'];
legal.required = 'true'

const subs = document.forms[0]['subscription'];

const modal = document.querySelector('.popup')

const caption = document.querySelector('.caption')

const close = document.querySelector('.fa-times')

const thinking = document.createElement('p')
thinking.innerHTML = 'un momento por favor'
thinking.className = 'thinking'
const popup = document.querySelector('.popup')
popup.appendChild(thinking)




//show modal:
formular.addEventListener('submit', event => {
    event.preventDefault();
    
    modal.className = 'showModalBg'

    setInterval(() => {
        thinking.innerHTML += '.'
    }, 700)

    setInterval(() => {
         thinking.innerHTML = 'un momento por favor'
    }, 2800);

    setTimeout(() => {
        thinking.className = 'notShowThinking'
        caption.className = 'modalShowing'
     }, 5000)

})



//close button:
close.addEventListener('click', event => {
    event.preventDefault()

    modal.className = 'popup'
    thinking.className = 'thinking'
    caption.className = 'caption'

    name.value =''
    surname.value =''
    email.value =''
    legal.checked = false
    subs.checked = false
})