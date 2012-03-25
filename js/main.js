(function($) {
  $('#search-form').bind('submit', function() {
    $.ui.showMask();
    $('#results').empty();
    var onSuccess = function(data) {
      console.log('success');
      console.log(data);
      var results = data.results;
      var i, tags = '';
      var tmpl = $('#status-tmpl').html();
      for (i = 0; i < results.length; i++) {
        var r = results[i];
        tags += $.template(tmpl, r);
      }
      console.log(tags);
      $('#results').html(tags);
      $.ui.hideMask();
    };
    var onError = function() {
      console.log(arguments);
      $.ui.hideMask();
      alert('Error!');
    };
    var q = $('#search').val();
    $.jsonP({
      url: 'http://search.twitter.com/search.json?callback=?&q=' + encodeURIComponent(q),
      success: onSuccess,
      error: onError
    });
    return false;
  });

  $.ui.ready(function() {
    console.log('hello world');
    $.ui.backButtonText = '&lt;';
  });
})(jq);
