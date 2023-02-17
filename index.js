console.log("this is project 3");
// 7f85d9b01e3c4ed2a97280d42c343dca

// https://newsapi.org/v2/top-headlines?country=in&apiKey=7f85d9b01e3c4ed2a97280d42c343dca

let apiKey = "7f85d9b01e3c4ed2a97280d42c343dca";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create Get request;
const xhr = new XMLHttpRequest();

// Open the Object
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    // console.log(articles);
    let newsHtml = "";
    
    articles.forEach(function(element,index) {
      // console.log(articles[news]);
      let news = `<div class="accordion" id="newsAccordion">
                             <div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                    <button
                                        class="btn btn-link btn-block text-left"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapse${index}"
                                        aria-expanded="true"
                                        aria-controls="collapse${index}"
                                    >
                                        <b>Breaking News: ${index+1} </b> ${element["title"]}
                                    </button>
                                    </h2>
                                </div>
            
                                <div
                                    id="collapse${index}"
                                    class="collapse"
                                    aria-labelledby="heading${index}"
                                    data-parent="#newsAccordion"
                                >
                                    <div class="card-body">
                                    ${element["content"]} <a href="${element["url"]}" target =" _blank">Read more here </a>
                                    </div>
                                </div>
                            </div>
                    </div> `;

      newsHtml += news;
    });

    newsAccordion.innerHTML = newsHtml;
  } else {
    console.error(`Some error occured`);
  }
};

// Send the request
xhr.send();
