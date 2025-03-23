import Link from "next/link"

import ColoredSectionBlock from "@/ui/ColoredSectionBlock";

export default function OrganizationalBlock({data}) {

    return (
        <ColoredSectionBlock hoverable={true}>
            <Link 
                href={`/organizational-experiences/${data["Code"]}`}
                className="flex flex-row justify-center items-center h-28 px-4 py-4"
            >
                <p className="mb-1">{data["Organization"] + " " + data["Role"]}</p>
            </Link>
        </ColoredSectionBlock>
    )
}