'use client'

import Image from "next/image";
import { useState } from "react"

import { CircularProgress} from "@mui/material"
import Dialog from '@mui/material/Dialog';

export default function LoadableImage({src, clickable, width, height, alt, style}) {

    const [loading, setLoading] = useState(true)
    const [openDialog, setOpenDialog] = useState(false)
    
    const loadingIconSize = (Math.floor(width/200) + 1) * 20 

    return (
        <div className="relative flex justify-center items-center h-full">
            {
                loading && <CircularProgress size={loadingIconSize} thickness={4} color="inherit" className="absolute text-cyan-400" />
            }
            <Image
                src={src}
                alt={ alt || "Loadable image"}
                width={width}
                height={height}
                placeholder="empty"
                className={`${clickable ? 'hover:opacity-70 cursor-pointer' : null} h-full`}
                onLoad={() => setLoading(false)}
                onClick={() => clickable && setOpenDialog(true)}
                style={style}
            >
            </Image>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth={'md'}>
                <Image
                    src={`${src}`}
                    alt="Certificate preview (big version)"
                    width={1286}
                    height={911}
                    placeholder="empty"
                    className="mx-auto"
                >
                </Image>
            </Dialog>
        </div>
    )
}