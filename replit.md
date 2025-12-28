# Shutter Surprise Photography Portfolio

## Overview

A minimalist photography portfolio website for "Shutter Surprise" featuring a monochrome aesthetic. The site showcases photography work through a gallery, provides information about the photographer, and includes contact/booking functionality. Built with React frontend and Express backend, designed with a strict black, white, and grey color palette.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll animations
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Storage**: In-memory storage (`MemStorage` class) for inquiries - no database connection required for this static portfolio site
- **Development**: Vite dev server with HMR integration

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components (Navigation, Footer, PhotoGrid)
│   │   ├── pages/       # Route pages (Home, About, Gallery, Contact, Book)
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route registration
│   └── storage.ts    # In-memory data storage
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle schema definitions
│   └── routes.ts     # API route type definitions
```

### Key Design Decisions
1. **Monochrome Design System**: CSS variables in `index.css` enforce strict black/white/grey palette with sharp corners (0px border-radius)
2. **Static Gallery**: Images are hardcoded in frontend components (no backend fetching for gallery)
3. **Minimal Backend**: Only contact form requires API (`/api/inquiries`)
4. **Type Safety**: Zod schemas shared between client and server for validation
5. **Component Library**: shadcn/ui provides accessible, customizable UI primitives

### Pages
- `/` - Home with hero section and photo grid
- `/gallery` - Full gallery view
- `/about` - Photographer bio
- `/contact` - Contact form (submits to `/api/inquiries`)
- `/book` - Appointment booking form

## External Dependencies

### UI & Animation
- **shadcn/ui**: Component library built on Radix UI primitives
- **Framer Motion**: Animation library for transitions
- **Lucide React**: Icon library

### Forms & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation (shared client/server)
- **@hookform/resolvers**: Zod integration for React Hook Form

### Data & State
- **TanStack React Query**: Server state management
- **Drizzle ORM**: Database schema definitions (schema only, no active DB connection)

### Fonts
- Inter (sans-serif)
- Playfair Display (serif)
- Loaded via Google Fonts

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across the stack