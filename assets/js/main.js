$(document).ready(function(){
  console.log("ready");

  // $("area").hover(function(){
  //   $("div").addClass('tooltip');
  // });



  // $('[data-toggle="tooltip"]').tooltip({
  //   container: "interactiveEMU"
  // });
  //
  //     if ($(this)[0].hasAttribute('data-type')) {
  //         options['template'] =
  //         	'<div class="tooltip " class="suitPart "' + $(this).attr("data-type") + ' role="tooltip">' +
  //         	'	<div class="tooltipInner"></div>' +
  //         	'</div>';
  //     }

  //     $(this).tooltip(options);
  // });
  //
  // var emuSuit = document.getElementsByClassName('interactiveEMU');
  //
  // document.getElementByID('helmet')[0].onclick = function() {
  //   if(this.innerHTML === 'zoomOutLeft')
  //   {
  //     boxOne.classList.add('horizTranslate');
  //   } else {
  //     this.innerHTML = 'helmet';
  //     var computedStyle = window.getComputedStyle(interactiveEMU),
  //         marginLeft = computedStyle.getPropertyValue('margin-left');
  //     interactiveEMU.style.marginLeft = marginLeft;
  //     interactiveEMU.classList.remove('horizTranslate');
  //   }
  // }
var astro =null

  $(".helmet").click(function() {
    console.log("click")
    $(".interactiveEMU").toggleClass('headSpin');
    $(".helmetInfo").toggleClass('exitLeft');
    $(".curious").remove();
   });

   $("#helmetMenu").click(function() {
     console.log("click")
     $(".interactiveEMU").toggleClass('headSpin');
     $(".helmetInfo").toggleClass('exitLeft');
     $(".curious").remove();
    });

  $(".upperTorso").click(function(){
    // while ('exitLeft' is )
    $(".interactiveEMU").toggleClass('chestSpin');
    $(".upperTorsoInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $("#upperTorsoMenu").click(function(){
    $(".interactiveEMU").toggleClass('chestSpin');
    $(".upperTorsoInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $(".glove").click(function(){
    $(".interactiveEMU").toggleClass('gloveSpin');
    $(".gloveInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $("#gloveMenu").click(function(){
    $(".interactiveEMU").toggleClass('gloveSpin');
    $(".gloveInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $(".lowerTorso").click(function(){
    $(".interactiveEMU").toggleClass('legSpin');
    $(".lowerTorsoInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $("#lowerTorsoMenu").click(function(){
    $(".interactiveEMU").toggleClass('legSpin');
    $(".lowerTorsoInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $(".material").click(function(){
    $(".interactiveEMU").remove();
    $(".materialLayersInfo").toggleClass('exitLeft');
    $(".materialPic").toggleClass('materialEnterLeft');
    $(".curious").remove();
  });

  $("#materialLayersMenu").click(function(){
    $(".interactiveEMU").remove();
    $(".materialLayersInfo").toggleClass('exitLeft');
    $(".materialPic").toggleClass('materialEnterLeft');
    $(".curious").remove();
  });

  $(".spaceUnderwear").click(function(){
    $(".interactiveEMU").remove();
    $(".spaceUnderwearInfo").toggleClass('exitLeft');
    $(".spaceUnderwearPic").toggleClass('underwearEnterLeft');
    $(".curious").remove();
  });

  $("#spaceUnderwearMenu").click(function(){
    $(".interactiveEMU").remove();
    $(".spaceUnderwearInfo").toggleClass('exitLeft');
    $(".spaceUnderwearPic").toggleClass('underwearEnterLeft');
    $(".curious").remove();
  });

  $(".backpack").click(function(){
    $(".interactiveEMU").remove();
    $(".backpackInfo").toggleClass('backpackInfoEnter');
    $(".backpackPic").toggleClass('backpackEnterLeft');
    $(".curious").remove();
  });

  $("#backpackMenu").click(function(){
    $(".interactiveEMU").remove();
    $(".backpackInfo").toggleClass('exitLeft');
    $(".backpackPic").toggleClass('backpackEnterLeft');
    $(".curious").remove();
  });

  $(".safer").click(function(){
    $(".interactiveEMU").toggleClass('saferZoom');
    $(".saferInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

  $("#saferMenu").click(function(){
    $(".interactiveEMU").toggleClass('saferZoom');
    $(".saferInfo").toggleClass('exitLeft');
    $(".curious").remove();
  });

});

// function reset() {
//   .remove('exitLeft');
//   .remove('saferZoom');
//   .remove('backpackEnterLeft');
//   .remove('backpackInfoEnter');
//   .remove('underwearEnterLeft');
//   .remove('materialEnterLeft');
//   .remove('legSpin');
//   .remove('gloveSpin');
//   .remove('chestSpin');
//   .remove('headSpin');
// }
