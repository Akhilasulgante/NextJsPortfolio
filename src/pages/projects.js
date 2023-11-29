import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/ResearchProject.png";
import sharkTank from "../../public/images/projects/SharkTank.gif";
import peko from "../../public/images/projects/pekomeals.png";
import algoproject from "../../public/images/projects/AlgoProject.gif";
import hateSpeech from "../../public/images/projects/HateSpeech.gif";
import Soapiphany from "../../public/images/projects/soap.gif";
import pokemon from "../../public/images/projects/pokemon.gif";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light sm:-right-2 sm:h-[102%] sm:w-full sm:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="About page"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Personal Projects"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Research - Data Viz tool for Identifying bias in ML datasets"
                summary="In my current research, I'm developing an interactive web-based data visualization tool. Its purpose is to help identify biases within machine learning datasets, contributing to the creation of fairer models and the elimination of disadvantages faced by underrepresented communities."
                link="https://medium.com/@asulgante39/discrimination-by-default-unmasking-the-social-ramifications-of-biased-data-5c2dce57f90d"
                type="Machine Learning and Data Visualization"
                github="https://github.com/Akhilasulgante/Research"
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Shark Tank India Visualization"
                summary="A platform showcasing Shark Tank India's data using visualizations. It reveals investment trends and delves into both individual and collaborative involvements of the show's sharks. By analyzing the investment patterns on Shark Tank India, aspiring entrepreneurs can gain valuable insights into what types of businesses and pitches are likely to attract investment, and what strategies they can use to maximize their chances of securing funding."
                link="https://akhilasulgante.github.io/SharkTankInViz/"
                type="Data Visualization - D3.js, Vega-lite, Tableau"
                github="https://github.com/Akhilasulgante/SharkTankInViz"
                img={sharkTank}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Peko-food delivery app"
                summary="I created a food delivery application using the MERN stack, employing agile methodologies to foster adaptability. During the early stages, I conducted a usability study, ensuring adherence to POUR principles for heightened accessibility. The app boasts intuitive filtering functionalities, streamlining the food ordering process for users. Its primary strengths lie in delivering an enriched user experience, prioritizing inclusivity, and offering a seamless ordering journey."
                link="https://peko2.onrender.com/"
                type="Web Development - HTML, CSS, JavaScript, React, Mongo, Express.js, Node,js "
                github="https://github.com/Akhilasulgante/peko"
                img={peko}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Avalara Coridance Project"
                summary="I participated in an experiential project in partnership with Cordiance Company. Our objective was to find the most accurate UNSPSC code match for the Avalara Tax description primarily using string matching algorithms. We implemented the Levenshtein minimum edit distance at the word level, achieving an 84% accuracy rate."
                link="https://github.com/Akhilasulgante/cordiance-experential-project"
                type="Python, String matching Algorithms, Data Analysis, Data cleaning"
                github="https://github.com/Akhilasulgante/cordiance-experential-project"
                img={algoproject}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Hate Speech Detection"
                summary="Developed an NLP model achieving a 96% accuracy rate in categorizing text as hate speech or offensive language. Trained on datasets like Davidson and TSA, I experimented with various hybrid models like Glove + Bi-LSTM + CNN + MLP and TF-IDF + MLP + SVM + XGB. However, the peak accuracy was attained by employing Transformer models - specifically, CNN and MLP variants (Small BERT, BERT, ELECTRA, and ALBERT)."
                link="https://github.com/Akhilasulgante/hate-speech-detection-NLP-Project-"
                type="Python, Natural Language Processing, NLTK, Transformer Models"
                github="https://github.com/Akhilasulgante/hate-speech-detection-NLP-Project-"
                img={hateSpeech}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Soapiphany: E-commerce website for soaps"
                summary="I developed an e-commerce website for my soap brand Soapiphany. The objective of this project was to showcase Object-Oriented programming principles. The website encompasses sections like home, product details, feedback, and an About page, along with a functional shopping cart. Additionally, a feature was developed to calculate the soap price dynamically based on user input."
                link="http://skillful-toys.surge.sh/"
                type="HTML, CSS, JavaScript, React"
                github="https://github.com/Akhilasulgante/Soapiphany"
                img={Soapiphany}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Pokemon Playground"
                summary="This project illustrates reactive programming through the Observablehq platform. It offers various filters for selecting Pokémon based on multiple attributes. Users have the option to choose two Pokémon and simulate a battle between them."
                link="https://observablehq.com/@akhila/pokemonproject"
                type="HTML, CSS, JavaScript, React"
                github="https://observablehq.com/@akhila/pokemonproject"
                img={pokemon}
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default projects;
