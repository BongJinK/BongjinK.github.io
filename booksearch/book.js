// JSON : Javascript Object Notation

// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유로


// $. => jquery 약어
// ajax
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신 할 수 있는 기술
// fetch() 로도 구현 가능 ( 일부 브라우저 또는 하위 버전의 스크립트에서 호환이 되지 않는 문제 발생)
// -> jQuery.ajax() 메소드를 활용

let page = 1;

const query = document.querySelector(".query");
// const container = document.querySelector(".container");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e => {
    e.preventDefault();
    if (query !== "") {
        page = 1;
        searchRequest(query.value, page);
    }
    query.value = "";
})

function searchRequest(query,page) {
    // const imgSrc = "1";
    // const title = "1";
    // const money = 0;
    // const name = "1";
    // const company = "1";

    console.log("query : ", query);

    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=50&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK f38b9fe2c66283c909a3b11ba777576c"
        }
    }).done(function (response) {
        // container 안에 
        /* 
        <div class="result-card">
            <img class="book-img" src="" alt="">
            <h4 class="book-title">도서제목</h4>
            <p class="book-description"> 도서상세정보</p>
            <span class="price">정가 : 10000원</span>
            <p class="book-info">
                <span class="author">저자 : </span>|<span class="publisher">출판사</span>
            </p>
        </div>
         */
        // 새로 생성 및 구성 완료한 result - card 요소를 추가

        // const div = document.createElement("div");
        // const img = document.createElement("img");
        // const h4 = document.createElement("h4");
        // const description = document.createElement("p");
        // const info = document.createElement("p");
        // const price = document.createElement("span");
        // const author = document.createElement("span");
        // const publisher = document.createElement("span");

        // div.setAttribute("class", "result-card");
        // img.setAttribute("class", "book-img");
        // img.setAttribute("src", `${imgSrc}`);
        // h4.setAttribute("class", "book-title");
        // description.setAttribute("class", "book-description");
        // info.setAttribute("class", "book-info");
        // price.setAttribute("class", "price");
        // author.setAttribute("class", "author");
        // publisher.setAttribute("class", "publisher");


        // // 변수에 뭐 넣을지 모르겠습니다.
        // description.innerText = "ㅇㅇㅇ";
        // h4.innerText = `${title}`;
        // price.innerText = `${money}원`;
        // publisher.innerText = ` ${company}`;
        // author.innerText = `${name} |`;

        // div.append(img);
        // div.append(h4);
        // div.append(price);
        // div.append(description);
        // div.append(info);
        // info.append(author);
        // info.append(publisher);
        // container.append(div);

        console.log(response);
    });
}








