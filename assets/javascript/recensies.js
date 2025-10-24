				const CONFIG={
				  url:'https://corsproxy.io/?https://www.powr.io/product_reviews/37775147/product/0-f2ff3b4c_1705090005/page/1.json',
				  fallback:{
					success:true,
					reviews:[
					  {
						id:27921,
						rating:5,
						created_at:"2024-01-15T17:01:18.278Z",
						reviewer:{first_name:"kiki",last_name:"VD weg"},
						review:{title:"in een woord TOP!",body:"maakt goed schoon voor n mooi prijsje"}
					  },
					  {
						id:27855,
						rating:5,
						created_at:"2024-01-13T09:53:11.719Z",
						reviewer:{first_name:"jannes",last_name:"VD weg"},
						review:{title:"PERFECT!",body:"doet alles goed voor een mooi prijsje"}
					  }
					]
				  }
				};
				
				function starSvg(filled){
				  return `<svg class="star" viewBox="0 0 24 24"><path fill="${filled?'currentColor':'rgba(255,255,255,.15)'}" d="M12 .587l3.668 7.431 8.2 1.193-5.93 5.782 1.4 8.162L12 18.896l-7.338 3.86 1.4-8.162L.132 9.211l8.2-1.193z"/></svg>`;
				}
				function escapeHtml(t){return t.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
				
				async function loadReviews(){
				  try{
					const res=await fetch(CONFIG.url,{cache:"no-store"});
					if(!res.ok)throw 0;
					const data=await res.json();
					render(data.reviews||[]);
				  }catch{render(CONFIG.fallback.reviews)}
				}
				
				function render(revs){
				  const track=document.getElementById("carousel-track");
				  if(!revs.length){track.innerHTML="<p>Geen reviews gevonden.</p>";return;}
				  revs.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
				  track.innerHTML=revs.map(r=>{
					const name=`${r.reviewer?.first_name||''} ${r.reviewer?.last_name||''}`.trim()||'Anoniem';
					const date=new Date(r.created_at).toLocaleDateString('nl-NL');
					const stars=Array.from({length:5},(_,i)=>starSvg(i<r.rating)).join('');
					return `<div class="review-card">
					  <div class="review-head">
						<div>
						  <div class="review-name">${escapeHtml(name)}</div>
						  <div class="review-title">${escapeHtml(r.review.title||'')}</div>
						</div>
						<div class="stars">${stars}</div>
					  </div>
					  <div class="review-body">${escapeHtml(r.review.body||'')}</div>
					  <div class="review-date">${date}</div>
					</div>`;
				  }).join('');
				  initCarousel();
				}
				
				function initCarousel(){
				  const track=document.getElementById("carousel-track");
				  const slides=[...track.children];
				  let index=0;
				  const update=()=>track.style.transform=`translateX(-${index*100}%)`;
				  document.getElementById("next").onclick=()=>{index=(index+1)%slides.length;update();}
				  document.getElementById("prev").onclick=()=>{index=(index-1+slides.length)%slides.length;update();}
				  // auto-slide every 6s
				  setInterval(()=>{index=(index+1)%slides.length;update();},6000);
				}
				
				document.getElementById("write-btn").onclick=()=>{
				  // 👉 pas de URL aan naar je eigen formulier of Google reviewlink
				  window.open("/recensies");
				};
				
				loadReviews();
