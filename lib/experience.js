import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const experienceDirectory = path.join(process.cwd(), 'experience');

export async function getSortedExperienceData() {
  // Get file names under /experience
  const fileNames = fs.readdirSync(experienceDirectory);
  const allExperienceData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(experienceDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the experience metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }));
  // Sort posts by date
  return allExperienceData.sort((a, b) => {
    if (a.end_date < b.end_date) {
      return 1;
    } else {
      return -1;
    }
  });
}
