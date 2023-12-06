"use client"

function TrainingCard({ id, background, light, icon, title, text }: TrainingCardProps) {
    return (
        <aside key={id} className={`group relative bg-primary rounded-md cursor-pointer flex flex-col gap-3 items-center justify-center overflow-hidden shadow-md`}>
            <div className="flex flex-row gap-3 items-center p-4">
                {icon}
                <h3 className={`text-xl md:text-2xl text-white font-bold`}>{title}</h3>
            </div>
            <div className="relative flex flex-col items-center p-4 bg-white">
                <p className="text-sitetext/80 px-3 pb-4 text-justify leading-loose thin-text">{text}</p>
            </div>
        </aside>
    )
}

export default TrainingCard