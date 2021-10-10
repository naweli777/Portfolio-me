/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Naweli.V",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Naweli.V",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Naweli Verma",
  logo_name: "Naweli.V",
  nickname: "nimo",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1RsCWirxRzGXLIx33dBt7s0QDQYcrar_m/view?usp=sharing",
  portfolio_repository: "https://github.com/naweli777",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/naweli777",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/naweli-verma-2a0374176/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCodbtrw6EYY8hilHt0eM-KQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:naweliverma7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Dribble",
    link: "https://dribbble.com/naweli_verma7",
    fontAwesomeIcon: "fas fa-basketball-ball", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Quora",
    link: "https://www.quora.com/profile/Naweli-Verma-1",
    fontAwesomeIcon: "fab fa-quora", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#b92b27", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing responsive web apps",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/naweliverma31",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/verma_naweli7",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA500",
      },
      profileLink: "https://leetcode.com/naweliverma31",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#009900",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/naweliverma7/profile",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rajiv Gandhi Proudhougik Vishwavidyalaya",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "rgpvlogo.png",
      alt_name: "RGPV Bhopal",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
        "⚡ I have done hackathons and worked on live projects",
      ],
      website_link: "https://www.rgpv.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am working as a full-time SDE-1 with an edTech startup.I have worked with an evolving startups as Frontend Developer, Designer and Software Architect. I have also worked with on some group live projects. I love organising events and that is why I am also involved with many local developer communities like Google developer Group - Bhopal and #techByHer a intiative by Facebook Developer Circle.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "FullStack Engineer",
          company: "PropertyLoop",
          company_url: "https://launch.propertyloop.co.uk/",
          logo_path: "propertyloop.svg",
          duration: "Sep 2021 - PRESENT",
          description:
            "I am working as a FullStack Engineer.The product involves development of a first letting platoform.",
          color: "#0879bf",
        },
        {
          title: "Software Developer Engineer (SDE1)",
          company: "Stride Ahead",
          company_url: "https://strideahead.in/",
          logo_path: "StrideAheadLogo.png",
          duration: "Aug 2021 - Sep 2021",
          description:
            "I am working as a Software Developer Engineer. The product involves development of a platoform for education, mentorship, counselling and etc. ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Developer Intern",
          company: "Apna Insure",
          company_url: "https://www.apnainsure.com/",
          logo_path: "apnainsure.png",
          duration: "Sept 2019 - Sept 2020",
          location: "Bhopal, Madhya Pradesh",
          description:
            "I worked as a frontend developer, I worked on technologies such as React.js, Node.Js, MongoDB",
          color: "#ee3c26",
        },
        {
          title: "UI-UX Designer",
          company: "Apna Insure",
          company_url: "https://www.apnainsure.com/",
          logo_path: "apnainsure.png",
          duration: "Sept 2019 - Sept 2020",
          location: "Sept 2019 - Sept 2020",
          description:
            "This is financial Solution Company. I have made the wireframes, flows of the product. I designed the logo and other graphics",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Group- Core",
          company: "Google Developer Group",
          company_url: "https://developers.google.com/community/gdg",
          logo_path: "google_logo.png",
          duration: "March 2019 - Present",
          location: "Bhopal, Madhya Pradesh",
          description:
            "Explored various new technologies, conducted many events, worked on various projects.",
          color: "#4285F4",
        },
        {
          title: "Co-Organizer at #TechByHer",
          company: "Facebook Developer Circle",
          company_url: "https://developers.facebook.com/developercircles/",
          logo_path: "facebookdevc.png",
          duration: "March 2020 - Present",
          location: "Bhopal, Madhya Pradesh",
          description:
            "A intiative by Facebook to push and support women in technology",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Frontend,Backend, React, Web developemnt, Web Designing etc",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.quora.com/profile/Naweli-Verma-1",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Laheriasarai, Balbhadrapur, Darbhanga",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 xxxxxxxx",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
