import { mulish } from "@/config/font";
import Image from "next/image";
import React from "react";
import Icon from "@/assets/Icon.png";
import ServicesModal from "./ServicesModal";
import bg1 from "@/assets/bg1.jpg";
import one from "@/assets/1.png";
import two from "@/assets/2.png";
import three from "@/assets/3.png";
import four from "@/assets/4.png";
import five from "@/assets/5.png";
import six from "@/assets/6.png";

const Features = () => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState(null);
  const [head, setHead] = React.useState();
  const [isHovered, setIsHovered] = React.useState(
    Array(6)
      ?.fill()
      .map(() => false)
  );
  const handleOpen = (text1, title) => {
    setText(text1);
    setHead(title);
    setOpen(true);
  };
  const handleMouseOver = (index) => {
    const updatedHoverStates = isHovered.map((state, i) =>
      i === index ? true : false
    );
    setIsHovered(updatedHoverStates);
  };

  const handleMouseOut = (index) => {
    const updatedHoverStates = Array(isHovered.length).fill(false);
    setIsHovered(updatedHoverStates);
  };

  return (
    <div
      id="services"
      className="pb-24 flex lg:hidden flex-col justify-center items-center p-5 "
      data-aos="fade-up"
    >
      <h1 className={mulish.className + " text-4xl font-bold"}>SERVICES</h1>
      <div className="grid lg:grid-cols-4 gap-5 pt-12">
        {data.map((post, itemIndex) => (
          <div
            key={post.id}
            className={`flex flex-col hover:bg-gradient-to-br from-[#6a913a] via-[#8dc14e] to-[#abea5d] shadow-lg shadow-black/40 border-[1px] border-black/50 hover:border-[#B9FF66] rounded-xl w-full lg:w-[20rem] aspect-square justify-between group overflow-hidden transition-colors duration-300 p-5`}
            data-aos="zoom-in"
            onMouseOver={() => handleMouseOver(itemIndex)}
            onMouseOut={() => handleMouseOut(itemIndex)}
            onClick={() => handleOpen(post.text, post.title)}
          >
            {/* <div
              className={
                mulish.className +
                " flex justify-center bg-gray-200 border-[1.5px] border-gray-300 rounded-full w-[100px]"
              }
            >
              Publish
            </div> */}
            <Image
              src={post.image}
              alt="bg"
              height={1024}
              width={1024}
              className={`h-full w-full absolute ${
                isHovered[itemIndex]
                  ? "group-hover:hidden"
                  : "block z-10 top-0 left-0"
              }`}
            />
            <div
              className={`h-full w-full absolute ${
                isHovered[itemIndex]
                  ? "group-hover:hidden"
                  : "block z-20 top-0 left-0 bg-black/40 blur-sm"
              }`}
            />
            <h1
              className={
                mulish.className +
                " text-2xl font-semibold mt-4 min-h-12 text-white text-center z-50"
              }
            >
              {post.title}
            </h1>
            <p
              className={
                mulish.className +
                ` text-gray-500 py-3 min-h-24 group-hover:text-white transform ${
                  isHovered[itemIndex] ? "translate-x-0" : " translate-x-96"
                } transition-all duration-[0.8s]`
              }
            >
              {post.description}
            </p>
            {post.text !== "" && (
              <div className="pt-[16px] border-t-2 flex justify-end z-40">
                {/* <Image
                src={Icon}
                alt="Vector"
                width={45}
                height={48}
                className="w-10 aspect-square "
              /> */}

                <button
                  onClick={() => handleOpen(post.text, post.title)}
                  className={
                    mulish.className +
                    " shadow-black/50 shadow-lg bg-[#B9FF66] group-hover:shadow-black/60 group-hover:bg-[#363537] text-lg px-5 py-1 rounded-full text-black  group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 "
                  }
                >
                  Know More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {open && (
        <ServicesModal
          open1={true}
          text={text}
          head={head}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Features;

const data = [
  {
    id: 1,
    title: "Judging",
    image: one,
    description:
      "Establish your prominence by serving as a judge within your field, reinforcing your recognized authority.",
    text: `
        <p>
          This criterion involves the applicant's participation as a judge of
          the work of others, such as in peer review panels, juries, or
          selection committees. Demonstrating this role can significantly
          strengthen your EB1-A application by showcasing your recognized
          authority and contribution to your professional community
        </p>
        <br />
        <p>
          Here’s a detailed explanation of what "Judging" entails and how it can
          be effectively documented for an EB1-A application :
        </p>
        <ol class="list-disc list-outside ml-10">
          <li>
            <b> Peer Review for Journals:</b> Engage in the critical evaluation
            of research papers, articles, and book chapters in scholarly and
            professional journals, affirming your status as a respected voice
            within your domain.
          </li>
          <li>
            <b>Conference Committees:</b> Contribute to the selection and review
            of papers, presentations, and posters at academic and professional
            conferences, showcasing your expertise and leadership.
          </li>
          <li>
            <b>Editorial Boards:</b> Assume pivotal roles on the editorial
            boards of scientific journals, guiding the review process and
            influencing the publication landscape.
          </li>
          <li>
            <b>Professional Associations:</b> Undertake judgment tasks within
            professional associations, assessing membership applications,
            certifications, or professional standards, which highlights your
            dedication to maintaining and enhancing the quality within your
            profession.
          </li>
        </ol>
        <br />
        <p>Documenting Judging Activities :</p>
        <ol class="list-disc list-outside ml-10">
          <li>
            <b>Official Invitations and Correspondence:</b>: Incorporate
            official letters or emails that extend invitations to judge or
            review, detailing the nature and specifics of your engagement.
          </li>
          <li>
            <b>Evidence of Participation:</b> Provide certificates, thank-you
            letters, or acknowledgments that verify your active involvement and
            contributions.
          </li>
          <li>
            <b>Recommendation Letters: </b> Secure letters from established
            figures in your field who can vouch for your role and the importance
            of your contributions, underlining your expertise and evaluative
            impact.
          </li>
        </ol>
      `,
  },
  {
    id: 2,
    title: "Authorship of Scholarly Papers",
    image: two,
    description:
      "We aid in composing and publishing influential scholarly articles, underlining your pivotal contributions.",
    text: `
        <p>
          Authorship of Scholastic Articles is a crucial criterion for the EB1-A
          visa application, which is designed for individuals of extraordinary
          ability. This requirement demonstrates that the applicant has made
          significant contributions to their field of expertise through
          published work in reputable academic or professional journals.
        </p>
        <br />
        <p>
          At EB1 Next Level, we assist you in showcasing your scholarly
          achievements by :
        </p>
        <ol class="list-disc list-outside ml-10">
          <li>
            <b>Selecting Key Publications:</b> Identifying works that showcase
            your profound impact on your field. These publications should
            demonstrate your expertise and impact on your area of specialization
          </li>
          <li>
            <b>Documenting Your Role:</b> Detailing your contributions to ensure
            they are clearly articulated and recognized. This includes providing
            evidence of your contributions, such as primary authorship,
            significant co-authorship, or other substantive roles.
          </li>
          <li>
            <b>Maximizing Impact:</b> Advising on strategies to enhance the
            visibility and influence of your work, such as through citations,
            references in other scholarly works, and recognition by professional
            peers.
          </li>
        </ol>
        <br />
        <p>
          Through our comprehensive support, we ensure that your scholarly
          articles effectively demonstrate your extraordinary ability and
          strengthen your EB1-A application. At <b>EB1 Next Level,</b> we are
          committed to highlighting your professional achievements and paving
          the way for your success in obtaining a green card.
        </p>
      `,
  },
  {
    id: 3,
    title: "Original Contributions",
    image: three,
    description:
      "Demonstrate your innovative impact through activities like Book Writing and Patent Filing.",
    text: `
        <p>
          The "Original Contributions" criterion for the EB1-A (Extraordinary
          Ability) visa showcases your groundbreaking contributions, such as
          book writing and patent filing, in your filed of specification.
          Demonstrating original contributions can significantly enhance your
          EB1-A application by showcasing your influence and impact within your
          professional community.
        </p>
        <br />
        <p>
          <u>Book Writing</u>
        </p>
        <br />
        <p>
          Writing and publishing a book, especially in professional context,
          serves as a substantial original contribution to your field. Here's
          how to effectively document book writing for your EB1-A application :
        </p>
        <ol class="list-disc list-outside ml-10">
          <li>
            <b>Published Works:</b> Present references or copies of your books,
            ensuring they are recognized in your field and published by
            reputable entities.
          </li>
          <li>
            <b>Reviews:</b> Include critiques of your published works to
            illustrate the breadth of your influence and recognition within the
            scholarly community.
          </li>
        </ol>
        <br />
        <p>
          <u>Patent Filing</u>
        </p>
        <br />
        <p>
          Securing patents for innovative work is another powerful way to
          demonstrate original contributions. Here’s how to effectively document
          patents for your EB1-A application :
        </p>
        <ol class="list-disc list-outside ml-10">
          <li>
            <b>Patent Documentation:</b> Furnish documentation of your patents,
            complete with comprehensive descriptions of the inventions and their
            applications.
          </li>
          <li>
            <b>Innovation and Impact:</b> Detail the originality and innovative
            aspects of your inventions, explaining their problem-solving
            capabilities, introduction of new methods, or enhancements to
            existing technologies.
          </li>
          <li>
            <b>Usage and Licensing:</b> Outline the commercial utilization and
            licensing of your patents, evidencing their adoption by industry
            leaders and their practical impact.
          </li>
        </ol>
      `,
  },
  // {
  //   id: 4,
  //   title: "Editorial Membership",
  //   image: four,
  //   description:
  //     "We facilitate your inclusion on editorial boards at leading scientific journals, emphasizing your leadership and scholarly influence.",
  //   text: ``,
  // },
  {
    id: 5,
    title: "Press Coverage",
    image: five,
    description:
      "Secure articles in major global news outlets, amplifying your professional stature.",
    text: `
        <p>
          Press articles about your work are an important criterion for the
          EB1-A (Extraordinary Ability) visa. They serve as independent
          validation of your achievements and recognition of your impact in your
          field.
        </p>
        <br />
        <p>Leveraging Press Articles for Your EB1-A Application :</p>
        <ol class="list-disc list-outside ml-10">
          <li>
            <b>Mainstream Media Coverage:</b> Target articles in widely
            recognized newspapers, magazines, or online platforms known for
            their substantial readership
          </li>
          <li>
            <b>Industry-Specific Publications:</b> Focus on obtaining coverage
            in esteemed journals, trade magazines, or websites that cater
            specifically to your field, thereby ensuring that your contributions
            are highlighted within relevant professional circles.
          </li>
        </ol>
      `,
  },
  // {
  //   id: 6,
  //   title: "Awards",
  //   image: six,
  //   description:
  //     "We strategize to help you obtain prestigious awards, confirming your leadership and excellence in your field. Awards like Times of India award, Lokomat Award even awards from the UK and other countries can be provided.",
  //   text: ``,
  // },
];
