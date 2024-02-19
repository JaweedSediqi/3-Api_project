


























































// let input = document.getElementById('input');
// let result_box = document.getElementById('result');
// let show_more = document.getElementById('show-more');
// let serch_btn = document.getElementById('serch-btn');
// let serch_form = document.getElementById('serch-form');
// let keyword = '';
// let page = 1;
// const accesskey = 'gb-CYgZOTVnZwViiuHn2ZtG7gaekb1nC63TD_GnNZ1I';
// async function serch_image() {
//     keyword = input.value;
//     const url = `
//     https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12
//     `;

//     const respose = await fetch(url);
//     const data = await respose.json();
//     const results = data.results;
//     if(page===1){
//         result_box.innerHTML='';
//     }
//     results.map((e) => {
//         const img = document.createElement('img');
//         img.src = e.urls.small;
//         const a = document.createElement('a');
//         a.href = e.links.html;
//         a.target = "_blank";
//         a.appendChild(img);
//         result_box.appendChild(a);

//     })
//     show_more.style.display='block'
// }
// serch_form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     page = 1;
//     serch_image();
// })
// show_more.addEventListener('click',()=>{
//     page++;
//     serch_image();
// })