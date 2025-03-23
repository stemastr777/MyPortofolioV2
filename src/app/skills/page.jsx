

import { sectionOverviewData } from "@/data/sectionOverviewData";
import SectionNavigation from "@/ui/SectionNavigation";
import SectionTitle from "@/ui/SectionTitle";

export default function WorkExperiencesPage() {
    return (
        <>
            <SectionNavigation></SectionNavigation>
            <SectionTitle title={sectionOverviewData[0]}></SectionTitle>
        </>
    )

}