
const LSN_BADGES = [
  {id:"quiz-social-solar",cat:"quiz",name:"ALWAYS ON AIR",code:"ON",desc:"Social Battery result.",hint:"Earn through Social Battery."},
  {id:"quiz-social-selective",cat:"quiz",name:"PRIVATE FREQUENCY",code:"PVT",desc:"Social Battery result.",hint:"Earn through Social Battery."},
  {id:"quiz-social-night",cat:"quiz",name:"AFTER-HOURS ONLY",code:"AFT",desc:"Social Battery result.",hint:"Earn through Social Battery."},
  {id:"quiz-social-ghost",cat:"quiz",name:"DO NOT DISTURB",code:"DND",desc:"Social Battery result.",hint:"Earn through Social Battery."},
  {id:"quiz-moral-law",cat:"quiz",name:"CLEAR CONSCIENCE",code:"LAW",desc:"Moral Compass result.",hint:"Earn through Moral Compass Malfunction."},
  {id:"quiz-moral-loyal",cat:"quiz",name:"LOYALTY OVERRIDE",code:"LOY",desc:"Moral Compass result.",hint:"Earn through Moral Compass Malfunction."},
  {id:"quiz-moral-gray",cat:"quiz",name:"SELECTIVE ETHICS",code:"GRY",desc:"Moral Compass result.",hint:"Earn through Moral Compass Malfunction."},
  {id:"quiz-moral-wild",cat:"quiz",name:"OFF-BOOK MORALITY",code:"OBK",desc:"Moral Compass result.",hint:"Earn through Moral Compass Malfunction."},
  {id:"quiz-text-fast",cat:"quiz",name:"LIVE TYPING INDICATOR",code:"TYP",desc:"Texting Style result.",hint:"Earn through Texting Style."},
  {id:"quiz-text-dry",cat:"quiz",name:"K.",code:"DRY",desc:"Texting Style result.",hint:"Earn through Texting Style."},
  {id:"quiz-text-essay",cat:"quiz",name:"MULTIPART TRANSMISSION",code:"TXT",desc:"Texting Style result.",hint:"Earn through Texting Style."},
  {id:"quiz-text-ghost",cat:"quiz",name:"MESSAGE RECEIVED",code:"RCV",desc:"Texting Style result.",hint:"Earn through Texting Style."},
  {id:"quiz-rumor-ignore",cat:"quiz",name:"NO COMMENT",code:"NOC",desc:"Rumor Survival result.",hint:"Earn through Rumor Survival Test."},
  {id:"quiz-rumor-fight",cat:"quiz",name:"OPEN RESPONSE",code:"RSP",desc:"Rumor Survival result.",hint:"Earn through Rumor Survival Test."},
  {id:"quiz-rumor-spin",cat:"quiz",name:"CONTROL THE NARRATIVE",code:"PR",desc:"Rumor Survival result.",hint:"Earn through Rumor Survival Test."},
  {id:"quiz-rumor-spiral",cat:"quiz",name:"SIGNAL FEEDBACK",code:"FDB",desc:"Rumor Survival result.",hint:"Earn through Rumor Survival Test."},
  {id:"network-visitor",cat:"network",name:"TUNED IN",code:"91.4",desc:"Visited Low Signal Network.",hint:"Open the Network homepage."},
  {id:"interference",cat:"network",name:"KNOWN INTERFERENCE",code:"INT",desc:"Generated a plot through Interference.",hint:"Generate your first Interference prompt."},
  {id:"arcade-oracle",cat:"arcade",name:"ASKED THE STATIC",code:"8?",desc:"Consulted the Signal Oracle.",hint:"Ask the Fortune Teller a question."},
  {id:"arcade-pet",cat:"arcade",name:"SIGNAL KEEPER",code:"PET",desc:"Adopted a Signal Pet.",hint:"Adopt a creature from Static Arcade."},
  {id:"arcade-blinkie",cat:"arcade",name:"BLINK AND MISS IT",code:"BLK",desc:"Downloaded a custom blinkie.",hint:"Make and download a blinkie."},
  {id:"arcade-button",cat:"arcade",name:"BUTTON PUSHER",code:"88×31",desc:"Made a classic web button.",hint:"Download an 88×31 button."},
  {id:"quiz-open",cat:"quiz",name:"OPEN CHANNEL",code:"OPEN",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-midnight",cat:"quiz",name:"AFTER MIDNIGHT",code:"NITE",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-pirate",cat:"quiz",name:"PIRATE FREQUENCY",code:"PRT",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-static",cat:"quiz",name:"SOFT STATIC",code:"STC",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-emergency",cat:"quiz",name:"EMERGENCY BAND",code:"SOS",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-dead",cat:"quiz",name:"DEAD AIR",code:"OFF",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-echo",cat:"quiz",name:"ECHO SIGNAL",code:"ECH",desc:"Frequency Check result.",hint:"Earn through Frequency Check."},
  {id:"quiz-runner",cat:"quiz",name:"EMOTIONAL HIT + RUN",code:"RUN",desc:"Red Flag Detector result.",hint:"Earn through Red Flag Detector."},
  {id:"quiz-fixer",cat:"quiz",name:"UNLICENSED REPAIR TECH",code:"FIX",desc:"Red Flag Detector result.",hint:"Earn through Red Flag Detector."},
  {id:"quiz-control",cat:"quiz",name:"CONTROL ROOM ACCESS",code:"CTL",desc:"Red Flag Detector result.",hint:"Earn through Red Flag Detector."},
  {id:"quiz-avoid",cat:"quiz",name:"SIGNAL UNAVAILABLE",code:"404",desc:"Red Flag Detector result.",hint:"Earn through Red Flag Detector."},
  {id:"quiz-chaos",cat:"quiz",name:"KNOWN INTERFERENCE",code:"INT",desc:"Red Flag Detector result.",hint:"Earn through Red Flag Detector."},
  {id:"quiz-soft",cat:"quiz",name:"SOFT FREQUENCY",code:"SFT",desc:"After Midnight result.",hint:"Earn through After Midnight."},
  {id:"quiz-restless",cat:"quiz",name:"INSOMNIA BAND",code:"INS",desc:"After Midnight result.",hint:"Earn through After Midnight."},
  {id:"quiz-lonely",cat:"quiz",name:"ONE LISTENER",code:"ONE",desc:"After Midnight result.",hint:"Earn through After Midnight."},
  {id:"quiz-dreamer",cat:"quiz",name:"DREAM SIGNAL",code:"DRM",desc:"After Midnight result.",hint:"Earn through After Midnight."},
  {id:"quiz-guarded",cat:"quiz",name:"ENCRYPTED LINE",code:"ENC",desc:"After Midnight result.",hint:"Earn through After Midnight."},
  {id:"quiz-captain",cat:"quiz",name:"CONTROL TOWER",code:"CTR",desc:"Emergency Contact result.",hint:"Earn through Emergency Contact."},
  {id:"quiz-medic",cat:"quiz",name:"FIRST RESPONSE",code:"MED",desc:"Emergency Contact result.",hint:"Earn through Emergency Contact."},
  {id:"quiz-wildcard",cat:"quiz",name:"UNAUTHORIZED SOLUTION",code:"WLD",desc:"Emergency Contact result.",hint:"Earn through Emergency Contact."},
  {id:"quiz-anchor",cat:"quiz",name:"STEADY SIGNAL",code:"ANC",desc:"Emergency Contact result.",hint:"Earn through Emergency Contact."},
  {id:"quiz-crisisrunner",cat:"quiz",name:"EXIT ROUTE",code:"EXT",desc:"Emergency Contact result.",hint:"Earn through Emergency Contact."},
  {id:"quiz-quiet",cat:"quiz",name:"QUIET DEVOTION",code:"QDV",desc:"Love Language result.",hint:"Earn through Love Language // Distorted."},
  {id:"quiz-possession",cat:"quiz",name:"ACTS OF POSSESSION",code:"POS",desc:"Love Language result.",hint:"Earn through Love Language // Distorted."},
  {id:"quiz-tease",cat:"quiz",name:"WEAPONIZED TEASING",code:"TEA",desc:"Love Language result.",hint:"Earn through Love Language // Distorted."},
  {id:"quiz-repair",cat:"quiz",name:"REPAIR WORK",code:"REP",desc:"Love Language result.",hint:"Earn through Love Language // Distorted."},
  {id:"quiz-presence",cat:"quiz",name:"STAYING ON THE LINE",code:"STY",desc:"Love Language result.",hint:"Earn through Love Language // Distorted."},
  {id:"quiz-chaosromance",cat:"quiz",name:"ROMANTIC INTERFERENCE",code:"ROM",desc:"Main Character Interference result.",hint:"Earn through Main Character Interference."},
  {id:"quiz-chaosfamily",cat:"quiz",name:"FAMILY STATIC",code:"FAM",desc:"Main Character Interference result.",hint:"Earn through Main Character Interference."},
  {id:"quiz-chaoscrime",cat:"quiz",name:"OFF-BOOK SIGNAL",code:"CRM",desc:"Main Character Interference result.",hint:"Earn through Main Character Interference."},
  {id:"quiz-chaoscareer",cat:"quiz",name:"WORKPLACE FEEDBACK",code:"WRK",desc:"Main Character Interference result.",hint:"Earn through Main Character Interference."},
  {id:"quiz-chaossocial",cat:"quiz",name:"PUBLIC BROADCAST",code:"SOC",desc:"Main Character Interference result.",hint:"Earn through Main Character Interference."},
  {id:"quiz-villain-mastermind",cat:"quiz",name:"THE MASTERMIND",code:"MND",desc:"Villain Era result.",hint:"Earn through Villain Era."},
  {id:"quiz-villain-revenge",cat:"quiz",name:"THE RECKONING",code:"RCK",desc:"Villain Era result.",hint:"Earn through Villain Era."},
  {id:"quiz-villain-tragic",cat:"quiz",name:"THE TRAGIC TURN",code:"TRG",desc:"Villain Era result.",hint:"Earn through Villain Era."},
  {id:"quiz-villain-chaotic",cat:"quiz",name:"AGENT OF CHAOS",code:"CHS",desc:"Villain Era result.",hint:"Earn through Villain Era."},
  {id:"quiz-foundfamily-protector",cat:"quiz",name:"THE PROTECTOR",code:"PRO",desc:"Found Family Role result.",hint:"Earn through Found Family Role."},
  {id:"quiz-foundfamily-jokester",cat:"quiz",name:"THE JOKESTER",code:"JOK",desc:"Found Family Role result.",hint:"Earn through Found Family Role."},
  {id:"quiz-foundfamily-mediator",cat:"quiz",name:"THE MEDIATOR",code:"MDR",desc:"Found Family Role result.",hint:"Earn through Found Family Role."},
  {id:"quiz-foundfamily-glue",cat:"quiz",name:"THE GLUE",code:"GLU",desc:"Found Family Role result.",hint:"Earn through Found Family Role."},
  {id:"quiz-foundfamily-wildcard",cat:"quiz",name:"THE CHAOTIC COUSIN",code:"CHC",desc:"Found Family Role result.",hint:"Earn through Found Family Role."},
  {id:"quiz-firstimpression-exact",cat:"quiz",name:"TRUE TO SPEC",code:"TTS",desc:"First Impression vs. Reality result.",hint:"Earn through First Impression vs. Reality."},
  {id:"quiz-firstimpression-opposite",cat:"quiz",name:"COMPLETE MISDIRECTION",code:"MIS",desc:"First Impression vs. Reality result.",hint:"Earn through First Impression vs. Reality."},
  {id:"quiz-firstimpression-surface",cat:"quiz",name:"SURFACE READING ONLY",code:"SRF",desc:"First Impression vs. Reality result.",hint:"Earn through First Impression vs. Reality."},
  {id:"quiz-firstimpression-slowburn",cat:"quiz",name:"SLOW REVEAL",code:"SLW",desc:"First Impression vs. Reality result.",hint:"Earn through First Impression vs. Reality."},
  {id:"quiz-breakup-ghost",cat:"quiz",name:"SIGNAL LOST",code:"LST",desc:"Breakup Style result.",hint:"Earn through Breakup Style."},
  {id:"quiz-breakup-blowup",cat:"quiz",name:"SCORCHED EARTH",code:"SCE",desc:"Breakup Style result.",hint:"Earn through Breakup Style."},
  {id:"quiz-breakup-closure",cat:"quiz",name:"FULL DEBRIEF",code:"DBF",desc:"Breakup Style result.",hint:"Earn through Breakup Style."},
  {id:"quiz-breakup-mourner",cat:"quiz",name:"STILL BROADCASTING",code:"SBC",desc:"Breakup Style result.",hint:"Earn through Breakup Style."},
  {id:"quiz-secret-vault",cat:"quiz",name:"THE VAULT",code:"VLT",desc:"Secret-Keeping Aptitude result.",hint:"Earn through Secret-Keeping Aptitude."},
  {id:"quiz-secret-leaky",cat:"quiz",name:"STRUCTURAL LEAK",code:"LEK",desc:"Secret-Keeping Aptitude result.",hint:"Earn through Secret-Keeping Aptitude."},
  {id:"quiz-secret-selective",cat:"quiz",name:"NEED TO KNOW BASIS",code:"NTK",desc:"Secret-Keeping Aptitude result.",hint:"Earn through Secret-Keeping Aptitude."},
  {id:"quiz-secret-burden",cat:"quiz",name:"OVERLOADED CIRCUIT",code:"OVL",desc:"Secret-Keeping Aptitude result.",hint:"Earn through Secret-Keeping Aptitude."},
  {id:"quiz-downfall-pride",cat:"quiz",name:"PRIDE",code:"PRD",desc:"Downfall Type result.",hint:"Earn through Downfall Type."},
  {id:"quiz-downfall-love",cat:"quiz",name:"LOVE",code:"LOV",desc:"Downfall Type result.",hint:"Earn through Downfall Type."},
  {id:"quiz-downfall-loyalty",cat:"quiz",name:"LOYALTY",code:"LOY",desc:"Downfall Type result.",hint:"Earn through Downfall Type."},
  {id:"quiz-downfall-ambition",cat:"quiz",name:"AMBITION",code:"AMB",desc:"Downfall Type result.",hint:"Earn through Downfall Type."},
  {id:"quiz-storm-hurricane",cat:"quiz",name:"HURRICANE",code:"HUR",desc:"Storm Type result.",hint:"Earn through Storm Type."},
  {id:"quiz-storm-quietfront",cat:"quiz",name:"QUIET FRONT",code:"QFT",desc:"Storm Type result.",hint:"Earn through Storm Type."},
  {id:"quiz-storm-lightning",cat:"quiz",name:"LIGHTNING STRIKE",code:"LGT",desc:"Storm Type result.",hint:"Earn through Storm Type."},
  {id:"quiz-storm-aftermath",cat:"quiz",name:"THE AFTERMATH",code:"AFM",desc:"Storm Type result.",hint:"Earn through Storm Type."},
  {id:"quiz-origin-tragedy",cat:"quiz",name:"TRAGEDY",code:"TRG",desc:"Origin Story Genre result.",hint:"Earn through Origin Story Genre."},
  {id:"quiz-origin-comedy",cat:"quiz",name:"DARK COMEDY",code:"DKC",desc:"Origin Story Genre result.",hint:"Earn through Origin Story Genre."},
  {id:"quiz-origin-mystery",cat:"quiz",name:"MYSTERY",code:"MYS",desc:"Origin Story Genre result.",hint:"Earn through Origin Story Genre."},
  {id:"quiz-origin-epic",cat:"quiz",name:"EPIC",code:"EPC",desc:"Origin Story Genre result.",hint:"Earn through Origin Story Genre."},
  {id:"quiz-group-static",cat:"quiz",name:"STATIC",code:"STC",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-wavelength",cat:"quiz",name:"WAVELENGTH",code:"WLN",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-deadair",cat:"quiz",name:"DEAD AIR",code:"DAR",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-onair",cat:"quiz",name:"ON AIR",code:"ONA",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-echo",cat:"quiz",name:"ECHO",code:"ECH",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-signalboost",cat:"quiz",name:"SIGNAL BOOST",code:"SGB",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-whitenoise",cat:"quiz",name:"WHITE NOISE",code:"WHN",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-piratesignal",cat:"quiz",name:"PIRATE SIGNAL",code:"PIR",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-backchannel",cat:"quiz",name:"BACKCHANNEL",code:"BKC",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."},
  {id:"quiz-group-longwave",cat:"quiz",name:"LONGWAVE",code:"LNG",desc:"Which Frequency Is Yours result.",hint:"Earn through Which Frequency Is Yours."}
];

const LSN = {
  getUnlocked(){
    try{return JSON.parse(localStorage.getItem("lsn_badges")||"[]")}catch(e){return[]}
  },
  unlockBadge(id){
    const list=this.getUnlocked();
    if(!list.includes(id)){
      list.push(id); localStorage.setItem("lsn_badges",JSON.stringify(list));
      const badge=LSN_BADGES.find(b=>b.id===id);
      this.toast(badge ? `BADGE UNLOCKED // ${badge.name}` : "BADGE UNLOCKED");
    }
  },
  toast(msg){
    const el=document.querySelector("[data-toast]");
    if(!el) return;
    el.textContent=msg; el.classList.add("show");
    clearTimeout(this._tt); this._tt=setTimeout(()=>el.classList.remove("show"),2600);
  }
};
window.LSN=LSN;

function setupNav(){
  const btn=document.querySelector(".nav-toggle"), nav=document.querySelector("#network-nav nav");
  if(btn&&nav) btn.addEventListener("click",()=>nav.classList.toggle("open"));
}

function setupHome(){
  if(location.pathname.endsWith("index.html") || location.pathname.endsWith("/") || !location.pathname.split("/").pop().includes(".")){
    LSN.unlockBadge("network-visitor");
  }
  const el=document.querySelector("[data-home-transmission]");
  if(el){
    const msgs=["QUIZ BOARD // FREQUENCY CHECK","STATIC ARCADE // SIGNAL PETS","INTERFERENCE // RECEIVER READY","SIGNAL REPORT // ISSUE 001","BADGE CASE // LOCAL ARCHIVE"];
    let i=0; setInterval(()=>{i=(i+1)%msgs.length; el.textContent=msgs[i]},2600);
  }
}

const INT_DATA = {
  locations:["a grocery store five minutes before closing","a stalled elevator","an almost-empty diner after midnight","a crowded house party","the parking lot outside somebody's job","a laundromat during a storm","a hotel lobby","a hospital waiting room","a neighborhood bar","an airport gate","a convenience store at 2 AM","a rooftop with bad cell service","the back seat of somebody else's car","a wedding reception","a funeral repast","a packed train platform"],
  any:["They both arrived for completely different reasons.","One of them has something the other desperately needs.","Neither planned to stay long.","They are the last two people left when something goes wrong."],
  romantic:["They agreed this was not a date. It looks exactly like a date.","One is supposed to help the other impress somebody else.","An ex-related misunderstanding puts them on the same side.","One of them accidentally admits something too honest."],
  social:["A mutual friend disappears and leaves them together.","They are forced onto the same team for something stupid.","Somebody assumes they are closer than they actually are.","They both overhear the same piece of gossip."],
  danger:["A threat nearby forces them to move together.","One of them realizes they are being followed.","Something important has been stolen.","A harmless situation suddenly becomes very much not harmless."],
  work:["One needs a favor that definitely is not in the other's job description.","A professional mistake gets pinned on both of them.","They are competing for the same opportunity.","A work event traps them in an unexpectedly personal conversation."],
  chaos:["A stranger hands them something and vanishes.","They get mistaken for people involved in somebody else's problem.","A ridiculous bet becomes immediately serious.","A small lie snowballs before either can stop it."],
  complications:["somebody's phone dies at exactly the wrong time","an ex arrives","one of them is lying about why they are there","the weather makes leaving impossible","somebody recognizes them","money goes missing","a third person starts asking questions","one of them is already angry about something unrelated","they have to pretend to know each other better than they do","a secret slips out in front of the wrong person"],
  twists:["One character owes the other a favor after this.","Nobody outside the scene can know what happened.","They discover they have met before and remember it differently.","The obvious villain is actually helping.","Whatever happens creates a problem for tomorrow.","They have exactly twenty minutes before somebody else arrives."]
};

function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}

