### Samvidhan Path


Frontend/
├── node_modules/          # Dependencies installed by npm
├── public/                # Public assets accessible by the browser
│   ├── SEC/               # Public security-related files or components
│   └── assets/            # Static files (images, fonts, etc.)
├── src/                   # Source files for the application
│   ├── components/        # Reusable components used throughout the app
│   │   ├── Banner/        # Banner-related components
│   │   ├── Footer/        # Footer-related components
│   │   ├── Hero/          # Hero section components
│   │   ├── Navbar/        # Navbar components
│   │   └── Layout.js      # Layout component (global structure)
│   ├── pages/             # Page components (each route or view)
│   │   ├── Citizens/      # Citizens-related components
│   │   │   ├── rights.jsx # Rights page
│   │   ├── constitution/  # Constitution-related pages
│   │   │   ├── constitution.jsx # Constitution page
│   │   ├── casestudies.jsx  # Case studies page
│   │   ├── citizen.jsx     # Citizen info page
│   │   ├── contact.jsx     # Contact page
│   │   ├── ebooks.jsx      # E-books page
│   │   ├── engage.jsx      # Engagement page
│   │   ├── explore.jsx     # Exploration page
│   │   ├── games.jsx       # Games page
│   │   ├── Learn.jsx       # Learning page
│   │   ├── Services/       # Service-related components
│   │   ├── Subscribe/      # Subscription-related components
│   ── Docs/           # Documentation-related components
│   ├── JS/                 # JavaScript logic (maybe helpers, utilities)
│   └── U/                  # Utilities or User-related components
├── ME/                    # Project documentation or educational material
│   └── fundamental-rights.md  # Markdown file for fundamental rights
├── App.jsx                 # Main entry component for React app
├── index.css               # Global styles
└── index.js                # React entry point (renders App.jsx)
