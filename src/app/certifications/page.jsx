
import { sectionOverviewData } from "@/data/sectionOverviewData";
import certificationDatas from "@/data/certificationData";
import CertificationBlock from "@/ui/CertificationBlock";
import SectionTitle from "@/ui/SectionTitle";
import SectionNavigation from "@/ui/SectionNavigation";


export default function CertificationsPage() {
    return (
        <>
            <SectionNavigation></SectionNavigation>
            <SectionTitle title={sectionOverviewData[5]}></SectionTitle>
            <div id="page-content" className="flex flex-col space-y-12 w-full mt-16">
                {
                    certificationDatas["record"].map((data) => {
                        return (<CertificationBlock key={data["Title"] + data["Organization"]} data={data} />)
                    })
                }
            </div>
        </>
    )

}