"use client" 

import Link from 'next/link';

import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'; 
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

import { getSectionColor } from '@/utility/color-picker';

export default function SectionCard({data}) {

    const sectionColor =  getSectionColor(data.name);

    return(
        <Link
            href={`/${data.name.replace(" ", "-").toLowerCase()}`}
            scroll={false}
            className='flex justify-center'
        >
            <div className={`
                    group/section-card 
                    min-w-[270px] h-48 items-center text-center sm:text-left sm:items-baseline sm:h-56 w-full max-w-[400px] 
                    inline-flex flex-col px-4 pt-6 pb-8 justify-between
                    border-[1px] hover:shadow-lg border-${sectionColor}-400 hover:shadow-${sectionColor}-400 rounded-md 
                    hover:cursor-pointer hover:bg-slate-800`
                }
            >
                <div className=' inline-flex w-12 h-12 justify-center items-center bg-slate-800 group-hover/section-card:bg-slate-700 rounded-md '>
                    {
                        sectionColor == "blue" ? <ConstructionOutlinedIcon /> :
                        sectionColor == "red" ? <EngineeringOutlinedIcon /> :
                        sectionColor == "orange" ? <SchoolOutlinedIcon /> :
                        sectionColor == "green" ? <AccessibilityNewOutlinedIcon /> :
                        sectionColor == "purple" ? <WorkHistoryIcon /> :
                        sectionColor == "yellow" ? <WorkspacePremiumOutlinedIcon /> : null
                    }
                </div>
                <div className='basis-3/5 overflow-y-scroll'>
                    <h2 className='mb-5 font-bold'>{data.name}</h2>
                    <p className='text-sm '>{data.description}</p>
                </div>
            </div>
        </Link>
    )
}