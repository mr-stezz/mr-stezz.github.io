// sticky header
// ;( function ( document, window, index )
// {
  // 'use strict';
// 
  // var elSelector  = '.page-header',
    // element   = document.querySelector( elSelector );
// 
  // if( !element ) return true;
// 
  // var elHeight      = 0,
    // elTop           = 0,
    // dHeight         = 0,
    // wHeight         = 0,
    // wScrollCurrent  = 0,
    // wScrollBefore   = 0,
    // wScrollDiff     = 0;
// 
  // window.addEventListener( 'scroll', function()
  // {
    // elHeight    = element.offsetHeight;
    // dHeight     = document.body.offsetHeight;
    // wHeight     = window.innerHeight;
    // wScrollCurrent  = window.pageYOffset;
    // wScrollDiff   = wScrollBefore - wScrollCurrent;
    // elTop     = parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;
// 
    // if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
      // element.style.top = '0px';
// 
    // else if( wScrollDiff > 0 ) // scrolled up; element slides in
      // element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';
// 
    // else if( wScrollDiff < 0 ) // scrolled down
    // {
      // if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
        // element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
// 
      // else // scrolled down; element slides out
        // element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
    // }
// 
    // wScrollBefore = wScrollCurrent;
  // });
// 
// }( document, window, 0 ));

// molten leading
moltenLeading("h1", {
  minline: 1.2,
  maxline: 1.8,
  minwidth: 400,
  maxwidth: 768
});

moltenLeading(".lead", {
  minline: 1.35,
  maxline: 2.0
});

moltenLeading("p", {
  minline: 1.4,
  maxline: 1.8,
  minwidth: 400,
  maxwidth: 768
});

// masthead photo slider
new IdealImageSlider.Slider('#slider');

// initialise smooth scroll
smoothScroll.init();