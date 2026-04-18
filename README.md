# Baby Growth Tracker 👶📈

An offline-first, client-side web application designed to precisely monitor and visualize infant growth metrics (weight, length, and head circumference) against established global standards. 

## ✨ Features

- **Offline-First & Private:** All data is stored locally in your browser's `localStorage` and optionally synced to your local file system. No external databases, no cloud servers, and no accounts required.
- **Precision Standards:** Visualizes measurements against World Health Organization (WHO) (0-24 months) and Centers for Disease Control (CDC) percentiles. Uses the exact Lambda-Mu-Sigma (LMS) formulas for high-precision Z-score and percentile calculations.
- **Timezone-Agnostic Engine:** A custom date-parsing engine calculates the baby's exact age (in days, weeks, and months) strictly by local calendar dates, preventing age-shifting bugs caused by browser UTC offsets.
- **Dynamic Unit Memory:** Seamlessly input and switch between metric and imperial units (Grams, Kilograms, Pounds, Centimeters, Inches). The system intelligently remembers your preferred input unit (e.g., if you log in `kg`, the history table displays `kg` as the primary metric).
- **Interactive Visualization:** Responsive line charts map the baby's growth trajectory against the P3, P15, P50, P85, and P97 percentile bounds.
- **File System Integration:** Leverages the modern File System Access API to automatically save localized cache backups and exports directly to a designated folder on your machine.
- **Data Portability:** Robust import and export support for CSV, JSON, and Excel (.xlsx) formats to ensure your data is never locked in.

## 🛠 Tech Stack

Designed as a lightweight Client-Side Monolith requiring no build tools or backend framework:
- **Core:** Vanilla HTML5, CSS3 (Native Variables), ES6+ JavaScript
- **Visualization:** [Chart.js (v4.4.1)](https://www.chartjs.org/) via CDN
- **Data Parsing:** [SheetJS (v0.18.5)](https://sheetjs.com/) via CDN

## 🚀 Getting Started

No installation or `npm` commands required. 

1. Clone this repository or download the ZIP file.
2. Extract the files to a local directory.
3. Open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox).
4. Click **+ Add Baby**, enter the initial profile data, and begin tracking.

## 🧪 Architecture & Quality Assurance

This application is designed with strict data integrity and QA testability in mind:
- **Decoupled Math Engine:** Core algorithmic computations (Z-scores, normal CDF approximations, and timezone-agnostic date math) are isolated from the DOM, allowing for straightforward unit validation.
- **State Management:** Application state is maintained in a centralized, easily verifiable JSON structure (`profiles` array), enabling rapid generation of mock data for automated UI or integration testing.
- **Edge-Case Handling:** Built-in safeguards handle leap-year calculations, extreme measurement outliers (Z-score clamping to prevent graph breakage), and duplicate-row protection during bulk file imports.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