function setupInterference(){
  const root=document.querySelector("[data-interference]");
  if(!root) return;
  let mode="any";
  root.querySelectorAll("[data-mode]").forEach(btn=>btn.addEventListener("click",()=>{
    root.querySelectorAll("[data-mode]").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active"); mode=btn.dataset.mode;
  }));

  const components=root.querySelector("[data-int-components]"), actions=root.querySelector("[data-int-actions]");
  const state={};

  function render(){
    const a=root.querySelector("[data-char-a]").value.trim()||"Character One";
    const b=root.querySelector("[data-char-b]").value.trim()||"Character Two";
    state.location=pick(INT_DATA.locations);
    state.setup=pick(INT_DATA[mode==="any"?"any":mode]);
    state.complication=pick(INT_DATA.complications);
    state.twist=pick(INT_DATA.twists);
    state.a=a;state.b=b;
    root.querySelector("[data-int-id]").textContent=`INT-${Math.floor(1000+Math.random()*8999)}`;
    root.querySelector("[data-int-title]").textContent=`${a.toUpperCase()} × ${b.toUpperCase()}`;
    root.querySelector("[data-int-summary]").textContent=`Signal collision detected in ${state.location}.`;
    root.querySelector("[data-int-location]").textContent=state.location;
    root.querySelector("[data-int-setup]").textContent=state.setup;
    root.querySelector("[data-int-complication]").textContent=state.complication;
    root.querySelector("[data-int-twist]").textContent=state.twist;
    components.classList.remove("hidden");actions.classList.remove("hidden");
    document.querySelector("[data-int-level]").textContent=String(Math.floor(4+Math.random()*6)).padStart(2,"0");
    LSN.unlockBadge("interference");
  }

  root.querySelector("[data-generate-int]").addEventListener("click",render);
  root.querySelector("[data-reroll-one]").addEventListener("click",()=>{
    state.complication=pick(INT_DATA.complications);
    root.querySelector("[data-int-complication]").textContent=state.complication;
  });
  root.querySelector("[data-copy-int]").addEventListener("click",async()=>{
    const text=`${state.a} × ${state.b}\nLocation: ${state.location}\nSetup: ${state.setup}\nComplication: ${state.complication}\nOptional twist: ${state.twist}`;
    try{await navigator.clipboard.writeText(text); LSN.toast("PROMPT COPIED // SIGNAL SAVED")}catch(e){LSN.toast("COPY FAILED // SELECT MANUALLY")}
  });

  const quick=document.querySelector("[data-quick-chaos]");
  if(quick){
    const items=["wrong number","fake date","locked out","missed flight","witnessed something","unexpected sleepover"];
    quick.innerHTML=items.map((x,i)=>`<button data-quick="${i}"><b>${String(i+1).padStart(2,"0")}</b><span>${x.toUpperCase()}</span><small>ROLL ↗</small></button>`).join("");
    quick.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
      root.querySelector("[data-char-a]").value="";
      root.querySelector("[data-char-b]").value="";
      root.scrollIntoView({behavior:"smooth"});
      render();
    }));
  }
}

