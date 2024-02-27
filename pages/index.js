import Head from 'next/head';
import Header from '../components/header';
import Layout from '../components/layout';
import Intro from "../components/intro";
import About from "../components/about";
import Education from "../components/education"
import Experience from "../components/experience"
import Projects from "../components/projects"
import { getSortedExperienceData } from '../lib/experience';
import { getSortedEducationData } from '../lib/education';
import { getSortedProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const allExperienceData = await getSortedExperienceData();
  const allEducationData = await getSortedEducationData();
  const allProjectsData = await getSortedProjectsData();
  return {
    props: {
	  allEducationData,
      allExperienceData,
	  allProjectsData
    },
  };
}

export default function Home({ allEducationData, allExperienceData, allProjectsData }) {
	return (
		<>
			<Layout>
        		<Head>
          			<title>Sachin Chhabria</title>
        		</Head>
				<Header />
        		<div className="flex flex-col lg:flex-row justify-center lg:m-16 md:m-8 m-4">
					<div>
						<div className="sticky lg:top-32">
							<Intro />
						</div>
					</div>
					<div className="lg:w-1/6 lg:max-w-12"></div>
					<div className="flex flex-col lg:max-w-prose">
						<About />
						<Education data={allEducationData}/>
						<Experience data={allExperienceData}/>
						<Projects data={allProjectsData}/>
					</div>
				</div>
      		</Layout>
    	</>
  	);
}