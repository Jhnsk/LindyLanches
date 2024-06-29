const nav = document.querySelector('.navegation')
const topNav = nav.offsetTop

window.onscroll = function() {
  fixaTop()
}

function fixaTop() {
  if (window.pageYOffset >= topNav) {
    nav.classList.add('fixa')
   nav.style.marginTop = '-3px'
   
  } else {
    nav.classList.remove('fixa')
    nav.style.marginTop = ''
  }
}

let c = (el) => document.querySelector(el)

document.querySelectorAll('.navegation a').forEach((item, index) => {

  item.addEventListener('click', (e) => {
    e.preventDefault()

    switch (index) {
      case 0:
        c('.area').innerHTML = ''
        c('.drinks').classList.remove('active')
        e.target.classList.add('active')
        burguerJson.map((item, index) => {

          let burguerItem = document.querySelector('.models .item-content').cloneNode(true)


          burguerItem.querySelector('.name').innerHTML = item.name
          burguerItem.querySelector('.desc').innerHTML = item.desc
          burguerItem.querySelector('.item-img img').src = item.img
          burguerItem.querySelector('.price').innerHTML = item.price

          document.querySelector('.area').append(burguerItem)
        })
        break;
      case 1:
        c('.area').innerHTML = ''
        c('.burguer').classList.remove('active')
        e.target.classList.add('active')
        drinksJson.map((item, index) => {
          let drinkItem = document.querySelector('.models .item-content').cloneNode(true)

          drinkItem.querySelector('.name').innerHTML = item.name
          drinkItem.querySelector('.desc').innerHTML = item.desc
          drinkItem.querySelector('.item-img img').src = item.img
          drinkItem.querySelector('.price').innerHTML = item.price

          document.querySelector('.area').append(drinkItem)

        })
        break;
        default:
       
    }

  })
})
