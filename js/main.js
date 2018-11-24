$(document).ready(function(){
  console.log("ready");

  $('[data-toggle="tooltip"]').tooltip({
    container: "interactiveEMU"
  });

      if ($(this)[0].hasAttribute('data-type')) {
          options['template'] =
          	'<div class="tooltip ' class='suitPart ' + $(this).attr('data-type') + '" role="tooltip">' +
          	'	<div class="tooltipInner"></div>' +
          	'</div>';
      }

      $(this).tooltip(options);
  });

});
