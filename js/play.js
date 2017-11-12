var ctrlVideo = document.getElementById("banner-video"); 

$('button').click(function(){
  if ($('button').hasClass("play")){
    
        ctrlVideo.play();
    $(".shadow").hide();
    $(".textvideo").hide();
      $(".pause").show();
      $(".play").hide();
      $(".closevid").show();      

  } 
});
$(".pause").click(function(){
  if ($('button').hasClass("pause")){
    
        ctrlVideo.pause();
      $(".play").show();
  } 
});