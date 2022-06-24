const error= document.querySelector('.error');
const search = document.querySelector('#search');
search.addEventListener('click', (e) => {
   const searchbar = document.querySelector("#searchbar").value
   fetchData(searchbar);
})

function fetchData(query) {
    fetch(`https://api.coincap.io/v2/assets/${query}`)
    .then((resp) => resp.json())
    .then((Data) => {
         if (Data.error) {
            console.log(Data.error);
            error.setAttribute('style', 'display: block');
         }else
         {
            error.setAttribute('style', 'display: none');
    const children= document.querySelector('.data').children;
    children[0].innerHTML = Data.data.symbol;
    children[1].innerHTML = Data.data.priceUsd;
    children[2].innerHTML = Data.data.supply;
         }
     
  })}
  
  document.querySelector("._submit_btn").addEventListener("click", (e) => {
   e.preventDefault();
   console.log("Submitting");
 });
