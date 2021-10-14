$(document).ready(function(){
    $("#video-btn").click(function(){
      $("#content").load("embed-videos.html #embed-videos", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });