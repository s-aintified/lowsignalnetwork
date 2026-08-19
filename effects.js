(function(){
  var GLYPHS = "!<>-_\\/[]{}—=+*^?#";

  function scrambleIn(el){
    var real = el.textContent;
    var len = real.length;
    var frame = 0;
    var totalFrames = 14;
    var timer = setInterval(function(){
      frame++;
      var revealCount = Math.floor((frame/totalFrames)*len);
      var out = "";
      for(var i=0;i<len;i++){
        if(real[i]===" "){out+=" ";continue}
        out += i<revealCount ? real[i] : GLYPHS[Math.floor(Math.random()*GLYPHS.length)];
      }
      el.textContent = out;
      if(frame>=totalFrames){
        clearInterval(timer);
        el.textContent = real;
      }
    }, 45);
  }

  function initTuneIn(){
    document.querySelectorAll("[data-glitch-in]").forEach(function(el, i){
      setTimeout(function(){ scrambleIn(el); }, 120 + i*180);
    });
  }

  var CARD_SELECTOR = [
    ".channel-card",".quiz-list-card",".badge-card",".report-story",".issue-card",
    ".pet-collection-card",".home-quiz-tease",".home-oracle",".arcade-tool",".claim-form",
    ".claim-output",".tool-controls",".tool-preview",".pet-adoption",".oracle-console",
    ".int-controls",".int-display",".compat-inputs",".compat-result",".now-screen",
    ".ls2-pin",".ls2-mix"
  ].join(",");

  function randomGlitchLoop(){
    var targets = document.querySelectorAll(CARD_SELECTOR);
    if(!targets.length) return;
    function fire(){
      var el = targets[Math.floor(Math.random()*targets.length)];
      el.classList.remove("ls-glitching");
      void el.offsetWidth; // restart animation
      el.classList.add("ls-glitching");
      setTimeout(function(){ el.classList.remove("ls-glitching"); }, 220);
      var next = 2600 + Math.random()*4600;
      setTimeout(fire, next);
    }
    setTimeout(fire, 1800);
  }

  document.addEventListener("DOMContentLoaded", function(){
    initTuneIn();
    randomGlitchLoop();
  });
})();
