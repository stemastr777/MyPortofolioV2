
import { Chip } from "@mui/material"
import { Avatar } from "@mui/material"

import { descriptiveToPathCompatible } from "@/utility/string-manipulation"

export default function SkillChip({skill}) {

    const skillName = descriptiveToPathCompatible(skill)

    return (
        <>
            <Chip 
                label={skill}
                component="a"
                href={`/skills/${skillName}`}
                variant="outlined" 
                avatar={<Avatar sx={{'marginRight' : '0px !important'}} src={`/logos/logo-${skillName.replace('-', '')}.png`} />}
                sx={{
                    borderColor: "cyan",
                    color: 'white',
                    minWidth: '96px',
                    color: 'white',
                    margin: '0 4px',
                    '&:hover' : {
                        backgroundColor: 'rgba(255,255,255,0.1) !important'
                    }
                }}
                clickable
            />
        </>
    )
}