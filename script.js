var searchResultArray = [
  {
    name: "Joanna Wisniewska",
    position: "Journalist",
    avatar: "./img/avatar/avatar1.png"
  },
  {
    name: "Joanna Wisniewska",
    position: "Journalist",
    avatar: "./img/avatar/avatar1.png"
  },
  {
    name: "Joanna Wisniewska",
    position: "Journalist",
    avatar: "./img/avatar/avatar1.png"
  },
  {
    name: "J. K. Rowling",
    position: "Writer",
    avatar: "./img/avatar/avatar2.jpg"
  },
  {
    name: "Luis Merical",
    position: "Doctor",
    avatar: "./img/avatar/avatar3.jpeg"
  }
];
const autoCompleteArea = document.querySelector('.autocomplete')
const searchInput = document.querySelector('#input-search');
const searchResultSuggestion = document.querySelector('.dialog');


searchInput.addEventListener('input', (event)=>{
  if(event.target.value != ""){
    searchResultSuggestion.innerHTML = "";
  searchResultArray.filter(element => {
    var arrayElement = element.name.toLowerCase();
    var searchInput = event.target.value.toLowerCase()
    if(arrayElement.includes(searchInput)){
      addResultToList(element);
    }
  });
}else{
  searchResultSuggestion.innerHTML = "";
}});

searchInput.addEventListener('focus', (event)=>{
  autoCompleteArea.setAttribute('class', 'autocomplete purple-border');
})

searchInput.addEventListener('blur', (event)=>{
  autoCompleteArea.setAttribute('class', 'autocomplete grey-border');
})



function addResultToList(person){
  var resultHTML = `<img src="${person.avatar}">
                    <div class="person-detail">
                      <div class="medium-bold-text">${person.name}</div>
                      <div class="subtitle">${person.position}</div>
                    </div>`
  var resultDiv = document.createElement('div');
  resultDiv.setAttribute('class','result');
  resultDiv.innerHTML = resultHTML;
  searchResultSuggestion.insertAdjacentElement("beforeend",resultDiv);
}


