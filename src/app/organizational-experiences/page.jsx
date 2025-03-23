
import { sectionOverviewData } from "@/data/sectionOverviewData";
import organizationalData from "@/data/organizationalData";

import SectionNavigation from "@/ui/SectionNavigation";
import SectionTitle from "@/ui/SectionTitle";
import OrganizationalBlock from "@/ui/OrganizationalBlock";

export default function OrganizationalExperiencesPage() {
    return (
        <>
            <SectionNavigation></SectionNavigation>
            <SectionTitle title={sectionOverviewData[4]}></SectionTitle>
            <div id="page-content" className="grid grid-cols-1 gap-x-12 gap-y-8 w-full mt-24">

                {
                    organizationalData["record"].map((data) => (
                        <OrganizationalBlock key={data["Code"]} data={data}></OrganizationalBlock>
                    ))
                }
                
            </div>
        </>
    )

}