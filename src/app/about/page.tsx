const About = () => {
    const myLifeItems = [
        "2007년 3월 11일 출생",
        "2014년 3월 인천삼산초등학교 입학",
        "2020년 3월 삼산중학교 입학",
        "2022년 12월 웹 개발 시작",
        "2023년 3월 인평자동차고등학교 자동차it과 입학",
        "2024년 3월 인천지방기능경기대회 웹 디자인 및 개발 부분 동메달 수상",
        "2025년 3월 인천지방기능경기대회 웹 디자인 및 개발 부분 은메달 수상",
        "2025년 9월 광주전국기능경기대회 웹 디자인 및 개발 부분 장려상(14등) 수상",
        "2026월 1월 인평자동차고등학교 40기 졸업",
        "2026년 3월 국민대학교 인공지능학부 26학번 입학"
    ]
    return (
        <div>
            <main className="w-full flex items-center flex-col bg-background text-foreground">
                <div className="w-300 flex flex-col justify-start items-center h-20">
                    <h1 className="text-3xl w-full text-start">저에 대해 조금 더 <span className="text-cyan-500">소개</span>해드릴게요!</h1>
                </div>
                <div className="w-300 flex flex-col justify-start items-center">
                    {/* 여기에는 많은걸 도전하는것을 좋아한다. 이런분야 이런분야 */}
                    <h1 className="text-2xl w-full items-start">저는 제 인생의 모토인 <span className="bg-cyan-300">"make life what i dream"</span>을 실현하고 싶습니다</h1>
                    <div className="w-full h-170 pt-5 pb-5 flex items-center">
                        {/* 중3 첫 개발 함. 고등학교(특성화)입학, 대회 자격증, 사진 등등 나의 연혁 소개 */}
                        <ul className="w-full h-150">
                            <li className="w-full h-150 flex flex-col justify-between">
                                {myLifeItems.map((item, index) => (
                                    <div key={index} className="flex justify-start w-full gap-10 items-center">
                                        <div className="w-7 h-7 rounded-full border-8 border-cyan-500 flex "></div>
                                        <div className="list-disc">{item}</div>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default About;