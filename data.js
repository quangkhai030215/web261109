// data.js : 내 영화 5편 데이터 / 짠광카이(2651068)) / 10주차 
// 영화 한 편 = 객체 하나. 키 5개 : title, year, date, rating, poster 
const movies = [ 
    
    title: "F1",
        releaseDate: "2025-06-25",
        poster: "https://image.tmdb.org/t/p/w342/bvVoP1t2gNvmE9ccSrqR1zcGHGM.jpg",
        alt: "F1 영화 포스터",
       
        title: "Street Fighter",
        releaseDate: "2026-10-14",
        poster: "https://image.tmdb.org/t/p/w342/3EgtiR2ewNQxjJ1qizhDe4IrpPk.jpg",
        alt: "스트리트 파이터 포스터",
        
        title: "Practical Magic 2",
        releaseDate: "2026-09-09",
        poster: "https://image.tmdb.org/t/p/w342/yJJL9SG4XKdsSQy0Eve9MdUnJ12.jpg",
        alt: "프랙티컬 매직 새로운 챕터 포스터",
        
        title: "Other Mommy",
        releaseDate: "2026-10-08",
        poster: "https://image.tmdb.org/t/p/w342/fGRNCssTRrhYZxNzykGGCoMsAVq.jpg",
        alt: "아더 마미 포스터",
      
        title: "Resident Evil",
        releaseDate: "2026-09-17",
        poster: "https://image.tmdb.org/t/p/w342/fQX4fRsagskLvCXnvPfdvh62QTG.jpg",
        alt: "레지던트 이블 포스터",
       
// 보드 소개 정보
export const boardInfo = {
    title: "내 영화 보드",
    subtitle: "요즘 내가 고른 영화 다섯 편",
    boxOfficeDate: "2026-10-31",

    about: [
        "안녕하세요. 이 영화 보드는 예상수가 좋아하는 영화 다섯 편을 소개하기 위해 만들었습니다.",
        "포스터와 영화 정보는 TMDB 검색 결과를 참고했습니다."
    ],

    sources: {
        movie: "TMDB",
        movieUrl: "https://www.themoviedb.org",
        boxOffice: "영화진흥위원회 영화관입장권통합전산망(KOBIS)"
    }
};

