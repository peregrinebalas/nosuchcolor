import Section from './Section'

export default function Sections() {
    const sections = [
        {name: 'About', header: 'INFORMATION'}
    ]
    return (
        <div>
            <ul>
                {sections.map((section) => {
                    return <Section {...section} />
                })}
            </ul>
        </div>
    )
}