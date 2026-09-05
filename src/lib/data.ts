export type CaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
};

export const projects = [
  {
    id: "hal9-roadmap",
    label: "HAL9 ROADMAP",
    name: "Hal9 Roadmap",
    year: "2026",
    category: "professional" as const,
    description:
      "Hal9 is an AI-driven strategic tool designed to accelerate the 'zero-to-one' phase for product builders. By leveraging LLMs, the application transforms a simple product premise into a comprehensive, 6-month developmental roadmap.",
    image: "/projects/hal9-roadmap.png",
    linkLabel: "roadmap.apps.hal9.com",
    href: "https://roadmap.apps.hal9.com",
    caseStudy: {
      problem:
        "Hal9 needed a product that could act as proof of concept for its core pitch: an AI-powered technical co-founder for non-technical startup founders. The target user was someone with an idea but no engineering background, who needed a concrete plan to get an MVP built in 30 days. Hal9 Roadmap was built to be that entry point — a way to show, not just tell, what \"AI as your technical co-founder\" could mean.",
      approach:
        "The product took a prompt describing what the founder wanted to build and generated a full roadmap: phased timeline, a tech stack recommendation, and a live UI preview — organized into separate tabs so a non-technical user could move from \"what happens when\" to \"what will this look like\" without needing to interpret dense output.\n\nA central technical question was model selection: finding an AI model that could reason well over multi-phase planning and produce a usable UI preview, rather than optimizing for one at the expense of the other. That tradeoff also shaped a frontend-vs-Python decision — prioritizing a frontend framework for the roadmap generation to get a better user experience, even though the existing Hal9 chatbot was Python-based and its dashboard output suffered for it. Roadmap was scoped in part as a proof point for eventually replacing that chatbot with the same approach.\n\nValidation was iterative and market-facing: running ads, reading the actual prompts users typed in, collecting feedback, then pivoting to a 200-free-credit model to see whether hands-on use of the roadmap tool would convert into client leads.",
      outcome:
        "The tool shipped and reached real users, but it didn't produce the lead volume it was built to drive, despite multiple iterations. In retrospect, the timing was the miscalculation more than the product: Roadmap likely works better as a tool for founders already engaged with Hal9 — helping them plan post-engagement — rather than as the first touchpoint meant to attract them in.",
    },
  },
  {
    id: "hypd",
    label: "HYPD",
    name: "Hypd",
    year: "2025",
    category: "professional" as const,
    description:
      "HYPD is a hyper-local discovery platform designed to connect people with the pulse of their neighborhood. Developed as a production-ready MVP, it bridges the gap between small businesses and residents by curating high-quality local events—from pop-up markets to live music—into a seamless, community-focused interface.",
    image: "/projects/hypd.png",
    linkLabel: "hypdnow.com",
    href: "https://hypdnow.com",
    caseStudy: {
      problem:
        "A client came to Hal9 with an MVP concept: a hyper-local discovery platform, initially scoped for Seattle and San Francisco with an eye toward expanding city by city. The core idea was social-app-like — users discover nearby events on a map, add them to a personal itinerary, and get notified as an event approaches or as they get close to one. On the other side, businesses needed a way to post events and see analytics on engagement: adds-to-itinerary, attendance, reach. User onboarding captured likes/dislikes to match people with businesses whose \"vibe\" fit.",
      approach:
        "The build spanned both a web app and a native mobile app. The key early decision was how to ship native without the cost and time of a fully separate native codebase — I chose Natively, a native web wrapper, to get onto the App Store faster while keeping most of the product logic in one place.",
      outcome:
        "Hypd shipped to the App Store and is still being actively iterated on a year later, without an official public launch yet. The clearest lesson in hindsight is tooling: I built the product on Lovable, and a year in, it's become a bottleneck — both the frontend and backend are difficult to move off the platform, which adds cost pressure on an already tight budget. A custom-built wrapper, owned from the start, would likely have avoided that lock-in. I've also leaned more heavily toward backend capability than frontend polish, which made it harder to know where to focus — a tension that's arguably contributed to the product still not having shipped its official launch.",
    },
  },
  {
    id: "riot-rad",
    label: "RIOT RAD",
    name: "Riot Rad",
    year: "2026",
    category: "personal" as const,
    description:
      "Riot Rad is an immersive, web-based unboxing experience designed for the Peach Riot designer toy universe.",
    linkLabel: "riot-rad-project.vercel.app",
    href: "https://riot-rad-project.vercel.app",
    image: "/projects/riot-rad.png",
    caseStudy: {
      problem:
        "Riot Rad started as a creative project, not a brief — born out of genuinely being a fan of Peach Riot blind boxes and wanting to bring that unboxing thrill to the web. The idea was simple: build a virtual version of Pop Mart, something that captured the same anticipation of not knowing what you're going to get.",
      approach:
        "The build centered on recreating the experience of pulling a blind box from a vending machine — as a web app, in 3D. That meant working across two disciplines that don't usually meet: 3D modeling and frontend engineering. The vending machine itself went through real iteration in Spline to get its look and mechanical behavior to feel physical rather than static. The harder problem was choreography — getting 3D boxes to visibly eject from the machine and animate into view, then bridging that motion cleanly into a standard web frontend stack that wasn't built with that kind of sequencing in mind. It required piecing together a pipeline — 3D authoring, export, and in-browser animation — that doesn't have an obvious off-the-shelf path.",
      outcome:
        "What shipped is a fun, self-contained pop-up experience — less a product than a hobby made real, built around user experience rather than a business goal. Looking back, spending more time upfront on visual direction and library choice would have saved some of the friction in the 3D implementation. It's also a project with room to grow — a natural candidate to revisit and push further later.",
    },
  },
  {
    id: "temper-lab",
    label: "TEMPER LAB",
    name: "Temper Lab",
    year: "2026",
    category: "personal" as const,
    description:
      "Temper Lab is a high-performance music production environment that reimagines the traditional DAW through a cyberpunk lens.",
    linkLabel: "temper-lab-project.netlify.app",
    image: "/projects/temper-lab.png",
    href: "https://temper-lab-project.netlify.app",
    caseStudy: {
      problem:
        "Temper Lab was sparked by my own passion as a drummer — a personal itch to build a music tool made specifically for drummers, rather than a general-purpose DAW. The goal was to let a drummer take a track, whether vocal or instrumental, and write a drum part against it. A handful of built-in test tracks made that possible to try out immediately.",
      approach:
        "The main technical wall was stem separation. The vision was to let a drummer drop in any song, split it into its individual parts, and lay a custom drum part over the isolated track — which meant integrating Moises AI. But Moises AI's API wasn't available to individual developers, only businesses, which closed off the most direct path to that feature and shaped what the tool could actually do without it.",
      outcome:
        "What shipped is a fun tool to play with, but not yet one built for real, sustained use by drummers. Looking back, the right next step isn't more features — it's research: talking to actual drummers about what they need, rather than building outward from a personal itch, and using that to shape a tool that's genuinely adaptable to the drumming community rather than a proof of concept.",
    },
  },
];

