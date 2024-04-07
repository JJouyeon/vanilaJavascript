const fortunes = [
    {
        fortuneLevel: " 오늘의 운세: 대운",
        ment:"오늘의 운세는 말그대로 대박입니다. 뭐든 도전해보세요!"
    },
    {
        fortuneLevel: "오늘의 운세: 휴식",
        ment: "오늘은 평소보다 힘이 들 수 있어요. 하지만 이 참에 쉬어가는 건 어떨까요."
    },
    {
        fortuneLevel: "오늘의 운세: 평온",
        ment: "오늘은 좋지도 나쁘지도 않은 평온한 하루를 예상합니다."
    },
    {
        fortuneLevel: "오늘의 운세: 합격운",
        ment: "오늘은 그동안의 노력이 결실을 맺는 날 입니다."
    },
    {
        fortuneLevel: "오늘의 운세: 금전운",
        ment: "오늘은 예상치 못한 금전적 이득을 얻을 수 있는 날이에요."
    }
]

const fortuneLevel = document.querySelector("#fortune div:first-child");
const ment = document.querySelector("#fortune span:last-child");

const todaysFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

fortuneLevel.innerText = todaysFortune.fortuneLevel;
ment.innerText = todaysFortune.ment;