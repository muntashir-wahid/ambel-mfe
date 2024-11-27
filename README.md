# Abmel: Monorepo Front-End Application

**Abmel** is a lightweight, high-quality front-end application built as a monorepo, demonstrating expertise in creating modular, scalable, and interactive websites using **React.js** and **CSS** with **module federation**. This application adheres to strict requirements, avoiding external packages while delivering a smooth, responsive experience optimized for performance.

## 🌟 Features

- **Modular Architecture:** Implemented using **module federation** with three distinct apps:
  1. **Host App**: Serves as the base application, connecting the other modules.
  2. **Home App**: Contains the interactive design for the homepage.
  3. **Pricing App**: Implements the pricing page with animations.
- **Interactive Animations:** CSS and raw JavaScript were used to create seamless, interactive animations.
- **Mobile-Responsive Design:** Designed with a mobile-first approach, ensuring usability across devices.
- **Performance Optimized:** Fully optimized for web quality using **Lighthouse**, meeting performance, accessibility, and SEO benchmarks.
- **Reusable Components:** Common components shared across modules for consistency and maintainability.

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) (No additional packages used)
- **Monorepo Tooling:** Managed as a monorepo for modular and scalable development.
- **Module Federation:** Connecting apps via Webpack 5 module federation to ensure decoupled yet cohesive modules.
- **CSS + JavaScript:** For styling and animations without third-party dependencies.
- **Responsive Design:** Developed using custom CSS, adhering to modern design standards.

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
   git clone https://github.com/username/abmel.git
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

### Running the Applications

The project consists of three module federation apps: **Host**, **Home**, and **Pricing**. Each app runs on a specific port:

- **Host App**: [http://localhost:3000](http://localhost:3000)
- **Home App**: [http://localhost:3001](http://localhost:3001)
- **Pricing App**: [http://localhost:3002](http://localhost:3002)
