var twitchChannels = ["gamestop", "roblox"]

window.setInterval(function(){
$.getJSON("https://api.twitch.tv/kraken/streams/" + twitchChannels, function(channel) {
   if (channel["stream"] == null) {

   } else {
$("#WikiaRailWrapper").prepend(<div>twitchChannels + "is live!"</div>)
   }
});
}, 5000);


$( document ).ready(function() {
$("#WikiHeader").append("<div style="color:#EEEEEE;background-color:#000000;text-align:center;">Follow Berezaa on Twitter @Berezagames</div>");
});
