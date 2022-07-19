const box=document.querySelector(".main")
const select=document.getElementById('lang')
const loading=document.querySelector('.loading')


const hideLoading=()=>{
       setTimeout(()=>{
        loading.classList.remove('display')
    },3000) 
}

const getinfo=(l)=>{
box.innerHTML=''
fetch(`https://api.currentsapi.services/v1/latest-news?language=${l}&apiKey=6P-DHWfKzvWGgieVHWKT_p-vjU0GwP89bFB4FJf50Ia391OY`)
.then(res=>res.json())
.then(data=>{
    hideLoading()
    data.news.map(e=>{
    box.innerHTML+=''
    box.innerHTML+=` <div class="card">
<div class="photo">
    <img src=${e.image} alt="">
    <div class="category">${e.category[0]}</div>
</div>
<div class="content">
    <h3><a href=${e.url} target="_blank"> ${e.title.substr(0,80)}</a></h3>
    <p>${e.description.substr(0,70)}</p>
    <div class="footer">
    <p>${e.category.map(a=>`<p>#${a}</p>`)}</p>
    </div>
</div>
</div>`}
)
})}

getinfo('en')

select.addEventListener("input",()=>{
    getinfo(select.value)
})
