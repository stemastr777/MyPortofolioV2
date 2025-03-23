
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { SectionColor } from '@/ui/context';


export default function Header() {
    
    const path = usePathname()
    const sectionColor = useContext(SectionColor)

    return(
        <header className={`z-50 flex flex-row sticky top-0 h-16 px-12 items-center justify-between bg-slate-950/70 backdrop-blur-sm border-b-[2px] border-${sectionColor}-600`}>

            {(path==='/')||(path=='') ? 
                <div className='w-40'></div> 
                :
                <Link href="/#detail-selection" className='flex items-center space-x-2 w-40'>
                    <ArrowBackIcon />
                    <h1 className='text-lg'>Back to Home</h1>
                </Link>
            }
            <div id='other-platform-nav' className='flex grow justify-center space-x-14'>
                <div className='flex w-12 h-12 items-center justify-center rounded-full hover:bg-slate-800'>
                    <a href="https://www.linkedin.com/in/steven-adi-suryanto-31a621242" target='_blank'>
                        <LinkedInIcon />
                    </a>
                </div>
                <div className='flex w-12 h-12 items-center justify-center rounded-full hover:bg-slate-800'>
                    <a href="https://www.youtube.com/@stevenadi70" target='_blank'>
                        <YouTubeIcon />
                    </a>
                </div>
                <div className='flex w-12 h-12 items-center justify-center rounded-full hover:bg-slate-800'>
                    <a href="https://github.com/stemastr777?tab=repositories" target='_blank'>
                        <GitHubIcon />
                    </a>
                </div>
            </div>
            <div id='change-theme-block' className='flex w-40 justify-end'>
                <div className='flex w-12 h-12 items-center justify-center rounded-full hover:bg-slate-800'>
                    <a href="www.linkedin.com/in/steven-adi-suryanto-31a621242">
                        <ModeNightIcon />
                    </a>
                </div>
            </div>
        </header>
    )
}