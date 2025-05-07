'use client'

import { useEffect, useRef} from "react"

import ColoredSectionBlock from "./ColoredSectionBlock";
import LoadableImage from "./LoadableImage";

export default function AcademicBlock({record}) {

    const bgImagePath = (record.Major === 'Science') ? '/images/smasa_front-building.jpg' : '/images/udinus_building.jpg'
    const memoryImagePath = (record.Major === 'Science') ? ['/images/smasa_front-building.jpg', '/images/smasa_iconic-place.jpg', '/images/smasa_class-photo.jpg'] : ['/images/udinus_building.jpg','/images/udinus_a3-litbang.jpg', '/images/udinus_otb-class.jpg']

    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollElement = scrollRef.current;

        scrollElement.addEventListener("wheel", (e) => {
            e.preventDefault();
            e.currentTarget.scrollLeft += e.deltaY * 2;
        }, { passive: false })

    }, [])


    return(
        <>
            <ColoredSectionBlock 
                className={`relative flex flex-row space-x-2 px-4 py-4 sm:py-8 sm:px-8 h-[360px] w-full`} 
            >
                <div 
                    id="academic-block-background"
                    className={`absolute opacity-10 z-[-1] w-full h-full top-0 left-0 rounded-[inherit] bg-blend-multiply bg-no-repeat bg-cover`}
                    style={{
                        backgroundImage: `url(${bgImagePath})`
                    }}
                ></div>
                <div id="academic-info" className="flex flex-col basis-2/3 justify-around sm:justify-between text-sm">
                    {
                        Object.entries(record).map(([key, value]) => {
                            if (key === 'Status') {
                                return null
                            }

                            return (
                                <div key={key + value} className='flex flex-row'>
                                    <span className="inline-block min-w-[100px] w-[100px] sm:min-w-[190px] sm:w-[190px]">{key}</span>
                                    :
                                    <span className="ml-2">{value}</span>
                                </div>
                            )
                        })
                    }
                </div>
                { 
                    
                    record["Status"] === 'Graduated'?
                        <div id="academic-status" className="flex flex-row items-center justify-center absolute right-[26px] top-[18px] w-20 sm:right-[32px] sm:top-[24px] sm:w-28 h-[1.5rem] sm:h-[2.25rem] bg-green-600 rounded-md text-white text-center text-sm">
                        Graduated
                    </div> 
                    :
                        <div id="academic-status" className="flex flex-row items-center justify-center absolute right-[26px] top-[18px] w-20 sm:right-[32px] sm:top-[24px] sm:w-28 h-[1.5rem] sm:h-[2.25rem] bg-yellow-600 rounded-md text-white text-center text-sm">
                        Ongoing
                    </div>  
                }               
                <div 
                    ref={scrollRef}
                    id="academic-banner" 
                    className="flex snap-x snap-mandatory space-x-4 overflow-x-auto  basis-1/3 h-2/3 my-auto scroll-smooth"
                >
                    {
                        memoryImagePath.map(path => {
                            return (
                                <div key={path.split('/')[2]} className="snap-center w-[300px] h-full flex-shrink-0">
                                    <LoadableImage src={path} width={300} height={200} alt="Academic memory image">
                                    </LoadableImage>
                                </div>
                            )
                        })
                    }
                </div>
            </ColoredSectionBlock>
        </>
    )
}