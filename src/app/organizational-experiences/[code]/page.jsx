'use client'

import { useParams } from "next/navigation"

import organizationalData from "@/data/organizationalData"
import { SimpleSideDetail, ComprehensiveSideDetail } from "@/ui/section-detail";

export default function OrganizationalDetailPage() {

    const params = useParams()

    const record = organizationalData["record"].filter((record) => params.code === record["Code"])[0] 
    
    return (
        <>
            <div className="flex flex-row space-x-8">
                <SimpleSideDetail data={record} section={'organizational-experiences'}></SimpleSideDetail>
                <ComprehensiveSideDetail data={record} section={'organizational-experiences'}></ComprehensiveSideDetail>
            </div>
        </>
    )
}