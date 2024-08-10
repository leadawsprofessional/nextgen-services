"use client";
import { mulish } from "@/config/font";
import React, { useState } from "react";
import Accordion from "./Accordion";
import Image from "next/image";
import faq from "@/assets/FAQs.png";

const data = [
  {
    "id": 1,
    "question": "What is EB1 Next Level?",
    "answer": "EB1 Next Level is a specialized consultancy focused on helping individuals navigate and achieve permanent residency through the EB1-A (Extraordinary Ability) visa process. We provide expertise in areas such as Judging, Authorship of Scholastic Articles, Original Contributions, Editorial Memberships, Press Coverage, and Awards to strengthen your application."
  },
  {
    "id": 2,
    "question": "What services does EB1 Next Level offer?",
    "answer": "We offer a range of services tailored to the EB1-A visa process, including: \n - Assistance with documenting and evidencing extraordinary abilities. \n - Guidance on obtaining and presenting awards and recognitions. \n - Support in authorship and publication of scholarly articles. \n - Help in securing judging positions and editorial memberships. \n - Strategies for effective press coverage and media exposure."
  },
  {
    "id": 3,
    "question": "What is an EB1-A visa?",
    "answer": "The EB1-A visa is a category of the Employment-Based First Preference visas for individuals who possess extraordinary ability in the sciences, arts, education, business, or athletics. It allows for U.S. permanent residency without the need for a job offer or labour certification."
  },
  {
    "id": 4,
    "question": "Who qualifies for an EB1-A visa?",
    "answer": "Individuals who have demonstrated sustained national or international acclaim in their field and whose achievements have been recognized through extensive documentation may qualify for an EB1-A visa. This includes, but is not limited to, scientists, artists, athletes, educators, and business professionals."
  },
  {
    "id": 5,
    "question": "What are the benefits of an EB1-A visa?",
    "answer": "Benefits of an EB1-A visa include: \n - No requirement for a job offers or labour certification. \n - Faster processing times compared to other visa categories. \n - Ability to self-petition. \n - Permanent residency for the applicant and their immediate family members."
  },
  {
    "id": 6,
    "question": "How does EB1 Next Level assist with the EB1-A application process?",
    "answer": "We provide comprehensive support throughout the EB1-A application process, including: \n - Evaluating your credentials and determining eligibility. \n - Collecting and organizing documentation of your extraordinary abilities. \n - Crafting persuasive narratives and recommendation letters. \n - Offering strategic advice to enhance your profile and presentation."
  },
  {
    "id": 7,
    "question": "How long does the EB1-A application process take?",
    "answer": "The timeline for the EB1-A application process can vary. Typically, it may take several months to a year from the initial evaluation to the final decision. EB1 Next Level aims to streamline and expedite this process as much as possible."
  },
  {
    "id": 8,
    "question": "What are the common challenges in the EB1-A application process?",
    "answer": "Common challenges include: \n - Demonstrating sustained national or international acclaim. \n - Providing sufficient and compelling documentation. \n - Meeting the stringent criteria set by the USCIS. \n - Ensuring consistency and coherence in the presented evidence."
  },
  {
    "id": 9,
    "question": "How much do your services cost?",
    "answer": "The cost of our services depends on the specific needs and complexity of each case. We offer a range of packages tailored to different levels of support required. Please contact us for a detailed consultation and quote."
  },
  {
    "id": 10,
    "question": "What payment methods do you accept?",
    "answer": "We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. Specific details will be provided during the consultation."
  },
  {
    "id": 11,
    "question": "How can I get started with EB1 Next Level?",
    "answer": "To get started, please reach out to us via our website's contact form, email, or phone. We will schedule an initial consultation to discuss your needs and evaluate your eligibility for the EB1-A visa."
  },
  {
    "id": 12,
    "question": "What kind of support can I expect during the application process?",
    "answer": "You can expect continuous support from our experienced team, including regular updates, strategic advice, and thorough preparation of all necessary documents. We are committed to guiding you through every step of the process."
  },
  {
    "id": 13,
    "question": "Is EB1 Next Level a law firm?",
    "answer": "No, EB1 Next Level is not a law firm. We specialize in providing consultancy services to help individuals navigate the EB1-A visa process, but we do not offer legal representation or attorney services."
  },
  {
    "id": 14,
    "question": "How does EB1 Next Level differ from other EB1-A visa consultancies?",
    "answer": "EB1 Next Level stands out due to our tailored approach, focusing on critical areas such as Judging, Authorship of Scholastic Articles, Original Contributions, Editorial Memberships, Press Coverage, and Awards. Our expertise in these specific areas allows us to provide highly specialized support to our clients."
  },
  {
    "id": 15,
    "question": "What kind of success rate does EB1 Next Level have?",
    "answer": "While individual success can vary based on each case's unique circumstances, EB1 Next Level prides itself on a high success rate due to our thorough and personalized approach. We are committed to providing the best possible support to improve your chances of a successful application."
  },
  {
    "id": 16,
    "question": "Can EB1 Next Level recommend attorneys?",
    "answer": "As of now, EB1 Next Level does not provide recommendations for attorneys. We focus on offering our specialized consultancy services to enhance your EB1-A application."
  }
];

const FAQS = () => {
  const [turn, setTurn] = useState(Array(data.length).fill(false));
  return (
    <div
    id="faq"
      className="pb-24 flex flex-col justify-center items-center lg:px-20"
      data-aos="fade-up"
    >
      <h1 className={mulish.className + " text-5xl font-bold"}>FAQs</h1>
      <div className="flex flex-col lg:flex-row pt-12">
        {/* <div className="lg:w-2/5 p-10 flex justify-center items-center">
          <Image
            src={faq}
            alt="FAQ"
            width={100}
            height={100}
            className="w-72 aspect-square"
          />
        </div> */}
        <div className="lg:w-2/4 px-2">
          {data.slice(0,8).map((el, i) => {
            return (
              <div className="w-full" key={"questions" + i}>
                <Accordion
                  question={el?.question}
                  answer={el?.answer}
                  turn={turn}
                  setTurn={setTurn}
                  idx={el?.id}
                  faq={true}
                />
              </div>
            );
          })}
        </div>
        <div className="lg:w-2/4 px-2">
          {data.slice(8).map((el, i) => {
            return (
              <div className="w-full" key={"questions" + i}>
                <Accordion
                  question={el?.question}
                  answer={el?.answer}
                  turn={turn}
                  setTurn={setTurn}
                  idx={el?.id}
                  faq={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
