function sendQuote(e){
  e.preventDefault();
  const name=document.getElementById('qName').value;
  const phone=document.getElementById('qPhone').value;
  const need=document.getElementById('qNeed').value;
  const msg=`Hello Lion Hardware, mimi ni ${name} (${phone}). Nahitaji: ${need}`;
  window.open('https://wa.me/254759679830?text='+encodeURIComponent(msg),'_blank');
}
function toggleBot(){ document.getElementById('botBox').classList.toggle('open'); }
function addMsg(text, isUser){
  const div=document.createElement('div');
  div.className='bot-msg'+(isUser?' user-msg':'');
  div.textContent=text;
  document.getElementById('botMessages').appendChild(div);
  document.getElementById('botMessages').scrollTop=9999;
}
function botReply(text){
  const t=text.toLowerCase();
  if(t.includes('saa')||t.includes('fungua')||t.includes('hour')||t.includes('open')) return "Tunafungua Mon-Sat 7:30am-7pm, Sun 9am-1pm. Karibu!";
  if(t.includes('wapi')||t.includes('location')||t.includes('mko wapi')||t.includes('address')) return "Tuko Isiolo Town, Main Street, katikati ya town karibu na main stage. Piga 0759 679 830 ukifika.";
  if(t.includes('deliver')||t.includes('leta')||t.includes('delivery')) return "Ndiyo, tunadeliver Isiolo town na karibu. Tuma list yako kwa WhatsApp tukupatie bei ya delivery.";
  if(t.includes('cement')||t.includes('simiti')) return "Tunayo Bamburi, Simba na ARM Cement. Bei inabadilika — bonyeza Ask Price kwa cement nikupe bei ya leo kwa WhatsApp.";
  if(t.includes('mabati')||t.includes('iron')||t.includes('roof')) return "Tunayo mabati Versatile na Box Profile, Gauge 30/28. Tuma size ya nyumba yako tukupatie bei na pieces ngapi unahitaji.";
  if(t.includes('paint')||t.includes('rangi')) return "Tunayo Crown, Duracoat, Galaxy — emulsion, gloss na weather guard. Niambie rangi na nyumba size gani.";
  if(t.includes('bei')||t.includes('price')||t.includes('cost')) return "Bei za leo zinabadilika kidogo. Niambie unahitaji nini na ngapi, nitakutumia bei sai hivi kwa WhatsApp 0759 679 830.";
  if(t.includes('human')||t.includes('mtu')||t.includes('talk')||t.includes('fundi')) return "Sawa, nakukuunganisha na mtu sasa — bonyeza WhatsApp hapa chini au piga 0759 679 830.";
  if(t.includes('asante')||t.includes('thanks')) return "Karibu sana! Jenga na Lion 🦁";
  if(t.includes('habari')||t.includes('hello')||t.includes('hi')||t.includes('mambo')) return "Mambo! Karibu Lion Hardware 🦁 Unahitaji cement, mabati, paint ama tools?";
  return "Sijakuelewa vizuri, lakini niko hapa! Uliza kuhusu hours, location, delivery, cement au mabati — ama bonyeza Talk to Human nikukuunganishe na 0759 679 830.";
}
function botAsk(kind){
  const map={hours:"Mnaufungua saa ngapi?",location:"Mko wapi?",delivery:"Mnadeliver?",cement:"Cement bei gani?",mabati:"Mabati bei gani?",human:"Nataka kuongea na mtu"};
  const q=map[kind]||kind;
  addMsg(q,true);
  setTimeout(()=>{ addMsg(botReply(q),false); },400);
}
function sendBot(){
  const inp=document.getElementById('botInput');
  const v=inp.value.trim();
  if(!v) return;
  addMsg(v,true); inp.value='';
  setTimeout(()=>{ addMsg(botReply(v),false); },400);
}
