# Trigon Engineering Society Website
Trigon Engineering Society website is a Next.js 15.4.5 React application built with TypeScript and Tailwind CSS. The website serves as the public face for the Trigon Engineering Society at the University of Virginia, featuring pages for recruitment, society information, and news.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup and Dependencies
- Install dependencies: `npm install` -- takes 15-20 seconds
  - **IMPORTANT**: The initial install may prompt ESLint configuration on first lint run
- Node.js version requirement: Works with Node.js v20.19.4 or compatible
- npm version requirement: Works with npm 10.8.2 or compatible

### Building the Application
- Development build: `npm run build` -- takes 20-25 seconds. **NEVER CANCEL. Set timeout to 60+ minutes for safety.**
- The build process includes TypeScript compilation, linting, and static page generation
- **CRITICAL**: If build fails with Google Fonts errors (ENOTFOUND fonts.googleapis.com), this is expected due to network restrictions. The fonts have been replaced with system fonts in app/layout.tsx.

### Running the Application
- Development server: `npm run dev` -- starts in 1-2 seconds
  - Uses Turbopack for faster builds in development
  - Available at http://localhost:3000
  - Auto-reloads on file changes
- Production server: 
  - Build first: `npm run build` 
  - Then start: `npm run start` -- starts in under 1 second
  - Also available at http://localhost:3000

### Code Quality and Linting
- Run linting: `npm run lint` -- takes 2-3 seconds after initial setup
- **FIRST TIME SETUP**: The first `npm run lint` will prompt for ESLint configuration:
  - Choose "Strict (recommended)" 
  - This takes 5-6 minutes to install additional packages (eslint@^9, eslint-config-next)
  - **NEVER CANCEL during ESLint setup. Set timeout to 10+ minutes.**
- After setup, subsequent lint runs are fast (2-3 seconds)
- **ALWAYS run `npm run lint` before committing changes** - the code must pass linting

## Validation and Testing

### Manual Validation Requirements
After making changes, **ALWAYS** test these complete user scenarios:

#### Core Navigation Testing
1. **Home Page Functionality**:
   - Navigate to http://localhost:3000
   - Verify the page loads with Trigon Engineering Society header
   - Test the About dropdown hover functionality (should show History, Social, Service, Leadership links)
   - Click on the Newsletter section and verify content loads
   - Test the Instagram link in footer

2. **Recruitment Page Functionality**:
   - Click "Recruitment" in navigation or navigate to http://localhost:3000/rush
   - Verify the page loads with hero image and rush events
   - Test the "Interest Form" button (links to external Google Form)
   - Verify all rush calendar events display correctly
   - Test FAQ section displays properly

3. **Navigation Flow**:
   - Test logo click returns to home page
   - Test all navbar links work (even if they go to placeholder pages)
   - Verify navigation is consistent between pages

### Common Issues and Troubleshooting
- **Image Loading**: Some images may show 400 errors in console - this is expected for missing image files and doesn't affect functionality
- **Console Warnings**: React DevTools messages are normal in development
- **Font Loading**: Google Fonts have been replaced with system fonts to avoid network restrictions

## Codebase Structure and Navigation

### Key Files and Directories
```
/
├── app/                     # Next.js app directory (main application)
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page component
│   └── rush/               # Recruitment page
│       └── page.tsx        # Rush/recruitment page component
├── components/             # Reusable React components
│   └── Navbar.tsx          # Main navigation component
├── public/                 # Static assets (images, icons)
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration for Tailwind
├── .eslintrc.json         # ESLint configuration (auto-generated)
└── README.md              # Basic Next.js documentation
```

### Important Implementation Details
- **Styling**: Uses Tailwind CSS v4 with PostCSS
- **Images**: Uses Next.js Image component for optimization
- **Navigation**: Dropdown menus use CSS hover states (no JavaScript)
- **Routing**: Uses Next.js App Router (app directory structure)
- **TypeScript**: Strict TypeScript configuration enabled

### Development Workflow
1. **Making Changes**:
   - Start development server: `npm run dev`
   - Edit files in `app/` or `components/`
   - Changes auto-reload in browser
   - Test functionality manually using the validation scenarios above

2. **Before Committing**:
   - Run `npm run lint` to check for code quality issues
   - Fix any linting errors (common issues: unused imports, unescaped apostrophes in JSX)
   - Run `npm run build` to ensure production build works
   - Test complete user scenarios as outlined above

3. **Common Code Patterns**:
   - Use `"use client"` directive for components with interactivity
   - Import Image from "next/image" for images
   - Import Link from "next/link" for internal navigation
   - Escape apostrophes in JSX text using `&apos;`

### Build Timing Expectations
- **npm install**: 15-20 seconds
- **npm run build**: 20-25 seconds (NEVER CANCEL - set 60+ minute timeout)
- **npm run lint**: 2-3 seconds after initial setup (first run: 5-6 minutes)
- **npm run dev**: 1-2 seconds to start
- **npm run start**: <1 second to start

### Critical Reminders
- **NEVER CANCEL builds or long-running commands** - always wait for completion
- **ALWAYS test complete user scenarios** after making changes
- **ALWAYS run linting** before committing changes
- **External dependencies**: Some image assets may be missing, causing 400 errors in console - this is expected and doesn't affect functionality