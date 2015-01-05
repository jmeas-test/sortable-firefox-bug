// This file demonstrates that the `setData`
// option does not work in Firefox.

(function() {
  var ul = document.getElementsByClassName('sortable')[0];

  var sortable = new Sortable(ul, {

    // Comment this line out, and it will work in Firefox
    setData: false,

    handle: '.drag'
  });

  window.sortable = sortable;
})();