function setupBlinkie(){
  const root=document.querySelector("[data-blinkie]"); if(!root)return;
  const canvas=root.querySelector("canvas"),ctx=canvas.getContext("2d");
  const styles={
    static:["#0A0A0A","#D6E85C","#7A6FC4"],
    hotline:["#12070B","#E85E7A","#FB8B24"],
    night:["#080A12","#7A6FC4","#5FC9D6"],
    warning:["#0B0B08","#D98E3B","#E85E7A"],
    soft:["#100D12","#D4A6BD","#9A8FE0"],
    dusk:["#0C0A10","#7A5CE8","#E85CA8"],
    mono:["#0A0A0A","#E4E6EA","#9498A0"],
    dream:["#0B0910","#5FC9D6","#D6E85C"],
    ember:["#0D0806","#FB8B24","#E85E7A"],
    grp_static:["#0A0A08","#D6E85C","#7A5CE8"],
    grp_wavelength:["#0C0810","#9055A2","#D499B9"],
    grp_deadair:["#0A0A05","#EDFF86","#604080"],
    grp_onair:["#0C0806","#E8C25C","#E85C5C"],
    grp_echo:["#0C0605","#FB8B24","#D90368"],
    grp_signalboost:["#05080C","#FFEA3D","#3DDCFF"],
    grp_whitenoise:["#0A0A08","#D8CBB0","#8FA88C"],
    grp_piratesignal:["#0C0508","#FF4788","#5D94AC"],
    grp_backchannel:["#08090A","#B39C4D","#768948"],
    grp_longwave:["#08090C","#D0ADA7","#466EA0"]
  };
  const sizes={standard:{w:600,h:80},wide:{w:800,h:128}};
  function draw(){
    const sizeKey=root.querySelector("[data-blinkie-size]")?.value||"standard";
    const size=sizes[sizeKey]||sizes.standard;
    if(canvas.width!==size.w||canvas.height!==size.h){canvas.width=size.w;canvas.height=size.h}
    const text=root.querySelector("[data-blinkie-text]").value||"LOW SIGNAL";
    const icon=root.querySelector("[data-blinkie-icon]").value;
    const [bg,a,b]=styles[root.querySelector("[data-blinkie-style]").value]||styles.static;
    ctx.fillStyle=bg;ctx.fillRect(0,0,size.w,size.h);
    if(root.querySelector("[data-blinkie-texture]")?.checked){
      ctx.fillStyle="rgba(255,255,255,.06)";
      for(let y=7;y<size.h-6;y+=7){for(let x=7;x<size.w-6;x+=7){ctx.fillRect(x,y,1,1)}}
    }
    const grad=ctx.createLinearGradient(0,0,size.w,0);grad.addColorStop(0,a);grad.addColorStop(1,b);
    const big=size.h>100;
    ctx.strokeStyle=grad;ctx.lineWidth=big?10:8;ctx.strokeRect(4,4,size.w-8,size.h-8);
    ctx.fillStyle=grad;
    for(let x=20;x<size.w-20;x+=big?36:28)ctx.fillRect(x,size.h*.17,big?15:12,big?5:4);
    ctx.font=`700 ${big?46:34}px monospace`;ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.fillStyle="#F0F1F2";ctx.fillText(`${icon} ${text.toUpperCase()} ${icon}`,size.w/2,size.h/2+2);
  }
  root.querySelectorAll("input,select").forEach(x=>x.addEventListener("input",draw));
  root.querySelector("[data-download-blinkie]").addEventListener("click",()=>{
    const a=document.createElement("a");a.download="low-signal-blinkie.png";a.href=canvas.toDataURL("image/png");a.click();
    LSN.unlockBadge("arcade-blinkie");
  }); draw();
}


