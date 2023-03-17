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

// weather s
let apiWether = new XMLHttpRequest();
apiWether.open(
  "GET",
  "https://api.weatherapi.com/v1/current.json?key=c96b3c6a2a9b46bd9dd23932231203&q=cairo&aqi=no"
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
    let weatherC2 = document.createTextNode(
      `${jsapiWether.current.feelslike_c}c`
    );
    let weather = document.querySelector(".weather");
    weather.appendChild(weatherC2);
    // weatherIcon
    let weatherIcon = document.querySelector(".weatherIcon");
    weatherIcon.setAttribute("src", `${jsapiWether.current.condition.icon}`);

    // Nav Mobile Weather
    let dataNavMobileWeather = document.querySelector(".dataNavMobileWeather");
    let weatherIconNavMobile = document.querySelector(".weatherIconNavMobile");
    dataNavMobileWeather.append(weatherC);
    weatherIconNavMobile.setAttribute(
      "src",
      `${jsapiWether.current.condition.icon}`
    );
  }
};

// weather e

// data nav bar top

/* sab Menu 4 */
let list7 = document.querySelector(".list:nth-child(7)");

list7.addEventListener("mousemove", () => {
  let Alist = document.querySelectorAll(".Alist");
  for (let i = 0; i < Alist.length; i++) {
    Alist[i].style.display = "block";
  }
  let Alist2 = document.querySelectorAll(".Alist2");
  for (let i = 0; i < Alist2.length; i++) {
    Alist2[i].style.display = "block";
  }
  let Alist3 = document.querySelectorAll(".Alist3");
  for (let i = 0; i < Alist3.length; i++) {
    Alist3[i].style.display = "block";
  }

  let Alist4 = document.querySelectorAll(".Alist4");
  for (let i = 0; i < Alist4.length; i++) {
    Alist4[i].style.display = "block";
  }


});

let sectoin1 = document.querySelector("#sectoin1");

// console.log(sectoin1);

sectoin1.addEventListener("mousemove", () => {
  let Alist = document.querySelectorAll(".Alist");
  for (let i = 0; i < Alist.length; i++) {
    Alist[i].style.display = "none";
  }
    let Alist2 = document.querySelectorAll(".Alist2");
    for (let i = 0; i < Alist2.length; i++) {
      Alist2[i].style.display = "none";
    }
    let Alist3 = document.querySelectorAll(".Alist3");
    for (let i = 0; i < Alist3.length; i++) {
      Alist3[i].style.display = "none";
    }
    
  let Alist4 = document.querySelectorAll(".Alist4");
  for (let i = 0; i < Alist4.length; i++) {
    Alist4[i].style.display = "none";
    }
  
  
});

/* sab Menu 4 */




// sectoin-lastNews
let lastNews = new XMLHttpRequest();

lastNews.open(
  "GET",
  "https://api-news.apkama.com/wp-json/wp/v2/posts?offset=7"
);

lastNews.send();

