import"https://unpkg.com/htmx.org@1.9.9";const i=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(i).forEach(function(t){t.addEventListener("submit",function(e){t.checkValidity()||(e.preventDefault(),e.stopPropagation()),t.classList.add("was-validated")},!1)});const r=document.querySelector(".input-nominal"),s=document.getElementById("bayarPenuh"),u=document.getElementById("bayarCicil");s.addEventListener("change",function(){this.checked&&r.classList.remove("d-flex")});u.addEventListener("change",function(){this.checked&&r.classList.add("d-flex")});//! Fungsi untuk show/hide pilihan opsi penyembelihan dan form shohibul qurban
const n=document.getElementById("containerPenyembelihan"),a=document.getElementById("containerFormShohibulQurban");document.querySelectorAll('input[name="Penyaluran"]').forEach(t=>{t.addEventListener("change",e=>{e.target.value==="Penyaluran1"?(n.style.display="none",a.style.display="block"):e.target.value==="Penyaluran2"||e.target.value==="Penyaluran3"?(n.style.display="block",a.style.display="none"):e.target.value==="Penyaluran4"&&(n.style.display="block",a.style.display="block")})});//! Fungsi copy values dari form pemesan ke shohibul qurban
const o=document.getElementById("copyCheckbox"),c=document.getElementById("formShohibulQurban-1");console.log(document.querySelectorAll("#formPemesan input, #formPemesan select, #formPemesan textarea"));o.addEventListener("change",()=>{o.checked?document.querySelectorAll("#formPemesan input, #formPemesan select, #formPemesan textarea").forEach((t,e)=>{const l=c.querySelectorAll("input, select, textarea")[e];l&&(l.value=t.value)}):c.reset()});
