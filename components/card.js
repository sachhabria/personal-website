import Date from './date';

function TechStack({ techString }) {
    const techs = techString.split(', ');
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {techs.map(tech => (
          <span key={tech} className="bg-blue-200 rounded-full px-3 py-1 text-xs text-blue-800">
            {tech}
          </span>
        ))}
      </div>
    );
}

export default function Card({ title, subtitle, startDate, endDate, contentHtml, techStack, imageUrl, link }) {
    return (
        <a href={link} target="_blank" className="flex flex-col sm:flex-row p-5 gap-1 sm:gap-0">
            <div className="text-sm w-56 mr-8">
                {startDate && <Date dateString={startDate} />}
                {startDate && endDate && ' - '}
                {endDate && <Date dateString={endDate} />}
				        {imageUrl && <img src={imageUrl} alt={title} className="rounded-md max-h-20 mt-2"/>}
            </div>
            <div className="w-full">
                <p className="font-bold">{title}</p>
                {subtitle && <p className="text-sm">{subtitle}</p>}
                <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                {techStack && <TechStack techString={techStack} />}
            </div>
        </a>
    );
}
