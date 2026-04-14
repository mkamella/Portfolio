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
  contentImages?: string[]
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
      body: 'Peak Psychological Service needed a homepage and marketing landing page that actually matched the quality of care they provide. The existing page made it hard for visitors to understand what was offered, trust the clinic, or take any next step. I led the redesign as the sole UX Designer, owning the process from early exploration through final UI and handoff. My focus was turning anxious, information-seeking visitors into confident prospective clients by clarifying offerings, strengthening trust signals, and making it easier to get in touch. The work resulted in a cleaner homepage and a measurable lift in new client inquiries.',
    },
    problem: {
      body: 'Prospective clients arrived on the homepage feeling uncertain, and the page gave them little to work with. Key information was easy to miss: what the clinic offers, who it helps, and how to get started. There were not enough trust signals for a decision that is already hard to make. Visitors left without taking action, and the clinic missed potential inquiries.',
    },
    research: {
      body: 'I mapped the user journey from the moment a prospective client searched for a therapist to the moment they decided whether to reach out. Visitors scanned for reassurance first, then looked for practical answers: what services are offered, who the clinic works with, whether insurance is accepted, and whether booking is straightforward. When those answers were hard to find, people left. I also reviewed competitor clinic sites to understand what trust-building, service clarity, and CTA patterns were working.',
      insights: [
        'Trust signals need to appear within the first screen. Credentials, tone, and approach matter before any CTA.',
        'Visitors hesitate when services are listed with no context for who they are actually for.',
        'Unclear next steps and buried contact forms reduce inquiries, especially for sensitive healthcare decisions.',
      ],
    },
    solution: {
      body: 'I redesigned the homepage and landing page around a clearer decision path: what Peak offers, who it is for, and how to book or contact. I introduced stronger information hierarchy, scannable sections, and clearer calls to action so users could act without hunting. I added credibility cues (team highlights, reassuring microcopy, and proof points) to reduce anxiety and build trust. I also explored multiple above-the-fold layouts to balance empathy with clarity, iterating through wireframes to find a structure that felt supportive. I delivered developer-ready designs and handoff notes so the team could build accurately.',
    },
    impact: {
      body: 'The redesigned homepage made it easier for visitors to understand the clinic and know what to do next. Stronger trust cues and a clearer first step helped more prospective clients go from browsing to reaching out. The development team also benefited from clean handoff deliverables, which cut down on back-and-forth during implementation.',
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
      body: "The UX Design team and I worked with Arrivia's Fortune 500 partner to reimagine their travel website for members. The existing platform was outdated and overwhelming, and it failed to help members understand or use their benefits. Our redesign was built on two rounds of user research and produced a modern, member-first experience across hotel, air, resort, and cruise booking.",
    },
    problem: {
      body: "The partner's travel website was outdated and lacked the basic UX foundations needed to engage users. Members had a hard time understanding their benefits and figuring out how to apply savings credits to bookings. That was the whole point of the membership, and the original design made it nearly invisible.",
    },
    research: {
      body: "We built our designs on two rounds of usability research. An initial study on the previous team's designs with 15 participants revealed that 7 couldn't complete tasks involving member currencies. The currency bar was a recurring pain point: it didn't update after bookings and didn't explain the different credit types. Deal cards were also frequently overlooked. After our first redesign round, we tested with 9 internal travel agents, then ran a final round with 9 external users over three weeks.",
      insights: [
        '7 of 15 initial participants could not complete tasks involving member savings credits.',
        'Deal cards were overlooked when placed below the fold. Users did not scroll far enough to find them.',
        'The onboarding experience was well received: 5 of 9 external users engaged with it and left positive feedback.',
        'SUS score improved from 62 (original site) to 80 (round 1) to 83 (round 2).',
      ],
    },
    solution: {
      body: 'My team and I stripped things back and started fresh. The original site was overwhelming and failed to build trust, so we focused on clarity. I worked on the deal cards and the welcome experience to surface member value right away. We built a member onboarding flow, redesigned the currency bar to update in real time, and created a benefits library so members could actually understand what they had access to. I also designed an email opt-in that felt clean rather than intrusive. The template was later adopted for other Arrivia clients.',
    },
    impact: {
      body: 'The redesigned platform improved both member engagement and comprehension. SUS scores rose from 62 on the original site to 83 after two rounds of work, approaching the 85.5 benchmark for excellence. The design template was adopted across other Arrivia client accounts, and I built a toolkit that let the account management team present the system to new clients on their own.',
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
      body: "Arrivia's UX team was designing for 7+ platforms with no shared system. That meant inconsistency across products and slower work across every design cycle. Cobalt was built to unify the interfaces across all of Arrivia's products under a single, scalable design language, using atomic design principles to build from foundational elements up to full templates.",
    },
    problem: {
      body: "Without a shared system, every team made design decisions independently. That created visual and interaction inconsistencies across products, slowed teams down (every component had to be rebuilt from scratch), and left new designers with no single reference point. Handoff suffered as a result.",
    },
    research: {
      body: 'Before building, the team audited existing components across platforms to find redundancies, inconsistencies, and patterns worth keeping. We used atomic design as our framework, starting with the smallest units (atoms) and working up to templates and full pages. That gave us a shared vocabulary and a clear model for how people could contribute to the system.',
      insights: [
        'Components were being recreated across products with no shared reference, wasting design and development time.',
        'Inconsistent interaction patterns created user confusion when moving between Arrivia products.',
        'Atomic design gave the team a shared mental model and contribution structure from day one.',
      ],
    },
    solution: {
      body: "Cobalt was structured around five levels: Atoms (buttons, inputs, icons, chips), Molecules (search bars, navigation menus, cards), Organisms (headers, footers, integrated page sections), Templates (page layout frameworks), and Pages (final, content-filled instances). We built out the foundational atoms first: buttons, form fields, and icons. Every component was documented, reusable, and built to work across Arrivia's white-label client products.",
    },
    impact: {
      body: "Cobalt brought consistency to Arrivia's product suite and gave both design and development a shared language to work from. The system sped up the creation of new interfaces and made it easier to bring new designers up to speed. At the time of handoff, Cobalt was actively being expanded toward its first full template, which would unify the top-level layouts across all products.",
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
      body: 'The Southeast Valley Alliance is a non-profit in Queen Creek, Arizona that supports U.S. military veterans, active duty service members, their families, and first responders. Our team built a website to help the organization fundraise for a new community center. I came onto the project mid-stream, conducted original user research to validate and improve the existing designs, and delivered a live site built in Squarespace.',
    },
    problem: {
      body: 'The Southeast Valley Alliance was a new organization with no web presence. Without a working website, they had no way to get noticed or receive donations. The previous team had created initial branding and mockups, but nothing had been tested with real users. For a donation-driven site, credibility and clarity are everything.',
    },
    research: {
      body: 'I ran a survey targeting veterans, first responders, active military, and regular non-profit donors. Respondents skewed male, ages 40 to 50, with household incomes of $100k to $200k, and most had a military or first responder connection. The key finding: donors want to know exactly where their money goes before they commit, and site credibility is the single biggest factor in whether they give. From there, I ran usability tests on the initial prototypes to find gaps before building.',
      insights: [
        'Credibility is the primary barrier to donation. Users need trust signals early and often.',
        'Donors want transparency: "Where does my money go?" must be answered before the donate CTA.',
        'Some users misread the organization as a military recruiting agency, so the messaging needed clarification.',
        'Overall first impression was positive; users found the layout clear and informative.',
      ],
    },
    solution: {
      body: 'Based on what I learned from research, I restructured key sections to lead with credibility, added a section explaining how donations are used, and reorganized the page so visitors could understand the Alliance\'s mission quickly. I tightened the copy, reordered sections, and cleared up any confusion about what the organization actually does. After presenting the updated designs to the Alliance\'s board and incorporating their feedback, I built the final site in Squarespace.',
    },
    impact: {
      body: 'The final website gave the Southeast Valley Alliance a credible online presence and an active donation pathway for the first time. Grounding the design in research meant the site spoke directly to the people most likely to give. The project also sharpened my skills in user research, stakeholder collaboration, and picking up a project mid-stream without losing momentum.',
      stats: [
        { value: '100%', label: 'Client Approval' },
        { value: '2', label: 'Research Rounds' },
      ],
    },
  },
  {
    slug: 'project-five',
    title: 'UCDA Conference Branding',
    tags: ['UX Design'],
    year: 2023,
    role: 'UX Designer',
    duration: 'TBD',
    team: 'TBD',
    thumbnail: '/images/Project 5 Header.png',
    heroImage: '/images/Project 5 Header.png',
    contentImages: [
      '/images/Immerse 1.png',
      '/images/Immerse 2.png',
      '/images/Immerse 3.png',
      '/images/Immerse 4.png',
      '/images/Immerse 5.png',
      '/images/Immerse 6.png',
      '/images/Immerse 7.png',
      '/images/Immerse 8.png',
      '/images/Immerse 9.png',
    ],
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
