

export default function DetailAccordion({summary, details}) {

    return (
        <Accordion defaultExpanded className="!bg-slate-900 !text-slate-200 ">
            <AccordionSummary
                className="h-20 !text-xl"
                expandIcon={<ExpandMoreIcon className="!text-slate-200" />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {summary}
            </AccordionSummary>
            <AccordionDetails className="!bg-slate-900 !text-slate-200 border-t-2 border-green-800 !p-6">
        
            </AccordionDetails>
        </Accordion>  
    )

}