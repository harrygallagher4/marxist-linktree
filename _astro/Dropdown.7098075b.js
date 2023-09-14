import{d as x,c as h,g as n,a as _,i as a,b as m,r as u,t as r}from"./web.f120b598.js";const b=r(`<style>
		h2 {
			font-weight: bold;
			font-size:	 20px;
		}
		p {
			padding-left: 20px;
		}
		.dropdown-menu {
			padding: 10px 20px;
			background-color: #222a;
			border-radius: 20px;
		}
		.header {
			display: flex;
			justify-content: space-between;
		}
	`),f=r('<div class="dropdown-menu"><div class="header"><h2></h2><h2></h2></div><!#><!/>'),S=r("<p>bruh"),w=i=>{const[t,o]=h(!1);return[n(b),(()=>{const e=n(f),s=e.firstChild,l=s.firstChild,d=l.nextSibling,c=s.nextSibling,[p,g]=_(c.nextSibling);return e.$$click=()=>o(!t()),a(l,()=>i.category),a(d,()=>t()?"<":"V"),a(e,(()=>{const $=m(()=>!!t());return()=>$()?n(S):""})(),p,g),u(),e})()]};x(["click"]);export{w as Dropdown};
