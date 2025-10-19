# Cat Care & Education Hub

A modern, interactive web application providing cat owners with accessible, reliable educational content on essential care tasks, behavior understanding, and curated product recommendations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Package Manager:** npm with workspaces (monorepo)
- **Linting:** ESLint 8
- **Formatting:** Prettier 3
- **CMS:** Contentful (configured in future stories)
- **Deployment:** Vercel (configured in future stories)

## Project Structure

This is a monorepo using npm workspaces:

```
cat-care-hub/
├── apps/
│   └── web/              # Next.js application
├── packages/
│   └── shared/           # Shared TypeScript types
├── docs/                 # Documentation (PRD, architecture, stories)
└── package.json          # Root workspace configuration
```

## Prerequisites

- Node.js 18.17.0 or higher
- npm 9.x or higher

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cat-website-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Copy the example environment file in `apps/web/`:

   ```bash
   cp apps/web/.env.example apps/web/.env.local
   ```

   Update `apps/web/.env.local` with your Contentful credentials:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `CONTENTFUL_PREVIEW_ACCESS_TOKEN`

## Development Commands

All commands should be run from the project root:

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Development Workflow

1. Make changes in `apps/web/` or `packages/shared/`
2. Run `npm run format` to auto-format code
3. Run `npm run lint` to check for issues
4. Test with `npm run dev`
5. Build with `npm run build` before committing

## Architecture

See `docs/architecture.md` for detailed architecture documentation.

## User Stories

See `docs/stories/` for development user stories and implementation details.

## License

Private project - All rights reserved

## Contributing

This is a private project. For questions, contact the project maintainer.
