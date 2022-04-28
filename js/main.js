const elBox = document.querySelector('.site-nav__list-active')
    const elBtn = document.querySelector('.site-nav__btn')

    elBtn.addEventListener('click', () => {
      elBox.classList.toggle('site-nav__list-active')
    })