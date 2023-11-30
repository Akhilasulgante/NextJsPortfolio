import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "" }}
      >
        <h3 className="captialize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="captialize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl pt-2 mb-16 w-full text-center md:text-6xl xs:text-4xl md:mt-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Teaching Assistant"
            company="Northeastern University"
            companyLink="https://www.northeastern.edu/"
            time="May 2022 - Present"
            address="San Francisco, CA"
            work="I am working as a Teaching Assistant for 'Algorithm' and worked as a TA for 'Foundations of Computer Science' in the previous semester. In 'Foundations of Computer Science,' I designed lesson plans, taught computer science concepts to students with no prior background, graded assignments, and addressed queries. In the 'Algorithm' course, I hold office hours to assist students with complex algorithm questions and evaluate their assignments. These roles allowed me to contribute to students' learning experiences, fostering their understanding of computer science fundamentals and algorithmic problem-solving skills."
          />
          <Details
            position="Summer Analyst"
            company="Goldman Sachs"
            companyLink="https://www.goldmansachs.com/index.html"
            time="Jul 2023 - Sept 2023"
            address="Tokyo, Japan"
            work="As my internship project, I developed an enhanced retry feature within a client reporting platform. My role encompassed the conceptualization and execution of an enhanced retry mechanism, strategically designed to target and reprocess only the specific data sections that failed. This innovative approach stands in contrast to the previous process, which required a full report generation retry even in cases where only a single data section failed. The successful implementation of this feature resulted in remarkable outcomes. Over a span of just 30 days, it delivered substantial time savings, equating to an impressive 365.4 hours of productivity gains. Moreover, it had a profound impact on our data processing infrastructure, leading to an exceptional 87% reduction in data processing calls to Apache Flink, thereby optimizing system resources and enhancing overall platform efficiency. "
          />
          <Details
            position="Account Specialist"
            company="Amazon"
            companyLink="https://www.aboutamazon.com/about-us"
            time="May 2020 - Dec 2021"
            address="Bengaluru, India"
            work="I led the development of advertising campaigns for more than 120 brands, resulting in a remarkable 40% increase in product visibility within just one year.
Furthermore, I leveraged data-driven decision-making by using Tableau to analyze Voice of Customer (VoC) data. This analytical effort led to the creation of a highly efficient process aimed at expediting customer query resolution. It reduced the previous average response time of 5 business days to only 2 business days. This not only greatly enhanced customer satisfaction but also improved operational efficiency within the organization.
These successes emphasize my expertise in both strategic marketing and data analysis, showcasing my ability to promote business growth and enrich customer experiences through data-driven insights and innovative problem-solving."
          />
          <Details
            position="Assitant Application Developer"
            company="Fujitsu"
            companyLink="https://www.fujitsu.com/global/"
            time="Dec 2017 - Mar 2020"
            address="Pune, India"
            work="In my  role, I designed efficient algorithms and developed robust Java software components. I rigorously tested these components using JUnit, ensuring top-notch quality. Additionally, I bridged language gaps by drafting precise Japanese specification documents, enhancing client communication. By proactively addressing issues in Integration Testing, I reduced project timelines by 30%. I also facilitated bi-weekly module reviews, fostering continuous improvement within the team. My focus on algorithm design, multilingual communication, problem-solving, and quality assurance highlighted my dedication to exceptional software development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
