const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("newQuote");
const showRandomQuote = [
  {
    text: "I think there are going to be a bunch of tablet-like devices. its a really different product catagory",
    category: "Jeff Bezos"
  },
  {
    text: "inanimate objects can be classified scientifically into three major catagories; those that don't work.those that break down and those that get lost",
    category: "Russell Baker"
  },
  {
    text: "I think there are going to be a bunch of tablet-like devices. its a really different product catagory",
    category: "Jeff Bezos"
  },
  {
    text: "inanimate objects can be classified scientifically into three major catagories; those that don't work.those that break down and those that get lost",
    category: "Russell Baker"
  }
];
function showRandomQuote(random) {
  random.innerHTML="div";
}  ;
function AddQuoteForm(random) {
  Math.random(random);
  const addquote = createAddQuoteForm;
  const quoteAddition = document.createElement("li");
  random.appendChild(li);
}
listContainer.addEventListener("click", function (e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
});
localStorage.setItem('text', 'category');
const text = localStorage.getItem('text');
export const  Quotes = ("http://api.quotable.io/random");
 function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
   application/json = "Blob";
  const userJason = JSON.stringify(text);
  }
function populateCategories(e) {
    categoryFilter.map();
  function filterQuotes(q) {
     const option = document.querySelector("option");
     option.value.textContent = "http://api.quotable.io/random";
     const selectedCategory = addquote();
     selectedCategory.style.display = addquote() + "has been chosed";
  }
}
function fetchQuotesFromServer(params) {
  fetch 
}
async function fetchData() {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("https://jsonplaceholder.typicode.com/posts".json);
            }, 2000);
        });
    } catch (error) {
    console.error(`Error: ${error}`);
    }
       fetchData = [
      method = "POST",
      Content-Type == "headers"
    ];
  }
  function syncQuotes(s) {
    setInterval(() => {
      resolve("https://jsonplaceholder.typicode.com/posts".json);
    }, interval); 
  }
 if (syncQuotes() === true){
    return "Quotes synced with server!"
  }else{
    return" Quotes are unanle to sync with server!"
  }

  const ExportQuotes = addquote();

