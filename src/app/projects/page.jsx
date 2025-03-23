
import { sectionOverviewData } from "@/data/sectionOverviewData";
import SectionTitle from "@/ui/SectionTitle";
import SectionNavigation from "@/ui/SectionNavigation";

export default function ProjectsPage() {
    return (
        <>
            <SectionNavigation></SectionNavigation>
            <SectionTitle title={sectionOverviewData[1]}></SectionTitle>
        </>
    )

}