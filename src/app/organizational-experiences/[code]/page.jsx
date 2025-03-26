'use client'

import { useParams } from "next/navigation"

import organizationalData from "@/data/organizationalData"
import { SimpleSideDetail, ComprehensiveSideDetail } from "@/ui/section-detail";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function OrganizationalDetailPage() {

    const params = useParams()

    const record = organizationalData["record"].filter((record) => params.code === record["Code"])[0] 
    
    return (
        <>
            <button className="mb-4" onClick={() => window.history.back()}>
                <ArrowBackIcon fontSize='small' className="mr-2" />
                Back
            </button>
            <div className="flex flex-col sm:flex-row sm:space-x-8 ">
                <SimpleSideDetail data={record} section={'organizational-experiences'}></SimpleSideDetail>
                <ComprehensiveSideDetail data={record} section={'organizational-experiences'}></ComprehensiveSideDetail>
            </div>
            <button className="mt-4" onClick={() => window.history.back()}>
                <ArrowBackIcon fontSize='small' className="mr-2" />
                Back
            </button>
        </>
    )
}