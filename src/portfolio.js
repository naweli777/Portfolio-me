/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Naweli.V",
  description:
    "A passionate individual who always thrives to work on end to end products. I believe in building product which create impacts.",
  og: {
    title: "Naweli.V",
    type: "website",
    url: "https://naweli777.github.io/masterportfolio/#/home",
  },
};

//Home Page
const greeting = {
  title: "Naweli Verma",
  logo_name: "Naweli.V",
  nickname: "Ping me for freelancing",
  subTitle:
    "A passionate individual who always thrives to work on end to end products. I believe in building product which create impacts.",

  resumeLink: "",
  portfolio_repository: "https://github.com/naweli777",
};

const socialMediaLinks = [
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
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UCodbtrw6EYY8hilHt0eM-KQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  // {
  //   name: "Gmail",
  //   link: "mailto:naweliverma31@gmail.com",
  //   fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
  {
    name: "Dribble",
    link: "https://dribbble.com/naweli_verma7",
    fontAwesomeIcon: "fas fa-basketball-ball", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Quora",
  //   link: "https://www.quora.com/profile/Naweli-Verma-1",
  //   fontAwesomeIcon: "fab fa-quora", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#b92b27", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Behance",
    link: "https://www.behance.net/naweliverma",
    fontAwesomeIcon: "fab fa-behance", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#053eff", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Dev",
    link: "https://dev.to/naweli_verma",
    fontAwesomeIcon: "fab fa-dev", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Dev",
    link: "https://twitter.com/naweli_verma",
    fontAwesomeIcon: "fab fa-twitter", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#26a7de", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive products frontend using ReactJs-Redux",
        "⚡ Testing the edge cases of it.",
        "⚡ Creating application backend in Node, Express & Kotlin",
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
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758f",
          },
        },
        {
          skillName: "React-query",
          fontAwesomeClassname: "simple-icons:React-Query",
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
      profileLink: "https://www.hackerrank.com/naweliverma7",
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
    // {
    //   siteName: "GeeksForGeeks",
    //   iconifyClassname: "simple-icons:geeksforgeeks",
    //   style: {
    //     color: "#009900",
    //   },
    //   profileLink: "https://auth.geeksforgeeks.org/user/naweliverma7/profile",
    // },
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
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
        "⚡ I have partcipated in hackathons like Smart India Hackathon and worked on live projects",
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
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
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
    "I am a Software Engineer, I have worked with great startups as a designer and developer in the field of Real-state, edTech, Fintech. I am also a community person and I am vey much into local developer and enterpreunerial community.  ",
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
          // duration: "Sep 2021 - PRESENT",
          description:
            "I worked here as a FullStack Engineer.The product involves development of a first letting platform without the agent and broker in UK",
          color: "#0879bf",
        },
        {
          title: "Software Developer Engineer (SDE1)",
          company: "Stride Ahead",
          company_url: "https://strideahead.in/",
          logo_path: "StrideAheadLogo.png",
          // duration: "Aug 2021 - Sep 2021",
          description:
            "I worked here as a Software Developer Engineer. The product involves development of a platform for education, mentorship, counselling and etc. ",
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
          // duration: "Sept 2019 - Sept 2020",
          // location: "Bhopal, Madhya Pradesh",
          description:
            "I worked as a frontend developer, I worked on technologies such as React.js, Node.Js, MongoDB",
          color: "#ee3c26",
        },
        {
          title: "UI-UX Designer",
          company: "Apna Insure",
          company_url: "https://www.apnainsure.com/",
          logo_path: "apnainsure.png",
          // duration: "Sept 2019 - Sept 2020",
          // location: "Sept 2019 - Sept 2020",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications ReactJs, Pure JavaScript and deploy using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vector.png",
    description:
      "Need any help in your product, whether it is about any type of designing, developing, content-writing, promoting. You can count on me!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://dev.to/naweli_verma/revise-and-read-reactjs-with-me-5523",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Thank you",
    subtitle: "I am open for freelancing",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:naweliverma31@gmail.com",
  },
  phoneSection: {
    title: "Happy Growing",
    subtitle: "Create impact for better",
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
