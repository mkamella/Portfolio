export interface Stat {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  title: string
  tags: string[]
  year: number
  role: string
  duration: string
  team: string
  thumbnail: string
  heroImage: string
  overview: {
    headline: string
    body: string
  }
  problem: {
    body: string
  }
  research: {
    body: string
    insights?: string[]
  }
  solution: {
    body: string
    images?: string[]
  }
  impact: {
    body: string
    stats?: Stat[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'peak-psychological',
    title: 'Designing the First Step Toward Therapy',
    tags: ['UX Design', 'Healthcare', 'UI Design'],
    year: 2023,
    role: 'UX Designer',
    duration: '4 weeks',
    team: 'UX Designer (lead) · Project Manager',
    thumbnail: '/images/Project 1 Header.png',
    heroImage: '/images/Project 1 Header.png',
    overview: {
      headline: 'The first step toward care should feel possible.',
      body: 'Peak Psychological Service needed a homepage and marketing landing page that matched the quality of care they provide — but the existing page made it hard for visitors to understand services, trust the clinic, and take the next step. I led the redesign as the sole UX Designer, owning the process from early exploration through final UI and handoff. I focused on turning anxious, information-seeking visitors into confident prospective clients by clarifying offerings, strengthening trust cues, and making contact options easier to find. The work resulted in a polished new homepage and a measurable lift in new client inquiries.',
    },
    problem: {
      body: 'Prospective clients often arrived on the Peak Psychological Service homepage feeling uncertain, and the page did not guide them to the right service or next step. The content hierarchy made key information easy to miss — especially what the clinic offers, who it helps, and how to get started. The page also lacked enough trust-building details, which mattered deeply for a sensitive healthcare decision. As a result, visitors hesitated and the clinic missed potential inquiries.',
    },
    research: {
      body: 'I mapped the user journey from the moment a prospective client searched "therapy near me" through the moment they decided whether to reach out. Visitors scanned for reassurance first, then looked for practical answers: what services exist, who the clinic helps, whether insurance is accepted, and whether booking feels simple. When the page did not surface those answers quickly, users bounced or postponed the decision. I also conducted competitive research across similar clinics to identify patterns in trust-building, service clarity, and CTA placement that were working elsewhere.',
      insights: [
        'Users need trust signals within the first screen — credentials, approach, and tone matter before any CTA.',
        'Visitors hesitate when services are listed without context for who they are for.',
        'Contact friction (unclear next steps, buried forms) directly reduces inquiries for sensitive healthcare decisions.',
      ],
    },
    solution: {
      body: 'I redesigned the homepage and landing page around a clearer decision path: what Peak offers, who it is for, and how to book or contact. I introduced stronger information hierarchy, scannable sections, and clearer calls to action so users could act without hunting. I added credibility cues — team and approach highlights, reassuring microcopy, and proof points — to reduce anxiety and increase trust. I also explored multiple above-the-fold layouts to balance empathy with clarity, iterating through wireframes to find a structure that felt supportive rather than clinical. I delivered developer-ready designs and handoff notes so the team could build the new experience accurately.',
    },
    impact: {
      body: 'The redesigned homepage improved how quickly visitors understood Peak Psychological Service and what to do next. By strengthening trust cues and clarifying the first step, the page helped more prospective clients move from browsing to contacting. The development team also benefited from clearer deliverables, which reduced implementation ambiguity and shortened feedback cycles.',
      stats: [
        { value: '↑ 18%', label: 'New Client Inquiries' },
        { value: '↑ 22%', label: 'CTA Click Rate' },
        { value: '↓ 15%', label: 'Bounce Rate' },
      ],
    },
  },
  {
    slug: 'arrivia-travel',
    title: 'Reimagining a Member Booking Experience',
    tags: ['UX Design', 'UX Research', 'Product Design'],
    year: 2023,
    role: 'UX Designer',
    duration: '20 weeks',
    team: '2 UX Designers · 1 UX Researcher · 2 Project Managers',
    thumbnail: '/images/Project 2 Header.png',
    heroImage: '/images/Project 2 Header.png',
    overview: {
      headline: 'When your booking platform discourages travel, something has to change.',
      body: "The UX Design team and I worked with Arrivia's Fortune 500 partner to reimagine their travel website for members. The existing platform lacked the UX fundamentals needed to engage users and inspire bookings — it felt outdated, overwhelming, and failed to help members understand or use their benefits. Our redesign was backed by two full rounds of user research and produced a modern, member-first experience across hotel, air, resort, and cruise booking.",
    },
    problem: {
      body: "The partner's travel website lacked the necessary UX elements that would normally engage users and make them want to book travel. The website felt and looked outdated, which drove users away. Members also struggled to understand their membership benefits and how to apply savings credits to bookings — a core value proposition that was nearly invisible in the original design.",
    },
    research: {
      body: "We built our designs on two rounds of usability research. An initial study on the previous team's designs (15 participants) revealed that 7 of 15 users couldn't complete tasks involving member currencies. The currency bar was a consistent pain point — it didn't update after bookings and didn't explain different currency types. Deal cards were also frequently missed or ignored. After our first round of redesign, we conducted a second round of testing with 9 internal travel agents, then a third round with 9 external users over 3 weeks.",
      insights: [
        '7 of 15 initial participants could not complete tasks involving member savings credits.',
        'Deal cards were overlooked when placed below the fold — users did not scroll far enough to find them.',
        'The onboarding experience was well received: 5 of 9 external users engaged with it and left positive feedback.',
        'SUS score improved from 62 (original site) to 80 (round 1) to 83 (round 2).',
      ],
    },
    solution: {
      body: 'My team and I took a simple, modern approach to the redesign — the original site was too overwhelming and failed to build trust. I focused on the travel deal cards and the welcome experience, exploring ways to surface member value immediately. We designed a member onboarding experience to introduce new and returning users to the platform, a clearer currency bar that updated in real time, and an information library to help members understand their benefits. I also designed an email opt-in popup that balanced engagement with a clean, digestible layout. The design template was later applied to other Arrivia clients.',
    },
    impact: {
      body: 'The redesigned platform significantly improved member engagement and comprehension. The System Usability Scale score rose from 62 on the original site to 83 after two rounds of iteration — approaching the 85.5 benchmark for excellence. The design template was adopted for other Arrivia client accounts, and I created a design toolkit that enabled the account management team to present the system to new clients independently.',
      stats: [
        { value: '62 → 83', label: 'SUS Score' },
        { value: '70%', label: 'Task Completion Rate' },
        { value: '5 / 9', label: 'Users Praised Onboarding' },
      ],
    },
  },
  {
    slug: 'cobalt-design-system',
    title: 'Building a Design System for 7+ Platforms',
    tags: ['Design Systems', 'Product Design', 'UI Design'],
    year: 2023,
    role: 'UX Designer',
    duration: 'Ongoing',
    team: 'UX Design Team · Arrivia',
    thumbnail: '/images/Project 3 Header.png',
    heroImage: '/images/Project 3 Header.png',
    overview: {
      headline: 'Seven platforms. One design language.',
      body: "Arrivia's UX team was designing for 7+ platforms with no shared system — leading to inconsistency across products and slowing down every design cycle. Cobalt was created to unify the interfaces across all of Arrivia's products and platforms under a single, scalable design language. It adopts atomic design principles, building foundational elements upward to progressively unify visual design and prioritize a consistent user experience.",
    },
    problem: {
      body: "Without a shared system, design decisions were made independently across products, creating visual and interaction inconsistencies that hurt brand recognition and the user experience. Every new component had to be rebuilt from scratch, slowing teams down. New designers had no single source of truth to reference, leading to fragmentation and rework during development handoff.",
    },
    research: {
      body: 'Before building, the team audited existing components across platforms to identify redundancies, inconsistencies, and high-frequency patterns. We used atomic design methodology as our framework — starting with the smallest indivisible units (atoms) and building up to templates and full pages. This gave us a shared vocabulary and a clear contribution model for the system.',
      insights: [
        'Components were being recreated across products with no shared reference — wasting design and development time.',
        'Inconsistent interaction patterns created user confusion when moving between Arrivia products.',
        'Atomic design gave the team a shared mental model and contribution structure from day one.',
      ],
    },
    solution: {
      body: 'Cobalt was structured around five levels: Atoms (buttons, inputs, icons, chips), Molecules (search bars, navigation menus, card components), Organisms (headers, footers, integrated page sections), Templates (page layout frameworks), and Pages (final, content-filled instances). The team built out the foundational atoms first — buttons, form fields, and icons — ensuring every component was documented, reusable, and adaptable across Arrivia\'s client white-label products.',
    },
    impact: {
      body: "Cobalt brought consistency to Arrivia's product suite and gave the design and development teams a single shared language. The system accelerated the creation of new interfaces and made it easier to onboard new designers to the team's standards. As of handoff, Cobalt was actively being expanded toward its first full template — a milestone that would unify the top-level layouts across all products.",
      stats: [
        { value: '7+', label: 'Platforms Unified' },
        { value: '5', label: 'System Levels Built' },
      ],
    },
  },
  {
    slug: 'southeast-valley-alliance',
    title: 'Building a Home for Those Who Serve',
    tags: ['UX Research', 'Web Design', 'Non-Profit'],
    year: 2023,
    role: 'UX Designer · UX Researcher · Project Manager',
    duration: '8 weeks',
    team: '2 UX Designers',
    thumbnail: '/images/Project 4 Header.png',
    heroImage: '/images/Project 4 Header.png',
    overview: {
      headline: 'A donation starts with trust. Trust starts with clarity.',
      body: 'The Southeast Valley Alliance is a non-profit based in Queen Creek, Arizona that provides community support to U.S. military veterans, active duty service members, their families, and first responders. Our team built a website to help the organization fundraise for a new community center. I inherited the project from a previous team, conducted original user research to validate and refine the existing designs, and delivered a live website built in Squarespace.',
    },
    problem: {
      body: 'The Southeast Valley Alliance was a new organization with no web presence. Without a functioning website, the organization struggled to get noticed in the community and was unable to receive donations. The previous team had created initial branding and mockups, but the designs had not been validated with real users — and for a donation-driven site, credibility and clarity are everything.',
    },
    research: {
      body: 'I conducted a survey targeting veterans, first responders, active military, and regular non-profit donors. Respondents skewed male, ages 40–50s, with household incomes of $100k–$200k — all with some military or first responder affiliation. The findings were clear: users want to know exactly where their donation goes before committing, and site credibility is the single biggest factor in their decision to give. I then ran usability tests on the initial prototypes to identify gaps before building.',
      insights: [
        'Credibility is the primary barrier to donation — users need trust signals early and often.',
        'Donors want transparency: "Where does my money go?" must be answered before the donate CTA.',
        'Some users misread the organization as a military recruiting agency — messaging needed clarification.',
        'Overall first impression was positive; users found the layout clear and informative.',
      ],
    },
    solution: {
      body: 'Based on research findings, I restructured key sections to lead with credibility signals, added a dedicated section explaining how donations are used, and revised the page hierarchy so new visitors could understand the Alliance\'s mission within seconds. I reordered sections, updated verbiage for clarity, and removed ambiguity around the organization\'s purpose. After presenting updated designs to the Alliance\'s board members and incorporating their feedback, I built the final site in Squarespace.',
    },
    impact: {
      body: 'The final website gave the Southeast Valley Alliance a credible, accessible online presence and an active donation pathway for the first time. The research-driven design process ensured the site spoke directly to the organization\'s target audience — donors who needed to trust before they gave. The project also deepened my practice in user research, stakeholder collaboration, and navigating the complexities of picking up a project mid-stream.',
      stats: [
        { value: '100%', label: 'Client Approval' },
        { value: '2', label: 'Research Rounds' },
      ],
    },
  },
  {
    slug: 'project-five',
    title: 'Case Study Coming Soon',
    tags: ['UX Design'],
    year: 2023,
    role: 'UX Designer',
    duration: 'TBD',
    team: 'TBD',
    thumbnail: '/images/Project 5 Header.png',
    heroImage: '/images/Project 5 Header.png',
    overview: {
      headline: 'More work coming soon.',
      body: 'This case study is in progress.',
    },
    problem: { body: 'Coming soon.' },
    research: { body: 'Coming soon.' },
    solution: { body: 'Coming soon.' },
    impact: { body: 'Coming soon.' },
  },
]
