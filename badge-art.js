/* =========================================================
   LOW SIGNAL NETWORK // BADGE ART
   Builds every badge image from data. Three styles:
   dial (signal quizzes), tape (romance/emotional), pin (character types + extras)
   Load BEFORE app.js.
   ========================================================= */
const LSN_BADGE_ART = {
  "quiz-open":["dial", "#5FC9D6", "92.8"],
  "quiz-midnight":["dial", "#7A6FC4", "101.3"],
  "quiz-pirate":["dial", "#E85E7A", "107.7"],
  "quiz-static":["dial", "#D6E85C", "88.6"],
  "quiz-emergency":["dial", "#D98E3B", "95.5"],
  "quiz-dead":["dial", "#9498A0", "89.1"],
  "quiz-echo":["dial", "#FB8B24", "103.9"],
  "quiz-runner":["tape", "#E85E7A", "99.4"],
  "quiz-fixer":["tape", "#5FC9D6", "93.6"],
  "quiz-control":["tape", "#D98E3B", "104.1"],
  "quiz-avoid":["tape", "#9498A0", "88.9"],
  "quiz-chaos":["tape", "#D6E85C", "106.2"],
  "quiz-soft":["tape", "#D4A6BD", "90.2"],
  "quiz-restless":["tape", "#7A6FC4", "102.7"],
  "quiz-lonely":["tape", "#5FC9D6", "87.9"],
  "quiz-dreamer":["tape", "#D6E85C", "96.8"],
  "quiz-guarded":["tape", "#9498A0", "105.5"],
  "quiz-captain":["dial", "#D98E3B", "97.1"],
  "quiz-medic":["dial", "#5AC88C", "91.8"],
  "quiz-wildcard":["dial", "#E85E7A", "107.2"],
  "quiz-anchor":["dial", "#5FC9D6", "94.7"],
  "quiz-crisisrunner":["dial", "#9498A0", "89.5"],
  "quiz-quiet":["tape", "#D4A6BD", "90.8"],
  "quiz-possession":["tape", "#E85E7A", "103.4"],
  "quiz-tease":["tape", "#D6E85C", "98.3"],
  "quiz-repair":["tape", "#5FC9D6", "93.1"],
  "quiz-presence":["tape", "#7A6FC4", "95.9"],
  "quiz-chaosromance":["tape", "#E85E7A", "100.6"],
  "quiz-chaosfamily":["tape", "#D98E3B", "89.9"],
  "quiz-chaoscrime":["tape", "#7A6FC4", "107.9"],
  "quiz-chaoscareer":["tape", "#5FC9D6", "94.0"],
  "quiz-chaossocial":["tape", "#D6E85C", "97.7"],
  "quiz-social-solar":["dial", "#D6E85C", "91.4"],
  "quiz-social-selective":["dial", "#5FC9D6", "96.2"],
  "quiz-social-night":["dial", "#7A6FC4", "102.4"],
  "quiz-social-ghost":["dial", "#9498A0", "88.1"],
  "quiz-moral-law":["pin", "#5FC9D6", "90.5"],
  "quiz-moral-loyal":["pin", "#D98E3B", "95.2"],
  "quiz-moral-gray":["pin", "#9498A0", "100.1"],
  "quiz-moral-wild":["pin", "#E85E7A", "107.5"],
  "quiz-text-fast":["dial", "#D6E85C", "93.9"],
  "quiz-text-dry":["dial", "#9498A0", "89.2"],
  "quiz-text-essay":["dial", "#5FC9D6", "98.8"],
  "quiz-text-ghost":["dial", "#7A6FC4", "105.2"],
  "quiz-rumor-ignore":["pin", "#9498A0", "90.9"],
  "quiz-rumor-fight":["pin", "#E85E7A", "96.5"],
  "quiz-rumor-spin":["pin", "#D98E3B", "99.9"],
  "quiz-rumor-spiral":["pin", "#7A6FC4", "103.3"],
  "quiz-villain-mastermind":["pin", "#7A6FC4", "96.4"],
  "quiz-villain-revenge":["pin", "#E85E7A", "101.7"],
  "quiz-villain-tragic":["pin", "#9498A0", "91.9"],
  "quiz-villain-chaotic":["pin", "#D6E85C", "107.3"],
  "quiz-foundfamily-protector":["pin", "#5FC9D6", "93.2"],
  "quiz-foundfamily-jokester":["pin", "#D6E85C", "99.1"],
  "quiz-foundfamily-mediator":["pin", "#7A6FC4", "95.6"],
  "quiz-foundfamily-glue":["pin", "#D98E3B", "90.3"],
  "quiz-foundfamily-wildcard":["pin", "#E85E7A", "104.8"],
  "quiz-firstimpression-exact":["pin", "#5FC9D6", "92.0"],
  "quiz-firstimpression-opposite":["pin", "#E85E7A", "106.5"],
  "quiz-firstimpression-surface":["pin", "#9498A0", "89.7"],
  "quiz-firstimpression-slowburn":["pin", "#D98E3B", "97.4"],
  "quiz-breakup-ghost":["tape", "#9498A0", "88.2"],
  "quiz-breakup-blowup":["tape", "#E85E7A", "105.1"],
  "quiz-breakup-closure":["tape", "#5FC9D6", "94.6"],
  "quiz-breakup-mourner":["tape", "#7A6FC4", "90.9"],
  "quiz-secret-vault":["pin", "#5FC9D6", "91.1"],
  "quiz-secret-leaky":["pin", "#D6E85C", "103.7"],
  "quiz-secret-selective":["pin", "#D98E3B", "96.9"],
  "quiz-secret-burden":["pin", "#7A6FC4", "89.3"],
  "quiz-downfall-pride":["pin", "#D98E3B", "100.4"],
  "quiz-downfall-love":["pin", "#E85E7A", "92.6"],
  "quiz-downfall-loyalty":["pin", "#5FC9D6", "97.8"],
  "quiz-downfall-ambition":["pin", "#7A6FC4", "105.9"],
  "quiz-storm-hurricane":["dial", "#E85E7A", "108.0"],
  "quiz-storm-quietfront":["dial", "#9498A0", "89.6"],
  "quiz-storm-lightning":["dial", "#D6E85C", "101.9"],
  "quiz-storm-aftermath":["dial", "#7A6FC4", "94.3"],
  "quiz-origin-tragedy":["tape", "#7A6FC4", "90.1"],
  "quiz-origin-comedy":["tape", "#D6E85C", "99.7"],
  "quiz-origin-mystery":["tape", "#9498A0", "104.3"],
  "quiz-origin-epic":["tape", "#D98E3B", "96.0"],
  "quiz-group-static":["dial", "#D6E85C", "88.6"],
  "quiz-group-wavelength":["dial", "#9055A2", "91.2"],
  "quiz-group-deadair":["dial", "#EDFF86", "89.1"],
  "quiz-group-onair":["dial", "#E8C25C", "97.5"],
  "quiz-group-echo":["dial", "#FB8B24", "103.9"],
  "quiz-group-signalboost":["dial", "#FFEA3D", "100.0"],
  "quiz-group-whitenoise":["dial", "#D8CBB0", "90.5"],
  "quiz-group-piratesignal":["dial", "#FF4788", "107.7"],
  "quiz-group-backchannel":["dial", "#B39C4D", "94.8"],
  "quiz-group-longwave":["dial", "#D0ADA7", "87.3"],
  "network-visitor":["dial", "#D98E3B", "91.4"],
  "interference":["tape", "#7A6FC4", "91.4"],
  "arcade-oracle":["pin", "#7A6FC4", "91.4"],
  "arcade-pet":["pin", "#5AC88C", "91.4"],
  "arcade-blinkie":["tape", "#E85E7A", "91.4"],
  "arcade-button":["pin", "#5FC9D6", "91.4"]
};

