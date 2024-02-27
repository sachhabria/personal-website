import Card from './card';
import Container from './container';
import Section from './section'

function EducationItem({ school, degree, major, startDate, endDate, contentHtml, imageUrl, link }) {
    return (
        <Container>
            <Card
                title={school}
                subtitle={`${degree} ${major}`}
                startDate={startDate}
                endDate={endDate}
                contentHtml={contentHtml}
                imageUrl={imageUrl}
                link={link}
            />
        </Container>
    );
}

export default function Education({ data }) {
    return (
        <Section id="education">
            {data.map((item) => (
                <EducationItem key={item.id} {...item} />
            ))}
        </Section>
    );
}
