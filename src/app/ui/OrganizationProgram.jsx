
export default function OrganizationProgram({programs}) {

        return (
            <ol className="list-decimal list-inside">
                {
                    programs.map(program => {
                        return(
                            <>
                                <li> 
                                    {program["Name"]} 
                                    <ul className="list-inside px-5 mb-6">
                                        {program["Contribution"].map(contribution =>
                                            <li key={contribution} className="list-disc font-light">
                                                {contribution}
                                            </li>
                                        )}
                                    </ul>
                                </li>
                                
                            </>
                        )
                    })
                }
                
            </ol>
        )

    
}