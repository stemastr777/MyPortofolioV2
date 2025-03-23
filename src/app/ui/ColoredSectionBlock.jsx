'use client'

import { SectionColor } from "./context"

import { useContext } from "react"

export default function ColoredSectionBlock({className, children, hoverable=false}) {

    const sectionColor = useContext(SectionColor)

    if (hoverable) {
        return(
            <div className={` 
                ${className} 
                hover:bg-${sectionColor}-500  hover:bg-opacity-20
                bg-${sectionColor}-600 bg-opacity-10 border-[1px] border-${sectionColor}-400  rounded-md`
            }>
                {children}
            </div>
        )
    }

    return(
        <div className={` ${className} bg-${sectionColor}-600 bg-opacity-10 border-[1px] border-${sectionColor}-400 rounded-md`}>
            {children}
        </div>
    )

}