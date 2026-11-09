// app.js : 영화 배열을 다루는 함수 6개 / 짠광카이 2651068 / 10주차 
// average : 영화 배열 ⇒ 평균 평점(숫자) 

function average(list) { 
  let sum = 0; 
  for (const m of list) { 
    sum += m.rating; 
  } 
  return sum / list.length; 
}
console.log(평균:, average(movies));
 
// best(list) 
//영화 배열 ⇒ 평점이 가장 높은 영화 객체 
// filterByRating(list, min) 
//영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열 
// sortByRating(list) 
//영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열(원본은 그대로) 
// yearsSince(dateStr) 
//날짜 문자열 ⇒ 올해까지 몇 년(숫자) 
// osterUrl(path, size) 