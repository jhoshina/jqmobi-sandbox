(function($) {
  // include touch.js on desktop browsers only
  if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
    var script = document.createElement('script');
    script.src = 'touch.js';
    var tag = $('head').append(script);
    $.os.android = true; //let's make it run like an android device
    $.os.desktop = true;
  }
  $.ui.ready(function () {
    $('#toggle-nav').bind('click', function() {
      $.ui.toggleSideMenu();
      return false;
    });
  });
})(jq);