lastNews.onreadystatechange = function () {
  if (this.status == 200 && this.readyState === 4) {
    let JSlastNews = JSON.parse(this.responseText);

    // console.log(JSlastNews)

    let sectoin_lastNews = document.querySelector(".lastNews");
    for (let i = 0; i < 4; i++) {
      // creat
      let divpostTop = document.createElement("div");
      let h3 = document.createElement("h3");
      let h3Text = document.createTextNode(JSlastNews[i].title.rendered);
      h3.append(h3Text);
      h3.className = "h3Top";

      // img
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `${JSlastNews[i].better_featured_image.source_url}`
      );
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

lastNewsLeft.open(
  "GET",
  "https://api-news.apkama.com/wp-json/wp/v2/posts?offset=7"
);

lastNewsLeft.send();

lastNewsLeft.onreadystatechange = function () {
  if (this.status == 200 && this.readyState === 4) {
    let JSlastNews = JSON.parse(this.responseText);

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
      img.setAttribute(
        "src",
        `${JSlastNews[i].better_featured_image.source_url}`
      );
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

//  BUSINESS WINDOW start

function setdateBusiness() {
  fetch("https://api-news.apkama.com/wp-json/wp/v2/posts?offset=15")
    .then((rsepons) => {
      return rsepons.json();
    })
    .then((BusinessPost) => {
      // add to BusinessPost start
      let BusinessInPost = document.querySelector(".BusinessPostDiv");
      for (let i = 0; i < 4; i++) {
        // creat
        let divpostTop = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(BusinessPost[i].title.rendered);
        h3.append(h3Text);
        h3.className = "BusinessPostH3";

        // img
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `${BusinessPost[i].better_featured_image.source_url}`
        );
        divpostTop.append(img);
        img.className = "BusinessPostImg";

        // img

        // categories
        let categories = BusinessPost[i].x_categories;
        let creatC = document.createElement("span");
        creatC.className = "BusinessPostC";
        creatC.innerText = categories;
        divpostTop.append(creatC);

        // categories

        // append

        BusinessInPost.append(divpostTop);
        divpostTop.append(h3);

        // class name
        divpostTop.className = "BusinessPost";
      }
      // add to BusinessPost end
    })
    .catch(() => console.log(console.error("is error")));
}

setdateBusiness();
//  BUSINESS WINDOW e

//  itm1POST s
function itm1POST() {
  fetch("https://api-news.apkama.com/wp-json/wp/v2/posts?offset=17")
    .then((rsepons) => {
      return rsepons.json();
    })
    .then((BusinessPost) => {
      // add to
      let BusinessInPost = document.querySelector(".itm1POST");
      for (let i = 0; i < 4; i++) {
        // creat
        let divpostTop = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(BusinessPost[i].title.rendered);
        h3.append(h3Text);
        h3.className = "itm1H3";

        // img
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `${BusinessPost[i].better_featured_image.source_url}`
        );
        divpostTop.append(img);
        img.className = "itm1Img";

        // img

        // categories
        let categories = BusinessPost[i].x_categories;
        let creatC = document.createElement("span");
        creatC.className = "itm1C";
        creatC.innerText = categories;
        divpostTop.append(creatC);

        // categories

        // append

        BusinessInPost.appendChild(divpostTop);
        divpostTop.append(h3);

        // class name
        divpostTop.className = "itm1POST-DIV";
      }
      // add to
    })
    .catch(() => console.log(console.error("is error")));
}
itm1POST();
//  itm1POST e

//  itm2POST s
function itm2POST() {
  fetch("https://api-news.apkama.com/wp-json/wp/v2/posts?offset=20")
    .then((rsepons) => {
      return rsepons.json();
    })
    .then((BusinessPost) => {
      // add to
      let itm2POST = document.querySelector(".itm2POST");
      for (let i = 0; i < 4; i++) {
        // creat
        let divpostTop = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(BusinessPost[i].title.rendered);
        h3.append(h3Text);
        h3.className = "itm1H3";

        // img
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `${BusinessPost[i].better_featured_image.source_url}`
        );
        divpostTop.append(img);
        img.className = "itm1Img";

        // img

        // categories
        let categories = BusinessPost[i].x_categories;
        let creatC = document.createElement("span");
        creatC.className = "itm1C";
        creatC.innerText = categories;
        divpostTop.append(creatC);

        // categories

        // append

        divpostTop.append(h3);
        itm2POST.appendChild(divpostTop);

        // class name
        divpostTop.className = "itm1POST-DIV";
      }
      // add to
    })
    .catch(() => console.log(console.error("is error")));
}

itm2POST();

//  itm2POST e

//  itm3POST s
function itm3POST() {
  fetch("https://api-news.apkama.com/wp-json/wp/v2/posts?offset=20")
    .then((rsepons) => {
      return rsepons.json();
    })
    .then((BusinessPost) => {
      // add to
      let itm3POST = document.querySelector(".itm3POST");
      for (let i = 4; i < 8; i++) {
        // creat
        let divpostTop = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(BusinessPost[i].title.rendered);
        h3.append(h3Text);
        h3.className = "itm1H3";

        // img
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `${BusinessPost[i].better_featured_image.source_url}`
        );
        divpostTop.append(img);
        img.className = "itm1Img";

        // img

        // categories
        let categories = BusinessPost[i].x_categories;
        let creatC = document.createElement("span");
        creatC.className = "itm1C";
        creatC.innerText = categories;
        divpostTop.append(creatC);

        // categories

        // append

        divpostTop.append(h3);
        itm3POST.appendChild(divpostTop);

        // class name
        divpostTop.className = "itm1POST-DIV";
      }
      // add to
    })
    .catch(() => console.log(console.error("is error")));
}

