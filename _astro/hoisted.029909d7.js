import"https://unpkg.com/htmx.org@1.9.9";const m=window.location.pathname;new URLSearchParams(m);const n=document.getElementById("jumlahPesanan"),u=document.querySelector(".increment-btn"),i=document.querySelector(".decrement-btn"),e=624e4,r=document.querySelector(".subtotal"),c=document.querySelector(".total");let t=1;n.textContent=t;r.textContent=new Intl.NumberFormat("id-ID").format(t*e);c.textContent=new Intl.NumberFormat("id-ID").format(t*e);function a(o){c.textContent=new Intl.NumberFormat("id-ID").format(o*e),r.textContent=new Intl.NumberFormat("id-ID").format(o*e)}function l(){t++,t>=1&&(n.textContent=t,a(t))}function d(){t>1&&(t--,n.textContent=t,a(t))}u.addEventListener("click",l);i.addEventListener("click",d);
