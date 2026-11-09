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
 

//영화 배열 ⇒ 평점이 가장 높은 영화 객체 
function best (list) {
    let top  = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }      
        return top;

//영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열 
function filterByRating(list, min) {
    return list. filter(m => m.rating >= min);
//영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열(원본은 그대로) 
function sortByRating(list){
    return [...list].sort((a, b) => b.rating - a.rating);
}

//날짜 문자열 ⇒ 올해까지 몇 년(숫자) 
function yearsSince(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    return now.getFullYear() - date.getFullYear();
}   console.log("==== 영화 평점 계산표====")
console.log("평균 평점:", average(movies));
console.log("평점 최고 영화:", best(movies));
console.log("평점 7.0 이상 영화:", filterByRating(movies, 7.0).length +"편");
console.table( sortByRating(movies));
