document.addEventListener('DOMContentLoaded',()=>{
  const search=document.querySelector('[data-search]');
  if(search){
    const cards=[...document.querySelectorAll('[data-card]')];
    search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();cards.forEach(c=>c.style.display=!q||c.innerText.toLowerCase().includes(q)?'':'none');});
  }
  document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
    const code=document.querySelector(btn.dataset.copy)?.innerText||'';
    try{await navigator.clipboard.writeText(code);btn.textContent='Tersalin';setTimeout(()=>btn.textContent='Salin',1400)}catch(e){btn.textContent='Gagal';setTimeout(()=>btn.textContent='Salin',1400)}
  }));
});
