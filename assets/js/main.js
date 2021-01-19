const dropdownContainer = document.querySelector(".dropdown-container")
dropdownContainer.addEventListener('click',
  function (e) {
    // x.classList.toggle("change");
    $("#mobile-menu").toggleClass("menu-hidden", 800, "easeOutQuint");
    console.log(e.target)
  }
)


// $('body').on('click', (e) => {
//   //if (!$(e.target).hasClass('bar2')) {
//     // dropdownContainer.classList.remove('menu-hidden')
//     console.log($(".dropdown-container"))
//     $(".dropdown-container").removeClass("menu-hidden")
//     console.log('yeah')
//   //}

// })

document.addEventListener('scroll', (e) => {
  if (!$(e.target).hasClass('bar2')) {
    // dropdownContainer.classList.remove('menu-hidden')
    $("#menu-hidden").removeClass("menu-hidden")
    console.log('yeah')
  //}
}
})