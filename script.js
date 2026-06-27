/* ── CURSOR ── */
const dot = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function moveCursor(){
  dot.style.left = mx+'px'; dot.style.top = my+'px';
  rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(moveCursor);
})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-grow'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-grow'));
});

/* ── NAV ── */
window.addEventListener('scroll',()=>{
  document.getElementById('main-nav').classList.toggle('scrolled', scrollY>40);
});

/* ── MOBILE MENU ── */
function openMob(){document.getElementById('mob-menu').classList.add('open');}
function closeMob(){document.getElementById('mob-menu').classList.remove('open');}

/* ── INTERSECTION OBSERVER ── */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:0.1, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.rl,.rr,.tl-entry').forEach(el=>io.observe(el));

/* ── STAGGER ── */
document.querySelectorAll('.proj-row').forEach((el,i)=>{
  el.style.transitionDelay=(i*0.09)+'s';
});
document.querySelectorAll('.tl-entry').forEach((el,i)=>{
  el.style.transitionDelay=(i*0.1)+'s';
});
document.querySelectorAll('.f-tag').forEach((el,i)=>{
  el.style.transition=`all 0.35s ${0.3+i*0.06}s var(--ease-spring), background 0.25s, color 0.25s, border-color 0.25s`;
});

/* ── SKILL ITEM STAGGER IN ── */
document.querySelectorAll('.sk-item').forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateX(-10px)';
  el.style.transition=`opacity 0.5s ${i*0.04}s ease, transform 0.5s ${i*0.04}s ease, color 0.2s, transform 0.25s var(--ease-spring)`;
});
const skObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.sk-item').forEach(s=>{
        s.style.opacity='1'; s.style.transform='translateX(0)';
      });
      skObs.unobserve(e.target);
    }
  });
},{threshold:0.2});
document.querySelectorAll('.skill-card').forEach(c=>skObs.observe(c));

/* ── FACT ROW STAGGER ── */
document.querySelectorAll('.fact-row').forEach((el,i)=>{
  el.style.opacity='0'; el.style.transform='translateX(16px)';
  el.style.transition=`opacity 0.5s ${i*0.08}s ease, transform 0.5s ${i*0.08}s ease, padding-left 0.3s ease`;
});
const frObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.fact-row').forEach(f=>{
        f.style.opacity='1'; f.style.transform='translateX(0)';
      });
      frObs.unobserve(e.target);
    }
  });
},{threshold:0.2});
document.querySelectorAll('.fact-list').forEach(el=>frObs.observe(el));

/* ── TIMELINE ACTIVE ── */
const tlEs = document.querySelectorAll('.tl-entry');
const tlNs = document.querySelectorAll('.tl-side-item');
const tlObs2 = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const i = [...tlEs].indexOf(e.target);
      tlNs.forEach((n,j)=>n.classList.toggle('active',j===i));
    }
  });
},{threshold:0.5});
tlEs.forEach(el=>tlObs2.observe(el));

/* ── MAGNETIC ── */
document.querySelectorAll('.nav-cta,.btn-solid,.btn-outline,.f-submit').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.2}px,${y*0.2}px) scale(1.04)`;
  });
  btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; });
});

/* ── FORM ── */
function handleSend(btn){
  btn.innerHTML='<svg viewBox="0 0 24 24" style="width:13px;height:13px;fill:#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Sent!';
  btn.style.background='#1c6b42';
  setTimeout(()=>{
    btn.innerHTML='<svg viewBox="0 0 24 24" style="width:13px;height:13px;fill:#fff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg> Send Message';
    btn.style.background='';
  },3000);
}
