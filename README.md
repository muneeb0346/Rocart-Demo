# 🛒 Rocart Marketplace Prototype

> 🚀 **Live Demo:** [View Deployment](https://rocart-demo.vercel.app/)

A high-fidelity, highly scalable frontend architecture engineered for a complex in-game item marketplace.

## 💡 The Backstory: The Technical Demonstration
Not every project is meant to be a sprawling, multi-year application. Sometimes, the goal is simply to prove architectural competence quickly and cleanly. 

I built this project as a rapid Technical Capability Demonstration for a client to prove my proficiency with the Next.js App Router and modern React architecture. The objective was to take a high-fidelity design for a gaming marketplace and translate it into a perfectly structured, production-ready frontend prototype. It stands as a clean, foundational boilerplate that demonstrates how I structure component trees, enforce strict type safety, and manage scoped styling before integrating complex backend APIs.

## 🚀 The Execution & Features
*   **Rapid Prototyping:** Quickly translated a high-fidelity design system into a working Next.js application to establish technical trust with a client.
*   **Component Co-location:** Utilized the Next.js App Router's flexibility to co-locate modular UI components directly within the `app` directory for highly cohesive route segments.
*   **Strict Style Isolation:** Deliberately bypassed heavy CSS utility frameworks in favor of custom CSS Modules (`.module.css`). This approach guaranteed strict style isolation and prevented global scope leakage.
*   **Performance Engineering:** Optimized rendering paths and localized asset delivery to achieve a flawless 100 Google Lighthouse score across Performance, Accessibility, Best Practices, and SEO.

## 🧠 Engineering & Technical Implementation

*   **Architecture & Scalability:** Architected the core application using the Next.js App Router and TypeScript, structuring a highly modular component tree (incorporating dynamic elements like `DropDownButton` and `NavBar`) to ensure long-term scalability.
*   **Type Safety:** Enforced strict type definitions and interfaces across all functional React components to guarantee runtime stability and secure a predictable developer experience for future state-management integrations.
*   **Maintainable UI Logic:** Ensured that the application is staged for seamless future backend API integration by keeping presentational components strictly decoupled from global state.

## 🛠️ Tech Stack

*   **Framework:** Next.js (App Router), React
*   **Language:** TypeScript
*   **Styling Architecture:** CSS Modules (Strict Scope Isolation)
*   **Design Translation:** Pixel-Perfect Figma to Code

## 📂 Directory Structure

```text
Rocart-Demo/
├── public/                 # Static assets
│   ├── icons/              # Categorized UI icons
│   └── images/             # Game banners and marketplace imagery
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── components/     # Co-located route-specific components
│   │   │   ├── DropDownButton.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── SiteButton.tsx
│   │   │   └── ...         # Accompanying .module.css files for strict scoping
│   │   ├── globals.css     # Global theme variables
│   │   ├── layout.tsx      # Root application layout
│   │   └── page.tsx        # Main marketplace landing view
│   └── styles/             # Base styling configurations
│       ├── reset.css       # Cross-browser style normalization
│       └── source-code.css # Baseline typography and element styles
├── next.config.ts          # Next.js framework configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # Strict TypeScript configuration

```

## 💻 Local Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
   git clone https://github.com/muneeb0346/Rocart-Demo.git
   cd Rocart-Demo

```

2. **Install dependencies:**

```bash
   npm install

```

3. **Run the development server:**

```bash
   npm run dev

```

4. **Build for production:**

```bash
   npm run build
   npm run start

```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) with your browser to see the result.