function setupPets(){
  const root=document.querySelector("[data-pets]");
  if(!root||typeof LSN_PETS==="undefined")return;
  let selected=null;
  const discovered=new Set();
  const cat=root.querySelector("[data-pet-catalog]");
  const adoptBtn=root.querySelector("[data-adopt-pet]");
  const nameInput=root.querySelector("[data-pet-name]");

  function showEmpty(){
    root.querySelector("[data-pet-visual]").innerHTML="";
    root.querySelector("[data-pet-species]").textContent="???";
    root.querySelector("[data-pet-trait]").textContent="scan the frequency to reveal a creature.";
    const r=root.querySelector("[data-pet-rarity]");
    r.textContent="UNKNOWN // STATIC";
    r.style.color="#8C8A7C";
    if(adoptBtn){adoptBtn.disabled=true;adoptBtn.classList.add("is-disabled")}
    if(nameInput) nameInput.disabled=true;
  }

  function show(p){
    root.querySelector("[data-pet-visual]").innerHTML=lsnPetSvg(p,180);
    root.querySelector("[data-pet-species]").textContent=p.name.toUpperCase();
    root.querySelector("[data-pet-trait]").textContent=p.trait;
    const r=root.querySelector("[data-pet-rarity]");
    r.textContent=`${p.rarity.toUpperCase()} // ${p.mood.toUpperCase()}`;
    r.style.color=LSN_RARITY_COLORS[p.rarity]||"#9498A0";
    if(adoptBtn){adoptBtn.disabled=false;adoptBtn.classList.remove("is-disabled")}
    if(nameInput) nameInput.disabled=false;
  }

  function renderCatalog(){
    cat.innerHTML=LSN_PETS.filter(p=>p.id!=="summer-signal"||new Date().getMonth()===7).map(p=>{
      const found=discovered.has(p.id);
      if(!found){
        return `<button class="locked" disabled title="scan to discover">
          <span class="pet-thumb pet-thumb-locked">?</span>
          <strong>UNKNOWN SIGNAL</strong>
          <small>${p.rarity.toUpperCase()}</small>
        </button>`;
      }
      return `<button class="${selected&&p.id===selected.id?"active":""}" data-pet="${p.id}">
        <span class="pet-thumb">${lsnPetSvg(p,72)}</span>
        <strong>${p.name}</strong>
        <small style="color:${LSN_RARITY_COLORS[p.rarity]||"#9498A0"}">${p.rarity.toUpperCase()}</small>
      </button>`;
    }).join("");
    cat.querySelectorAll("button[data-pet]").forEach(btn=>btn.addEventListener("click",()=>{
      selected=lsnPetById(btn.dataset.pet);renderCatalog();show(selected);
    }));
  }

  root.querySelector("[data-scan-pet]").addEventListener("click",()=>{
    selected=lsnWeightedPet();
    discovered.add(selected.id);
    renderCatalog();show(selected);
    LSN.toast(`WILD SIGNAL FOUND // ${selected.name.toUpperCase()}`);
  });

  root.querySelector("[data-adopt-pet]").addEventListener("click",()=>{
    if(!selected){LSN.toast("SCAN FOR A PET FIRST");return}
    const name=root.querySelector("[data-pet-name]").value.trim()||selected.name;
    lsnSavePet({uid:"pet-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),petId:selected.id,name,adoptedAt:new Date().toISOString()});

    const c=document.createElement("canvas");c.width=1000;c.height=700;const x=c.getContext("2d");
    x.fillStyle="#0A0A0A";x.fillRect(0,0,c.width,c.height);
    const g=x.createLinearGradient(0,0,1000,0);g.addColorStop(0,selected.palette[0]);g.addColorStop(.5,selected.palette[1]);g.addColorStop(1,selected.palette[2]);
    x.fillStyle=g;x.fillRect(55,55,890,8);
    x.strokeStyle="#242428";x.lineWidth=3;x.strokeRect(55,55,890,590);
    x.font="700 24px monospace";x.fillStyle="#9498A0";x.fillText("LOW SIGNAL NETWORK // ADOPTION CERTIFICATE",85,120);
    lsnDrawPetCanvas(x,selected,85,170,250);
    x.font="700 58px Arial";x.fillStyle="#F0F1F2";x.fillText(name.toUpperCase().slice(0,18),390,270);
    x.font="700 25px monospace";x.fillStyle=selected.palette[0];x.fillText(selected.name.toUpperCase(),390,320);
    x.font="22px monospace";x.fillStyle=LSN_RARITY_COLORS[selected.rarity]||"#9498A0";x.fillText(selected.rarity.toUpperCase(),390,362);
    x.font="24px Arial";x.fillStyle="#9498A0";x.fillText(selected.trait,390,415);
    x.font="20px monospace";x.fillStyle="#D98E3B";x.fillText("OFFICIALLY TUNED TO 91.4 FM",85,610);
    const a=document.createElement("a");a.download=(name.toLowerCase().replace(/[^a-z0-9]+/g,"-")||"signal-pet")+".png";a.href=c.toDataURL("image/png");a.click();

    LSN.unlockBadge("arcade-pet");
    LSN.toast(`ADOPTED // ${name.toUpperCase()}`);
  });

  renderCatalog();showEmpty();
}

const ORACLE_ANSWERS={
  yes:[
    "YES. SUSPICIOUSLY FAST, TOO.","SIGNAL IS CLEAR. DO IT.","YES, AND THEY ALREADY KNOW.",
    "ALL FREQUENCIES AGREE. GO.","YES. STOP OVERTHINKING IT.", "YES.", "HELL YES."
  ],
  no:[
    "ABSOLUTELY NOT. STAND UP.","NO. HANG UP THE PHONE.","STATIC SAYS NO. LISTEN TO IT.",
    "THE NETWORK DECLINES TO BE INVOLVED.","BAD IDEA. FULL STOP.", "NO.", "HELL NO."
  ],
  maybe:[
    "ASK AGAIN AFTER MIDNIGHT.","SIGNAL TOO WEAK TO TELL.","WAIT TWO DAYS, THEN DECIDE.",
    "COULD GO EITHER WAY.","THE ANSWER IS IN THE TEXT YOU KEEP REREADING.", "YOU KNOW THE ANSWER."
  ]
};
function pickOracleAnswer(){
  const cats=Object.keys(ORACLE_ANSWERS);
  const cat=cats[Math.floor(Math.random()*cats.length)];
  return {cat,text:pick(ORACLE_ANSWERS[cat])};
}
function setupOracle(){
  const root=document.querySelector("[data-oracle]");if(!root)return;
  root.querySelector("[data-oracle-ask]").addEventListener("click",()=>{
    const q=root.querySelector("[data-oracle-question]").value.trim();
    const out=root.querySelector("[data-oracle-answer]");
    if(!q){out.textContent="ASK A QUESTION FIRST.";return}
    out.textContent="TUNING...";root.querySelector("[data-oracle-symbol]").textContent="⌁";
    setTimeout(()=>{
      const a=pickOracleAnswer();
      out.textContent=a.text;
      root.querySelector("[data-oracle-symbol]").textContent=a.cat==="yes"?"✓":a.cat==="no"?"✕":"?";
      const tag=root.querySelector("[data-oracle-tag]");
      if(tag) tag.textContent=a.cat.toUpperCase();
      LSN.unlockBadge("arcade-oracle");
    },600);
  });
}


function setupBadges(){
  const grid=document.querySelector("[data-badge-grid]");if(!grid)return;
  const filters=document.querySelectorAll("[data-badge-filter]");
  function render(filter="all"){
    const unlocked=LSN.getUnlocked();
    const list=LSN_BADGES.filter(b=>filter==="all"||b.cat===filter);
    grid.innerHTML=list.map(b=>{
      const yes=unlocked.includes(b.id);
      return `<article class="badge-card ${yes?"unlocked":"locked"}" data-cat="${b.cat}">
        <div class="badge-emblem"><span>${yes?b.code:"??"}</span></div>
        <small>${b.cat.toUpperCase()} // ${yes?"UNLOCKED":"LOCKED"}</small>
        <h3>${yes?b.name:"UNKNOWN SIGNAL"}</h3>
        <p>${yes?b.desc:b.hint}</p>
      </article>`;
    }).join("");
    document.querySelector("[data-badge-count]").textContent=unlocked.length;
    document.querySelector("[data-badge-total]").textContent=LSN_BADGES.length;
  }
  filters.forEach(btn=>btn.addEventListener("click",()=>{
    filters.forEach(x=>x.classList.remove("active"));btn.classList.add("active");render(btn.dataset.badgeFilter);
  })); render();

  const resetBtn=document.querySelector("[data-reset-badges]");
  if(resetBtn) resetBtn.addEventListener("click",()=>{
    if(confirm("Reset every locally unlocked badge on this browser? This can't be undone.")){
      localStorage.removeItem("lsn_badges");
      const active=document.querySelector("[data-badge-filter].active");
      render(active?active.dataset.badgeFilter:"all");
      LSN.toast("LOCAL BADGES RESET");
    }
  });
}




function setupCompatibility(){
  const root=document.querySelector("[data-compat]");if(!root)return;
  root.querySelector("[data-compat-run]").addEventListener("click",()=>{
    const av=root.querySelector("[data-compat-a]").value.trim();
    const bv=root.querySelector("[data-compat-b]").value.trim();
    if(!av||!bv){LSN.toast("TWO SIGNALS REQUIRED");return}
    const key=(av.toLowerCase()+"|"+bv.toLowerCase()).split("").reduce((s,c)=>((s*31)+c.charCodeAt(0))>>>0,7);
    const score=35+(key%66);
    let title,copy;
    if(score>=90){title="DANGEROUSLY COMPATIBLE";copy="The signal is clear. Whether that is good news is another question."}
    else if(score>=75){title="STRONG RECEPTION";copy="Easy chemistry with enough friction to keep the plot alive."}
    else if(score>=60){title="WORKABLE FREQUENCY";copy="Not effortless, but there is definitely something worth tuning."}
    else if(score>=45){title="CROSSED WIRES";copy="Communication may require subtitles and several arguments."}
    else{title="ACTIVE INTERFERENCE";copy="This may be terrible. That does not mean it will be boring."}
    root.querySelector("[data-compat-score]").textContent=score+"%";
    root.querySelector("[data-compat-title]").textContent=title;
    root.querySelector("[data-compat-copy]").textContent=copy;
  });
}

function setupButtonMaker(){
  const root=document.querySelector("[data-button-maker]");if(!root)return;
  const canvas=root.querySelector("[data-button-canvas]"),ctx=canvas.getContext("2d");
  const colors={
    amber:"#D98E3B",cyan:"#5FC9D6",violet:"#7A6FC4",rose:"#E85E7A",lime:"#D6E85C",
    mint:"#5AC88C",slate:"#9498A0",frost:"#D4A6BD",ember:"#FB8B24",
    grp_static:"#D6E85C",grp_wavelength:"#9055A2",grp_deadair:"#EDFF86",grp_onair:"#E8C25C",
    grp_echo:"#FB8B24",grp_signalboost:"#FFEA3D",grp_whitenoise:"#D8CBB0",grp_piratesignal:"#FF4788",
    grp_backchannel:"#B39C4D",grp_longwave:"#D0ADA7"
  };
  const sizes={classic:{w:352,h:124},wide:{w:600,h:124}};
  function draw(){
    const sizeKey=root.querySelector("[data-button-size]")?.value||"classic";
    const size=sizes[sizeKey]||sizes.classic;
    if(canvas.width!==size.w||canvas.height!==size.h){canvas.width=size.w;canvas.height=size.h}
    const text=root.querySelector("[data-button-text]").value||"LOW SIGNAL";
    const sub=root.querySelector("[data-button-subtext]").value||"91.4 FM";
    const accent=colors[root.querySelector("[data-button-style]").value]||colors.amber;
    const border=root.querySelector("[data-button-border]")?.value||"solid";
    const icon=root.querySelector("[data-button-icon]")?.value||"";
    const maxChars=size.w>500?26:18;
    ctx.fillStyle="#080808";ctx.fillRect(0,0,size.w,size.h);
    ctx.strokeStyle=accent;ctx.lineWidth=8;
    ctx.setLineDash(border==="dashed"?[14,10]:[]);
    ctx.strokeRect(4,4,size.w-8,size.h-8);
    ctx.setLineDash([]);
    ctx.fillStyle=accent;ctx.fillRect(18,18,14,size.h-36);
    let textX=48;
    if(icon){ctx.font="700 28px Arial";ctx.fillStyle=accent;ctx.fillText(icon,textX,58);textX+=32}
    ctx.font="700 34px Arial";ctx.fillStyle="#E4E6EA";ctx.fillText(text.toUpperCase().slice(0,maxChars),textX,58);
    ctx.font="700 19px monospace";ctx.fillStyle=accent;ctx.fillText(sub.toUpperCase().slice(0,size.w>500?22:14),48,92);
  }
  root.querySelectorAll("input,select").forEach(el=>el.addEventListener("input",draw));
  root.querySelector("[data-download-button]").addEventListener("click",()=>{
    const a=document.createElement("a");a.download="low-signal-88x31.png";a.href=canvas.toDataURL("image/png");a.click();LSN.unlockBadge("arcade-button");
  });draw();
}

function setupPetCollection(){
  const grid=document.querySelector("[data-pet-collection-grid]");if(!grid||typeof lsnPetCollection!=="function")return;
  const list=lsnPetCollection(),empty=document.querySelector("[data-empty-pets]");
  const count=document.querySelector("[data-pet-count]");if(count)count.textContent=list.length;
  if(!list.length){empty&&empty.classList.remove("hidden");return}
  grid.innerHTML=list.slice().reverse().map(ad=>{
    const pet=lsnPetById(ad.petId);if(!pet)return"";
    const date=new Date(ad.adoptedAt).toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
    return `<article class="pet-collection-card"><div class="collection-pet-visual">${lsnPetSvg(pet,130)}</div><small>${pet.rarity.toUpperCase()} // ${date.toUpperCase()}</small><h3>${ad.name}</h3><strong>${pet.name}</strong><p>${pet.trait}</p></article>`;
  }).join("");
  const btn=document.querySelector("[data-export-pets]");
  if(btn)btn.addEventListener("click",()=>{
    const blob=new Blob([JSON.stringify(list,null,2)],{type:"application/json"});
    const a=document.createElement("a");a.download="low-signal-pet-collection.json";a.href=URL.createObjectURL(blob);a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  });
}

function setupSpeciesIndex(){
  const grid=document.querySelector("[data-species-grid]");
  if(!grid||typeof LSN_PETS==="undefined")return;
  const count=document.querySelector("[data-species-count]");
  if(count)count.textContent=LSN_PETS.length;
  grid.innerHTML=LSN_PETS.map(p=>{
    const seasonalNote=p.rarity==="seasonal"?`<small style="color:var(--amber)">SEASONAL // ${p.id==="summer-signal"?"AUGUST ONLY":p.id==="frost-static"?"DECEMBER ONLY":"LIMITED WINDOW"}</small>`:"";
    return `<article class="pet-collection-card"><div class="collection-pet-visual">${lsnPetSvg(p,130)}</div><small style="color:${LSN_RARITY_COLORS[p.rarity]||"#9498A0"}">${p.rarity.toUpperCase()}</small><h3>${p.name}</h3><strong>${p.mood.toUpperCase()}</strong><p>${p.trait}</p>${seasonalNote}</article>`;
  }).join("");
  const toggle=document.querySelector("[data-toggle-species]");
  const section=document.querySelector("[data-species-index]");
  if(toggle&&section){
    toggle.addEventListener("click",()=>{
      const open=section.classList.toggle("hidden")===false;
      toggle.textContent=open?"HIDE SPECIES INDEX ↑":"VIEW SPECIES INDEX ↓";
      if(open) section.scrollIntoView({behavior:"smooth",block:"start"});
    });
  }
}

function setupClaimCenter(){
  const root=document.querySelector("[data-claim-checks]");if(!root)return;
  const unlocked=LSN.getUnlocked(),items=LSN_BADGES.filter(b=>unlocked.includes(b.id));
  const count=document.querySelector("[data-claim-count]");if(count)count.textContent=items.length;
  if(!items.length){root.innerHTML='<p class="muted">No local badges unlocked yet.</p>';return}
  root.innerHTML=items.map(b=>`<label class="claim-check"><input type="checkbox" value="${b.id}" checked><span><b>${b.name}</b><small>${b.cat.toUpperCase()} // ${b.code}</small></span></label>`).join("");
  let claimText="";
  function build(){
    const selected=[...root.querySelectorAll("input:checked")].map(x=>LSN_BADGES.find(b=>b.id===x.value)).filter(Boolean);
    const character=document.querySelector("[data-claim-character]").value.trim()||"CHARACTER NAME";
    const profile=document.querySelector("[data-claim-profile]").value.trim()||"PROFILE URL";
    claimText=`LOW SIGNAL NETWORK BADGE CLAIM\n\nCharacter: ${character}\nProfile: ${profile}\n\nBadges:\n${selected.map(b=>`- ${b.name} [${b.code}]`).join("\n")}\n\nLocal receipt generated: ${new Date().toLocaleString()}`;
    document.querySelector("[data-claim-output]").textContent=claimText;
  }
  document.querySelector("[data-build-claim]").addEventListener("click",build);
  document.querySelector("[data-copy-claim]").addEventListener("click",async()=>{if(!claimText)build();try{await navigator.clipboard.writeText(claimText);LSN.toast("CLAIM COPIED")}catch(e){LSN.toast("COPY FAILED")}});
  document.querySelector("[data-download-proof]").addEventListener("click",()=>{
    if(!claimText)build();
    const lines=claimText.split("\n"),c=document.createElement("canvas");c.width=1000;c.height=1200;const x=c.getContext("2d");
    x.fillStyle="#0A0A0A";x.fillRect(0,0,c.width,c.height);x.fillStyle="#D98E3B";x.fillRect(50,50,900,8);x.strokeStyle="#242428";x.lineWidth=3;x.strokeRect(50,50,900,1100);
    x.font="700 26px monospace";x.fillStyle="#5FC9D6";x.fillText("LOW SIGNAL NETWORK // BADGE CLAIM",85,120);x.font="22px monospace";x.fillStyle="#E4E6EA";
    let y=175;for(const line of lines){x.fillText(line.slice(0,68),85,y);y+=35;if(y>1090)break}
    const a=document.createElement("a");a.download="low-signal-badge-claim.png";a.href=c.toDataURL("image/png");a.click();
  });
}

document.addEventListener("DOMContentLoaded",()=>{setupNav();setupHome();setupInterference();setupBlinkie();setupPets();setupOracle();setupBadges();setupCompatibility();setupButtonMaker();setupPetCollection();setupSpeciesIndex();setupClaimCenter();});
