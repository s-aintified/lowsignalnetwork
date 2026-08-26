
const LSN_PETS = [
  {id:"static-sprite",name:"Static Sprite",rarity:"common",weight:38,palette:["#D6E85C","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"feeds on unattended browser tabs",mood:"cheerful interference",matrix:["00111100","01222210","12222221","12233221","12222221","12233221","01222210","00111100"]},
  {id:"dial-bug",name:"Dial Bug",rarity:"common",weight:30,palette:["#D98E3B","#E4E6EA","#5FC9D6","#0A0A0A"],trait:"turns every knob when you leave the room",mood:"nosy",matrix:["01000010","01111110","12222221","12322321","12222221","12233221","01222210","01011010"]},
  {id:"dead-air-ghost",name:"Dead Air Ghost",rarity:"uncommon",weight:16,palette:["#9498A0","#E4E6EA","#7A6FC4","#0A0A0A"],trait:"appears when nobody texts back",mood:"haunting the group chat",matrix:["00111100","01222210","12222221","12322321","12222221","12222221","12211221","11011011"]},
  {id:"antenna-gremlin",name:"Antenna Gremlin",rarity:"uncommon",weight:10,palette:["#E85E7A","#D98E3B","#E4E6EA","#0A0A0A"],trait:"steals signal and loose change",mood:"suspiciously employed",matrix:["10000001","01011010","01111110","12222221","12322321","12222221","01222210","01011010"]},
  {id:"night-moth",name:"Night Moth",rarity:"rare",weight:4,palette:["#7A6FC4","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"broadcasts exclusively after 1 AM",mood:"soft but unavailable",matrix:["10011001","11011011","01111110","12222221","12322321","01222210","00122100","01000010"]},
  {id:"beep-box",name:"Beep Box",rarity:"rare",weight:1.5,palette:["#5FC9D6","#D6E85C","#E4E6EA","#0A0A0A"],trait:"has one thought and repeats it proudly",mood:"beep",matrix:["11111111","12222221","12322321","12222221","12233221","12222221","11111111","01011010"]},
  {id:"glitch-cat",name:"Glitch Cat",rarity:"glitched",weight:.5,palette:["#E85E7A","#5FC9D6","#D6E85C","#0A0A0A"],trait:"exists in three browser tabs at once",mood:"404 purring",matrix:["11000011","12111121","12222221","12322321","12222221","12233221","01222210","10100101"]},
  {id:"buffer-slug",name:"Buffer Slug",rarity:"common",weight:25,palette:["#9FBF4A","#4F8C86","#E4E6EA","#0A0A0A"],trait:"leaves a trail of half-loaded pages",mood:"perpetually loading",matrix:["00000000","00222200","02222220","12222221","12233221","01222210","00311300","00000000"]},
  {id:"cable-worm",name:"Cable Worm",rarity:"common",weight:20,palette:["#D98E3B","#7A6FC4","#E4E6EA","#0A0A0A"],trait:"lives inside tangled aux cords",mood:"knotted but content",matrix:["02000000","02200000","01120000","00113000","00011300","00001130","00000113","00000012"]},
  {id:"loop-owl",name:"Loop Owl",rarity:"uncommon",weight:8,palette:["#5FC9D6","#9498A0","#E4E6EA","#0A0A0A"],trait:"repeats the last thing it heard, forever",mood:"stuck on repeat",matrix:["00111100","01222210","12322321","12222221","12233221","01222210","00133100","01000010"]},
  {id:"vinyl-crackle",name:"Vinyl Crackle",rarity:"rare",weight:3,palette:["#D6E85C","#E85E7A","#E4E6EA","#0A0A0A"],trait:"sounds better than it should for something broken",mood:"warm distortion",matrix:["00222200","02333320","23311332","23133132","23311332","02333320","00222200","00011000"]},
  {id:"dead-pixel",name:"Dead Pixel",rarity:"glitched",weight:.4,palette:["#E4E6EA","#7A6FC4","#D6E85C","#0A0A0A"],trait:"technically should not be visible",mood:"rendering error",matrix:["00000000","00030000","00000000","03000030","00000000","00030000","00000000","00000300"]},
  {id:"summer-signal",name:"Summer Signal",rarity:"super",weight:0,month:7,palette:["#FB8B24","#D6E85C","#5FC9D6","#0A0A0A"],trait:"collects warm nights and parking-lot conversations",mood:"august forever",matrix:["00100100","11111111","01222210","12322321","12222221","12233221","01222210","10100101"]},
  {id:"dial-deer",name:"Dial Tone Deer",rarity:"common",weight:22,palette:["#5FC9D6","#D98E3B","#E4E6EA","#0A0A0A"],trait:"hums the same three notes forever",mood:"patiently repetitive",matrix:["00100100","01011010","01111110","12222221","12322321","12222221","01222210","00100100"]},
  {id:"pixel-pigeon",name:"Pixel Pigeon",rarity:"common",weight:18,palette:["#E4E6EA","#D98E3B","#5FC9D6","#0A0A0A"],trait:"delivers messages nobody asked for",mood:"self-important",matrix:["00011000","00122100","01222210","12222321","12222221","01233210","00122100","01000010"]},
  {id:"rerun-rabbit",name:"Rerun Rabbit",rarity:"uncommon",weight:9,palette:["#D6E85C","#9498A0","#E4E6EA","#0A0A0A"],trait:"relives the same five minutes on a loop",mood:"stuck but hopeful",matrix:["01000010","01100110","01111110","12222221","12322321","12233221","01222210","00100100"]},
  {id:"static-starling",name:"Static Starling",rarity:"uncommon",weight:7,palette:["#7A6FC4","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"flocks toward bad reception",mood:"restless",matrix:["01000010","11100111","01211210","00122100","01233210","00122100","00011000","00011000"]},
  {id:"feedback-fox",name:"Feedback Fox",rarity:"rare",weight:2.5,palette:["#E85E7A","#D98E3B","#E4E6EA","#0A0A0A"],trait:"screeches right when things get quiet",mood:"dramatic timing",matrix:["10000001","11000011","01111110","12222221","12322321","12233221","01222210","01000010"]},
  {id:"test-pattern-tiger",name:"Test Pattern Tiger",rarity:"rare",weight:2,palette:["#D6E85C","#7A6FC4","#5FC9D6","#0A0A0A"],trait:"only appears during 3 AM reruns",mood:"nocturnal broadcast",matrix:["00111100","01212210","12322321","12123221","12232121","01222210","00121200","01000010"]},
  {id:"corrupted-koi",name:"Corrupted Koi",rarity:"glitched",weight:.4,palette:["#5FC9D6","#E85E7A","#D6E85C","#0A0A0A"],trait:"swims through broken video",mood:"rendering artifact",matrix:["00001111","00113221","01133221","11233211","11322331","12233110","11221100","11000000"]},
  {id:"frost-static",name:"Frost Static",rarity:"super",weight:0,month:11,palette:["#E4E6EA","#5FC9D6","#7A6FC4","#0A0A0A"],trait:"only tunes in during the cold months",mood:"december forever",matrix:["00100100","10111101","01111110","11222211","12322321","11222211","01111110","10100101"]},
  {id:"phantom-frequency",name:"Phantom Frequency",rarity:"uncommon",weight:8,palette:["#9498A0","#7A6FC4","#E4E6EA","#0A0A0A"],trait:"only exists between two stations",mood:"half-tuned",matrix:["00111100","01211210","12111121","11222211","12111121","11311131","01222210","00111100"]},
  {id:"circuit-sparrow",name:"Circuit Sparrow",rarity:"common",weight:19,palette:["#D6E85C","#E4E6EA","#5FC9D6","#0A0A0A"],trait:"nests in exposed wiring",mood:"electric but polite",matrix:["00010000","00111000","01211100","12222110","11222211","01222110","00133100","01000010"]},
  {id:"echo-eel",name:"Echo Eel",rarity:"rare",weight:2,palette:["#FB8B24","#7A6FC4","#E4E6EA","#0A0A0A"],trait:"repeats what you said ten seconds ago",mood:"delayed",matrix:["11000000","12110000","01221100","00122110","00012211","00001221","00000122","00000011"]},
  {id:"broadcast-beetle",name:"Broadcast Beetle",rarity:"common",weight:16,palette:["#D98E3B","#0A0A0A","#E4E6EA","#5FC9D6"],trait:"clicks along to the emergency tone",mood:"industrious",matrix:["01000010","01311310","13333331","13322331","13333331","13322331","01333310","00100100"]},
  {id:"resolution-ghost",name:"Resolution Ghost",rarity:"super",weight:0,month:0,palette:["#5FC9D6","#9498A0","#E4E6EA","#0A0A0A"],trait:"shows up every January promising to change, never does",mood:"temporarily inspired",matrix:["00010000","00111000","01211210","10122101","01211210","00111000","00010000","00100100"]},
  {id:"lovesick-transmitter",name:"Lovesick Transmitter",rarity:"super",weight:0,month:1,palette:["#E85E7A","#FB8B24","#E4E6EA","#0A0A0A"],trait:"broadcasts feelings nobody asked to receive",mood:"embarrassingly sincere",matrix:["01100110","11111111","11322311","01233210","00133100","00013000","00010000","00000000"]},
  {id:"squall-line",name:"Squall Line",rarity:"super",weight:0,month:2,palette:["#9498A0","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"arrives loud, leaves without warning",mood:"blustery",matrix:["11000000","01110000","00111000","00011100","00001110","00000111","00000011","00000001"]},
  {id:"raincheck-raccoon",name:"Rain Check Raccoon",rarity:"super",weight:0,month:3,palette:["#7A6FC4","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"promises to show up later, rarely does",mood:"perpetually rescheduled",matrix:["00010000","00010000","00111000","01221100","01222210","01222210","01222210","00222200"]},
  {id:"static-bloom",name:"Static Bloom",rarity:"super",weight:0,month:4,palette:["#D6E85C","#E85E7A","#5FC9D6","#0A0A0A"],trait:"the one good frequency all month",mood:"unreasonably optimistic",matrix:["00010000","00313000","03133130","13333331","03133130","00313000","00010000","00100100"]},
  {id:"sunburst-cicada",name:"Sunburst Cicada",rarity:"super",weight:0,month:5,palette:["#D98E3B","#FB8B24","#E4E6EA","#0A0A0A"],trait:"only sings when it's unbearably hot",mood:"deafening",matrix:["10001000","01010100","00121000","10112101","00121000","01010100","10001000","00100100"]},
  {id:"bottle-rocket-bat",name:"Bottle Rocket Bat",rarity:"super",weight:0,month:6,palette:["#E85E7A","#D6E85C","#5FC9D6","#0A0A0A"],trait:"loud, bright, gone in under a second",mood:"combustible",matrix:["00010000","00111000","01013010","10101101","01013010","00111000","00010000","01000010"]},
  {id:"notebook-moth",name:"Notebook Moth",rarity:"super",weight:0,month:8,palette:["#9498A0","#D98E3B","#E4E6EA","#0A0A0A"],trait:"shows up right when everyone else has moved on",mood:"a little too late",matrix:["11111111","10000001","10322301","10000001","10133101","10000001","11111111","00100100"]},
  {id:"static-specter",name:"Static Specter",rarity:"super",weight:0,month:9,palette:["#7A6FC4","#E85E7A","#E4E6EA","#0A0A0A"],trait:"the one time of year everyone actually wants a ghost",mood:"seasonally welcome",matrix:["01111110","12222221","12222221","11222211","10222201","11121111","10101010","00100100"]},
  {id:"overcast-finch",name:"Overcast Finch",rarity:"super",weight:0,month:10,palette:["#9498A0","#D8CBB0","#5FC9D6","#0A0A0A"],trait:"shows up right when the sky gives up",mood:"quietly grey",matrix:["00000000","00111000","01222210","01222210","11222211","01222210","00111000","00000000"]},
  {id:"ghost-station",name:"Ghost Station",rarity:"ultra",weight:0.05,palette:["#F5F5F5","#FFD86B","#FF3EC9","#0A0A0A"],trait:"a frequency that shouldn't exist and somehow still does",mood:"impossible signal",matrix:["00000000","00030000","00303000","03020300","00303000","00030000","00000200","00000000"]},
  {id:"static-panda",name:"Static Panda",rarity:"rare",weight:2,palette:["#E4E6EA","#2A2A2A","#5FC9D6","#0A0A0A"],trait:"looks exactly like the screen between channels",mood:"black and white noise",matrix:["00111100","01222210","12122121","12111121","11333311","12111121","01222210","00111100"]},
  {id:"antenna-penguin",name:"Antenna Penguin",rarity:"rare",weight:2,palette:["#2A2A2A","#E4E6EA","#D98E3B","#0A0A0A"],trait:"stands at attention for a signal that never comes",mood:"formally waiting",matrix:["000001300000","000001000000","000001100000","000011110000","000112211000","000122231000","000122233000","000122221000","000122221000","000122221000","000012210000","000031130000"]},
  {id:"dialup-spider",name:"Dial-Up Spider",rarity:"rare",weight:2,palette:["#2A2A2A","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"spins a web out of old ethernet cable",mood:"eight legs, one connection",matrix:["000000000000","001000000100","010100001010","001100001100","000122221000","000023320000","000122221000","001122221100","010100001010","001000000100","000000000000","000000000000"]},
  {id:"reboot-axolotl",name:"Reboot Axolotl",rarity:"rare",weight:2,palette:["#E85E7A","#FF9FC1","#E4E6EA","#0A0A0A"],trait:"can regrow a lost connection like nothing happened",mood:"forever smiling",matrix:["20000002","21000012","01211210","12122121","01222210","00122100","00011000","00011000"]},
  {id:"one-channel-cat",name:"One Channel Cat",rarity:"rare",weight:2,palette:["#7A6FC4","#E4E6EA","#5FC9D6","#0A0A0A"],trait:"only ever watches the one station",mood:"singularly focused",matrix:["000100001000","000110011000","000011110000","000111111000","001131111100","001132211100","001122221100","002223222200","002122221200","000012210000","000000000000","000000000000"]},
  {id:"tripod-signal-dog",name:"Tripod Signal Dog",rarity:"rare",weight:2,palette:["#D98E3B","#E4E6EA","#5FC9D6","#0A0A0A"],trait:"still outruns the buffering bar",mood:"unbothered",matrix:["000000000000","011000000000","011222220000","011232320000","002222222000","000222222110","000222222100","000222222000","000222222000","000011110000","000011010000","000000000000"]},
  {id:"longrange-giraffe",name:"Long Range Giraffe",rarity:"rare",weight:2,palette:["#D6E85C","#D98E3B","#E4E6EA","#0A0A0A"],trait:"picks up frequencies nothing else can reach",mood:"tall and tuned in",matrix:["000002020000","000011110000","000032130000","000011210000","000002100000","000001200000","000001200000","000002100000","000001100000","001211112100","001121121100","001111111100"]},
  {id:"broadcast-lion",name:"Broadcast Lion",rarity:"rare",weight:2,palette:["#D98E3B","#FB8B24","#E4E6EA","#0A0A0A"],trait:"roars loud enough to override the emergency alert system",mood:"main character energy",matrix:["01222210","12222221","12322321","12222221","12233221","12222221","01222210","00100100"]},
  {id:"sonar-whale",name:"Sonar Whale",rarity:"rare",weight:2,palette:["#5FC9D6","#7A6FC4","#E4E6EA","#0A0A0A"],trait:"sings on a frequency that travels for miles underwater",mood:"deep and unbothered",matrix:["00111110","01222221","12222221","12322321","01222210","00122100","00010200","00102000"]},
  {id:"crossedwire-crab",name:"Crossed Wire Crab",rarity:"rare",weight:2,palette:["#E85E7A","#D98E3B","#E4E6EA","#0A0A0A"],trait:"always moving sideways to avoid the actual conversation",mood:"defensive but fun at parties",matrix:["10000001","11000011","01222210","12222221","12322321","01222210","10111101","01000010"]},
  {id:"standby-bear",name:"Standby Bear",rarity:"rare",weight:2,palette:["#9498A0","#D98E3B","#E4E6EA","#0A0A0A"],trait:"hibernates in standby mode until the spring reboot",mood:"low power mode",matrix:["01000010","11111110","12222221","12322321","12222221","12233221","01222210","00111100"]},
];

const LSN_RARITY_COLORS={common:"#9498A0",uncommon:"#5FC9D6",rare:"#7A6FC4",glitched:"#E85E7A",seasonal:"#D98E3B",super:"#FBBF24",ultra:"#FF3EC9"};

function lsnPetSvg(pet,size=160){
  const n=pet.matrix.length,cell=size/n;
  let rects="";
  pet.matrix.forEach((row,y)=>[...row].forEach((v,x)=>{
    if(v!=="0"){
      const c=pet.palette[Math.max(0,Number(v)-1)]||pet.palette[0];
      rects+=`<rect x="${x*cell}" y="${y*cell}" width="${cell}" height="${cell}" fill="${c}"/>`;
    }
  }));
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" shape-rendering="crispEdges" aria-label="${pet.name}">${rects}</svg>`;
}

function lsnDrawPetCanvas(ctx,pet,x,y,size){
  const n=pet.matrix.length,cell=size/n;
  pet.matrix.forEach((row,ry)=>[...row].forEach((v,rx)=>{
    if(v!=="0"){
      ctx.fillStyle=pet.palette[Math.max(0,Number(v)-1)]||pet.palette[0];
      ctx.fillRect(x+rx*cell,y+ry*cell,cell,cell);
    }
  }));
}

function lsnPetCollection(){
  try{return JSON.parse(localStorage.getItem("lsn_pet_collection")||"[]")}catch(e){return[]}
}
function lsnSavePet(adoption){
  const list=lsnPetCollection();list.push(adoption);
  localStorage.setItem("lsn_pet_collection",JSON.stringify(list));
}
function lsnWeightedPet(){
  const today=new Date();
  const pool=LSN_PETS.filter(p=>p.weight>0).map(p=>({...p}));
  const monthly=LSN_PETS.find(p=>p.rarity==="super"&&p.month===today.getMonth());
  if(monthly) pool.push({...monthly,weight:2});
  const total=pool.reduce((s,p)=>s+p.weight,0);
  let roll=Math.random()*total;
  for(const p of pool){roll-=p.weight;if(roll<=0)return p}
  return pool[0];
}
function lsnPetById(id){return LSN_PETS.find(p=>p.id===id)}
