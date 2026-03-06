const About = () => {
    return (
        <div>
            <main className="w-full flex items-center flex-col bg-background text-foreground">
                <div className="w-300 flex flex-col justify-start items-center h-20">
                    <h1 className="text-3xl w-full text-start">저에 대해 조금 더 <span className="text-cyan-500">소개</span>해드릴게요!</h1>
                </div>
                <div className="w-300 flex flex-col justify-start items-center h-200">
                    {/* 여기에는 많은걸 도전하는것을 좋아한다. 이런분야 이런분야 */}
                    <h1 className="text-2xl w-full items-start">저는 제 인생의 모토인 <span className="bg-cyan-300">"make life what i dream"</span>을 실현하고 싶습니다</h1>
                    <div className="w-full h-100 bg-red-200">
                        {/* 중3 첫 개발 함. 고등학교(특성화)입학, 대회 자격증, 사진 등등 나의 연혁 소개 */}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default About;