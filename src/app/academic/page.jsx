
import { sectionOverviewData } from "@/data/sectionOverviewData";
import SectionNavigation from "@/ui/SectionNavigation";
import SectionTitle from "@/ui/SectionTitle";
import academicDetail from "@/data/academicDetail"
import AcademicBlock from "@/ui/AcademicBlock";

export default function AcademicPage() {
    return (
        <>
            <SectionNavigation></SectionNavigation>
            <SectionTitle title={sectionOverviewData[2]}></SectionTitle>
            <div id="page-content" className="flex flex-col space-y-12 w-full mt-16">
                {
                    academicDetail["record"].map((recordDetail) => {
                        return (<AcademicBlock key={recordDetail["Degree"] + recordDetail["Major"]} record={recordDetail} />)
                    })
                }
            </div>
            
        </>
    )

}