const LSNArt = (function(){
  let uid = 0;
  const DIM = "#4a443a";
  const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const OSW = "'LSN Oswald',Oswald,'Arial Narrow',sans-serif";
  const MONO = "'LSN Mono','Space Mono',monospace";

  function info(b, locked){
    const a = LSN_BADGE_ART[b.id] || ["pin","#D98E3B","91.4"];
    if(locked) return {style:a[0], col:DIM, freq:"--.-", code:"??", name:"UNKNOWN SIGNAL", locked:true};
    return {style:a[0], col:a[1], freq:a[2], code:b.code, name:b.name, locked:false};
  }
  const codeSize = (c, sizes) => c.length<=3 ? sizes[0] : c.length===4 ? sizes[1] : sizes[2];
  const diamond = (x,y,r,fill,op) => `<path d="M${x} ${y-r}L${x+r} ${y}L${x} ${y+r}L${x-r} ${y}Z" fill="${fill}" fill-opacity="${op}"/>`;

  function dial(d, id){
    const f = parseFloat(d.freq);
    const p = isNaN(f) ? 0 : Math.max(0, Math.min(1, (f-87.5)/21));
    let ticks = "";
    for(let i=0;i<60;i++){
      const a=(-210+i*4)*Math.PI/180, long=i%5===0, r2=long?76:80, on=!d.locked && i/59<=p;
      ticks += `<line x1="${(100+86*Math.cos(a)).toFixed(2)}" y1="${(100+86*Math.sin(a)).toFixed(2)}" x2="${(100+r2*Math.cos(a)).toFixed(2)}" y2="${(100+r2*Math.sin(a)).toFixed(2)}" stroke="${on?d.col:"#3a352d"}" stroke-width="${long?2:1.2}" stroke-linecap="round"/>`;
    }
    const na=(-210+p*236)*Math.PI/180, L=d.name.length>16;
    return `<defs><radialGradient id="${id}g" cx=".5" cy=".42" r=".6"><stop offset="0" stop-color="${d.col}" stop-opacity=".28"/><stop offset="1" stop-color="#100e0b"/></radialGradient><path id="${id}p" d="M 32 112 A 68 68 0 0 0 168 112"/></defs>
<circle cx="100" cy="100" r="96" fill="#151310" stroke="${d.col}" stroke-opacity=".55" stroke-width="2"/>
<circle cx="100" cy="100" r="90" fill="url(#${id}g)"/>${ticks}
<line x1="100" y1="100" x2="${(100+70*Math.cos(na)).toFixed(2)}" y2="${(100+70*Math.sin(na)).toFixed(2)}" stroke="${d.col}" stroke-width="2" stroke-linecap="round" opacity=".85"/>
<circle cx="100" cy="100" r="40" fill="#0f0d0a" stroke="${d.col}" stroke-opacity=".5"/>
<circle cx="100" cy="100" r="34" fill="none" stroke="#3a352d" stroke-dasharray="2 3"/>
<text x="100" y="${d.code.length>3?109:111}" text-anchor="middle" font-family="${OSW}" font-weight="700" font-size="${codeSize(d.code,[30,24,19])}" fill="${d.col}">${esc(d.code)}</text>
<text x="100" y="46" text-anchor="middle" font-family="${MONO}" font-size="9" fill="#8C8A7C" letter-spacing="1">${esc(d.freq)} FM</text>
<text font-family="${MONO}" font-weight="700" font-size="${L?8:9.5}" fill="${d.locked?"#6b665a":"#DAD9CF"}" letter-spacing="1"><textPath href="#${id}p" startOffset="50%" text-anchor="middle">${esc(d.name)}</textPath></text>`;
  }

  function pin(d, id){
    const hex = r => [0,1,2,3,4,5].map(i=>{const a=(60*i-90)*Math.PI/180;return (100+r*Math.cos(a)).toFixed(1)+","+(100+r*Math.sin(a)).toFixed(1)}).join(" ");
    const L=d.name.length>16, fg=d.locked?"#8C8A7C":"#F4F1E8";
    return `<defs><linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${d.col}"/><stop offset="1" stop-color="${d.col}" stop-opacity=".45"/></linearGradient><linearGradient id="${id}m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${d.locked?"#5a554b":"#E9E4D6"}"/><stop offset=".5" stop-color="#6e6a60"/><stop offset="1" stop-color="${d.locked?"#4a463e":"#cfc9b8"}"/></linearGradient></defs>
<polygon points="${hex(94)}" fill="url(#${id}m)"/>
<polygon points="${hex(86)}" fill="#100e0b"/>
<polygon points="${hex(80)}" fill="url(#${id}g)"/>
<polygon points="${hex(66)}" fill="#100e0b" fill-opacity=".55"/>
<path d="M 58 74 Q 100 60 142 74" stroke="#fff" stroke-opacity=".22" stroke-width="5" fill="none" stroke-linecap="round"/>
<text x="100" y="${d.code.length>3?104:108}" text-anchor="middle" font-family="${OSW}" font-weight="700" font-size="${codeSize(d.code,[38,30,24])}" fill="${fg}">${esc(d.code)}</text>
${diamond(74,63,3,fg,.8)}${diamond(126,63,3,fg,.8)}
<text x="100" y="66" text-anchor="middle" font-family="${MONO}" font-weight="700" font-size="9" fill="${fg}" fill-opacity=".8">${esc(d.freq)}</text>
<path d="M 18 128 L 182 128 L 174 140 L 182 152 L 18 152 L 26 140 Z" fill="#100e0b" stroke="url(#${id}m)" stroke-width="2"/>
<text x="100" y="144" text-anchor="middle" font-family="${MONO}" font-weight="700" font-size="${L?8:10}" fill="${d.locked?"#8C8A7C":d.col}" letter-spacing="1"${d.name.length*((L?8:10)*.62+1)>140?' textLength="140" lengthAdjust="spacingAndGlyphs"':''}>${esc(d.name)}</text>`;
  }

  function tape(d, id){
    const L=d.name.length>14, ink=d.locked?"#8C8A7C":"#100e0b";
    return `<rect x="8" y="34" width="184" height="132" rx="10" fill="#1B1815" stroke="${d.col}" stroke-opacity=".6" stroke-width="2"/>
<circle cx="20" cy="46" r="3" fill="#3a352d"/><circle cx="180" cy="46" r="3" fill="#3a352d"/><circle cx="20" cy="154" r="3" fill="#3a352d"/><circle cx="180" cy="154" r="3" fill="#3a352d"/>
<rect x="22" y="46" width="156" height="52" rx="4" fill="${d.locked?"#2a2620":d.col}"/>
<rect x="22" y="46" width="156" height="11" rx="4" fill="#100e0b" fill-opacity=".35"/>
<text x="30" y="55" font-family="${MONO}" font-weight="700" font-size="7.5" fill="${ink}">SIDE A · ${esc(d.freq)} FM</text>
<text x="170" y="55" text-anchor="end" font-family="${MONO}" font-weight="700" font-size="7.5" fill="${ink}">LSN</text>
<text x="100" y="86" text-anchor="middle" font-family="${OSW}" font-weight="700" font-size="${L?14:18}" fill="${ink}"${d.name.length*(L?14:18)*.6>146?' textLength="146" lengthAdjust="spacingAndGlyphs"':''}>${esc(d.name)}</text>
<rect x="48" y="106" width="104" height="34" rx="17" fill="#0f0d0a" stroke="#3a352d"/>
<circle cx="68" cy="123" r="12" fill="none" stroke="${d.col}" stroke-width="3" stroke-dasharray="4 3"/>
<circle cx="132" cy="123" r="12" fill="none" stroke="${d.col}" stroke-width="3" stroke-dasharray="4 3"/>
<text x="100" y="127" text-anchor="middle" font-family="${OSW}" font-weight="700" font-size="${d.code.length>4?9:11}" fill="${d.col}">${esc(d.code)}</text>
<path d="M 58 166 L 66 152 L 134 152 L 142 166" fill="#151310" stroke="#3a352d"/>`;
  }

  const DRAW = {dial, pin, tape};

  function svg(b, opts={}){
    const d = info(b, opts.locked), id = "lsnb"+(uid++);
    const size = opts.size ? ` width="${opts.size}" height="${opts.size}"` : "";
    const style = opts.fontCSS ? `<style>${opts.fontCSS}</style>` : "";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"${size} role="img" aria-label="${esc(d.name)} badge">${style}${DRAW[d.style](d,id)}</svg>`;
  }

  /* ---- fonts embedded for PNG export (an <img> can't see page fonts) ---- */
  let fontPromise = null;
  function fontCSS(){
    if(fontPromise) return fontPromise;
    const chars = new Set(" ?·-.+×FMSIDEALN0123456789UKOWGabcdefghijklmnopqrstuvwxyz");
    (typeof LSN_BADGES!=="undefined"?LSN_BADGES:[]).forEach(b=>(b.name+b.code).split("").forEach(c=>chars.add(c)));
    const text = encodeURIComponent([...chars].join(""));
    const fams = [["Oswald:wght@700","LSN Oswald"],["Space+Mono:wght@400;700","LSN Mono"]];
    const toData = url => fetch(url).then(r=>r.blob()).then(bl=>new Promise(res=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.readAsDataURL(bl)}));
    fontPromise = Promise.all(fams.map(([fam,alias]) =>
      fetch(`https://fonts.googleapis.com/css2?family=${fam}&text=${text}`).then(r=>r.text()).then(async css=>{
        const faces = [...css.matchAll(/@font-face\s*{[^}]*}/g)].map(m=>m[0]);
        const out = [];
        for(const face of faces){
          const url = (face.match(/url\(([^)]+)\)/)||[])[1]; if(!url) continue;
          const weight = (face.match(/font-weight:\s*(\d+)/)||[])[1]||"400";
          out.push(`@font-face{font-family:'${alias}';font-weight:${weight};src:url(${await toData(url)});}`);
        }
        return out.join("");
      })
    )).then(a=>a.join("")).catch(()=>"");
    return fontPromise;
  }

  async function png(b, px=200){
    const css = await fontCSS();
    const src = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg(b,{size:px,fontCSS:css}));
    const img = new Image(); img.src = src;
    await img.decode().catch(()=>new Promise(r=>img.onload=r));
    await new Promise(r=>setTimeout(r,30));
    const c = document.createElement("canvas"); c.width=c.height=px;
    const x = c.getContext("2d"); x.drawImage(img,0,0,px,px);
    return new Promise(r=>c.toBlob(r,"image/png"));
  }

  /* ---- tiny zip writer (no compression) ---- */
  const CRC = (()=>{const t=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
  const crc32 = u=>{let c=0xFFFFFFFF;for(let i=0;i<u.length;i++)c=CRC[(c^u[i])&255]^(c>>>8);return (c^0xFFFFFFFF)>>>0};
  async function zip(files){
    const parts=[], central=[]; let off=0; const enc=new TextEncoder();
    for(const f of files){
      const data=new Uint8Array(await f.blob.arrayBuffer()), name=enc.encode(f.name), crc=crc32(data);
      const h=new DataView(new ArrayBuffer(30));
      h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,crc,true);h.setUint32(18,data.length,true);h.setUint32(22,data.length,true);h.setUint16(26,name.length,true);
      parts.push(h,name,data);
      const c=new DataView(new ArrayBuffer(46));
      c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint32(16,crc,true);c.setUint32(20,data.length,true);c.setUint32(24,data.length,true);c.setUint16(28,name.length,true);c.setUint32(42,off,true);
      central.push(c,name); off+=30+name.length+data.length;
    }
    const size=central.reduce((s,p)=>s+p.byteLength,0), e=new DataView(new ArrayBuffer(22));
    e.setUint32(0,0x06054b50,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,size,true);e.setUint32(16,off,true);
    return new Blob([...parts,...central,e],{type:"application/zip"});
  }

  function save(blob, name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}

  return {svg, png, zip, save, fontCSS};
})();
