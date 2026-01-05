const About = () => {
    return (
        <div>
            <main className="w-full flex items-center flex-col bg-background text-foreground">
                <div className="w-300 flex flex-col justify-start items-center h-20">
                    <h1 className="text-3xl w-full text-start">저에 대해 조금 더 <span className="bg-cyan-300">소개</span>해드릴게요!</h1>
                </div>
                <div className="w-300 flex flex-col justify-start items-center h-200 bg-red-200">
                    {/* 여기에는 많은걸 도전하는것을 좋아한다. 이런분야 이런분야 */}
                </div>
            </main>
        </div>
    )
}
export default About;