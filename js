const T={w:{sub:"გამარჯობა! 👋",body:"გამარჯობა,\n\nვიმედოვნებ კარგად ხარ!\n\nმოსაყვარლად,"},t:{sub:"მადლობა 🙏",body:"გამარჯობა,\n\nდიდი მადლობა!\n\nგულთბილად,"},f:{sub:"Follow-up 🔁",body:"გამარჯობა,\n\nმინდოდა შემეხსენებინა...\n\nმოსაყვარლად,"}};

function applyTpl(){const v=document.getElementById("tpl").value;if(!v)return;document.getElementById("sub").value=T[v].sub;document.getElementById("body").value=T[v].body;showToast("✨ შაბლონი გამოყენებულია!")}

function clear_(){["to","sub","body"].forEach(i=>document.getElementById(i).value="");document.getElementById("tpl").value="";showToast("🗑️ გასუფთავდა!")}

function send(){const to=document.getElementById("to").value.trim(),sub=document.getElementById("sub").value.trim(),body=document.getElementById("body").value.trim();if(!to||!sub||!body)return showToast("⚠️ შეავსე ყველა ველი!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to))return showToast("⚠️ არასწორი ელ-ფოსტა!");addHistory(to,sub);clear_();showToast("✉️ გაიგზავნა! "+to)}

function addHistory(to,sub){const h=document.getElementById("history"),t=new Date().toLocaleTimeString("ka-GE",{hour:"2-digit",minute:"2-digit"}),d=document.createElement("div");d.className="hist-item";d.innerHTML=`<strong>✉️ ${esc(sub)}</strong><div class="hist-time">→ ${esc(to)} · ${t}</div>`;h.prepend(d)}

function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}

function showToast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),2500)}

document.querySelectorAll("label").forEach(l=>{
  l.addEventListener("mouseenter",()=>{l.style.color="#b71c1c";l.style.textShadow="0 0 10px #b71c1c88";l.style.transform="scale(1.08)"});
  l.addEventListener("mouseleave",()=>{l.style.color="var(--main)";l.style.textShadow="";l.style.transform=""});
}); 
