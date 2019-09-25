var portrait = document.getElementById("portrait");
var mailicon = document.getElementById("mailicon");
var youtubeicon = document.getElementById("youtubeicon");
var instagramicon = document.getElementById("instagramicon");
var githubicon = document.getElementById("githubicon");
var linkedinicon = document.getElementById("linkedinicon");

portrait.addEventListener("click", function(){
    if(portrait.className=="portrait"){

        portrait.className="portraitClicked portrait";
        mailicon.className="mailClicked icons";
        youtubeicon.className="ytClicked icons";
        instagramicon.className="instClicked icons";
        githubicon.className="gitClicked icons";
        linkedinicon.className="linkClicked icons";
        


    }  else if(portrait.className=="portraitClicked portrait"){

        portrait.className="portraitDeClicked portrait";
        mailicon.className="mailDeClicked icons";
        youtubeicon.className="ytDeClicked icons";
        instagramicon.className="instDeClicked icons";
        githubicon.className="gitDeClicked icons";
        linkedinicon.className="linkDeClicked icons";
        console.log("declicked");
        setTimeout(function(){
            portrait.className="portrait";
        console.log("blinking");
            },1000)
    }
})