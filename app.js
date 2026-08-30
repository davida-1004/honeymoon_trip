(function(){
  const root=document.getElementById('root');
  let mode='day', cur=1, guideC='fr', eatC='fr';
  const CN={fr:'프랑스',ch:'스위스',it:'이탈리아'};
  const PERIODS=['오전','오전~점심','오후','저녁'];
  const PICON={'오전':'☀','오전~점심':'🌤','오후':'🌤','저녁':'🌙'};
  const ICONRE=/🏊|🏖️|🌅|🅿️|🛒|🌿|♨️/;
  const ALL=DAYS.concat(DAYS2);

  const gmap=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
  const linkOf=p=>p.u?p.u:(p.q?gmap(p.q):null);
  const dayOf=n=>ALL.find(d=>d.n===n);

  function hero(){
    const segs=ALL.map(d=>`<div class="seg ${d.country} ${d.n===cur&&mode==='day'?'on':''}" data-goto="${d.n}" title="Day ${d.n} · ${d.date} ${d.city}">${d.n}</div>`).join('');
    return `<div class="hero">
      <div class="kicker">Honeymoon · 17 nights 18 days</div>
      <h1>${TRIP.title}</h1>
      <div class="dates">${TRIP.sub}</div>
      <div class="tripbar">${segs}</div>
      <div class="tripbar-legend">
        <span><i style="background:var(--fr)"></i>파리 5박</span>
        <span><i style="background:var(--ch)"></i>그린델발트 5박</span>
        <span><i style="background:var(--it)"></i>이탈리아 7박</span>
      </div></div>`;
  }

  function modes(){
    const M=[['day','일정'],['overview','한눈에'],['eat','맛집'],['guide','나라별 정보']];
    return `<div class="modes">`+M.map(m=>`<div class="mode ${mode===m[0]?'on':''}" data-mode="${m[0]}">${m[1]}</div>`).join('')+`</div>`;
  }

  function rail(){
    return `<div class="rail-wrap"><div class="rail" id="rail">`+ALL.map(d=>`
      <div class="chip ${d.country} ${d.n===cur?'on':''}" data-goto="${d.n}">
        <div class="cd">DAY</div><div class="cn">${d.n}</div><div class="cdate">${d.date}</div>
      </div>`).join('')+`</div></div>`;
  }

  /* ---------- pieces ---------- */
  function tips(d){
    if(!d.tips) return '';
    return d.tips.map(t=>`<div class="tipbox ${d.country}">
      <h5>${t.icon} ${t.title}</h5>
      <ul>${t.lines.map(l=>`<li>${l}</li>`).join('')}</ul></div>`).join('');
  }

  function timeline(d){
    if(!d.timeline||!d.timeline.length) return '';
    let out='', seen=[];
    d.timeline.forEach(t=>{ if(seen.indexOf(t.period)<0) seen.push(t.period); });
    seen.forEach(p=>{
      const items=d.timeline.filter(t=>t.period===p);
      out+=`<div class="tl-period"><span class="lbl">${PICON[p]||'•'} ${p}</span><span class="ln"></span></div><div class="tl-items">`;
      items.forEach(t=>{
        out+=`<div class="ev ${d.country} ${t.key?'key':''} ${t.soft?'soft':''}">
          <div class="dot">${t.icon||'•'}</div>
          <div class="ev-card">
            ${t.time?`<div class="t">${t.time}</div>`:''}
            <div class="ti">${t.title}</div>
            ${t.desc?`<div class="de">${t.desc}</div>`:''}
            ${t.sub?`<ul class="subs">${t.sub.map(s=>`<li>${s}</li>`).join('')}</ul>`:''}
            ${t.link?`<a class="evlink" href="${t.link.u}" target="_blank" rel="noopener">🔗 ${t.link.label}</a>`:''}
          </div></div>`;
      });
      out+=`</div>`;
    });
    return `<div class="tl">${out}</div>`;
  }

  function guides(d){
    if(!d.guides) return '';
    return d.guides.map(g=>`<div class="guidebox">
      <h4>🧭 ${g.title}${g.badge?`<span class="gbadge">${g.badge}</span>`:''}</h4>
      ${g.steps.map(s=>`<div class="gstep ${d.country}">
        <div class="gl">${s.label}</div>
        <ul>${s.lines.map(l=>`<li>${l}</li>`).join('')}</ul>
        ${s.link?`<a class="glink" href="${s.link.u}" target="_blank" rel="noopener">🔗 ${s.link.label}</a>`:''}
      </div>`).join('')}
    </div>`).join('');
  }

  function plans(d){
    if(!d.plans) return '';
    return `<div class="plans">`+d.plans.map(p=>`
      <div class="plan"><h4>${p.label}</h4>
        ${p.note?`<div class="pnote">${p.note}</div>`:''}
        <ul>${p.items.map(i=>`<li>${i.time?`<span class="pt">${i.time}</span>`:''}${i.t}${i.link?`<a class="plink" href="${i.link}" target="_blank" rel="noopener">🔗 예약</a>`:''}</li>`).join('')}</ul>
      </div>`).join('')+`</div>`;
  }

  function table(t){
    return `<div class="box"><h4>${t.title}</h4>
      ${t.note?`<div style="font-size:11.5px;color:var(--ink-3);margin:-4px 0 9px;line-height:1.5;">${t.note}</div>`:''}
      <div class="tablescroll"><table class="wtable">
        ${t.head?`<thead><tr>${t.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead>`:''}
        <tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>
      ${t.links?`<div class="cardlinks">${t.links.map(l=>`<a href="${l.u}" target="_blank" rel="noopener">🔗 ${l.label}</a>`).join('')}</div>`:''}
    </div>`;
  }

  function extras(d){
    let o='';
    if(d.prep) o+=`<div class="box"><h4>🎒 준비물</h4><ul>${d.prep.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
    if(d.table) o+=table(d.table);
    if(d.nightBox) o+=`<div class="box"><h4>${d.nightBox.icon} ${d.nightBox.title}</h4><ul>${d.nightBox.lines.map(l=>`<li>${l}</li>`).join('')}</ul></div>`;
    if(d.souvenirGroups){
      o+=`<div class="box"><h4>🎁 기념품 · 쇼핑 리스트</h4>`
       + d.souvenirGroups.map(g=>`<div class="svgroup"><div class="svg-t">${g.g}</div><ul>${g.items.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')
       + (d.souvenirNote?`<div class="bnote">📍 ${d.souvenirNote}</div>`:'')+`</div>`;
    }
    return o;
  }

  function pickEl(p){
    const href=linkOf(p);
    const inner=`<span class="pi">🍽</span><div class="pbody"><div class="pn">${p.n}</div>${p.d?`<div class="pd">${p.d}</div>`:''}${p.sub?`<ul class="subs" style="margin-top:5px;">${p.sub.map(s=>`<li>${s}</li>`).join('')}</ul>`:''}</div>`;
    return href?`<a class="pick" href="${href}" target="_blank" rel="noopener">${inner}<span class="pgo">↗</span></a>`
               :`<div class="pick">${inner}</div>`;
  }

  function meals(d){
    if(!d.meals||!d.meals.length) return '';
    return `<div class="meals"><div class="sectitle">식사 · 카페 <span class="hint">탭하면 구글맵</span></div>`
      +d.meals.map(m=>`<div class="meal-slot"><div class="sl">${m.slot}</div>
        ${m.note?`<div style="font-size:11.5px;color:var(--ink-3);margin:-3px 0 7px;">${m.note}</div>`:''}
        <div class="picks">${m.picks.map(pickEl).join('')}</div></div>`).join('')
      +(d.refList?`<div class="reflist"><h5>📌 ${d.refList.title}</h5><ul>${d.refList.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`:'')
      +`</div>`;
  }

  function dayPanel(){
    const d=dayOf(cur);
    return `<div class="day">
      <div class="dayhead ${d.country}">
        <div class="top"><span class="dn">DAY ${String(d.n).padStart(2,'0')}</span>
        <span class="dt">${d.date} (${d.dow}) · ${CN[d.country]} ${d.city}</span></div>
        <h2>${d.title}</h2>
        <div class="hl">${d.headline}</div>
        ${d.tags?`<div class="tagrow">${d.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`:''}
        <div class="stay">🏨 ${d.stay}</div>
      </div>
      ${d.warn?`<div class="warnbox"><b>⚠️ 주의</b> · ${d.warn}</div>`:''}
      ${tips(d)}
      ${guides(d)}
      ${timeline(d)}
      ${plans(d)}
      ${extras(d)}
      ${meals(d)}
      <div class="daynav">
        <button data-nav="-1" ${cur===1?'disabled':''}>← Day ${cur-1||''}</button>
        <button data-nav="1" ${cur===18?'disabled':''}>Day ${cur+1>18?'':cur+1} →</button>
      </div></div>`;
  }

  /* ---------- overview ---------- */
  function overviewPanel(){
    const F={fr:'🇫🇷',ch:'🇨🇭',it:'🇮🇹'};
    return `<div class="guide">
      <div class="sectitle">한 장 요약 · Day 1—18</div>
      <div class="box" style="margin-top:0;padding:12px 10px;">
        <div class="tablescroll"><table class="ovtable">
          <thead><tr><th>Day</th><th>날짜</th><th>도시(숙소)</th><th>일정 요약</th><th>체크 포인트</th></tr></thead>
          <tbody>${OVERVIEW.map(r=>`<tr data-goto="${r[0]}">
            <td class="ovd ${r[2]}">${r[0]}</td>
            <td style="white-space:nowrap;">${r[1]}</td>
            <td><span class="ovcity">${F[r[2]]} ${r[3].split(' (')[0]}</span><br><span class="sm" style="color:var(--ink-3);font-size:11px;">${r[3].includes('(')?r[3].split(' (')[1].replace(')',''):''}</span></td>
            <td>${r[4]}</td><td class="sm">${r[5]}</td></tr>`).join('')}</tbody>
        </table></div>
      </div>

      <div class="sectitle">항공편</div>
      <div class="infogrid">${TRIP.flights.map(f=>`<div class="icard"><div class="il">${f.label}</div><ul>${f.lines.map(l=>`<li>${l}</li>`).join('')}</ul></div>`).join('')}</div>

      <div class="sectitle">숙소</div>
      <div class="infogrid">${TRIP.stays.map(s=>`<div class="icard" style="border-left:3px solid var(--${s.c});"><div class="il">${s.t}</div><ul>${s.lines.map(l=>`<li>${l}</li>`).join('')}</ul></div>`).join('')}</div>

      <div class="sectitle">유용한 정보</div>
      <div class="box" style="margin-top:0;"><ul>${TRIP.apps.map(a=>`<li>${a}</li>`).join('')}</ul></div>
    </div>`;
  }

  /* ---------- eat ---------- */
  function eatPanel(){
    const g=PLACES[eatC];
    const tabs=Object.keys(PLACES).map(k=>`<div class="chip ${k} ${k===eatC?'on':''}" data-ec="${k}" style="min-width:auto;padding:8px 14px;"><div class="cn" style="font-size:13px;font-family:var(--sans);">${COUNTRIES[k].flag} ${COUNTRIES[k].short}</div></div>`).join('');
    const total=g.reduce((a,x)=>a+x.items.length,0);
    return `<div class="guide">
      <div class="rail" style="padding:0 0 13px;">${tabs}</div>
      <div class="eatbar ${eatC}">
        <div class="eb-l"><div class="eb-t">${COUNTRIES[eatC].flag} ${COUNTRIES[eatC].short} · ${total}곳</div>
        <div class="eb-s">이름 탭하면 구글맵 · <b>D숫자</b>는 일정 배치된 날</div></div>
        <a class="eb-link" href="${MAPLIST[eatC]}" target="_blank" rel="noopener">내 지도 ↗</a>
      </div>
      ${g.map(grp=>`<div class="eatgroup">
        <div class="eathead ${eatC}">${grp.city}<span class="cnt">${grp.items.length}</span></div>
        <div class="picks">${grp.items.map(p=>{
          const m=p.d&&p.d.match(ICONRE), icon=m?m[0]:'🍽';
          const desc=p.d?p.d.replace(ICONRE,'').trim():'';
          return `<a class="pick" href="${linkOf(p)}" target="_blank" rel="noopener">
            <span class="pi">${icon}</span>
            <div class="pbody"><div class="pn">${p.n}${p.day?`<span class="dbadge ${eatC}">D${p.day}</span>`:''}</div>${desc?`<div class="pd">${desc}</div>`:''}</div>
            <span class="pgo">↗</span></a>`;}).join('')}</div>
      </div>`).join('')}</div>`;
  }

  /* ---------- guide ---------- */
  function guidePanel(){
    const c=COUNTRIES[guideC];
    const tabs=Object.keys(COUNTRIES).map(k=>`<div class="chip ${k} ${k===guideC?'on':''}" data-gc="${k}" style="min-width:auto;padding:8px 14px;"><div class="cn" style="font-size:13px;font-family:var(--sans);">${COUNTRIES[k].flag} ${COUNTRIES[k].short}</div></div>`).join('');
    const cards=c.cards.map(cd=>{
      let inner='';
      if(cd.rows) inner+=`<div class="tablescroll"><table class="wtable"><tbody>${cd.rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      if(cd.list) inner+=`<ul>${cd.list.map(x=>`<li>${x}</li>`).join('')}</ul>`;
      if(cd.links) inner+=`<div class="cardlinks">${cd.links.map(l=>`<a href="${l.u}" target="_blank" rel="noopener">🔗 ${l.label}</a>`).join('')}</div>`;
      return `<div class="box" style="margin-top:11px;"><h4>${cd.icon} ${cd.title}</h4>${inner}${cd.note?`<div class="bnote">${cd.note}</div>`:''}</div>`;
    }).join('');
    const tbls=(c.tables||[]).map(table).join('');
    return `<div class="guide">
      <div class="rail" style="padding:0 0 13px;">${tabs}</div>
      <div class="cbanner ${guideC}"><h3>${c.flag} ${c.name}</h3><div class="ci">${c.intro}</div><div class="cm">${c.nights} · ${c.dates}</div></div>
      ${cards}${tbls}</div>`;
  }

  function render(){
    let h=hero()+modes();
    if(mode==='day') h+=rail();
    h+=`<div class="panel on">`;
    if(mode==='day') h+=dayPanel();
    else if(mode==='overview') h+=overviewPanel();
    else if(mode==='eat') h+=eatPanel();
    else h+=guidePanel();
    h+=`</div><div class="foot">Bon voyage · Buon viaggio · Gute Reise ✈<br>즐거운 신혼여행 되세요 💕</div>`;
    root.innerHTML=h; bind(); if(mode==='day') scrollRail();
  }
  function scrollRail(){const r=document.getElementById('rail'),a=r&&r.querySelector('.chip.on'); if(r&&a) r.scrollLeft=a.offsetLeft-r.clientWidth/2+a.clientWidth/2;}
  function bind(){
    document.querySelectorAll('[data-mode]').forEach(e=>e.onclick=()=>{mode=e.dataset.mode;render();window.scrollTo({top:0,behavior:'smooth'});});
    document.querySelectorAll('[data-goto]').forEach(e=>e.onclick=()=>{cur=+e.dataset.goto;mode='day';render();window.scrollTo({top:0,behavior:'smooth'});});
    document.querySelectorAll('[data-nav]').forEach(e=>e.onclick=()=>{cur=Math.min(18,Math.max(1,cur+(+e.dataset.nav)));render();window.scrollTo({top:0,behavior:'smooth'});});
    document.querySelectorAll('[data-gc]').forEach(e=>e.onclick=()=>{guideC=e.dataset.gc;render();});
    document.querySelectorAll('[data-ec]').forEach(e=>e.onclick=()=>{eatC=e.dataset.ec;render();window.scrollTo({top:0,behavior:'smooth'});});
  }
  render();
})();
