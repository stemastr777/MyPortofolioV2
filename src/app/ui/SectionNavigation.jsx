"use client"

import { sectionOverviewData } from "@/data/sectionOverviewData";
import { descriptiveToPathCompatible } from "@/utility/string-manipulation";
import { getSectionColor } from "@/utility/color-picker";

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function SectionNavigation() {

    const path = usePathname();

    const currentSectionIndex = sectionOverviewData.findIndex(section => ("/" + descriptiveToPathCompatible(section.name)) === path);
    const prev = (currentSectionIndex-1) < 0 ? sectionOverviewData[sectionOverviewData.length-1].name : sectionOverviewData[currentSectionIndex - 1].name
    const next = (currentSectionIndex+1) > sectionOverviewData.length-1 ? sectionOverviewData[0].name : sectionOverviewData[currentSectionIndex + 1].name

    return (
        <nav className="flex justify-between items-center">
            <Link
                href={"/" + descriptiveToPathCompatible(prev)}
                className={`flex flex-col space-y-2 border-[1px] py-3 px-6 rounded-md w-3/12 hover:bg-slate-800 border-white hover:border-${getSectionColor(prev)}-400 hover:shadow-lg hover:shadow-${getSectionColor(prev)}-400`}
            >
                <div className="flex items-center">
                    <span id="back-button">&#8592;</span>
                    <label htmlFor="back-button" className="ml-3 text-sm">previous</label>
                </div>
                <h2 className="text-lg font-semibold text-left">{prev}</h2>
            </Link>
            <Link
                href={"/" + descriptiveToPathCompatible(next)}
                className={`flex flex-col items-end space-y-2 border-[1px] py-3 px-6 rounded-md w-3/12 hover:bg-slate-800 border-white hover:border-${getSectionColor(next)}-400 hover:shadow-lg hover:shadow-${getSectionColor(next)}-400`}
            >
                <div className="flex items-center">
                    <label htmlFor="back-button" className="mr-3 text-sm">next</label>
                    <span id="back-button">&#8594;</span>
                </div>
                <h2 className="text-lg font-semibold text-right">{next}</h2>
            </Link>
        </nav>
    )
} 