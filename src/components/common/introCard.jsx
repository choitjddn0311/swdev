const IntroCard = ({title,description}) => {
    return(
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 py-5 px-5 md:px-0">
                <h1 className="text-3xl">{title}</h1>
                <div className="w-full py-5">
                    {description}
                </div>
            </div>
    )
}

export default IntroCard;