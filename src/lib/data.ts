import { StaticImageData } from "next/image";
import icon1 from "../../public/images/icons/Union.svg";
import icon2 from "../../public/images/icons/Subtract.svg";
import icon3 from "../../public/images/icons/Vector.svg";
//reasons import (why chooseus)
import icon4 from "../../public/images/chooseus/Group (1).svg";
import icon5 from "../../public/images/chooseus/Icon (9).svg";
import icon6 from "../../public/images/chooseus/Icon (10).svg";
import icon7 from "../../public/images/chooseus/Vector (7).svg";

import profile1 from "../../public/images/profiles/profile1.svg";
import profile2 from "../../public/images/profiles/profile2.svg";
import profile3 from "../../public/images/profiles/profile3.svg";
import profile4 from "../../public/images/profiles/profile4.svg";
import profile5 from "../../public/images/profiles/profile5.svg";
import profile6 from "../../public/images/profiles/profile6.svg";

export type ServiceProps = {
  title: string;
  description: string;
  icon: StaticImageData;
};

export type TestimonialProps = {
  name: string;
  position: string;
  profile: string;
  testimonial: string;
  highlight: string;
  websiteUrl: string;
};

export const testimonals: TestimonialProps[] = [{
  name:"John Smith",
  position:"CEO of Chic Boutique",
  profile:profile1,
  testimonial:"Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
  highlight:"SquareUp has been Instrumental in Transforming our Online Presence. ",
  websiteUrl:""
},{
  name:"Sarah Johnson",
  position:"Founder of HungryBites.",
  profile:profile2,
  testimonial:"They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
  highlight:"Working with SquareUp was a breeze.",
  websiteUrl:""
},{
  name:"Mark Thompson",
  position:"CEO of EventMasters",
  profile:profile3,
  testimonial:"Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
  highlight:"SquareUp developed a comprehensive booking and reservation system for our event management company.",
  websiteUrl:""
},{
  name:"Laura Adams",
  position:"COO of ProTech Solutions.",
  profile:profile4,
  testimonial:"They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
  highlight:"ProTech Solutions turned to SquareUp to automate our workflow",
  websiteUrl:""
},
{
  name:"Michael Anderson",
  position:"Founder of Dream Homes Realty.",
  profile:profile5,
  testimonial:"The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
  highlight:"SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
  websiteUrl:""
},{
  name:"Emily Turner",
  position:"CEO of FitLife Tracker",
  profile:profile6,
  testimonial:"SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
  highlight:"FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
  websiteUrl:""
},
];

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
