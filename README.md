# 🌐 Developers Portal

[English version](#-table-of-contents) 🇬🇧  
[Polska wersja](#-spis-treści) 🇵🇱

---

### English version

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Pages Overview](#-pages-overview)
- [Design](#-design)
  - [Colors](#-colors)
  - [Typography](#-typography)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [Instructions](#-instructions)

---

## 📚 About the Project

Developers Portal is a modern and versatile platform designed to cater to the needs of developers, students, and technology enthusiasts. The platform serves as a one-stop solution for learning, skill enhancement, and productivity tools. It combines a variety of features, including interactive quizzes, code generators, blogs, programming challenges, and a professional portfolio showcase.

The idea behind the project stems from the need for a centralized hub where developers can not only learn and practice but also access tools that simplify their daily tasks. Whether you're a beginner looking to explore programming concepts or an experienced developer seeking advanced challenges, Developers Portal offers something for everyone.

The platform is built with a focus on usability, accessibility, and responsiveness, ensuring a seamless experience across all devices. It also includes an admin panel for easy content management, making it suitable for both individual users and teams.

Key objectives of the project include:

- **Learning and Skill Development**: Providing resources like quizzes and challenges to help users improve their programming knowledge.
- **Efficiency and Productivity**: Offering tools like code generators to save time and streamline development workflows.
- **Community and Collaboration**: Encouraging knowledge sharing through blogs and articles on modern technologies and trends.
- **Professional Growth**: Showcasing the author's portfolio to inspire and guide users in their career paths.

The platform is designed to grow and evolve, with plans to integrate more features and expand its reach to a broader audience.

---

## ✨ Features

- **Interactive Quizzes**: Test your knowledge in programming and languages.
- **Code Generators**: Download ready-to-use project templates.
- **Blogs**: Read articles on programming, AI, and modern technologies.
- **Challenges**: Solve programming tasks to improve your skills.
- **Portfolio**: Explore the author's projects and skills.
- **Admin Panel**: Manage content with ease.
- **Responsive Design**: Optimized for all devices.

---

## 🛠️ Technologies Used

### Frontend

- **React**: For building dynamic components and managing application state.
- **JavaScript (ES6+)**: Modern language features like destructuring, arrow functions, and spread operators.
- **CSS**: Modular and consistent styles for each component.
- **HTML**: JSX compiled to HTML for dynamic user interfaces.

### Backend

- **PHP**: Server-side logic and database communication.
- **MySQL**: Storing user data, quizzes, and other resources.

### Other Tools

- **React Router**: Navigation between pages.
- **Vite**: Fast bundling and resource optimization.
- **Eslint**: More readable and easer to understand errors
- **Font Inter**: Clean and modern typography.

---

## ⚙️ Installation

- **_To run project online visit website:_** [https://devsportal.ct8.pl](https://devsportal.ct8.pl)
  <br>
- **_To run project locally:_**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/developers-portal.git
   ```
2. Navigate to the project directory:

   ```bash
   cd developers-portal
   ```

3. Download and install nodejs
   <br>
4. Install dependencies:

   ```bash
   npm install

   #For navigation
   npm install react-router-dom

   # optional
   npm install eslint-plugin-react
   npm install eslint@latest

   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📄 Pages Overview

### Main Pages

- **Home Page**: Introduction to the platform and its features.
- **Blog**: Articles on programming and AI.
- **Quizzes**: Thematic quizzes with instant feedback.
- **Code Generators**: Downloadable project templates.
- **Portfolio**: Author's projects and skills.
- **Challenges**: Programming tasks for practice.
- **Admin Panel**: Content management for administrators.

### Utility Pages

- **Login/Registration**: Secure authentication with data validation.
- **404 Page**: Friendly error message with animations.

---

## 📂 Folder Structure

The project is organized into the following folders and files, each serving a specific purpose:

### Root Directory

- **README.md**: Documentation for the project, including installation instructions, features, and an overview.
- **package.json**: Contains metadata about the project and its dependencies.
- **vite.config.js**: Configuration file for the Vite bundler.
- **node_modules/**: Auto-generated folder containing all installed dependencies.

---

### 📁 `src/`

The main source folder for the frontend application.

#### 📄 `main.jsx`

- Entry point for the React application. It initializes the app and renders it into the DOM.

#### 📁 `assets/`

- Contains static assets like images, fonts, and documents.
  - **apple-icon.png**: Icon for Apple devices.
  - **back.png**: Back button image.
  - **cookies.png**: Image related to cookies.
  - **ghost-img.png**: Ghost-themed image.
  - **google-icon.png**: Google icon for authentication or links.
  - **Privacy.docx** & **Privacy.pdf**: Privacy policy documents.
  - **Terms.docx** & **Terms.pdf**: Terms and conditions documents.
  - **Roboto-Medium.ttf**: Font file for the "Roboto" typeface.
  - **Apps images/**: Subfolder for application-related images.

#### 📁 `Components/`

- Contains all React components, organized by feature or page.

##### 📁 `Websites/`

- **Home Page/**: Components for the homepage, including contact forms and introductory sections.
- **Login & Signup/**: Components and styles for user authentication.
- **Portfolio/**: Components showcasing the author's projects, skills, and gallery.
- **Password Generator/**: Components for generating secure passwords.
- **Challenges/**: Components for programming challenges.
- **Admin Panel/**: Components for managing the platform's content.

##### 📁 `Common components/`

- **Header/**: The header component used across all pages.
- **Footer/**: The footer component used across all pages.
- **Button/**: Reusable button components.

#### 📁 `Global styles/`

- Contains global CSS and SCSS files for consistent styling across the application.
  - **common-styles.css**: General styles for the entire application.
  - **variables/**: SCSS variables for colors, fonts, and other reusable values.
  - **functions/**: SCSS mixins and functions for styling.

#### 📁 `utils/`

- Utility functions used throughout the application.
  - **handleScrollIntoView.js**: Handles smooth scrolling and animations when elements come into view.

---

### 📁 `api/`

The backend folder containing PHP scripts for server-side functionality.

- **checkAvailability.php**: Checks the availability of resources or usernames.
- **contact.php**: Handles contact form submissions and sends emails.
- **database.php**: Manages database connections and queries.
- **login.php**: Handles user login requests.
- **signup.php**: Handles user registration.

---

### 📁 `public/`

- Contains public assets that are directly accessible, zip files

---

This folder structure ensures a clean and modular organization, making the project easy to navigate and maintain.

---

## 🎨 Design

### Colors

| Color                   | Hex Code          | Usage                              |
| ----------------------- | ----------------- | ---------------------------------- |
| **Dark Gray**           | `#08090a`         | Main background color              |
| **Graphite**            | `#0e0f10`         | Section backgrounds                |
| **Dark Graphite**       | `#0a0b0c`         | Additional background shade        |
| **Input Background**    | `#1a1c1d`         | Input fields background            |
| **Button Text**         | `#ffffff`         | Button text color                  |
| **Header Background**   | `#09090a`         | Header background                  |
| **Menu Background**     | `#18191a`         | Menu background                    |
| **Neutral Gray**        | `#828790`         | Neutral gray for text              |
| **Primary Blue**        | `#3a6eff`         | Primary button color               |
| **Secondary Blue**      | `#2b52c2`         | Secondary button color             |
| **Transparent Blue**    | `#3a6eff63`       | Transparent button hover           |
| **Light Gray**          | `#c5c5c6`         | Light gray for text                |
| **Black**               | `#181717`         | Black for text or backgrounds      |
| **White**               | `#ffffff`         | White for text on dark backgrounds |
| **Gradient Start**      | `#a78bfa`         | Start color for gradients          |
| **Gradient End**        | `#e2e8f0`         | End color for gradients            |
| **Shadow**              | `#181717`         | Shadow color                       |
| **Blue Hover**          | `rgb(0, 25, 138)` | Hover effect for blue elements     |
| **Light Black**         | `#26282e`         | Light black for subtle backgrounds |
| **Horizontal Rule**     | `#1b1d1f`         | Horizontal rule color              |
| **Terminal Border**     | `#ffffff3e`       | Border color for terminal elements |
| **Terminal Background** | `#1c1c1c`         | Background color for terminal      |
| **Terminal Header**     | `#343434`         | Header background for terminal     |
| **Partners Border**     | `#1b1d1f`         | Partners section border            |
| **Partners Text**       | `#956afa`         | Partners section text              |
| **Highlighted Words**   | `#956afa`         | Highlighted words or links         |

### Typography

- **Primary Font**: [Robot](https://fonts.google.com/specimen/Roboto)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📬 Contact

- **Author**: Konrad Malinowski
- **Email**: malinowski.konrad45@gmail.com
- **LinkedIn**: [Konrad Malinowski](https://www.linkedin.com/in/konrad-malinowski-894a36323/)

---

## 📝 Instructions

#### Buttons (mobile and desktop)

- (_**Homepage**_) When clicked, it takes you to the applications section
  ![alt text](README%20images/image-1.png)

- (_**Homepage**_) When clicked, it takes you to portfolio website
  ![alt text](README%20images/image-2.png)

- (_**Homepage**_) When clicked change visible button (right side)
  ![alt text](README%20images/image-7.png)

- (_**Homepage**_) Every section when clicked expands description
  ![alt text](README%20images/image-5.png)

- (_**Homepage**_) If all inputs are filled, it sends message to me
  ![alt text](README%20images/image-8.png)

<br>

- (_**Blog**_)
  It opens popup with blog's content

  - Normal state
    ![alt text](README%20images/image-9.png)
  - On mouse over
    ![alt text](README%20images/image-10.png)

- (_**Blog**_) When clicked, it hides blog's popup
  ![alt text](README%20images/image-11.png)

<br>

- (_**Password generator**_) When clicked, it generates password
  ![alt text](README%20images/image-12.png)
- (_**Password generator**_) When clicked, it copies password to clipboard
  ![alt text](README%20images/image-13.png)
- (_**Password generator**_) When clicked, it clears password field
  ![alt text](README%20images/image-15.png)
- (_**Password generator**_) Successively, the first button decreases the password length by one, the second increases it by 1, the second sets the length to 0
  ![alt text](README%20images/image-16.png)
- (_**Password generator**_) It lets user to choose options for password (lowercase letters, uppercase letters, numbers, symbols)
  ![alt text](README%20images/image-17.png)

<br>

- (_**Challenges**_) It takes user to external website
  ![alt text](README%20images/image-18.png)

<br>

- (_**Quiz**_) It takes user to external website with author's quizzes
  ![alt text](README%20images/image-19.png)

- (_**Quiz**_) It generates random question within the scope of the selected topic
  ![alt text](README%20images/image-20.png)

<br>

- (_**Snippets**_) It downloads folder (format .zip) with ready simple codebases
  ![alt text](README%20images/image-21.png)

<br>

- (_**Admin panel**_) It takes to website where you can reset password
  ![alt text](README%20images/image-22.png)
- (_**Admin panel**_) It takes to website where you log in
  ![alt text](README%20images/image-24.png)
- (_**Admin panel**_) It takes to website where you can create account
  ![alt text](README%20images/image-25.png)

<br>

- (_**Sign up panel**_) It takes to the next step of register and finally create account
  ![alt text](README%20images/image-26.png)
  <br>

- (_**Portfolio**_) First button takes to the author's github account, second to linkedIn
  ![alt text](README%20images/image-27.png)

- (_**Portfolio**_) First button takes to the external website, second copies link to this website
  ![alt text](README%20images/image-28.png)

- (_**Portfolio**_) If image is clicked it opens popup with bigger version of image
  ![alt text](README%20images/image-29.png)

- (_**Portfolio**_) If button is clicked it show previous image
  ![alt text](README%20images/image-36.png)

- (_**Portfolio**_) If button is clicked it show next image
  ![alt text](README%20images/image-37.png)

- (_**Portfolio**_) If button is clicked it opens popup with bigger version of image
  ![alt text](README%20images/image-35.png)

- (_**Portfolio**_) If buttons is clicked, it open external app/website to write email
  ![alt text](README%20images/image-39.png)

<br>

- (_**Portfolio**_) If buttons is clicked, sends email to reset password
  ![alt text](README%20images/image-40.png)

<br>

- (_**Navigation**_) If buttons is clicked, it open navigation panel
  ![alt text](README%20images/image-41.png)
- (_**Navigation**_) Buttons takes to website's pages
  ![alt text](README%20images/image-42.png)

<br>

- (_**Navigation**_) Buttons take to social media accounts (instagram, linkedin, github)
  ![alt text](README%20images/image-43.png)

#### Inputs (mobile and desktop)

- (_**Homepage**_) Inputs which should be filled with correct data to send message e-mail
  ![alt text](README%20images/image-44.png)

<br>

- (_**Login page**_) Inputs which should be filled with correct data to log in
  ![alt text](README%20images/image-45.png)
  <br>

- (_**Sign up page**_) Input which should be filled with correct data to sign up
  ![alt text](README%20images/image-46.png)
  ![alt text](README%20images/image-47.png)
  ![alt text](README%20images/image-48.png)
  ![alt text](README%20images/image-49.png)
  ![alt text](README%20images/image-50.png)

---

## License

```
MIT License
Copyright (c) 2025 Konrad Malinowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

### Queries AI

#### Query 1

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Inf.02.

---

#### Query 2

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Query 3

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Inf.04

---

#### Query 4

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Query 5

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Angielskiego B2

---

#### Query 6

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Query 7

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Niemieckiego B1

---

#### Query 8

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Query 9

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla It (podstaw)

---

#### Query 10

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Query 11

> Wygeneruj ikonkę dla mojej strony (portal deweloperów). Kolory strony:

```css
:root {
  --background-clr: #08090a;
  --background-clr2: #0e0f10;
  --background-clr3: #0a0b0c;
  --inputs-clr: #141516;
  --buttons-clr: #ffffff;
  --header-clr: #09090a;
  --menu-clr: #18191a;
  --grey-clr: #828790;
  --clr-green-50: #05b263;
  --clr-green-100: #18361e;
  --clr-green-200: #112a16;
}
```

---

#### Query 12

> Opisz tę stronę po angielsku (jakie technologie, co wykorzystuje, co zawiera, itp)

---

#### Query 13

> A teraz dla tej strony stwórz plik terms.pdf w języku angielskim

---

#### Query 14

> Teraz privacy po angielsku

---

#### Query 15

> Napisz mi treść takiego bloga nr 1 (po angielsku):

```js
const CONTENT_BLOG1 = ``;

class Blog {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

const blog1 = new Blog('AI vs programming');

export const blogs = [];
```

---

#### Query 16

> Teraz (samą treść) opisz 4 tematy związane z AI też po angielsku i też w tej formie

---

### Query 17

> Napisz od nowa plik readme.md. Nowy plik ma zawierać:, uzyte technologie, strony (główne pliki .jsx zawarte w header i footer i inne), kolory, czcionki/czcionkę, treść w skrócie, skąd pomysł na aplikacje.

---

### Query 18

> Jak zrobić efekt na stronie, że jeśli dojadę do pewnego elementu to on lekko z dołu się pojawia? Wiesz o co chodzi? Można samy js bez biblioteki?

---

### Query 19

> Popraw accessibility tych komponentów, tzn. pododawaj aria labels

---

### Query 20

> Popraw kod php

---

### Query 21

> Za pomocą jakiej technologii mogę wysyłać maila ze strony

---

<br>

### Wersja polska

## 📖 Spis Treści

- [O Projekcie](#-o-projekcie)
- [Funkcje](#-funkcje)
- [Wykorzystane Technologie](#-wykorzystane-technologie)
- [Instalacja](#-instalacja)
- [Przegląd Stron](#-przegląd-stron)
- [Projekt Graficzny](#-projekt-graficzny)

  - [Kolory](#-kolory)
  - [Typografia](#-typografia)

- [Współtworzenie](#-współtworzenie)
- [Kontakt](#-kontakt)
- [Instrukcje](#-instrukcje)

---

## 📚 O Projekcie

Developers Portal to nowoczesna i wszechstronna platforma zaprojektowana z myślą o programistach, studentach i entuzjastach technologii. Stanowi kompleksowe rozwiązanie do nauki, rozwijania umiejętności i korzystania z narzędzi zwiększających produktywność. Łączy w sobie wiele funkcji, takich jak interaktywne quizy, generatory kodu, blogi, wyzwania programistyczne oraz profesjonalne portfolio.

Pomysł na projekt narodził się z potrzeby stworzenia centralnego miejsca, w którym programiści mogliby nie tylko uczyć się i ćwiczyć, ale także korzystać z narzędzi ułatwiających codzienną pracę. Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z programowaniem, czy jesteś zaawansowanym deweloperem szukającym wyzwań – Developers Portal ma coś dla każdego.

Platforma została stworzona z naciskiem na użyteczność, dostępność i responsywność, co zapewnia płynne działanie na wszystkich urządzeniach. Dodatkowo zawiera panel administratora umożliwiający łatwe zarządzanie treścią, co sprawia, że nadaje się zarówno dla użytkowników indywidualnych, jak i zespołów.

Główne cele projektu:

- **Nauka i rozwój umiejętności**: Dostarczanie zasobów, takich jak quizy i wyzwania, wspomagających rozwój wiedzy programistycznej.
- **Efektywność i produktywność**: Udostępnianie narzędzi, np. generatorów kodu, które oszczędzają czas i upraszczają pracę.
- **Społeczność i współpraca**: Promowanie dzielenia się wiedzą poprzez blogi i artykuły o nowoczesnych technologiach i trendach.
- **Rozwój zawodowy**: Prezentacja portfolio autora jako inspiracja i wskazówka w planowaniu ścieżki kariery.

Platforma została zaprojektowana tak, aby mogła się rozwijać i wzbogacać o nowe funkcje, a także docierać do coraz szerszej grupy odbiorców.
