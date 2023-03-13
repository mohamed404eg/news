let api = new XMLHttpRequest();

api.open("GET", "https://api-news.apkama.com/wp-json/wp/v2/posts");

api.send();

api.onreadystatechange = function () {
  if (this.status == 200 && this.readyState === 4) {
    let JSapi = JSON.parse(this.responseText);

    let sectoin1 = document.querySelector("#sectoin1");

    for (let i = 0; i < 6; i++) {
      // creat
      let divpostTop = document.createElement("div");
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(JSapi[i].title.rendered);
      h3.append(h3Text);
      h3.className = "h3Top";

      // img
      let img = document.createElement("img");
      img.setAttribute("src", `${JSapi[i].better_featured_image.source_url}`);
      divpostTop.append(img);
      img.className = "imgpost";

      // img

      // categories
      let categories = JSapi[i].x_categories;
      let creatC = document.createElement("span");
      creatC.className = "categories";
      creatC.innerText = categories;
      divpostTop.append(creatC);

      // categories

      // append

      sectoin1.appendChild(divpostTop);
      divpostTop.append(h3);

      // class name
      divpostTop.className = "col-6 col-md-4 divTop";
    }

    // console.log(JSapi);
  }
};

// data nav bar top

// days arabs
let data = document.querySelector(".data");

const days = [
  "الاحد",
  "الاثنين",
  "الثالث",
  "الاربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
const months = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "اكتوبر",
  "نوفمبر",
  "ديسمبر",
];

let dd = new Date();
let d = document.createTextNode(
  `${days[dd.getDay()]}  ${dd.getMonth() + 1} ${
    months[dd.getMonth()]
  } ${dd.getFullYear()}`
);
data.append(d);

// months arabs

// weather
let apiWether = new XMLHttpRequest();
apiWether.open(
  "GET",
  "http://api.weatherapi.com/v1/current.json?key=c96b3c6a2a9b46bd9dd23932231203&q=cairo&aqi=no"
);
apiWether.send();
// console.log(apiWether);
apiWether.onreadystatechange = function () {
  if ((this.status === 200) & (this.readyState === 4)) {
    let jsapiWether = JSON.parse(this.responseText);
    // console.log(jsapiWether);

    let weatherC = document.createTextNode(
      `${jsapiWether.current.feelslike_c}c`
    );
    let weather = document.querySelector(".weather");
    weather.append(weatherC);

    // weatherIcon
    let weatherIcon = document.querySelector(".weatherIcon");
    weatherIcon.setAttribute("src", `${jsapiWether.current.condition.icon}`);
  }
};

// data nav bar top

/* sab Menu 4 */
let list7 = document.querySelector(".list:nth-child(7)");

list7.addEventListener("mousemove", () => {
  let Alist4 = document.querySelectorAll(".Alist4");
  for (let i = 0; i < Alist4.length; i++) {
    Alist4[i].style.display = "block";
  }
});

let sectoin1 = document.querySelector("#sectoin1");

// console.log(sectoin1);

sectoin1.addEventListener("mousemove", () => {
  let Alist4 = document.querySelectorAll(".Alist4");
  for (let i = 0; i < Alist4.length; i++) {
    Alist4[i].style.display = "none";
  }
}); /* sab Menu 4 */




// sectoin-lastNews
let lastNews = new XMLHttpRequest();

lastNews.open("GET", "https://api-news.apkama.com/wp-json/wp/v2/posts?offset=7");

lastNews.send();

lastNews.onreadystatechange = function () {
  if (this.status == 200 && this.readyState === 4) {
    let JSlastNews = JSON.parse(this.responseText);

    console.log(JSlastNews)
    
    let sectoin_lastNews = document.querySelector(".lastNews");
    for (let i = 0; i < 6; i++) {
      // creat
      let divpostTop = document.createElement("div");
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(JSlastNews[i].title.rendered);
      h3.append(h3Text);
      h3.className = "h3Top";

      // img
      let img = document.createElement("img");
      img.setAttribute("src", `${JSlastNews[i].better_featured_image.source_url}`);
      divpostTop.append(img);
      img.className = "imgpostLastNews";

      // img

      // categories
      let categories = JSlastNews[i].x_categories;
      let creatC = document.createElement("span");
      creatC.className = "categoriesLastNews";
      creatC.innerText = categories;
      divpostTop.append(creatC);

      // categories

      // append

      sectoin_lastNews.appendChild(divpostTop);
      divpostTop.append(h3);

      // class name
      divpostTop.className = "lastNewsDIV";
    }

    // console.log(JSapi);
  }
};


// last News Left

let lastNewsLeft = new XMLHttpRequest();

lastNewsLeft.open("GET", "https://api-news.apkama.com/wp-json/wp/v2/posts?offset=7");

lastNewsLeft.send();

lastNewsLeft.onreadystatechange = function () {
  if (this.status == 200 && this.readyState === 4) {
    let JSlastNews = JSON.parse(this.responseText);

    console.log(JSlastNews)
    
    let lastNewsLeft = document.querySelector(".lastNewsLeft");
    for (let i = 7; i < 10; i++) {
      // creat
      let divpostTop = document.createElement("div");
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(JSlastNews[i].title.rendered);
      h3.append(h3Text);
      h3.className = "h3TopLeft";

      // img
      let img = document.createElement("img");
      img.setAttribute("src", `${JSlastNews[i].better_featured_image.source_url}`);
      divpostTop.append(img);
      img.className = "imgpostLastNewsLeft";

      // img

      // categories
      let categories = JSlastNews[i].x_categories;
      let creatC = document.createElement("span");
      creatC.className = "categoriesLastNewsLeft";
      creatC.innerText = categories;
      divpostTop.append(creatC);

      // categories

      // append

      lastNewsLeft.appendChild(divpostTop);
      divpostTop.append(h3);

      // class name
      divpostTop.className = "lastNewsDIVLeft";
    }

    // console.log(JSapi);
  }
};
