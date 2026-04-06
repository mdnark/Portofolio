export const listProjects = [
  // {
  //   src: '/assets/project/bri.png',
  //   title: 'W-Bench',
  //   desc: 'Enterprise Data Monitoring & Management System.',
  //   role: ['UI/UX Design'],
  //   tools: ['Figma'],
  //   slug: 'w-bench',
  // },
  // W-Bench
  {
    project: {
      name: 'W-Bench',
      role: ['UI/UX Design'],
      period: 'Feb 2026 - Mar 2026',
      src: '/assets/project/bri.png',
      repository: null,
      techStack: ['Figma'],
      slug: 'w-bench',
    },
    overview: {
      description:
        'GNA Cluster is a web-based management system designed to handle customer data and support the property sales process within a housing cluster environment.\n\nThe system enables admins and sales teams to manage customer leads, assign tickets, and track the entire sales journey—from initial inquiry to final transaction (akad). The goal was to streamline lead management and improve coordination between admin and sales teams.',
    },
    problemStatement: [
      'Customer data and sales processes were not well-structured, leading to inefficiencies in managing leads',
      'Difficulty in tracking the progress of each customer throughout the sales journey',
      'Lack of a centralized system to coordinate between admin, sales manager, and sales teams',
      'Manual follow-up processes increased the risk of missed opportunities and inconsistent communication',
      'Limited visibility into sales pipeline stages (price list, visit, booking, etc.)',
    ],
    solution: [
      'Designed a centralized customer and sales management system',
      'Implemented a ticket-based lead system, where admin or sales manager can create and assign customer data',
      'Built a structured sales pipeline workflow, including (Customer data input → Ticket assignment to sales → Price list sharing → Visit planning → Customer visit → Booking fee process → Final transaction (akad))',
      'Created clear tracking for each stage of the sales process',
      'Improved coordination between roles (admin, sales manager, sales) through structured workflows',
      'Designed a system that ensures consistent follow-up and reduces missed leads',
    ],
    uiDesign: {
      designSystem: {
        primaryColor:
          'Amber Yellow (#FAB702) (represents energy, attention, and business-driven actions)',
        secondaryColor: null,
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Ticket creation form for customer data',
        'Sales pipeline visualization (multi-stage tracking)',
        'Status indicators for each stage (price list → visit → booking → akad)',
        'Dashboard for monitoring leads and sales progress',
        'Clean table layout for managing customer and ticket data',
        'Role-based UI for admin and sales',
      ],
    },
    frontEndImplementation: {
      keyFeatures: {
        authentication: [
          'User login & registration',
          'Form validation and error handling',
          'User session management',
        ],
        leadOrTicketManagement: [
          'Create and manage customer tickets',
          'Assign tickets to sales automatically or manually',
          'Track ticket status across the sales pipeline',
        ],
        salesWorkflowManagement: [
          'Structured flow from initial contact to final transaction',
          'Clear task responsibilities for each role',
          'Improved follow-up tracking for sales',
        ],
        pipelineTracking: [
          'Visual tracking of customer journey stages',
          'Easy monitoring of sales progress',
          'Organized data for better decision-making',
        ],
        dataManagement: [
          'Customer data management',
          'Filtering and searching leads',
          'Efficient handling of large datasets',
        ],
      },
    },
    challengesAndSolutions: {
      challenges: [
        'Designing a system that supports multiple roles (admin, sales manager, sales)',
        'Structuring a complex sales process into a clear and trackable workflow',
        'Ensuring data consistency across different pipeline stages',
        'Managing server state and data updates across multiple modules',
      ],
      solutions: [
        'Created a structured ticket-based system to unify data flow',
        'Simplified sales stages into clear and manageable steps',
        'Implemented SWR / React Query for efficient data handling and updates',
        'Built reusable components for tables, forms, and status tracking',
        'Organized front-end architecture for scalability and maintainability',
      ],
    },
    learnings: [
      'Gained experience in building CRM-like systems and sales pipelines',
      'Improved understanding of multi-role system design and workflows',
      'Learned how to structure end-to-end sales processes into digital systems',
      'Strengthened skills in handling data-heavy applications and user flows',
      'Developed better practices in state management and scalable architecture',
    ],
    resultImpact: [
      'Improved efficiency in managing customer leads and sales processes',
      'Reduced risk of missed follow-ups through structured tracking',
      'Increased visibility of sales pipeline for better monitoring and decision-making',
      'Enhanced coordination between admin, sales manager, and sales teams',
      'Delivered a scalable system to support ongoing business growth',
    ],
  },
  // Worksheet
  {
    project: {
      name: 'Worksheet',
      role: ['UI/UX Design', 'Frontend Dev'],
      period: 'Feb 2026 - Mar 2026',
      src: '/assets/project/worksheet.png',
      repository: 'https://github.com/WorkSheet-Application/worksheet-fe',
      techStack: [
        'Figma',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Ant Design',
        'React Context API',
        'SWR',
      ],
      slug: 'worksheet',
    },
    overview: {
      description:
        'Worksheet System is a web-based ticketing and maintenance monitoring application designed to facilitate communication between the NOC (Network Operation Center) and field technicians.\n\nThe system enables teams to manage, track, and resolve issue reports related to TOB/TOM devices, including damage reports submitted by drivers or customers. It also provides supporting data such as fleet (armada) and installation information to streamline maintenance operations.',
    },
    problemStatement: [
      'Existing system relied on AppSheet, resulting in recurring monthly costs',
      'Limited flexibility in customizing features and workflows based on operational needs',
      'Inefficient communication between NOC and technicians in handling issue reports',
      'Difficulty in tracking ticket progress and monitoring maintenance activities',
      'Lack of centralized system to manage ticket data, fleet information, and installation details',
    ],
    solution: [
      'Designed a custom web-based ticketing system to replace AppSheet and eliminate recurring costs',
      'Recreated and improved existing workflows into a more structured and scalable system',
      'Built a ticket management system for reporting, tracking, and resolving issues',
      'Enabled better communication flow between NOC and technicians through centralized data',
      'Integrated supporting data such as Armada (fleet data) & Installation data',
      'Designed a system that maintains familiarity with the previous AppSheet workflow while improving usability and efficiency',
    ],
    uiDesign: {
      designSystem: {
        primaryColor:
          'Deep Navy Blue (represents professionalism, reliability, and focus in operational systems)',
        secondaryColor:
          'Bright Blue (represents interaction, clarity, and active user engagement)',
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Ticket list with status tracking (open, in progress, resolved)',
        'Structured ticket detail view for issue handling',
        'Filtering and search for efficient ticket management',
        'Data integration view (armada & installation)',
        'Clean and functional UI for fast operational usage',
        'Consistent layout to support daily monitoring tasks',
      ],
    },
    frontEndImplementation: {
      keyFeatures: {
        authentication: [
          'User login & registration',
          'Form validation and error handling',
          'User session management',
        ],
        ticketManagementSystem: [
          'Create, update, and track issue tickets',
          'Ticket status tracking (open, in progress, resolved, closed)',
          'Detailed ticket view for issue handling and updates',
        ],
        maintenanceMonitoring: [
          'Track maintenance progress for TOB/TOM devices',
          'Monitor issue resolution workflow from report to completion',
          'Structured flow for NOC and technician coordination',
        ],
        nOCAndTechnicianWorkflow: [
          'Centralized communication through ticket system',
          'Clear role-based interaction for issue handling',
          'Improved coordination between teams',
        ],
        dataManagement: [
          'Armada (fleet data) integration',
          'Installation data tracking',
          'Organized data structure for operational usage',
        ],
        filteringAndSearch: [
          'Advanced filtering for ticket status and data',
          'Faster access to relevant information',
          'Efficient handling of large ticket datasets',
        ],
      },
    },
    challengesAndSolutions: {
      challenges: [
        'Replacing an existing system (AppSheet) while maintaining familiar workflows',
        'Designing a system that supports operational efficiency for multiple roles (NOC & technicians)',
        'Structuring ticket data and maintenance information in a clear and usable format',
        'Balancing between improving UX and keeping the system easy to adapt for existing users',
      ],
      solutions: [
        'Analyzed existing AppSheet workflows and translated them into a more structured UI/UX design',
        'Maintained familiar interaction patterns to reduce user adaptation time',
        'Simplified ticket flows into clear and trackable stages',
        'Designed modular layouts to organize ticket data, fleet, and installation information',
        'Focused on usability and efficiency for daily operational tasks',
      ],
    },
    learnings: [
      'Gained experience in redesigning and improving existing systems',
      'Learned how to balance familiarity vs innovation in UX design',
      'Improved ability to design operational systems for real-world workflows',
      'Strengthened skills in structuring ticketing and monitoring systems',
      'Developed deeper understanding of user behavior in operational environments (NOC & technicians)',
    ],
    resultImpact: [
      'Eliminated dependency on third-party platforms, reducing recurring operational costs',
      'Improved efficiency in ticket management and maintenance monitoring',
      'Enhanced communication flow between NOC and technicians',
      'Simplified issue tracking with a more structured and centralized system',
      'Provided a scalable foundation for future system development and customization',
    ],
  },
  // {
  //   src: '/assets/project/motionbank.png',
  //   title: 'MotionBank',
  //   desc: 'Reward points redemption mobile app.',
  //   role: ['UI/UX Design'],
  //   tools: ['Figma'],
  //   slug: 'motionbank',
  // },
  // GNA Cluster
  {
    project: {
      name: 'GNA Cluster',
      role: ['UI/UX Design', 'Frontend Dev'],
      period: 'Feb 2026 - Mar 2026',
      src: '/assets/project/gna.png',
      repository: null,
      techStack: [
        'Figma',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Ant Design',
        'SWR',
      ],
      slug: 'gna-cluster',
    },
    overview: {
      description:
        'GNA Cluster is a web-based management system designed to handle customer data and support the property sales process within a housing cluster environment.\n\nThe system enables admins and sales teams to manage customer leads, assign tickets, and track the entire sales journey—from initial inquiry to final transaction (akad). The goal was to streamline lead management and improve coordination between admin and sales teams.',
    },
    problemStatement: [
      'Customer data and sales processes were not well-structured, leading to inefficiencies in managing leads',
      'Difficulty in tracking the progress of each customer throughout the sales journey',
      'Lack of a centralized system to coordinate between admin, sales manager, and sales teams',
      'Manual follow-up processes increased the risk of missed opportunities and inconsistent communication',
      'Limited visibility into sales pipeline stages (price list, visit, booking, etc.)',
    ],
    solution: [
      'Designed a centralized customer and sales management system',
      'Implemented a ticket-based lead system, where admin or sales manager can create and assign customer data',
      'Built a structured sales pipeline workflow, including (Customer data input → Ticket assignment to sales → Price list sharing → Visit planning → Customer visit → Booking fee process → Final transaction (akad))',
      'Created clear tracking for each stage of the sales process',
      'Improved coordination between roles (admin, sales manager, sales) through structured workflows',
      'Designed a system that ensures consistent follow-up and reduces missed leads',
    ],
    uiDesign: {
      designSystem: {
        primaryColor:
          'Amber Yellow (#FAB702) (represents energy, attention, and business-driven actions)',
        secondaryColor: null,
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Ticket creation form for customer data',
        'Sales pipeline visualization (multi-stage tracking)',
        'Status indicators for each stage (price list → visit → booking → akad)',
        'Dashboard for monitoring leads and sales progress',
        'Clean table layout for managing customer and ticket data',
        'Role-based UI for admin and sales',
      ],
    },
    frontEndImplementation: {
      keyFeatures: {
        authentication: [
          'User login & registration',
          'Form validation and error handling',
          'User session management',
        ],
        leadOrTicketManagement: [
          'Create and manage customer tickets',
          'Assign tickets to sales automatically or manually',
          'Track ticket status across the sales pipeline',
        ],
        salesWorkflowManagement: [
          'Structured flow from initial contact to final transaction',
          'Clear task responsibilities for each role',
          'Improved follow-up tracking for sales',
        ],
        pipelineTracking: [
          'Visual tracking of customer journey stages',
          'Easy monitoring of sales progress',
          'Organized data for better decision-making',
        ],
        dataManagement: [
          'Customer data management',
          'Filtering and searching leads',
          'Efficient handling of large datasets',
        ],
      },
    },
    challengesAndSolutions: {
      challenges: [
        'Designing a system that supports multiple roles (admin, sales manager, sales)',
        'Structuring a complex sales process into a clear and trackable workflow',
        'Ensuring data consistency across different pipeline stages',
        'Managing server state and data updates across multiple modules',
      ],
      solutions: [
        'Created a structured ticket-based system to unify data flow',
        'Simplified sales stages into clear and manageable steps',
        'Implemented SWR / React Query for efficient data handling and updates',
        'Built reusable components for tables, forms, and status tracking',
        'Organized front-end architecture for scalability and maintainability',
      ],
    },
    learnings: [
      'Gained experience in building CRM-like systems and sales pipelines',
      'Improved understanding of multi-role system design and workflows',
      'Learned how to structure end-to-end sales processes into digital systems',
      'Strengthened skills in handling data-heavy applications and user flows',
      'Developed better practices in state management and scalable architecture',
    ],
    resultImpact: [
      'Improved efficiency in managing customer leads and sales processes',
      'Reduced risk of missed follow-ups through structured tracking',
      'Increased visibility of sales pipeline for better monitoring and decision-making',
      'Enhanced coordination between admin, sales manager, and sales teams',
      'Delivered a scalable system to support ongoing business growth',
    ],
  },
  // MotionBank
  {
    project: {
      name: 'MotionBank',
      role: ['UI/UX Design'],
      period: 'Feb 2026 - Mar 2026',
      src: '/assets/project/motionbank.png',
      repository: null,
      techStack: ['Figma'],
      slug: 'motionbank',
    },
    overview: {
      description:
        'GNA Cluster is a web-based management system designed to handle customer data and support the property sales process within a housing cluster environment.\n\nThe system enables admins and sales teams to manage customer leads, assign tickets, and track the entire sales journey—from initial inquiry to final transaction (akad). The goal was to streamline lead management and improve coordination between admin and sales teams.',
    },
    problemStatement: [
      'Customer data and sales processes were not well-structured, leading to inefficiencies in managing leads',
      'Difficulty in tracking the progress of each customer throughout the sales journey',
      'Lack of a centralized system to coordinate between admin, sales manager, and sales teams',
      'Manual follow-up processes increased the risk of missed opportunities and inconsistent communication',
      'Limited visibility into sales pipeline stages (price list, visit, booking, etc.)',
    ],
    solution: [
      'Designed a centralized customer and sales management system',
      'Implemented a ticket-based lead system, where admin or sales manager can create and assign customer data',
      'Built a structured sales pipeline workflow, including (Customer data input → Ticket assignment to sales → Price list sharing → Visit planning → Customer visit → Booking fee process → Final transaction (akad))',
      'Created clear tracking for each stage of the sales process',
      'Improved coordination between roles (admin, sales manager, sales) through structured workflows',
      'Designed a system that ensures consistent follow-up and reduces missed leads',
    ],
    uiDesign: {
      designSystem: {
        primaryColor:
          'Amber Yellow (#FAB702) (represents energy, attention, and business-driven actions)',
        secondaryColor: null,
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Ticket creation form for customer data',
        'Sales pipeline visualization (multi-stage tracking)',
        'Status indicators for each stage (price list → visit → booking → akad)',
        'Dashboard for monitoring leads and sales progress',
        'Clean table layout for managing customer and ticket data',
        'Role-based UI for admin and sales',
      ],
    },
    frontEndImplementation: {
      keyFeatures: {
        authentication: [
          'User login & registration',
          'Form validation and error handling',
          'User session management',
        ],
        leadOrTicketManagement: [
          'Create and manage customer tickets',
          'Assign tickets to sales automatically or manually',
          'Track ticket status across the sales pipeline',
        ],
        salesWorkflowManagement: [
          'Structured flow from initial contact to final transaction',
          'Clear task responsibilities for each role',
          'Improved follow-up tracking for sales',
        ],
        pipelineTracking: [
          'Visual tracking of customer journey stages',
          'Easy monitoring of sales progress',
          'Organized data for better decision-making',
        ],
        dataManagement: [
          'Customer data management',
          'Filtering and searching leads',
          'Efficient handling of large datasets',
        ],
      },
    },
    challengesAndSolutions: {
      challenges: [
        'Designing a system that supports multiple roles (admin, sales manager, sales)',
        'Structuring a complex sales process into a clear and trackable workflow',
        'Ensuring data consistency across different pipeline stages',
        'Managing server state and data updates across multiple modules',
      ],
      solutions: [
        'Created a structured ticket-based system to unify data flow',
        'Simplified sales stages into clear and manageable steps',
        'Implemented SWR / React Query for efficient data handling and updates',
        'Built reusable components for tables, forms, and status tracking',
        'Organized front-end architecture for scalability and maintainability',
      ],
    },
    learnings: [
      'Gained experience in building CRM-like systems and sales pipelines',
      'Improved understanding of multi-role system design and workflows',
      'Learned how to structure end-to-end sales processes into digital systems',
      'Strengthened skills in handling data-heavy applications and user flows',
      'Developed better practices in state management and scalable architecture',
    ],
    resultImpact: [
      'Improved efficiency in managing customer leads and sales processes',
      'Reduced risk of missed follow-ups through structured tracking',
      'Increased visibility of sales pipeline for better monitoring and decision-making',
      'Enhanced coordination between admin, sales manager, and sales teams',
      'Delivered a scalable system to support ongoing business growth',
    ],
  },
  // MBINET
  {
    project: {
      name: 'MBInet',
      role: ['UI/UX Design', 'Frontend Dev'],
      period: 'Sep 2025 - Nov 2025',
      src: '/assets/project/mbinet.png',
      repository: 'https://github.com/ReynerWL/ABI_ISP_FE.git',
      techStack: [
        'Figma',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Ant Design',
        'React Context API',
        'SWR',
      ],
      slug: 'mbinet',
    },
    overview: {
      description:
        'MBinet is an internal management system designed to streamline customer subscription management for internet services, including WiFi and router installations. The platform helps administrators efficiently manage customer data, track subscription statuses, and organize service-related information through a structured and intuitive dashboard.\n\nBy simplifying complex data handling into a clear interface, MBinet improves operational efficiency and reduces the risk of manual errors in managing customer services.',
    },
    problemStatement: [
      'Unorganized customer data, customer information is scattered and not systematically documented.',
      'Difficulty tracking payment status, there is no clear system to identify which customers have completed their payments and which have not.',
      'Manual billing process, the billing process is handled manually, making it time-consuming and prone to errors.',
      'Information managed through WhatsApp groups, important data is shared via group chats, making it difficult to track and poorly structured.',
      'Limited awareness of MBinet services, the service is mainly known through word of mouth, resulting in limited reach.',
      'Mismatch between expected and actual revenue, the lack of an integrated system creates discrepancies between recorded income and actual payments received.',
    ],
    solution: [
      'Centralized dashboard system, all customer data, subscription status, and service information are managed in a single structured platform.',
      'Automated subscription tracking, administrators can easily monitor payment status (paid/unpaid) in real-time.',
      'Digital payment integration, customers can make payments via bank transfer & QR code and upload payment proof directly to the system.',
      'Structured data management, eliminates reliance on WhatsApp groups by providing a more organized and accessible system.',
      'Improved financial transparency, payment data is clearly recorded, reducing discrepancies between expected and actual revenue.',
      'Enhanced operational efficiency, reduces manual processes, speeds up administrative workflows, and improves data accuracy.',
    ],
    uiDesign: {
      designSystem: {
        primaryColor: 'Blue (professional & trust)',
        secondaryColor: 'Amber (#FFA600) (attention & urgency)',
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Statistic cards (total transactions, total subscribers, etc.) → provide quick insights into key data',
        'Table with sorting & filtering → simplifies managing large amounts of data',
        'Status labels with different colors → help users quickly identify statuses',
        'Modal for create/edit data → keeps users focused without navigating away',
        'Service & package information → helps users understand available packages and learn more about the company’s services',
      ],
    },
    frontEndImplementation: {
      keyFeatures: {
        authentication: [
          'User login & registration',
          'Form validation and error handling',
          'User session management',
        ],
        servicesAndPackages: [
          'Display internet service information',
          'Package details (pricing, speed, benefits)',
          'Clear and user-friendly UI',
        ],
        transactions: [
          'User transaction history',
          'Upload payment proof (billing)',
          'Payment status tracking (pending, success, failed)',
        ],
        adminDashboard: [
          'Data statistics (users, transactions, revenue)',
          'Data visualization for monitoring performance',
          'System activity overview',
        ],
        dataManagement: [
          'Customer data management',
          'Transaction data management',
          'Filtering by payment type',
          'Filtering by destination account',
        ],
      },
    },
    challengesAndSolutions: {
      challenges: [
        'Managing data flow between user and admin (multi-role system)',
        'Maintaining consistent state across transactions, payments, and dashboard',
        'Handling file uploads with validation while keeping smooth UX',
        'Displaying real-time and efficient statistical data',
      ],
      solutions: [
        'Separated state structure for user and admin flows',
        'Implemented reusable components for tables, forms, and uploads',
        'Added file validation before upload to reduce user errors',
        'Optimized data fetching using SWR for caching and revalidation',
      ],
    },
    learnings: [
      'Gained experience in implementing end-to-end flow from user actions to admin monitoring',
      'Learned the importance of role-based systems in real-world applications',
      'Improved skills in handling complex state management',
      'Enhanced knowledge in data visualization and dashboard UX',
      'Built scalable and maintainable front-end architecture',
    ],
    resultImpact: [
      'More structured payment and transaction monitoring process',
      'Easier data analysis for admin through the dashboard',
      'Improved user experience with a clear user flow',
      'Reduced input errors through better validation',
      'Application is more scalable with a modular structure',
    ],
  },
  // ACA ISURANCE
  {
    project: {
      name: 'ACA Insurance',
      role: ['UI/UX Design'],
      period: 'Sep 2025 - Oct 2025',
      src: '/assets/project/aca.png',
      repository: null,
      techStack: ['Figma'],
      slug: 'aca-insurance',
    },
    overview: {
      description:
        'This project focuses on designing a digital insurance claim system consisting of a mobile application for users and a web dashboard for administrators.\n\nThe system covers the end-to-end claim process, from user registration and data submission to claim approval, repair monitoring, and completion tracking. The goal was to simplify a complex and manual process into a structured, transparent, and user-friendly experience.',
    },
    problemStatement: [
      'No dedicated digital system for managing insurance claims, with existing services limited to company profile information',
      'Complex and manual claim process, making it difficult for users to submit claims and understand required steps',
      'Lack of transparency in claim status, causing uncertainty during the repair process',
      'No centralized system for administrators to monitor and manage claim data efficiently',
      'Fragmented communication between users, surveyors, and admin during the claim lifecycle',
    ],
    solution: [
      'Designed an integrated system with Mobile app for users (claim submission & tracking) & Web dashboard for admin (monitoring & management)',
      'Created a structured end-to-end claim workflow, including (User registration & authentication, Personal data & vehicle data input, Claim submission (damage/loss) via form, Survey process by field surveyor, Claim approval by admin, Repair process at workshop, Claim status tracking & history)',
      'Implemented clear status tracking system to show claim progress at each stage',
      'Designed form-based input system to guide users through required data',
      'Built a monitoring dashboard for admin to manage and track all claims',
    ],
    uiDesign: {
      designSystem: {
        primaryColor: 'Blue (professional & trust)',
        secondaryColor: null,
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Step-by-step claim submission flow (user)',
        'Structured form for personal, vehicle, and claim data',
        'Status tracking with clear progress indicators (submitted → survey → approved → repair → completed)',
        'Claim history tracking for users',
        'Admin dashboard for monitoring claim data per status',
        'Clean and consistent UI components for better usability',
      ],
    },
    frontEndImplementation: null,
    challengesAndSolutions: {
      challenges: [
        'Designing a complete system flow without an existing digital reference',
        'Translating a complex multi-step insurance process into a simple user journey',
        'Ensuring clarity across multiple roles (user, surveyor, admin)',
        'Structuring detailed forms without overwhelming users',
        'Designing both mobile (user) and web (admin) experiences consistently',
      ],
      solutions: [
        ' Created detailed user flow and system flow diagrams to map the entire process',
        'Simplified complex steps into guided, step-by-step interactions',
        'Used clear visual hierarchy and status indicators to improve transparency',
        'Structured forms into logical sections to enhance usability',
        'Designed consistent UI patterns across mobile and web platforms',
      ],
    },
    learnings: [
      'Gained experience designing end-to-end product systems involving multiple roles',
      'Improved ability to translate complex business workflows into intuitive UI/UX',
      'Strengthened skills in designing multi-platform experiences (mobile & web)',
      'Learned how to structure multi-step forms and status-based workflows effectively',
      'Developed deeper understanding of user journey mapping and system thinking',
    ],
    resultImpact: [
      'Transformed a manual and unclear claim process into a structured digital workflow',
      'Improved transparency of claim status through clear tracking and progress indicators',
      'Reduced potential user confusion by simplifying the claim submission process',
      'Enabled better monitoring and management of claims through an admin dashboard',
      'Provided a scalable design foundation for future system development',
    ],
  },
  // Dashboard AFC
  {
    project: {
      name: 'Dashboard AFC',
      role: ['UI/UX Design', 'Frontend Dev'],
      period: 'Mar 2025 - Jan 2026',
      src: '/assets/project/transjakarta2.png',
      repository: null,
      techStack: [
        'Figma',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Ant Design',
        'React Context API',
        'React Query',
        'SWR',
      ],
      slug: 'dashboard-afc',
    },
    overview: {
      description:
        'AFC Dashboard is an internal monitoring system designed to manage and oversee operational data related to tap-in and tap-out devices (TOB/TOM). The platform enables administrators to monitor transaction activities, configure devices, and organize critical operational data within a centralized and structured interface.\n\nBy providing real-time visibility into system performance and device status, the dashboard improves operational efficiency, simplifies monitoring processes, and supports faster issue identification and maintenance.',
    },
    problemStatement: [
      'Existing web application was built using outdated technology (legacy PHP), resulting in limited scalability and suboptimal performance.',
      'Difficulty in accessing and retrieving operational data, as multiple divisions experienced challenges in navigating and extracting relevant information.',
      'Poor user experience due to non-responsive design and an outdated interface, making the system difficult to use across different devices.',
      'Lack of structured and centralized data management, causing inefficiencies in monitoring and maintaining device-related information.',
      'Limited system capability to handle detailed operational data, especially for complex device configurations (TOB/TOM).',
    ],
    solution: [
      'Rebuilt the system using modern technologies (Next.js, TypeScript) to improve performance, scalability, and maintainability.',
      'Redesigned the user interface with a responsive and user-friendly approach to enhance usability across devices.',
      'Developed a centralized dashboard to simplify data access and improve visibility for multiple divisions.',
      'Implemented structured data management to organize operational and monitoring data more efficiently.',
      'Introduced advanced Device Configuration Management features, including master data management for (Bank, Fare, Route, SAM, SIM, Armada, Device, Sound, and other related configurations).',
      'Enhanced system capabilities to support detailed monitoring, faster data retrieval, and easier maintenance processes.',
    ],
    uiDesign: {
      designSystem: {
        primaryColor:
          'Deep Blue (#045883) (professional, trustworthy, and stable)',
        secondaryColor: null,
        neutralColor: 'Gray scale (background & layout)',
        typography: 'Plus Jakarta Sans',
        gridSystem: '8pt spacing',
      },
      highlights: [
        'Statistic cards (total transactions, device status, active/inactive devices) → provide quick insights into operational data',
        'Table with sorting & filtering → simplifies handling large-scale transaction and device data',
        'Status labels with color indicators → helps users quickly identify device status (active, inactive, error)',
        'Advanced filtering & search → allows users to find specific transactions or device data efficiently',
        'Modal for configuration & data management → enables users to manage device configurations without leaving the page',
        'Device configuration interface (TOB/TOM) → structured UI for managing complex device-related data',
      ],
    },
    frontEndImplementation: {
      keyFeatures: {
        authentication: [
          'User login & registration',
          'Form validation and error handling',
          'User session management',
        ],
        transactionMonitoring: [
          'Real-time transaction data display',
          'Filtering and sorting transactions',
          'Detailed transaction insights',
        ],
        deviceManagement: [
          'Manage and monitor device configurations',
          'View device status and operational data',
          'Structured interface for device-related information',
        ],
        masterDataManagement: [
          'Centralized management for (Bank, Fare, Route, SAM, SIM, Armada, Device, Sound, and other related configurations).',
          'Organized and scalable data structure for complex configurations',
        ],
        dashboardAndAnalytics: [
          'Data statistics (transactions, device status)',
          'Visual overview of system performance',
          'Operational monitoring in one centralized dashboard',
        ],
        dataManagementAndFiltering: [
          'Advanced filtering by multiple parameters',
          'Efficient handling of large datasets',
          'Improved data accessibility for multiple divisions',
        ],
      },
    },
    challengesAndSolutions: {
      challenges: [
        'Existing system built with outdated technology, making it difficult to maintain and scale',
        'Complex and unstructured operational data, especially for device configuration (TOB/TOM)',
        'Difficulty in accessing and filtering large amounts of transaction and device data',
        'Inconsistent UI and poor responsiveness, reducing overall user experience',
        'Managing server state efficiently across multiple modules (transactions, devices, master data)',
        'Lack of a well-structured front-end architecture, causing difficulties in development and maintenance',
      ],
      solutions: [
        'Rebuilt the system using modern technologies (Next.js, TypeScript) for better scalability and maintainability',
        'Implemented structured data management for handling complex device configuration and operational data',
        'Developed advanced filtering and data handling to improve accessibility of large datasets',
        'Redesigned the UI with a responsive and user-friendly approach',
        'Utilized SWR and React Query for efficient data fetching, caching, and server-state management',
        'Refactored and organized the front-end folder structure into a scalable and maintainable architecture',
        'Created reusable components and modular structure to improve development efficiency and consistency',
      ],
    },
    learnings: [
      'Gained experience in handling complex, data-heavy systems (transaction & device monitoring)',
      'Learned how to manage server state effectively using SWR and React Query',
      'Improved understanding of scalable front-end architecture and folder structuring',
      'Enhanced ability to transform legacy systems into modern, maintainable applications',
      'Strengthened skills in building responsive and user-friendly dashboard interfaces',
      'Developed a better approach to organizing large-scale applications using modular components',
    ],
    resultImpact: [
      'Improved operational efficiency by transforming fragmented and complex data into a centralized dashboard.',
      'Enabled faster decision-making through clearer data visualization and real-time monitoring.',
      'Streamlined device configuration workflows, reducing manual effort and system complexity.',
      'Strengthened application scalability and maintainability through improved architecture and code structure.',
    ],
  },

  // {
  //   src: '/assets/project/bank_papua.png',
  //   title: 'Bank Papua Dashboard',
  //   desc: 'Resource management web application.',
  //   role: ['UI/UX Design', 'Frontend Dev'],
  //   tools: ['Figma', 'Next.Js', 'TypeScript'],
  //   slug: 'bank-papua',
  // },
  // {
  //   src: '/assets/project/manarea.png',
  //   title: 'Manarea',
  //   desc: 'E-Commerce mobile application.',
  //   role: ['UI/UX Design', 'Mobile Dev'],
  //   tools: ['Figma', 'Flutter'],
  //   slug: 'manarea',
  // },
  // {
  //   src: '/assets/project/cims.png',
  //   title: 'Gemilang Indonesia',
  //   desc: 'Mutual fund mobile application.',
  //   role: ['UI/UX Design'],
  //   tools: ['Figma'],
  //   slug: 'gemilang-indonesia',
  // },
  // {
  //   src: '/assets/project/transjakarta1.png',
  //   title: 'Transjakarta Monitoring',
  //   desc: 'Web app for monitoring transaction data from TOB/TOM.',
  //   role: ['UI/UX Design', 'Frontend Dev'],
  //   tools: ['Figma', 'Next.Js', 'TypeScript'],
  //   slug: 'transjakarta-monitoring',
  // },
]
