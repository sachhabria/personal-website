import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const educationDirectory = path.join(process.cwd(), 'education');

export async function getSortedEducationData() {
  // Get file names under /education
  const fileNames = fs.readdirSync(educationDirectory);
  const allEducationData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(educationDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the education metadata section
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
  return allEducationData.sort((a, b) => {
    if (a.grad_date < b.grad_date) {
      return 1;
    } else {
      return -1;
    }
  });
}
