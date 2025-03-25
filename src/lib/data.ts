import { StaticImageData } from "next/image";
import icon1 from "../../public/images/icons/Union.svg";
import icon2 from "../../public/images/icons/Subtract.svg";
import icon3 from "../../public/images/icons/Vector.svg";
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
