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

function searchRequest(query, page) {
    console.log("query : ", query);
    // url : client가 요청을 보낼 SERVER URL 주소
    // .done : 요청 성공시 받아온 요청 데이터가 done() 메소드로 전달
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
            <span class="price">정가 : 10000원</span>
            <p class="book-info">
                <span class="author">저자 : </span>|<span class="publisher">출판사</span>
            </p>
        </div>
         */

        $(".container").empty();
        let contents = '';
        for (let i = 0; i < response.documents.length; i++) {
            let object = response.documents[i];
            contents += '<div class="result-card">';
            contents += '<a href="' + object.url + '">';
            contents += '<div class="img"><img class="book-img" src="' + object.thumbnail + '" alt=""></div>';
            contents += '<h4 class="book-title">' + object.title + '</h4>';
            contents += '</a>';


            contents += '<span class="price">정가 : ' + object.price + '원</span>';
            contents += '<p class="book-info">';
            contents += '<span class="author">저자 : ' + object.authors + '</span>';
            contents += ' | <span class="publisher">출판사 : ' + object.publisher + '</span></p></div>';
        }
        $(".container").append(contents);
        console.log(response);

        // count = 중복제외 검색결과 개수
        // pazeSize = 한페이지에 보여질 검색결과 개수
        // page = 현재 페이지 번호
        // pageCount = 검색된 결과의 전체 페이지 수
        // startIndex = 현재 페이지의 겸색결과 인덱스 번호
        // endIndex = 현재 페이지의 검색결과 인덱스 번호



    });
}








