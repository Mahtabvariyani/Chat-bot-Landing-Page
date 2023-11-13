import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { TbDragDrop } from "react-icons/tb";

export const footerLink = [
  {
    linkName: "Contact Us",
    linkHref: "tel:+ +45-39391860",
    icon: FiPhoneCall,
  },
  {
    linkName: "WhatsApp",
    linkHref:
      "https://api.whatsapp.com/send/?phone=4529811860&text&type=phone_number&app_absent=0",
    icon: FaWhatsapp,
  },
];

export const otherlinks =[
  {
    linkName: "GDPR",
    linkHref: "https://fendous.dk/gdpr",
  },{
    linkName: "Terms & Conditions",
    linkHref: "https://fendous.dk/terms",
  },{
    linkName: "Privacy Policy",
    linkHref: "https://fendous.dk/privacy-policy",
  }
]

export const navigation = [
  {
    name: "Product",
    href: "/",
  },
  {
    name: "Solutions",
    href: "/sloutions",
  },
  {
    name: "Pricing",
    href: "/",
  },
];

export const articles = [
  {
    title: "Revolutionize Project Management",
    excerpt:
      "Fendous AI Chatbot seamlessly integrates with your project management software, becoming an indispensable partner in task delegation, progress tracking, and risk mitigation. Automate routine tasks, receive real-time status updates, and identify potential roadblocks early on – all with the assistance of your AI-powered PM companion.",

    img: "/articleOne.png",
  },
  {
    title: "Enhance Customer Relationship Management",
    excerpt:
      "Elevate your CRM strategy with Fendous AI Chatbot, transforming interactions into personalized and engaging experiences. Handle customer inquiries promptly, provide product recommendations tailored to individual needs, and nurture customer loyalty through proactive support – all while your human agents focus on high-value interactions.",
    img: "/articleOne.png",
  },
];

export const paragraphs = [
  {
    text: "Your virtual assistant is always on call, providing round-the-clock support for your customers and project teams.",
  },
  {
    text: "Reduce operational costs by automating routine tasks and minimizing the need for additional customer support staff.",
  },
  {
    text: "Empower your teams to focus on strategic initiatives while the chatbot handles administrative tasks.",
  },
  {
    text: "Provide prompt, personalized support that fosters customer loyalty and drives positive word-of-mouth.",
  },
];

export const includedFeatures = [
  "24/7 Availability",
  "Cost Savings",
  "Increased Productivity",
  "Enhanced Customer Satisfaction",
];

export const socialMedialinks = [
  {
    href: "https://www.instagram.com/fendous_sustainable_solutions/",
    icon: FaInstagram,
    name:'Instgram'
  },
  {
     href: "https://fendous.dk/", 
  name:'Other Website',
  icon: CgWebsite },
  {
    href: "https://www.linkedin.com/company/fendous-com/about/?viewAsMember=true",
    icon: FaLinkedin,
    name:'LinkedIn',
  },
  {
    href: "https://www.youtube.com/@fendoussustainablesolutions/featured",
    icon: FaYoutube,
    name:'Youtube'
  },
];

export const Sloutionposts = [
  {
    id: 1,
    title: "Automate tasks and workflows:",
    href: "#",
    description:
      "Fendus AI Chatbot can automate a variety of tasks, such as creating new projects, assigning tasks, and sending notifications. This can free up your team to focus on more important tasks.",

    category: { title: "Marketing", href: "#" },
  },
  {
    id: 2,
    title: "Improve communication and collaboration:",
    href: "#",
    description:
      "Fendus AI Chatbot can help to improve communication and collaboration between team members by providing a central place for everyone to share information and updates.",
  },
  {
    id: 3,
    title: "Gain real-time insights:",
    href: "#",
    description:
      "Fendus AI Chatbot provides real-time insights into your projects and CRM data. This information can help you to identify potential problems early on and make necessary adjustments.",
  },
];

export const SloutionHelps = [
  {
    span: "Project planning:",
    strong:
      "Fendus AI Chatbot can help you to create and manage project plans, including tasks, milestones, and deadlines.",
  },
  {
    span: "Task management:",
    strong:
      "Fendus AI Chatbot can help you to assign tasks to team members, track progress, and send notifications.",
  },
  {
    span: "Resource management:",
    strong:
      "Fendus AI Chatbot can help you to manage resources such as people, equipment, and budget.",
  },
  {
    span: "Risk management:",
    strong:
      "Fendus AI Chatbot can help you to identify and assess risks, and develop mitigation plans.",
  },
  {
    span: "Communication management:",
    strong:
      "Fendus AI Chatbot can help you to improve communication and collaboration between team members.",
  },
];

export const SecondSloutionHelps = [
  {
    span: "Lead management:",
    strong:
      "Fendus AI Chatbot can help you to track leads, qualify them, and assign them to sales representatives.",
  },
  {
    span: "Opportunity management:",
    strong:
      "Fendus AI Chatbot can help you to track opportunities, nurture them, and close deals.",
  },
  {
    span: "Customer service:",
    strong:
      "Fendus AI Chatbot can help you to provide customer support, track customer tickets, and resolve issues.",
  },
];

export const ThirdSloutionHelps = [
  {
    span: "A project manager can use Fendus AI Chatbot to create a new project, assign tasks to team members, and set deadlines",
    strong:
      "Fendus AI Chatbot will then send notifications to team members when tasks are due and track their progress.",
  },
  {
    span: "A sales representative can use Fendus AI Chatbot to qualify leads and assign them to sales managers.",
    strong:
      "Fendus AI Chatbot can also track the status of leads and opportunities, and send notifications to sales representatives when leads are ready to be contacted.",
  },
  {
    span: "A customer service representative can use Fendus AI Chatbot to answer customer questions, track customer tickets, and resolve issues.",
    strong:
      "Fendus AI Chatbot can also learn from customer interactions and provide more accurate and helpful responses over time.",
  },
];
