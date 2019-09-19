document.addEventListener('DOMContentLoaded', function() {
    const menuIconEl = $('.menu-icon');
    const sidenavEl = $('.sidenav');
    const sidenavCloseEl = $('.sidenav__close-icon');
    const navDropdown = $('.nav-dropdown');
    const headerList = $('.header-list');
    const arrowDown = $('.birthday-arrow');
    const cardThree = $('.card-three-content');
    const arrowMeet = $('.meeting-arrow');
    const meetContent = $('.meeting-content');
    const alertOn = $('.notification-note');
    const notificationContent = $('.notification-content')

    // Add and remove provided class names
    function toggleClassName(el, className) {
        if (el.hasClass(className)) {
          el.removeClass(className);
        } else {
          el.addClass(className);
        }
      }


      // Open the side nav on click
    menuIconEl.on('click', function() {
        toggleClassName(sidenavEl, 'active');
      });
  
      // Close the side nav on click
      sidenavCloseEl.on('click', function() {
        toggleClassName(sidenavEl, 'active');
      });

      navDropdown.on('click', function(){
          headerList.toggle(300);
      })


      arrowDown.on('click', function() {
        cardThree.toggle(300)
      })

      arrowMeet.on('click', function(){
        meetContent.toggle(300);
      })
      

      alertOn.on('click', function(){
        notificationContent.toggle(300);
      })

}, false);