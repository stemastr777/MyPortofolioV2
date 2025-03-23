'use client'

import { useParams } from "next/navigation"

import skillDatas from '@/data/skillDatas.json'
import { SimpleSideDetail, ComprehensiveSideDetail } from "@/ui/section-detail";

export default function SkillDetailPage() {


    const params = useParams()

    const record = skillDatas["record"].filter((record) => params.skill === record["Name"].replaceAll(" ", '-').toLowerCase())[0] 
    
    return (
        <>
            <div className="flex flex-row space-x-8">
                <SimpleSideDetail data={record} section={'skills'}></SimpleSideDetail>
                <ComprehensiveSideDetail data={record} section={'skills'}></ComprehensiveSideDetail>
            </div>
        </>
    )
}