export interface NavLink {
    name: string;
    link: string;
    submenu?: NavLink[];
  }
  
  export interface NavItem {
    name: string;
    links: NavLink[];
  }
  
  export const topNavItems: NavItem[] = [
    {
        name: "Employee Resources",
        links: [
            { name: "Timesheets", link: "https://yrci-cp.deltekenterprise.com/cpweb/cploginform.htm"},
            { name: "Email", link: "https://outlook.office.com"},
            { name: "IT Support", link: "https://yrcit.freshdesk.com/customer/login"},
        ]
    }
];

  export const navItems: NavItem[] = [
    {
      name: "Who We Are",
      links: [
        { name: "Who We Are", link: "https://yrci.com/who-we-are/" },
        { name: "Our Approach", link: "https://yrci.com/our-approach/" },
        { name: "Leadership", link: "https://yrci.com/leadership/" },
      ],
    },
    {
      name: "What We Do",
      links: [
        {
          name: "Shared Services",
          link: "https://yrci.com/shared-services/",
          submenu: [
            { name: "HRROC", link: "https://yrci.com/shared-services/hrroc/" },
            { name: "ARROC", link: "https://yrci.com/aroc/" },
            { name: "RROC", link: "https://yrci.com/rroc/" },
          ],
        },
        {
          name: "Human Capital Management",
          link: "https://yrci.com/human-capital-management/",
        },
        {
          name: "Strategic Workforce Planning",
          link: "https://yrci.com/strategic-workforce-planning/",
        },
        {
          name: "Acquisition Management Services",
          link: "https://yrci.com/acquisition-management-services/",
        },
        {
          name: "Financial Management",
          link: "https://yrci.com/financial-management-services/",
        },
        { name: "YRCI University", link: "https://yrciu.vercel.app/" },
      ],
    },
    {
      name: "Work With Us",
      links: [
        { name: "Contact Us", link: "https://yrci.com/contact-us/" },
        { name: "Partner With Us", link: "https://yrci.com/partner-with-us/" },
        {
          name: "Contract Vehicles",
          link: "https://yrci.com/contract-vehicles-2/",
          submenu: [{ name: "HCATS", link: "https://yrci.com/hcats/" }],
        },
      ],
    },
    {
      name: "Careers",
      links: [
        { name: "We Are YRCI", link: "https://yrci.com/careers/" },
        {
          name: "Job Search",
          link: "https://yrci.hua.hrsmart.com/hr/ats/JobSearch/index",
        },
      ],
    },
  ];
  