// write your code here
const BASE_URL= ' http://localhost:3000/ramens'

const init = ()=> {
    fetch( BASE_URL)
    .then(response => response.json())
    .then(data => displayRamens(data))

    const form = document.getElementById('new-ramen')

    form.addEventListener('submit',(e )=> {
        e.preventDefault()

        const ramenObj={}
        ramenObj.name= document.getElementById('new-name').value
        ramenObj.restaurant = document.getElementById('new-restaurant').value
        ramenObj.image = document.getElementById('new-image').value
        ramenObj.rating = document.getElementById('new-rating').value
        ramenObj.comment = document.getElementById('new-comment').value

        displayRamen(ramenObj)

    })
function displayRamen(ramen) {

const ramenMenu= document.getElementById('ramen-menu');

        const image = document.createElement('img')
        image.src = ramen.image

        image.addEventListener('click' ,()=>{
            document.querySelector('.detail-image').src= ramen.image
            document.querySelector('.name').innerText= ramen.name
            document.querySelector('.restaurant').innerText=ramen.restaurant
            document.querySelector('#rating-display').innerText=ramen.rating
            document.querySelector('comment-display').innerText=ramen.comment

        })

        ramenMenu.appendChild(image)
        
   }

function displayRamens(ramens) {
    
    // iterate through the ramens
    ramens.forEach(ramen => {

        displayRamen(ramen)
    });
}
}
document.addEventListener('DOMContentLoaded',init) 