## 0. 이전에 읽어올 것

### fetch와 axios의 차이

[ajax와 axios 그리고 fetch에 대하여](https://basemenks.tistory.com/256)

⇒ **axios** 가 보안이나, 사용에 더 좋은데 라이브러리를 다운로드 받아야하고, fetch는 기존 내장 툴이어서 사용

### CRUD와 REST API

[TIL 021 | CRUD vs REST API](https://velog.io/@thisisemptyyy/TIL-021-CRUD-vs-REST-API)

클라이언트에서 서버로 보낼 수 있는 행동 → 명령어 (약속한것!)

### 필요한 행동 → 명령어

CREATE → post (유저 생성?)

READ → get

UPDATE → patch, put

DELETE → delete

## 1. 대상 데이터

드디어 서버 데이터를 가져와봅니다. 가장 **만만한 영화 데이터**를 가져와봅니다.

쿼리스트링 : 주소를 통해서 정보를 보낼 수 있는 방법!

json : 굉장히 객체와 비슷하게 생겨서, 자바스크립트에서 쓰기 편한 데이터 타입

xml : html 처럼 생긴 데이터 타입

![image](https://github.com/keinn51/React-Study/assets/79993356/0cdf5bc2-49e6-4283-8a39-c6fcfbc575e0)

이런 식으로, 영화 리스트를 무료로 제공하는 오픈 API입니다!

## 2. 데이터 가져오는 코드

[npm](https://www.npmjs.com/)

axios.js

```jsx
    import React, { useState, useEffect } from "react";
    import axios from "axios";
    
    function State() {
      const [movieArr, setMovieArr] = useState(null);
    
      const getMovie = () => {
        axios
          .get("https://yts.mx/api/v2/list_movies.json?page=1&sort_by=rating")
          .then((res) => res.data.data.movies)
          .then((res2) => setMovieArr(res2))
    			.catch((err) => console.log(err));
      };
    
      useEffect(() => {
        getMovie();
      }, []);
    
      return (
        <>
          {movieArr
            ? movieArr.map((elem) => (
                <img
                  src={elem["medium_cover_image"]}
                  alt={elem["medium_cover_image"]}
                ></img>
              ))
            : null}
        </>
      );
    }
    
    export default State;
```
    
### 코드 순서!
    
1) 진짜 정석적이고 어려운 방법 (먼저 바뀌는 것 확인하는 법)    
**props** 가 바뀌는 것 부터 확인 → 리렌더링 → **상태값** 확인 → 리렌더링  → return 전 실행 → return 안 실행 →  **useEffect**
![image](https://github.com/keinn51/React-Study/assets/79993356/2e71f37a-5297-4376-b8bc-7b589a41c945)
2) props → useState → return 전 실행 → return 실행 → useEffect

### 예시 코드 순서        
**props → useState → return 전 실행 → return 실행 → useEffect → getMovie → props → state → return 전 실행 → return 실행**

then

- 데이터를 가져오는 것이 **성공했을 때에 실행하는 함수**
- 매개변수로 이전 함수의 반환값을 가져온다!

catch → **실패했을 때**

### 화살표 함수

일반 함수 : function (){}

화살표 익명 함수 : () ⇒ {}

```jsx
// 일반함수
function A () {
	return 1;
}

// 화살표 (익명) 함수
() => 1

// 화살표 함수
const A = () => 1;

() => {return 1}
```

화살표 오른쪽에 있는 것은 무조건 반환값!

### 자바스크립트는 타입이 없다~

```jsx
setMovie(10)
setMovie([])
setMovie({})
```

## 3. 실제로 어떻게 쓰는지?

실제로 서버 개발자와 어떻게 대화하는가?

![image](https://github.com/keinn51/React-Study/assets/79993356/6e2b255b-17c2-4a08-81a8-82c94ba607b7)

:id 이렇게 되어 있는 것은, 주소에 데이터를 담아서 보내달라는 말이다.

```jsx
https://yts.mx/api/v2/list_movies.json?page=1&sort_by=rating
```

여기서 우리가 원하는 데이터를 가져올 수 있는 방법은 이거다

```jsx
const a = 1
const b = 'rating'

`https://yts.mx/api/v2/list_movies.json?page=${a}&sort_by=${b}`
```

백틱(`)은 문자 안에서 ${} 을 써주면 바깥 변수 혹은 자바스크립트 코드를 쓸 수 있게 해준다

## 4. 실습

저번에 만들었던 파일을 다시 봅니다.

![image](https://github.com/keinn51/React-Study/assets/79993356/94e4a757-bc52-4cd5-80c6-0fb06b36fb9b)

```jsx
const i = 1;

`https://yts.mx/api/v2/list_movies.json?page=${i}&sort_by=rating`
```

이런 식으로 쓰면, 문자열 중간에 변수값을 쓸 수 있습니다. 최상단 컴포넌트에서 서버데이터를 받은 후 다음을 실행합니다.

- 가상 이벤트 1을 누르면 List에서, 1번 page의 영화와 title과 image를 위의 형식으로 나열합니다.
- 가상 이번트 2번은 2번 page, 3번은 3번 page를 나열합니다.
- 밑의 친바 신청목록에 이미지와 타이틀을 가져오기~
