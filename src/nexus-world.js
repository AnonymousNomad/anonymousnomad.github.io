const world=document.querySelector('[data-nexus-world]');
const control=document.querySelector('[data-world-control]');
if(world){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const saveData=Boolean(navigator.connection?.saveData);
  const low=innerWidth<700||saveData||(navigator.hardwareConcurrency||8)<=4;
  const suffix=low?'-mobile':'';
  const plates=['data-city-v2','binary-valley-v3','city-terraces-v3','binary-coast-v3'];
  let index=0,paused=reduce.matches||saveData,timer=null;
  const current=world.querySelector('[data-world-current]');
  const next=world.querySelector('[data-world-next]');
  function src(name){return '/nexus/assets/world/'+name+suffix+'.webp'}
  function preload(i){const img=new Image();img.decoding='async';img.src=src(plates[i]);return img}
  function swap(){
    if(paused||!current||!next)return;
    const ni=(index+1)%plates.length;
    const img=preload(ni);
    img.onload=()=>{
      next.src=img.src;
      next.style.opacity='1';
      current.style.opacity='0';
      setTimeout(()=>{
        current.src=next.src;current.style.opacity='1';next.style.opacity='0';index=ni;
      },1450);
    };
  }
  function start(){clearInterval(timer);if(!paused)timer=setInterval(swap,11000)}
  if(current)current.src=src(plates[0]);
  start();
  document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(timer);else start()});
  if(control){
    if(reduce.matches){control.textContent='REDUCED MOTION';control.disabled=true}
    else control.addEventListener('click',()=>{paused=!paused;control.textContent=paused?'RESUME WORLD':'PAUSE WORLD';start()});
  }
  reduce.addEventListener('change',()=>{paused=reduce.matches;if(control){control.disabled=reduce.matches;control.textContent=reduce.matches?'REDUCED MOTION':paused?'RESUME WORLD':'PAUSE WORLD'}start()});
}