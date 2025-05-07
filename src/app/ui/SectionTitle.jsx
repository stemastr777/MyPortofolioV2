

export default function SectionTitle({title}) {
    
    function getTitleEmoji(title) {

        switch(title) {
            case 'Skills': return '💻';
            case 'Projects': return '🔨';
            case 'Academic': return '🎓';
            case 'Work Experiences': return '🏢';
            case 'Organizational Experiences': return '⛪';
            case 'Certifications': return '📜';
            default: return '';
        }

    }

    return (
        <>
            <h1 className="text-4xl text-center mt-16 mb-6 font-semibold">{getTitleEmoji(title.name)}{title.name}</h1>
            <p className="text-center">{title.description}</p>
        </>
    )
}