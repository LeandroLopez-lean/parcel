const e=document.getElementById("app");(async()=>{let t=await fetch("http://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json(),i=a?.map(e=>`
            <article class="Card">
                <img src="${e.images[0]}">
                <h2>
                    ${e.title} <small>Precio $ ${e.price}</small>
                </h2>
            </article>
        `).join(""),s=document.createElement("section");s.classList.add("Items"),s.innerHTML=i,e.appendChild(s)})();
//# sourceMappingURL=index.e2620b43.js.map
