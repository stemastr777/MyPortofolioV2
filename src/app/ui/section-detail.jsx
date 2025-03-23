import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ColoredSectionBlock from "@/ui/ColoredSectionBlock"
import LoadableImage from "@/ui/LoadableImage"
import OrganizationProgram from "@/ui/OrganizationProgram";

function SimpleSideDetail({section, data}) {


    if (section == 'organizational-experiences') {
        return (
            <ColoredSectionBlock className="flex flex-col items-center h-[100vh] basis-1/3 py-10 px-4">
                <h1 className="text-4xl mb-6 text-center">{data.Role}</h1>
                <h3 className="text-xl text-center">at {data.Organization}</h3>
                <div className='w-[260px] h-[175px] my-14'>
                    <LoadableImage
                        src={`/logos/logo-` + data.Organization.replace(" ", '').toLowerCase() + '.png'}
                        width={250}
                        height={250}
                        alt={`${data.Organization + data.Role}`}
                        clickable={false}
                        style={{ borderRadius: "5px", objectFit: 'contain' }}
                    ></LoadableImage>
                </div>
                <div className="space-y-4 w-full">
                    {
                        ["Start Date", "End Date", "Location"].map((part) => {
                            return (
                                <div key={part} className="flex flex-row space-x-8 text-sm justify-between items-center w-full min-h-12 px-4 opacity-90 bg-slate-900 rounded-sm">
                                    <span>{part}</span>
                                    <span className="text-right">{data[part]}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </ColoredSectionBlock>
        )
    } 
    
    else if (section == "skills") {
        return (
            <ColoredSectionBlock className="flex flex-col items-center h-[100vh] basis-1/3 py-10 px-4">
                <h1 className="text-4xl mb-6 text-center">{data.Name}</h1>
                <div className='w-[260px] h-[175px] my-14'>
                    <LoadableImage
                        src={`/logos/logo-` + data.Name.replace(" ", '').toLowerCase() + '.png'}
                        width={250}
                        height={250}
                        alt={`${data.Name}`}
                        clickable={false}
                        style={{ borderRadius: "5px", objectFit: 'contain' }}
                    ></LoadableImage>
                </div>
                <div className="space-y-4 w-full">
                    {
                        ["Category", "ProficientLevel"].map((part) => {
                            return (
                                <div key={part} className="flex flex-row space-x-8 text-sm justify-between items-center w-full min-h-12 px-4 opacity-90 bg-slate-900 rounded-sm">
                                    <span>{part}</span>
                                    <span className="text-right">{data[part]}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </ColoredSectionBlock>
        )
    }

    
}

function ComprehensiveSideDetail({section, data}) {

    if (section == 'organizational-experiences') {
        return (
            <ColoredSectionBlock id="exp-detail" className="h-[100vh] basis-2/3 p-4 overflow-y-auto">
    
                {
                    ["About Organization", "Role Description", "Program", "Acquired Skill"].map(section => {
    
                        return (
                            <Accordion key={section} defaultExpanded className="!bg-slate-900 !text-slate-200 ">
                                <AccordionSummary
                                    className="h-20 !text-xl"
                                    expandIcon={<ExpandMoreIcon className="!text-slate-200" />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <span>{section}</span>
                                </AccordionSummary>
                                <AccordionDetails className="!bg-slate-900 !text-slate-200 border-t-2 border-green-800 !p-6">
                                    {section != 'Program' && data[section]}
                                    {
                                        section == "Program" ?
                                            <OrganizationProgram programs={data[section]}></OrganizationProgram>
                                            :
                                            null
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </ColoredSectionBlock>
        )
    }

    else if (section == 'skills') {
        return (
            <ColoredSectionBlock id="exp-detail" className="h-[100vh] basis-2/3 p-4 overflow-y-auto">

                {
                    ["Purpose", "Proof"].map(section => {

                        return (
                            <Accordion key={section} defaultExpanded className="!bg-slate-900 !text-slate-200 ">
                                <AccordionSummary
                                    className="h-20 !text-xl"
                                    expandIcon={<ExpandMoreIcon className="!text-slate-200" />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <span>{section}</span>
                                </AccordionSummary>
                                <AccordionDetails className="!bg-slate-900 !text-slate-200 border-t-2 border-cyan-700 !p-6">
                                    {section != 'Proof' && data[section]}
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </ColoredSectionBlock>
        )
    }
}

export {SimpleSideDetail, ComprehensiveSideDetail}