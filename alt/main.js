
var portrait = document.getElementById("portrait");
var mailicon = document.getElementById("mailicon");
var youtubeicon = document.getElementById("youtubeicon");
var instagramicon = document.getElementById("instagramicon");
var githubicon = document.getElementById("githubicon");
var linkedinicon = document.getElementById("linkedinicon");
var content = document.getElementsByClassName("content");

portrait.addEventListener("click", function(){
    if(portrait.className=="Portrait"){

        portrait.className="portraitClicked";
        mailicon.className="mailClicked icons";
        youtubeicon.className="ytClicked icons";
        instagramicon.className="instClicked icons";
        githubicon.className="gitClicked icons";
        linkedinicon.className="linkClicked icons";
        


    }  else if(portrait.className=="portraitClicked"){

        portrait.className="portraitDeClicked";
        mailicon.className="mailDeClicked icons";
        youtubeicon.className="ytDeClicked icons";
        instagramicon.className="instDeClicked icons";
        githubicon.className="gitDeClicked icons";
        linkedinicon.className="linkDeClicked icons";
        console.log("declicked");
        setTimeout(function(){
            portrait.className="Portrait";
        console.log("blinking");
            },1000)
    }
})
window.addEventListener("resize", function(){
    if (screen.width < 450) {
    
        alert('mobil');
    if (content.className=="content desktop") {
        content.className="content mobil";
    }
        // changes to mobil view
    }
    else if (content.className=="content mobil"){
    
        alert('desktop');
        content.className="content desktop";
        // changes to desktop view
    }
})
