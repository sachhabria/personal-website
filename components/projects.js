import Card from './card';
import Container from './container';
import Section from './section'


function ProjectItem({ imageUrl, title, techStack, contentHtml, link }) {
    return (
        <Container>
            <Card
                title={title}
                contentHtml={contentHtml}
                techStack={techStack}
                imageUrl={imageUrl}
                link={link}
            />
        </Container>
    );
}

export default function Projects({ data }) {
    return (
        <Section id="projects">
            {data.map((item) => (
                <ProjectItem key={item.id} {...item} />
            ))}
        </Section>
    );
}
