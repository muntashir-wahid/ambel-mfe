# Abmel: Monorepo Front-End Application

**Abmel** is a lightweight, high-quality front-end application built as a monorepo, demonstrating expertise in creating modular, scalable, and interactive websites using **React.js** and **TailwindCSS** with **module federation**. This application adheres to strict requirements, avoiding external packages while delivering a smooth, responsive experience optimized for performance.

## 🌟 Features

- **Modular Architecture:** Implemented using **module federation** with three distinct apps:
  1. **Host App**: Serves as the base/shell application, connecting the other modules.
  2. **Home App**: Contains the interactive design for the homepage.
  3. **Pricing App**: Implements the pricing page.
- **Interactive Animations:** TailwindCSS and raw JavaScript were used to create seamless, interactive animations.
- **Mobile-Responsive Design:** Designed with a mobile-first approach, ensuring usability across devices.
- **Reusable Components:** Common components shared across modules for consistency and maintainability.

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/), [React Router Dom](https://reactrouter.com/)
- **Monorepo Tooling:** Managed as a monorepo for modular and scalable development.
- **Module Federation:** Connecting apps via Webpack 5 module federation to ensure decoupled yet cohesive modules.
- **CSS + JavaScript:** For styling and animations without third-party dependencies.
- **Responsive Design:** Developed using custom TailwindCSS, adhering to modern design standards.

---

## 📂 Project Structure

```plaintext
Abmel/
├── host/       # Host application
├── home/       # Home page application
├── pricing/    # Pricing page application
├── test-reports/     # Lighthouse reports and performance optimization results
└── README.md       # Project documentation
```

## 🧪 Lighthouse Results

The application has been optimized to meet high-quality standards in:

- **Performance**: 40
- **Accessibility**: 82
- **Best Practices**: 96
- **SEO**: 82

Reports are available in the `test-reports/` directory for detailed insights.

![Lighthouse Test Report](/test-reports/lighthouse-test-report.png)

### 🔍 Performance Issue: Lighthouse Score at 40

The low Lighthouse performance score is due to using externally hosted images from **Figma**, stored on **Amazon S3**. These images are not optimized, leading to:

- **Large file sizes**, increasing load times.
- **External server latency**, slowing image delivery.
- **Lack of modern formats** like **WebP** for efficient rendering.
- **No caching**, forcing repeated downloads.

## 📦 Project Setup

Follow these steps to set up and run the Abmel project locally:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/muntashir-wahid/ambel-mfe
   cd abmel
   ```

2. Install Host app dependencies and run the app:

   ```bash
   cd host
   npm i
   npm start
   ```

3. Install Home app dependencies and run the app:

   ```bash
   cd home
   npm i
   npm start
   ```

4. Install Pricing app dependencies and run the app:
   ```bash
   cd pricing
   npm i
   npm start
   ```

### Project Screenshots

1. Home Page

![alt text](/test-reports/home-page-screenshot.png)

2. Pricing Page

![alt text](/test-reports/pricing-page-screenshot.png)
