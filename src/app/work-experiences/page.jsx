
import SectionTitle from "@/ui/SectionTitle";
import SectionNavigation from "@/ui/SectionNavigation";
import { sectionOverviewData } from "@/data/sectionOverviewData";
import ColoredSectionBlock from "@/ui/ColoredSectionBlock";

export default function WorkExperiencesPage() {
    return (
        <>
            <SectionNavigation></SectionNavigation>
            <SectionTitle title={sectionOverviewData[3]}></SectionTitle>
            <ColoredSectionBlock id="page-content" className="h-[80vh] mt-16">
                <p className="leading-[80vh] text-center text-lg text-slate-300">No work experience yet</p>
            </ColoredSectionBlock>
        </>
    )

}