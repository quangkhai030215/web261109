
// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 짠광카이 (2651068) / 10주차

const titles = ["F1", "Street Fighter", "Practical Magic 2", "Other Mommy", "Resident Evil"];

const ratings = [7.8, 6.3, 6.9, 5.9, 7.3];

const years = [2025, 2026, 2026, 2026, 2026];

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}

console.log("합계:", sum);

const average = sum / ratings.length;

console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {

    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    if (ratings[i] >= 8) {
        count++;
    }
}

console.log("최고:", titles[maxIndex], max);

console.log("8점 이상:", count + "편");

for (let i = 0; i < ratings.length; i++) {

    let label;

    if (8.5 < ratings[i]) {
        label = "명작";
    }
    else if (7 < ratings[i]) {
        label = "추천";
    }
    else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);

const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);