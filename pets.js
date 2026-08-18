
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
  {id:"summer-signal",name:"Summer Signal",rarity:"seasonal",weight:0,palette:["#FB8B24","#D6E85C","#5FC9D6","#0A0A0A"],trait:"collects warm nights and parking-lot conversations",mood:"august forever",matrix:["00100100","11111111","01222210","12322321","12222221","12233221","01222210","10100101"]},
  {id:"dial-deer",name:"Dial Tone Deer",rarity:"common",weight:22,palette:["#5FC9D6","#D98E3B","#E4E6EA","#0A0A0A"],trait:"hums the same three notes forever",mood:"patiently repetitive",matrix:["00100100","01011010","01111110","12222221","12322321","12222221","01222210","00100100"]},
  {id:"pixel-pigeon",name:"Pixel Pigeon",rarity:"common",weight:18,palette:["#E4E6EA","#D98E3B","#5FC9D6","#0A0A0A"],trait:"delivers messages nobody asked for",mood:"self-important",matrix:["00011000","00122100","01222210","12222321","12222221","01233210","00122100","01000010"]},
  {id:"rerun-rabbit",name:"Rerun Rabbit",rarity:"uncommon",weight:9,palette:["#D6E85C","#9498A0","#E4E6EA","#0A0A0A"],trait:"relives the same five minutes on a loop",mood:"stuck but hopeful",matrix:["01000010","01100110","01111110","12222221","12322321","12233221","01222210","00100100"]},
  {id:"static-starling",name:"Static Starling",rarity:"uncommon",weight:7,palette:["#7A6FC4","#5FC9D6","#E4E6EA","#0A0A0A"],trait:"flocks toward bad reception",mood:"restless",matrix:["01000010","11100111","01211210","00122100","01233210","00122100","00011000","00011000"]},
  {id:"feedback-fox",name:"Feedback Fox",rarity:"rare",weight:2.5,palette:["#E85E7A","#D98E3B","#E4E6EA","#0A0A0A"],trait:"screeches right when things get quiet",mood:"dramatic timing",matrix:["10000001","11000011","01111110","12222221","12322321","12233221","01222210","01000010"]},
  {id:"test-pattern-tiger",name:"Test Pattern Tiger",rarity:"rare",weight:2,palette:["#D6E85C","#7A6FC4","#5FC9D6","#0A0A0A"],trait:"only appears during 3 AM reruns",mood:"nocturnal broadcast",matrix:["00111100","01212210","12322321","12123221","12232121","01222210","00121200","01000010"]},
  {id:"corrupted-koi",name:"Corrupted Koi",rarity:"glitched",weight:.4,palette:["#5FC9D6","#E85E7A","#D6E85C","#0A0A0A"],trait:"swims through broken video",mood:"rendering artifact",matrix:["00001111","00113221","01133221","11233211","11322331","12233110","11221100","11000000"]},
  {id:"frost-static",name:"Frost Static",rarity:"seasonal",weight:0,palette:["#E4E6EA","#5FC9D6","#7A6FC4","#0A0A0A"],trait:"only tunes in during the cold months",mood:"december forever",matrix:["00100100","10111101","01111110","11222211","12322321","11222211","01111110","10100101"]},
  {id:"phantom-frequency",name:"Phantom Frequency",rarity:"uncommon",weight:8,palette:["#9498A0","#7A6FC4","#E4E6EA","#0A0A0A"],trait:"only exists between two stations",mood:"half-tuned",matrix:["00111100","01211210","12111121","11222211","12111121","11311131","01222210","00111100"]},
  {id:"circuit-sparrow",name:"Circuit Sparrow",rarity:"common",weight:19,palette:["#D6E85C","#E4E6EA","#5FC9D6","#0A0A0A"],trait:"nests in exposed wiring",mood:"electric but polite",matrix:["00010000","00111000","01211100","12222110","11222211","01222110","00133100","01000010"]},
  {id:"echo-eel",name:"Echo Eel",rarity:"rare",weight:2,palette:["#FB8B24","#7A6FC4","#E4E6EA","#0A0A0A"],trait:"repeats what you said ten seconds ago",mood:"delayed",matrix:["11000000","12110000","01221100","00122110","00012211","00001221","00000122","00000011"]},
  {id:"broadcast-beetle",name:"Broadcast Beetle",rarity:"common",weight:16,palette:["#D98E3B","#0A0A0A","#E4E6EA","#5FC9D6"],trait:"clicks along to the emergency tone",mood:"industrious",matrix:["01000010","01311310","13333331","13322331","13333331","13322331","01333310","00100100"]}
];

const LSN_RARITY_COLORS={common:"#9498A0",uncommon:"#5FC9D6",rare:"#7A6FC4",glitched:"#E85E7A",seasonal:"#D98E3B"};

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
  if(today.getMonth()===7){
    const seasonal=LSN_PETS.find(p=>p.id==="summer-signal");
    pool.push({...seasonal,weight:2});
  }
  if(today.getMonth()===11){
    const seasonal=LSN_PETS.find(p=>p.id==="frost-static");
    pool.push({...seasonal,weight:2});
  }
  const total=pool.reduce((s,p)=>s+p.weight,0);
  let roll=Math.random()*total;
  for(const p of pool){roll-=p.weight;if(roll<=0)return p}
  return pool[0];
}
function lsnPetById(id){return LSN_PETS.find(p=>p.id===id)}
