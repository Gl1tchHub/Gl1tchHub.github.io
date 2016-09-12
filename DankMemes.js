window.setInterval(function(){
$.getJSON("https://api.twitch.tv/kraken/streams/" + "evanbear1", function(channel) {
   if (channel["stream"] == null) {
$("#WikiaRailWrapper").prepend("Fuck")
   } else {
   }
});
}, 5000);


$( document ).ready(function() {
$("#WikiHeader").append("<div style="color:#EEEEEE;background-color:#000000;text-align:center;">Follow Berezaa on Twitter @Berezagames</div>");
});
