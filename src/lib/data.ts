import { StaticImageData } from "next/image";
import icon1 from "../../public/images/icons/Union.svg";
import icon2 from "../../public/images/icons/Subtract.svg";
import icon3 from "../../public/images/icons/Vector.svg";
//reasons import (why chooseus)
import icon4 from "../../public/images/chooseus/Group (1).svg";
import icon5 from "../../public/images/chooseus/Icon (9).svg";
import icon6 from "../../public/images/chooseus/Icon (10).svg";
import icon7 from "../../public/images/chooseus/Vector (7).svg";
export type ServiceProps = {
  title: string;
  description: string;
  icon: StaticImageData;
};
export const services: ServiceProps[] = [
  {
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    icon: icon1,
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    icon: icon2,
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    icon: icon3,
  },
];



export const reasons: ServiceProps[] = [
  {
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: icon4,
  },
  {
    title: "Engineering",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    icon: icon5,
  },
  {
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: icon6,
  },
  {
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: icon7,
  },
];
