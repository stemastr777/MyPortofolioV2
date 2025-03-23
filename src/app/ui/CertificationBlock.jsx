'use client'

import Link from "next/link"
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from "@mui/material"

import pdfLogo from '@/logos/pdf_logo.png'
import { fileNameSimplifier } from '@/utility/string-manipulation'
import ColoredSectionBlock from './ColoredSectionBlock'
import LoadableImage from './LoadableImage';

export default function CertificationBlock({ data }) {

    const originalFileName = data["Organization"].toLowerCase() + "_" + data["Title"].toLowerCase().replaceAll(" ", "-") + ".pdf"
    const previewImagePath = 'http://localhost:3000/images/' + data["Organization"].toLowerCase() + "_" + data["Title"].toLowerCase().replaceAll(" ", "-") + "-preview.jpg"
    const originalFilePath = 'http://localhost:3000/pdfs/' + originalFileName

    
    return(
        <>
            <ColoredSectionBlock className={`relative flex flex-row space-x-8 py-6 px-8 h-[360px] w-full`}>
                <div id="certificate-asset" className="flex flex-col space-y-4 basis-1/3 items-center h-full my-auto">
                    <LoadableImage src={previewImagePath} clickable={true} height={230} width={324} ></LoadableImage>
                    <div
                        id="certificate-file"
                        className=" hover:bg-opacity-50 cursor-pointer basis-1/3 w-[324px] rounded-md flex flex-row items-center bg-slate-700 bg-opacity-80 px-3"
                        onClick={() => open(originalFilePath)}
                    >
                        <div className='flex basis-full justify-start items-center'>
                            <LoadableImage src={pdfLogo} clickable={false} height={30} width={30} alt={'PDF Logo'}>
                            </LoadableImage>
                            <div id="file-title" className='text-sm h-full leading-[100%] ml-3'>
                                {fileNameSimplifier(originalFileName, 16)}
                            </div>
                        </div>
                        <a onClick={(e) => e.stopPropagation()} id="file-download" className='hover:bg-slate-600 rounded-[50%]' href={originalFilePath} download>
                            <IconButton aria-label="download" color='inherit'>
                                <DownloadIcon></DownloadIcon>
                            </IconButton>
                        </a>
                    </div>
                </div>
                <div id="certificate-info" className="flex flex-col basis-2/3 justify-between">
                    {
                        Object.entries(data).map(([key, value]) => {

                            if (key === "Verification link") {
                                return (
                                    <div key={key + value} className='flex flex-row'>
                                        <span className="inline-block min-w-[160px] w-[160px]">{key}</span>
                                        :
                                        {
                                            value === '-' ? 
                                            <p className='ml-2'>-</p>
                                            :
                                            <Link href={value} target="_blank" className='ml-2 text-link'>{value}</Link>
                                        }
                                    </div>
                                )
                            }

                            return (
                                <div key={key + value} className='flex flex-row'>
                                    <span className="inline-block min-w-[160px] w-[160px]">{key}</span>
                                    :
                                    <span className="ml-2">{value}</span>
                                </div>
                            )
                        })
                    }
                </div>   
            </ColoredSectionBlock>
            
        </>
    )
}