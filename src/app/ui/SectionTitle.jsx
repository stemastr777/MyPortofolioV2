

export default function SectionTitle({title}) {

    return (
        <>
            <h1 className="text-4xl text-center mt-16 mb-6 font-semibold">{title.name}</h1>
            <p className="text-center">{title.description}</p>
        </>
    )
}