//Spoonacular API
//API key - 29eaf4f0b03e49f0b50810707f1ea19e
//Link1 - https://api.spoonacular.com/recipes/complexSearch?apiKey=29eaf4f0b03e49f0b50810707f1ea19e&number=20
//Link2 - https://api.spoonacular.com/recipes/complexSearch?apiKey=29eaf4f0b03e49f0b50810707f1ea19e&query=pasta&number=20&maxFat=40
//Link3 - https://api.spoonacular.com/recipes/findByIngredients?apiKey=29eaf4f0b03e49f0b50810707f1ea19e
            //&ingredients=apples,+flour,+sugar&number=2
//Link4 - https://api.spoonacular.com/recipes/715538/similar?apiKey=29eaf4f0b03e49f0b50810707f1ea19e

//Ingredient Details
//Link - https://api.spoonacular.com/recipes/{id}/information?apiKey=29eaf4f0b03e49f0b50810707f1ea19e
//Summary
//Link - https://api.spoonacular.com/recipes/{id}/summary?apiKey=29eaf4f0b03e49f0b50810707f1ea19e



var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
//to add multiple classes to the same element with DOM
row.classList.add("row","m-3");
container.append(row);
document.body.append(container);   


async function getApi(){
    try{
        var apiKey = "29eaf4f0b03e49f0b50810707f1ea19e";
        var url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=20`;
        var resp = await fetch(url);
        var data = await resp.json();
        //console.log(data);
        //console.log(data.results[0].title);
        //console.log(data.results[0].id);
        //console.log(data.results[0].image);
        cardData(data);
    }
    catch(error){
        console.log(error);
    }
}


async function cardData(data){
    try{
        //console.log(data);
        for(var i=0;i<data.results.length;i++){
          
        row.innerHTML +=
        `<div class="row col-lg-4 col-md-6 col-sm-12">
          <div class="card border-secondary mb-3" style="width: 22rem; height: 36rem; margin-top:10px; margin-left:25px">
            <h5 class="card card-header card-title">${data.results[i].title}</h5>
                 
            <div class="card-body text-primary">
              <img src="${data.results[i].image}" class="card-img-top" style="height: 10rem; margin-bottom: 20px;" alt="${data.results[i].title}">
              
              <p class="card-text"> Item Name: ${data.results[i].title}</p>
              <p class="card-text"> Item-Id: ${data.results[i].id}</p>
              <div class="buttons">
                <button type="button" class="button" onclick="ingredientData('${data.results[i].id}',${i})">Click for Ingredients</button>
              
                <p id="ingreData${i}"></p> 

              </div>
            </div>
          </div>
        </div>`;
 
        }
      }
      catch(error){
        console.log(error);
      }

}
getApi();

async function ingredientData(id,i){
  //console.log(id);
  var res3=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=29eaf4f0b03e49f0b50810707f1ea19e`);
  const payload=await res3.json();
  console.log(payload);
  //alert(payload.main.temp);
  //console.log(payload.extendedIngredients[0].original);
  //console.log(payload.aggregateLikes);
  //console.log(payload.instructions);
  //console.log(payload.summary);

  
// document.querySelector(`#ingreData${i}`).innerHTML=`Item1:-  ${payload.extendedIngredients[1].original}`;
  
  var j;
  var out="";
  for(j=0; j<payload.extendedIngredients.length && j<2; j++){
  out=out + payload.extendedIngredients[j].original + ". ";
  
 } 
 console.log(out);
 document.querySelector(`#ingreData${i}`).innerHTML=`Items:-  ${out}`;

 }


