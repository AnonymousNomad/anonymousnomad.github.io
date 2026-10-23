const canvas=document.querySelector('[data-outpost-canvas]');
const title=document.querySelector('[data-outpost-title]');

if(canvas){
  const ctx=canvas.getContext('2d',{alpha:false});
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const s={w:0,h:0,dpr:1,rain:[],px:0,py:0,tx:0,ty:0,last:0,start:performance.now(),running:true};
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const rnd=n=>{const x=Math.sin(n*91.719+17.13)*43758.5453;return x-Math.floor(x)};

  function rainField(){
    const count=Math.round(clamp((s.w*s.h)/16000,55,160));
    s.rain=Array.from({length:count},(_,i)=>({
      x:rnd(i+1)*s.w,y:rnd(i+77)*s.h,len:9+rnd(i+211)*23,
      speed:260+rnd(i+403)*460,a:.07+rnd(i+601)*.18,drift:38+rnd(i+809)*34
    }));
  }

  function resize(){
    const r=canvas.getBoundingClientRect();
    s.w=Math.max(1,r.width);s.h=Math.max(1,r.height);s.dpr=Math.min(devicePixelRatio||1,1.75);
    canvas.width=Math.round(s.w*s.dpr);canvas.height=Math.round(s.h*s.dpr);
    ctx.setTransform(s.dpr,0,0,s.dpr,0,0);rainField();draw(performance.now(),true);
  }

  function mountains(points,fill,ox,oy){
    ctx.beginPath();ctx.moveTo(-40,s.h);
    points.forEach(p=>ctx.lineTo(p[0]*s.w+ox,p[1]*s.h+oy));
    ctx.lineTo(s.w+40,s.h);ctx.closePath();ctx.fillStyle=fill;ctx.fill();
  }

  function drawWorld(px,py){
    const sky=ctx.createLinearGradient(0,0,0,s.h);
    sky.addColorStop(0,'#071015');sky.addColorStop(.48,'#081116');sky.addColorStop(1,'#030607');
    ctx.fillStyle=sky;ctx.fillRect(0,0,s.w,s.h);

    mountains([[-.05,.58],[.07,.50],[.16,.55],[.25,.43],[.34,.51],[.43,.40],[.52,.48],[.61,.35],[.69,.46],[.78,.38],[.87,.47],[.96,.40],[1.06,.52]],'#0a1115',px*-7,py*-3);
    mountains([[-.05,.69],[.10,.59],[.19,.64],[.30,.53],[.41,.61],[.52,.52],[.63,.60],[.74,.49],[.84,.58],[.94,.51],[1.06,.62]],'#071015',px*-12,py*-5);

    const haze=ctx.createLinearGradient(0,s.h*.36,0,s.h*.73);
    haze.addColorStop(0,'rgba(120,150,160,0)');haze.addColorStop(.55,'rgba(120,150,160,.035)');haze.addColorStop(1,'rgba(120,150,160,0)');
    ctx.fillStyle=haze;ctx.fillRect(0,s.h*.34,s.w,s.h*.4);

    ctx.beginPath();ctx.moveTo(0,s.h*.76);
    ctx.bezierCurveTo(s.w*.2,s.h*.73,s.w*.42,s.h*.80,s.w*.62,s.h*.75);
    ctx.bezierCurveTo(s.w*.78,s.h*.71,s.w*.91,s.h*.75,s.w,s.h*.72);
    ctx.lineTo(s.w,s.h);ctx.lineTo(0,s.h);ctx.closePath();ctx.fillStyle='#030607';ctx.fill();
  }
  function drawOutpost(px,py,power){
    const x=s.w*.64+px*9,y=s.h*.78+py*3,w=Math.min(s.w*.26,360),h=Math.min(s.h*.18,165);
    ctx.save();ctx.translate(x,y);
    ctx.fillStyle='#090e10';ctx.strokeStyle='rgba(154,177,185,.18)';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-h*.65);ctx.lineTo(w*.14,-h);ctx.lineTo(w*.72,-h);ctx.lineTo(w*.84,-h*.73);ctx.lineTo(w,-h*.73);ctx.lineTo(w,0);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#0c1316';ctx.fillRect(w*.73,-h*.56,w*.26,h*.56);ctx.strokeRect(w*.73,-h*.56,w*.26,h*.56);
    ctx.strokeStyle='rgba(160,184,193,.12)';
    for(let i=1;i<5;i++){const gx=w*(.12+i*.13);ctx.beginPath();ctx.moveTo(gx,-h*.93);ctx.lineTo(gx,-h*.04);ctx.stroke()}
    ctx.fillStyle=`rgba(208,161,90,${.30+power*.42})`;ctx.shadowColor='rgba(208,161,90,.4)';ctx.shadowBlur=10+power*14;
    ctx.fillRect(w*.16,-h*.58,w*.16,h*.16);ctx.fillRect(w*.39,-h*.58,w*.12,h*.16);ctx.shadowBlur=0;
    ctx.fillStyle='#050809';ctx.fillRect(w*.56,-h*.43,w*.12,h*.43);
    ctx.strokeStyle='rgba(174,198,207,.22)';ctx.beginPath();ctx.moveTo(w*.20,-h);ctx.lineTo(w*.20,-h*1.36);ctx.stroke();
    ctx.beginPath();ctx.moveTo(w*.15,-h*1.25);ctx.lineTo(w*.25,-h*1.25);ctx.stroke();
    ctx.restore();
  }

  function point(a,c,b,t){
    const u=1-t;
    return{x:u*u*a.x+2*u*t*c.x+t*t*b.x,y:u*u*a.y+2*u*t*c.y+t*t*b.y};
  }

  function wire(a,b,sag){
    const c={x:(a.x+b.x)/2,y:Math.max(a.y,b.y)+sag};
    ctx.strokeStyle='rgba(154,180,190,.25)';ctx.lineWidth=1.1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo(c.x,c.y,b.x,b.y);ctx.stroke();
    return{a,c,b};
  }

  function poles(px,py){
    const list=[
      {x:s.w*.93+px*11,y:s.h*.65+py*4,h:s.h*.43},
      {x:s.w*.78+px*9,y:s.h*.68+py*3,h:s.h*.38},
      {x:s.w*.60+px*6,y:s.h*.70+py*2,h:s.h*.34}
    ];
    list.forEach(p=>{
      const top=p.y-p.h;ctx.strokeStyle='#111a1e';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(p.x,p.y+25);ctx.lineTo(p.x,top);ctx.stroke();
      ctx.strokeStyle='rgba(154,178,188,.24)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x-24,top+15);ctx.lineTo(p.x+24,top+15);ctx.stroke();
      ctx.fillStyle='#0d1518';ctx.fillRect(p.x-27,top+12,54,5);
    });
    return list.map(p=>({x:p.x,y:p.y-p.h+15}));
  }
  function staticArc(x,y,intensity,time){
    const seed=Math.floor(time/45);ctx.save();
    ctx.strokeStyle=`rgba(220,246,255,${.22+intensity*.58})`;ctx.lineWidth=.8+intensity*.6;
    ctx.shadowColor='rgba(185,232,255,.85)';ctx.shadowBlur=8+intensity*12;ctx.beginPath();ctx.moveTo(x,y);
    const len=30+intensity*24;
    for(let i=1;i<=5;i++){const n=rnd(seed+i*17)-.5;ctx.lineTo(x-(len/5)*i,y+n*14+i*1.5)}
    ctx.stroke();ctx.restore();
  }

  function powerLines(px,py,time){
    const p=poles(px,py),service={x:s.w*.53+px*5,y:s.h*.42+py*2};
    const seg=[wire(p[0],p[1],26),wire(p[1],p[2],23),wire(p[2],service,18)];
    ctx.strokeStyle='rgba(143,169,179,.2)';ctx.beginPath();ctx.moveTo(service.x,service.y);ctx.lineTo(service.x,s.h*.61);ctx.lineTo(s.w*.58,s.h*.65);ctx.stroke();

    const cycle=((time-s.start)%6400)/6400;let power=reduce.matches?.18:0;
    if(cycle<.28&&!reduce.matches){
      const progress=cycle/.28,scaled=progress*seg.length,index=Math.min(seg.length-1,Math.floor(scaled)),t=scaled-index;
      const q=point(seg[index].a,seg[index].c,seg[index].b,t);
      const glow=ctx.createRadialGradient(q.x,q.y,0,q.x,q.y,22);
      glow.addColorStop(0,'rgba(225,247,255,.95)');glow.addColorStop(.22,'rgba(185,232,255,.65)');glow.addColorStop(1,'rgba(185,232,255,0)');
      ctx.fillStyle=glow;ctx.beginPath();ctx.arc(q.x,q.y,22,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#edfaff';ctx.beginPath();ctx.arc(q.x,q.y,1.5,0,Math.PI*2);ctx.fill();
      if(progress>.82){power=clamp((progress-.82)/.18,0,1);staticArc(service.x+2,service.y+1,power,time)}
    }
    if(title)title.classList.toggle('is-charged',power>.28);
    return power;
  }

  function rainfall(dt){
    ctx.save();ctx.lineCap='round';
    s.rain.forEach((d,i)=>{
      if(!reduce.matches){
        d.y+=(d.speed*dt)/1000;d.x-=(d.drift*dt)/1000;
        if(d.y>s.h+40||d.x<-40){d.y=-d.len;d.x=rnd(i+performance.now()*.001)*(s.w+80)}
      }
      ctx.strokeStyle=`rgba(175,201,211,${d.a})`;ctx.lineWidth=d.len>24?.9:.65;ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(d.x-d.len*.18,d.y+d.len);ctx.stroke();
    });
    ctx.restore();
  }
  function draw(time,force=false){
    if(!s.w||!s.h)return;
    const dt=force?0:Math.min(40,time-(s.last||time));s.last=time;
    s.px+=(s.tx-s.px)*.035;s.py+=(s.ty-s.py)*.035;
    const px=reduce.matches?0:s.px,py=reduce.matches?0:s.py;
    drawWorld(px,py);
    const power=powerLines(px,py,time);
    drawOutpost(px,py,power);
    rainfall(dt);
    if(s.running&&!reduce.matches)requestAnimationFrame(draw);
  }

  function pointer(e){
    const r=canvas.getBoundingClientRect();
    s.tx=clamp((e.clientX-r.left)/r.width-.5,-.5,.5);
    s.ty=clamp((e.clientY-r.top)/r.height-.5,-.5,.5);
  }

  addEventListener('pointermove',pointer,{passive:true});
  document.addEventListener('visibilitychange',()=>{
    s.running=!document.hidden;
    if(s.running&&!reduce.matches){s.last=performance.now();requestAnimationFrame(draw)}
  });
  reduce.addEventListener('change',()=>{s.running=!document.hidden;s.last=performance.now();draw(performance.now(),true)});
  new ResizeObserver(resize).observe(canvas);
}
