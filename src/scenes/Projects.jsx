import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const images = [
  { src: "project-1.jpeg", description: "Landing page", alt: "Landing page" },
  { src: "project-2.jpeg", description: "Blog", alt: "Blog" },
  { src: "project-3.jpeg", description: "Funny Flakes", alt: "funny flakes" },
  {
    src: "project-4.jpeg",
    description: "Minimalist design",
    alt: "minimalist",
  },
  { src: "project-5.jpeg", description: "Restaurant", alt: "Restaurant" },
  {
    src: "project-6.jpeg",
    description: "Live Concert Booking app",
    alt: "Booking app",
  },
  {
    src: "project-7.jpeg",
    description: "React Admin Dashboard",
    alt: "React Admin Dashboard",
  },
  {
    src: "project-8.png",
    description: "Gericht Restaurant",
    alt: "restaurant",
  },
  {
    src: "project-9.jpg",
    description: "Kito neon website for gamers",
    alt: "Kito",
  },
  {
    src: "project-10.jpg",
    description: "Bell Alliant website",
    alt: "bell-aliant",
  },
  { src: "project-11.jpg", description: "Nostal", alt: "Nostal" },
  { src: "project-12.jpg", description: "Awashop", alt: "Awashop" },
  { src: "project-13.jpg", description: "Form", alt: "Form" },
  { src: "project-14.jpg", description: "News Website", alt: "News Website" },
  {
    src: "project-15.jpg",
    description: "Seat Assignment Algorithm ",
    alt: "SAAF",
  },
  {
    src: "project-16.jpg",
    description: "Multi Joint Replenishment Website",
    alt: "MJRP",
  },
];

const [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
] = images;


const Project = ({ title, desc, alt, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {desc}.
        </p>
      </div>
      <img src={require(`../assets/${src}`)} alt={alt} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some of the projects I have done so far.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            desc={image1.description}
            src={image1.src}
          />
          <Project
            title="Project 2"
            desc={image2.description}
            src={image2.src}
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            desc={image3.description}
            src={image3.src}
          />
          <Project
            title="Project 4"
            desc={image4.description}
            src={image4.src}
          />
          <Project
            title="Project 5"
            desc={image5.description}
            src={image5.src}
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            desc={image6.description}
            src={image6.src}
          />
          <Project
            title="Project 7"
            desc={image7.description}
            src={image7.src}
          />
          <Project
            title="Project 8"
            desc={image8.description}
            src={image8.src}
          />

          {/* ROW 4 */}
          <Project
            title="Project 9"
            desc={image9.description}
            src={image9.src}
          />
          <Project
            title="Project 10"
            desc={image10.description}
            src={image10.src}
          />
          <Project
            title="Project 11"
            desc={image11.description}
            src={image11.src}
          />

          {/* ROW 5 */}
          <Project
            title="Project 12"
            desc={image12.description}
            src={image12.src}
          />
          <Project
            title="Project 13"
            desc={image13.description}
            src={image13.src}
          />
          <Project
            title="Project 14"
            desc={image14.description}
            src={image14.src}
          />

          {/* ROW 6*/}
          <Project
            title="Project 15"
            desc={image15.description}
            src={image15.src}
          />
          <Project
            title="Project 16"
            desc={image16.description}
            src={image16.src}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
