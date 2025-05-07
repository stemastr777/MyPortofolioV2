


export default function SkillUsageRateIcon({rate}) {

    return (
        <div className="flex flex-row gap-[2px] items-end justify-end h-6 ">
            <div className={`w-[6px]  h-[20%] ${rate < 1 ? 'bg-gray-500' : 'bg-red-500'}`}></div>
            <div className={`w-[6px]  h-[40%] ${rate < 2 ? 'bg-gray-500' : 'bg-orange-500'}`}></div>
            <div className={`w-[6px]  h-[60%] ${rate < 3 ? 'bg-gray-500' : 'bg-yellow-500'}`}></div>
            <div className={`w-[6px]  h-[80%] ${rate < 4 ? 'bg-gray-500' : 'bg-lime-500'}`}></div>
            <div className={`w-[6px]  h-[100%] ${rate < 5 ? 'bg-gray-500' : 'bg-green-500'}`}></div>
        </div>
    )
}