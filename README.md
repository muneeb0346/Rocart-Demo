# 🛒 Rocart Marketplace Prototype

> 🚀 **Live Demo:** [View Deployment](https://rocart-demo.vercel.app/)

A high-fidelity, highly scalable frontend architecture engineered for a complex in-game item marketplace.

## 🧠 Engineering Challenge

The objective was to engineer a production-ready frontend prototype that proved technical viability for a high-traffic gaming marketplace. It required exact mathematical translation of a high-fidelity design system while establishing a robust, modular foundation staged for seamless future backend API integration.

## ⚙️ Technical Implementation

*   **Architecture:** Architected the core application using the Next.js App Router and TypeScript, structuring a highly modular component tree (incorporating dynamic elements like DropDownButton and NavBar) to ensure long-term scalability.
*   **Styling & Isolation:** Deliberately bypassed heavy CSS utility frameworks in favor of custom CSS Modules (`.module.css`). This approach guaranteed strict style isolation, prevented global scope leakage, and ensured highly maintainable, component-scoped UI logic.
*   **Performance Engineering:** Optimized rendering paths and localized asset delivery to achieve a flawless 100 Google Lighthouse score across Performance, Accessibility, Best Practices, and SEO.
*   **Type Safety:** Enforced strict type definitions and interfaces across all functional React components to guarantee runtime stability and secure a predictable developer experience for future state-management integrations.

## 🛠️ Tech Stack

*   **Framework:** Next.js (App Router), React
*   **Language:** TypeScript
*   **Styling Architecture:** CSS Modules (Strict Scope Isolation)
*   **Design Translation:** Pixel-Perfect Figma to Code

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
