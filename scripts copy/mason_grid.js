// external js: masonry.pkgd.js

var grid = document.querySelector('.gridContainer');
var msnry = new Masonry( grid, {
  columnWidth: 10,
  itemSelector: '.gridItem'
});

grid.addEventListener( 'click', function( event ) {
  // don't proceed if item was not clicked on
  if ( !matchesSelector( event.target, '.itemImg' ) ) {
    return;
  }
  // change size of item via class
  console.log("make big");

  var itemElem = event.target.parentNode;

  itemElem.classList.toggle('is-expanded');

  // trigger layout
  msnry.layout();
});
