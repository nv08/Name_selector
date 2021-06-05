
participants = ["khaja","dharvik","divy","nilay","punit","agnish","sanjana","gopal","ruhan","ruturaj","tushar","kartik","shivsagar"]

const select = Math.floor(Math.random()*(participants.length))

const but = document.querySelector('button')
const  x = document.querySelector('.flip-card-inner')
const get_name = document.querySelector('.fetcher')
const frame = document.querySelector('iframe')
const data = document.querySelector('.flip-card')
const next = document.querySelector('.another')

const sel = document.querySelector('h1')

but.addEventListener('click',()=>{
    
    x.style.transform='rotateY(180deg)'
    sel.innerText= participants[select]
    setTimeout(() => {
        x.style.transform='rotateY(360deg)'
    }, 3500);
})

get_name.addEventListener('click',()=>{
    get_name.classList.add('fadeout')
    frame.classList.add('iframe-call')

    setTimeout(() => {
        frame.classList.remove('iframe-call')
    }, 4000);

    setTimeout(() => {
        data.style.display="block"
        data.classList.add('fadein')
    }, 6500);
    
})

next.addEventListener('click',()=>{
    document.location.reload()
})