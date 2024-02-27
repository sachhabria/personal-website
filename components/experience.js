import Card from './card';
import Container from './container';
import Section from './section'

function ExperienceItem({ role, company, team, startDate, endDate, contentHtml, techStack, imageUrl, link }) {
    return (
        <Container>
            <Card
                title={`${role} • ${company}`}
                subtitle={team}
                startDate={startDate}
                endDate={endDate}
                contentHtml={contentHtml}
                techStack={techStack}
                link={link}
                imageUrl={imageUrl}
            />
        </Container>
    );
}

export default function Experience({ data }) {
    return (
        <Section id="experience">
            {data.map((item) => (
                <ExperienceItem key={item.id} {...item} />
            ))}
        </Section>
    );
}
