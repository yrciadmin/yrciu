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
        { name: "News & Press Releases", link: "https://yrci.com/news/" },
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
  
  export interface TermConditionProps {
    term: string;
    detail: string;
    bullets?: string[];
  }

  export const termsAndConditions: TermConditionProps[] = [
    {
      term: "1. Acceptance of Terms",
      detail: "By purchasing and/or using any courses or materials from YRCI, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, you should not access or use YRCI University's e-commerce website."
    },
    {
      term: "2. Use of Platform",
      detail: "YRCI University provides a platform for learners to purchase and access online learning courses and materials. This platform is intended for your personal and non-commercial use only, and specifically prohibits the use of the platform on your behalf by any third party. YRCI reserves the right to terminate your access if you are found to be in violation of these terms."
    },
    {
      term: "3. User Conduct",
      detail: "Users of YRCI University's platform are expected to:",
      bullets: [
        "Respect the intellectual property rights of YRCI and its content creators.",
        "Not upload, share, or otherwise distribute content that is not related to the training subjects provided by YRCI.",
        "Not reproduce, duplicate, copy, sell, resell, or exploit any portion of the YRCI training materials, use of the training materials, or access to the training materials without express written permission from YRCI.",
        "Not engage in any activity that interferes with or disrupts the learning experience of other users."
      ]
    },
    {
      term: "4. Intellectual Property",
      detail: "All materials, including but not limited to courses, content, text, graphics, logos, and software, are the property of YRCI or its content suppliers and are protected by United States and international intellectual property laws. Unauthorized use may result in civil and criminal penalties."
    },
    {
      term: "5. Refund Policy",
      detail: "YRCI University provides a detailed description of each course before purchase. We encourage learners to review these descriptions thoroughly to ensure the course meets their needs. Refunds may be available under certain conditions, as outlined in our Refund Policy available on our website."
    },
    {
      term: "6. Cancellation Policy",
      detail: "Cancellations and Transfers for Open Enrollment Classes.",
      bullets: [
        "Student substitutions are permitted at any time up to the start of a class.",
        "Fourteen (14) days or more prior to the start of the class – No charges will be incurred for cancelling or transferring class registration.",
        "Thirteen (13) days or fewer prior to the start of the class – The full tuition is due. There is no credit available to transfer or refund. If rescheduling, an additional payment in the amount of the new registration will also be due."
      ]
    },
    {
      term: "Student No Show for Open Enrollment Classes",
      detail: "If a student fails to attend class, the full tuition is due and there is no credit available to transfer or refund."
    },
    {
      term: "Refunds and Credits for Open Enrollment Classes",
      detail: "Refunds are made upon request only for registrations cancelled fourteen (14) calendar days or more prior to the class start date. Credits granted can be used for any future class."
    },
    {
      term: "7. Limitation of Liability",
      detail: "YRCI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the platform; (ii) any conduct or content of any third party on the platform; (iii) any content obtained from the platform; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not YRCI has been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed its essential purpose."
    },
    {
      term: "8. Force Majeure",
      detail: "YRCI shall not be liable for any failure to perform its obligations hereunder where such failure results from any cause beyond YRCI's reasonable control, including, but not limited to, mechanical, electronic, or communications failure or degradation (including \"line-noise\" interference). These causes may include, but are not limited to, acts of God, natural disasters, terrorism, strikes or other labor disturbances, war, riot, or governmental actions."
    },
    {
      term: "9. Privacy",
      detail: "Your privacy is important to us. YRCI's Privacy Policy explains how we collect, use, and protect your personal information. By using our e-commerce website, you agree to the collection and use of your information in accordance with this policy."
    },
    {
      term: "10. Amendments to Terms and Conditions",
      detail: "YRCI reserves the right to amend these terms and conditions at any time. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms."
    },
    {
      term: "11. Governing Law",
      detail: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of Virginia, United States of America in which YRCI University operates, without giving effect to any principles of conflicts of law."
    },
    {
      term: "12. Contact Us",
      detail: "If you have any questions about these terms and conditions, please contact us at [Contact Information]. By using YRCI University's e-commerce website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions."
    }
  ];
  