itm3POST();

//  itm3POST e

//  itm4POST s
function itm4POST() {
  fetch("https://api-news.apkama.com/wp-json/wp/v2/posts?offset=25")
    .then((rsepons) => {
      return rsepons.json();
    })
    .then((BusinessPost) => {
      // add to
      let itm4POST = document.querySelector(".itm4POST");
      for (let i = 0; i < 4; i++) {
        // creat
        let divpostTop = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(BusinessPost[i].title.rendered);
        h3.append(h3Text);
        h3.className = "itm1H3";

        // img
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `${BusinessPost[i].better_featured_image.source_url}`
        );
        divpostTop.append(img);
        img.className = "itm1Img";

        // img

        // categories
        let categories = BusinessPost[i].x_categories;
        let creatC = document.createElement("span");
        creatC.className = "itm1C";
        creatC.innerText = categories;
        divpostTop.append(creatC);

        // categories

        // append

        divpostTop.append(h3);
        itm4POST.appendChild(divpostTop);

        // class name
        divpostTop.className = "itm1POST-DIV";
      }
      // add to
    })
    .catch(() => console.log(console.error("is error")));
}

itm4POST();

//  itm3POST e

//  newIMG s
function newIMG() {
  fetch("https://api-news.apkama.com/wp-json/wp/v2/posts?offset=25")
    .then((rsepons) => {
      return rsepons.json();
    })
    .then((BusinessPost) => {
      // add to
      let itm4POST = document.querySelector("#newIMG");
      for (let i = 0; i < 5; i++) {
        // creat
        let divpostTop = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(BusinessPost[i].title.rendered);
        h3.append(h3Text);
        h3.className = "newIMGH3";

        // img
        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `${BusinessPost[i].better_featured_image.source_url}`
        );
        divpostTop.append(img);
        img.className = "itm1Img";

        // img

        // categories
        let categories = BusinessPost[i].x_categories;
        let creatC = document.createElement("span");
        creatC.className = "itm1C";
        creatC.innerText = categories;
        divpostTop.append(creatC);

        // categories

        // append

        divpostTop.append(h3);
        itm4POST.appendChild(divpostTop);

        // class name
        divpostTop.className = "newIMG-DIV";
      }
      // add to
    })
    .catch(() => console.log(console.error("is error")));
}

newIMG();

//  newIMG e

// list nav moblie s

let list1ul = document.querySelectorAll(".list1ul");
let list1 = document.querySelectorAll(".list1");
for (let i = 0; i < list1.length; i++) {
  list1[i].addEventListener("click", () => {
    list1ul[i].classList.toggle("list1ulblock");
  });
}

// Arrows Nav Mobile

function Arrows(t) {
  let Arrow = document.querySelectorAll(".listArrow");

  Arrow[t].classList.toggle("listArrowTOP");
}

// clos nav and open
let ic_menu_black = document.querySelector(".ic_menu_black");
let NavMobile = document.querySelector(".NavMobile");

function menu_close_Open() {
  NavMobile.classList.toggle("NavMobileOPEN");
}
