$(document).ready(function(){
  console.log("ready");

//these functions add specific transitions and animations on click for all of my suit parts and menu items//

  $(".helmet").click(function() {
    $(".interactiveEMU").toggleClass('headSpin');
    $(".helmetInfo").toggleClass('exitLeft');
    $(".curious").remove();
   });

   $("#helmetMenu").click(function() {
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
    $(".backpackInfo").toggleClass('exitLeft');
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
