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
     option.value.textcontent = "http://api.quotable.io/random";
  }
}

  const ExportQuotes = addquote();

