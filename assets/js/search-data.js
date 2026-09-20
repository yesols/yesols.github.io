// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Research projects and resources.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications and preprints in statistical modeling, bioinformatics, and population health.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses and workshops taught at the University of Idaho and Cedars-Sinai Medical Center, spanning research methods, data science, and clinical nursing education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae — education, research, teaching, and publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-attended-the-summer-omics-nursing-institute-at-the-nih-a-week-long-program-on-applying-molecular-omics-methods-to-symptom-science-research-what-an-incredible-event-where-like-minded-nurses-came-together-and-learned-it-was-also-amazing-connecting-with-cedars-sinai-colleagues-more-on-linkedin",
          title: 'Attended the Summer Omics Nursing Institute at the NIH — a week-long program...',
          description: "",
          section: "News",},{id: "news-the-university-of-idaho-s-direct-entry-master-of-science-in-nursing-program-is-now-accepting-applications-through-nursingcas-i-am-excited-to-be-part-of-the-growing-list-of-health-professions-programs-in-the-school-of-health-and-medical-professions",
          title: 'The University of Idaho’s Direct-Entry Master of Science in Nursing Program is now...',
          description: "",
          section: "News",},{id: "projects-getting-started-with-all-of-us-projects",
          title: 'Getting Started with All of Us Projects',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/all-of-us/";
            },},{id: "projects-medications-for-opioid-use-disorders-toolkit",
          title: 'Medications for Opioid Use Disorders Toolkit',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/moud/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yesols", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yesol-s", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6025-6217", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xQ-s2DEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
