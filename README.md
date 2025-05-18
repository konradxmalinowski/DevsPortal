# 🌐 Developers Portal

**Figma**: []()

[English version](#-table-of-contents) 🇬🇧  
[Polska wersja](#-spis-treści) 🇵🇱

---

### English version

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Installation](#️-installation)
- [Pages Overview](#-pages-overview)
- [Folder structure](#-folder-structure)
- [Design](#-design)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [Instructions](#-instructions)
- [License](#license)
- [Queries](#queries-ai)

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

```
developers-portal/
│
├── README.md
├── package.json
├── vite.config.js
├── node_modules/                  # Auto-generated dependencies folder
│
├── api/                           # Backend PHP scripts
│   ├── checkAvailability.php
│   ├── contact.php
│   ├── database.php
│   ├── login.php
│   └── signup.php
│
├── public/                        # Public assets accessible directly
│   ├── zip_files/                 # For downloads, archives, etc.
│   └── ... (other public files)
│
└── src/                           # Main frontend source files
    ├── main.jsx                   # React entry point
    ├── assets/                    # Static resources (images, fonts, docs)
    │   ├── apple-icon.png
    │   ├── back.png
    │   ├── cookies.png
    │   ├── ghost-img.png
    │   ├── google-icon.png
    │   ├── Privacy.docx
    │   ├── Privacy.pdf
    │   ├── Terms.docx
    │   ├── Terms.pdf
    │   ├── Roboto-Medium.ttf
    │   └── app-images/            # Subfolder for app-related images
    │       └── ... (images)
    │
    ├── components/                  # React components
    │   ├── Websites/                # Pages and sections
    │   │   ├── HomePage/            # Main page
    │   │   │   ├── ContactForm.jsx
    │   │   │   ├── IntroSection.jsx
    │   │   │   └── ... (other components)
    │   │   ├── Login/               # Login/Register
    │   │   │   ├── LoginForm.jsx
    │   │   │   └── SignupForm.jsx
    │   │   ├── Portfolio/           # Portfolio
    │   │   │   ├── PortfolioGallery.jsx
    │   │   │   └── ProjectDetails.jsx
    │   │   ├── PasswordGenerator/   # Password generator
    │   │   │   ├── PasswordGenerator.jsx
    │   │   │   └── Options.jsx
    │   │   ├── Challenges/          # Programming challenges
    │   │   │   ├── ChallengesList.jsx
    │   │   │   └── ChallengeItem.jsx
    │   │   ├── AdminPanel/          # Admin panel
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── ContentManagement.jsx
    │   │   └── ... (other pages)
    │   ├── CommonComponents/        # Shared UI components (header, footer, buttons)
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── Button.jsx
    │   └── ... (other components)
    │
    ├── styles/                      # Global styles and variables
    │   ├── common-styles.css
    │   ├── variables/               # SCSS variables
    │   │   └── colors.scss
    │   └── functions/                 # SCSS mixins, functions
    │       └── mixins.scss
    │
    └── utils/                       # Utility functions
        └── handleScrollIntoView.js
```

---

## 🎨 Design

![Colors](README%20images/Colors.png)

### Colors

| Variable Name      | Hex Code    | Usage                                                     |
| ------------------ | ----------- | --------------------------------------------------------- |
| `$clr-words`       | `#956afa`   | Highlighted words or link color                           |
| `$clr-1-download`  | `#3a6eff`   | Primary download button color                             |
| `$clr-2-download`  | `#2b52c2`   | Secondary download button color                           |
| `$clr-3-download`  | `#3a6eff63` | Transparent download button hover (semi-transparent blue) |
| `$background-clr`  | `#08090a`   | Main background color                                     |
| `$background-clr2` | `#0e0f10`   | Secondary background color                                |

### Primary Font: [Robot](https://fonts.google.com/specimen/Roboto)

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

- (_**Homepage**_) When clicked, it takes you to the applications section <br>
  ![button see apps](README%20images/image-1.png)

- (_**Homepage**_) When clicked, it takes you to portfolio website <br>
  ![button more about author](README%20images/image-2.png)

- (_**Homepage**_) When clicked change visible button (right side) <br>
  ![buttons to choose app](README%20images/image-7.png)

- (_**Homepage**_) Every section when clicked expands description <br>
  ![faq section buttons](README%20images/image-5.png)

- (_**Homepage**_) If all inputs are filled, it sends message to me <br>
  ![send message button](README%20images/image-8.png)

<br>

- (_**Blog**_)
  It opens popup with blog's content

  - Normal state <br>
    ![readme more button](README%20images/image-9.png)
  - On mouse over <br>
    ![read more button hover](README%20images/image-10.png)

- (_**Blog**_) When clicked, it hides blog's popup <br>
  ![close button blog](README%20images/image-11.png)

<br>

- (_**Password generator**_) When clicked, it generates password <br>
  ![generate password button](README%20images/image-12.PNG)
- (_**Password generator**_) When clicked, it copies password to clipboard <br>
  ![alt text](README%20images/image-13.png)
- (_**Password generator**_) When clicked, it clears password field <br>
  ![alt text](README%20images/image-15.png)
- (_**Password generator**_) Successively, the first button decreases the password length by one, the second increases it by 1, the second sets the length to 0 <br>
  ![alt text](README%20images/image-16.png)
- (_**Password generator**_) It lets user to choose options for password (lowercase letters, uppercase letters, numbers, symbols) <br>
  ![alt text](README%20images/image-17.png)

<br>

- (_**Challenges**_) It takes user to external website <br>
  ![alt text](README%20images/image-18.png)

<br>

- (_**Quiz**_) It takes user to external website with author's quizzes <br>
  ![alt text](README%20images/image-19.png)

- (_**Quiz**_) It generates random question within the scope of the selected topic <br>
  ![alt text](README%20images/image-20.png)

<br>

- (_**Snippets**_) It downloads folder (format .zip) with ready simple codebases <br>
  ![alt text](README%20images/image-21.png)

<br>

- (_**Admin panel**_) It takes to website where you can reset password <br>
  ![alt text](README%20images/image-22.png)
- (_**Admin panel**_) It takes to website where you log in <br>
  ![alt text](README%20images/image-24.png)
- (_**Admin panel**_) It takes to website where you can create account <br>
  ![alt text](README%20images/image-25.png)

<br>

- (_**Sign up panel**_) It takes to the next step of register and finally create account <br>
  ![alt text](README%20images/image-26.png)
  <br>

- (_**Portfolio**_) First button takes to the author's github account, second to linkedIn <br>
  ![alt text](README%20images/image-27.png)

- (_**Portfolio**_) First button takes to the external website, second copies link to this website <br>
  ![alt text](README%20images/image-28.png)

- (_**Portfolio**_) If image is clicked it opens popup with bigger version of image <br>
  ![alt text](README%20images/image-29.png)

- (_**Portfolio**_) If button is clicked it show previous image
  ![alt text](README%20images/image-36.png)

- (_**Portfolio**_) If button is clicked it show next image <br>
  ![alt text](README%20images/image-37.png)

- (_**Portfolio**_) If button is clicked it opens popup with bigger version of image <br>
  ![alt text](README%20images/image-35.png)

- (_**Portfolio**_) If buttons is clicked, it open external app/website to write email <br>
  ![alt text](README%20images/image-39.png)

<br>

- (_**Portfolio**_) If buttons is clicked, sends email to reset password <br>
  ![alt text](README%20images/image-40.png)

<br>

- (_**Navigation**_) If buttons is clicked, it open navigation panel <br>
  ![alt text](README%20images/image-41.png)
- (_**Navigation**_) Buttons takes to website's pages <br>
  ![alt text](README%20images/image-42.png)

<br>

- (_**Navigation**_) Buttons take to social media accounts (instagram, linkedin, github) <br>
  ![alt text](README%20images/image-43.png)

#### Inputs (mobile and desktop)

- (_**Homepage**_) Inputs which should be filled with correct data to send message e-mail <br>
  ![alt text](README%20images/image-44.png)

<br>

- (_**Login page**_) Inputs which should be filled with correct data to log in <br>
  ![alt text](README%20images/image-45.png)
  <br>

- (_**Sign up page**_) Input which should be filled with correct data to sign up <br>
  ![alt text](README%20images/image-46.png)
  ![alt text](README%20images/image-47.png)
  ![alt text](README%20images/image-48.png)
  ![alt text](README%20images/image-49.png)
  ![alt text](README%20images/image-50.png)

---

##

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

### Query 22

> Dlaczego strona devsportal.ct8.pl (moja) w security headers dało ocenę F, jak mogę to naprawić?

---

<br>

### Wersja po polsku

## 📖 Spis treści

- [O projekcie](#-o-projekcie)
- [Funkcje](#-funkcje)
- [Technologie użyte](#️-technologie-użyte)
- [Instalacja](#-instalacja)
- [Przegląd stron](#-przeglad-stron)
- [Struktura folderów](#-struktura-folderow)
- [Design](#-design)
- [Wkład i współpraca](#-wklad-i-wspolpraca)
- [Kontakt](#-kontakt)
- [Instrukcje](#-instrukcje)
- [Licencja](#licencja)
- [Zapytania](#zapytania-ai)

---

## 📚 O projekcie

Developers Portal to nowoczesna i uniwersalna platforma stworzona z myślą o deweloperach, studentach i entuzjastach technologii. Stanowi kompleksowe miejsce do nauki, rozwoju umiejętności i narzędzi zwiększających produktywność. Łączy różnorodne funkcje, takie jak interaktywne quizy, generator kodu, blogi, wyzwania programistyczne oraz portfolio zawodowe.

Pomysł na projekt zrodził się z potrzeby centralnego miejsca, w którym deweloperzy mogą nie tylko się uczyć i ćwiczyć, ale też korzystać z narzędzi upraszczających codzienne zadania. Niezależnie od tego, czy jesteś początkującym, który chce poznać podstawy programowania, czy doświadczonym programistą szukającym zaawansowanych wyzwań, Developers Portal ma coś dla każdego.

Platforma skupia się na użyteczności, dostępności i responsywności, zapewniając płynne korzystanie na różnych urządzeniach. Wbudowany panel administracyjny umożliwia łatwe zarządzanie treściami, co czyni ją odpowiednią zarówno dla indywidualnych użytkowników, jak i zespołów.

Kluczowe cele projektu to:

- **Nauka i rozwój umiejętności**: Dostarczanie quizów, wyzwań i materiałów edukacyjnych.
- **Wydajność i produktywność**: Narzędzia jak generatory kodu, które oszczędzają czas.
- **Społeczność i współpraca**: Blogi i artykuły na temat nowoczesnych technologii i trendów.
- **Rozwój zawodowy**: Prezentacja portfolio autora, inspiracja i wsparcie w karierze.

Platforma ma potencjał rozwoju i planuje się rozbudowywać o nowe funkcje i rozszerzać zasięg.

---

## ✨ Funkcje

- **Interaktywne quizy**: Sprawdź swoją wiedzę z programowania i języków.
- **Generatory kodu**: Pobierz gotowe szablony projektów.
- **Blogi**: Czytaj artykuły o programowaniu, AI i nowoczesnych technologiach.
- **Wyzwania**: Rozwiązuj zadania programistyczne, aby podnosić swoje umiejętności.
- **Portfolio**: Przeglądaj projekty i umiejętności autora.
- **Panel administracyjny**: Zarządzanie treściami.
- **Responsywny design**: Dostosowany do wszystkich urządzeń.

---

## 🛠️ Technologie użyte

### Frontend

- **React** — do tworzenia dynamicznych komponentów i zarządzania stanem aplikacji.
- **JavaScript (ES6+)** — nowoczesne funkcje języka, np. destrukturyzacja, arrow functions.
- **CSS** — modularne i spójne style dla każdego komponentu.
- **HTML** — JSX kompilowany do HTML do tworzenia dynamicznych interfejsów.

### Backend

- **PHP** — logika serwerowa i komunikacja z bazą danych.
- **MySQL** — przechowywanie danych użytkowników, quizów i innych zasobów.

### Inne narzędzia

- **React Router** — nawigacja między stronami.
- **Vite** — szybki bundler i optymalizacja zasobów.
- **Eslint** — poprawia czytelność i wykrywa błędy.
- **Font Inter** — nowoczesna, czytelna typografia.

---

## ⚙️ Instalacja

- **_Aby uruchomić projekt online, odwiedź:_** [https://devsportal.ct8.pl](https://devsportal.ct8.pl)
- **_Aby uruchomić lokalnie:_**

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/twoj-uzytkownik/developers-portal.git
   ```
2. Wejdź do katalogu projektu:
   ```bash
   cd developers-portal
   ```
3. Zainstaluj Node.js (jeśli jeszcze nie masz)
4. Zainstaluj zależności:
   ```bash
   npm install
   npm install react-router-dom  # do nawigacji
   npm install eslint-plugin-react # opcjonalnie
   npm install eslint@latest       # opcjonalnie
   ```
5. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

---

## 📄 Przegląd stron

### Strony główne

- **Strona główna**: prezentacja platformy i jej funkcji.
- **Blog**: artykuły o programowaniu i AI.
- **Quizy**: tematyczne quizy z natychmiastową informacją zwrotną.
- **Generatory kodu**: szablony do pobrania.
- **Portfolio**: projekty i umiejętności autora.
- **Wyzwania**: zadania programistyczne.
- **Panel admina**: zarządzanie treściami.

### Strony pomocnicze

- **Logowanie/Rejestracja**: bezpieczne logowanie, walidacja danych.
- **Strona 404**: przyjazny komunikat z animacją.

---

## 📂 Struktura folderów

Projekt jest podzielony na następujące foldery i pliki, każdy służy do określonego celu:

```
developers-portal/
│
├── README.md
├── package.json
├── vite.config.js
├── node_modules/                  # automatycznie generowany folder zależności
│
├── api/                           # skrypty PHP backend
│   ├── checkAvailability.php
│   ├── contact.php
│   ├── database.php
│   ├── login.php
│   └── signup.php
│
├── public/                        # zasoby publiczne dostępne bezpośrednio
│   ├── zip_files/                 # do pobrań, archiwów
│   └── ... inne pliki publiczne
│
└── src/                           # główne pliki frontendowe
    ├── main.jsx                   # punkt wejścia React
    ├── assets/                    # statyczne zasoby (obrazy, czcionki, dokumenty)
    │   ├── apple-icon.png
    │   ├── back.png
    │   ├── cookies.png
    │   ├── ghost-img.png
    │   ├── google-icon.png
    │   ├── Privacy.docx
    │   ├── Privacy.pdf
    │   ├── Terms.docx
    │   ├── Terms.pdf
    │   ├── Roboto-Medium.ttf
    │   └── app-images/            # podfolder z obrazami aplikacji
    │       └── ... (zdjęcia)
    │
    ├── components/                  # komponenty React
    │   ├── Websites/                # strony i sekcje
    │   │   ├── HomePage/            # strona główna
    │   │   │   ├── ContactForm.jsx
    │   │   │   ├── IntroSection.jsx
    │   │   │   └── ... (inne komponenty)
    │   │   ├── Login/               # logowanie/rejestracja
    │   │   │   ├── LoginForm.jsx
    │   │   │   └── SignupForm.jsx
    │   │   ├── Portfolio/           # portfolio
    │   │   │   ├── PortfolioGallery.jsx
    │   │   │   └── ProjectDetails.jsx
    │   │   ├── PasswordGenerator/   # generator haseł
    │   │   │   ├── PasswordGenerator.jsx
    │   │   │   └── Options.jsx
    │   │   ├── Challenges/          # wyzwania programistyczne
    │   │   │   ├── ChallengesList.jsx
    │   │   │   └── ChallengeItem.jsx
    │   │   ├── AdminPanel/          # panel admina
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── ContentManagement.jsx
    │   │   └── ... (inne strony)
    │   ├── CommonComponents/        # wspólne komponenty UI
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── Button.jsx
    │   └── ... (inne komponenty)
    │
    ├── styles/                      # globalne style i zmienne
    │   ├── common-styles.css
    │   ├── variables/               # zmienne SCSS
    │   │   └── colors.scss
    │   └── functions/                 # mixiny, funkcje SCSS
    │       └── mixins.scss
    │
    └── utils/                       # funkcje pomocnicze
        └── handleScrollIntoView.js
```

---

## 🎨 Design

### Colors

![Colors](README%20images/Colors.png)

| Nazwa zmiennej     | Kod HEX     | Zastosowanie                                                     |
| ------------------ | ----------- | ---------------------------------------------------------------- |
| `$clr-words`       | `#956afa`   | Podkreślenia, linki                                              |
| `$clr-1-download`  | `#3a6eff`   | Główny kolor przycisku pobierania                                |
| `$clr-2-download`  | `#2b52c2`   | Drugorzędny kolor przycisku pobierania                           |
| `$clr-3-download`  | `#3a6eff63` | Przezroczysty hover przycisku pobierania (semi-transparent blue) |
| `$background-clr`  | `#08090a`   | Kolor głównego tła                                               |
| `$background-clr2` | `#0e0f10`   | Kolor tła drugorzędnego                                          |

### Czcionka główna: [Robot](https://fonts.google.com/specimen/Roboto)

---

## 🤝 Wkład i współpraca

Wkład w projekt jest mile widziany! Aby dołożyć swoją cegiełkę:

1. Forkuj repozytorium.
2. Utwórz nową gałąź:
   ```bash
   git checkout -b feature/nazwatwojegouwagi
   ```
3. Wprowadź zmiany i zatwierdź:
   ```bash
   git commit -m "Twoja wiadomość"
   ```
4. Wypchnij gałąź:
   ```bash
   git push origin feature/nazwatwojegouwagi
   ```
5. Utwórz pull request.

---

## 📬 Kontakt

- **Autor**: Konrad Malinowski
- **Email**: malinowski.konrad45@gmail.com
- **LinkedIn**: [Konrad Malinowski](https://www.linkedin.com/in/konrad-malinowski-894a36323/)

---

## 📝 Instrukcje

#### Przyciski (mobile i desktop)

- (_**Strona główna**_) Kliknięcie przenosi do sekcji aplikacji  
  ![przycisk zobacz aplikacje](README%20images/image-1.png)

- (_**Strona główna**_) Kliknięcie przenosi do portfolio  
  ![przycisk więcej o autorze](README%20images/image-2.png)

- (_**Strona główna**_) Kliknięcie zmienia widoczny przycisk (po prawej)  
  ![przyciski wyboru aplikacji](README%20images/image-7.png)

- (_**Strona główna**_) Kliknięcie sekcji rozwija opis  
  ![przyciski sekcji FAQ](README%20images/image-5.png)

- (_**Strona główna**_) Wypełnienie wszystkich inputów i wysyłka wiadomości  
  ![przycisk wyślij wiadomość](README%20images/image-8.png)

<br>

- (_**Blog**_) Otwarcie popup z treścią bloga

  - Stan normalny <br>
    ![przycisk czytaj więcej](README%20images/image-9.png)
  - Po najechaniu myszą <br>
    ![hover czytaj więcej](README%20images/image-10.png)

- (_**Blog**_) Kliknięcie zamyka popup <br>
  ![przycisk zamknij blog](README%20images/image-11.png)

<br>

- (_**Generator haseł**_) Kliknięcie generuje hasło <br>
  ![generuj hasło](README%20images/image-12.PNG)
- (_**Generator haseł**_) Kliknięcie kopiuje do schowka <br>
  ![kopiuj hasło](README%20images/image-13.png)
- (_**Generator haseł**_) Kliknięcie czyści pole <br>
  ![czyść pole](README%20images/image-15.png)
- (_**Generator haseł**_) Pierwszy przycisk zmniejsza długość, drugi zwiększa, trzeci ustawia na 0 <br>
  ![zmiana długości](README%20images/image-16.png)
- (_**Generator haseł**_) Umożliwia wybór opcji (małe, duże, cyfry, symbole) <br>
  ![opcje hasła](README%20images/image-17.png)

<br>

- (_**Wyzwania**_) Przenosi na zewnętrzną stronę <br>
  ![wyzwania](README%20images/image-18.png)

<br>

- (_**Quiz**_) Przenosi na zewnętrzną stronę z quizami autora <br>
  ![quiz](README%20images/image-19.png)

- (_**Quiz**_) Generuje losowe pytanie z wybranego tematu <br>
  ![pytanie](README%20images/image-20.png)

<br>

- (_**Snippets**_) Pobiera archiwum ZIP z gotowymi kodami <br>
  ![zip download](README%20images/image-21.png)

<br>

- (_**Panel admina**_) Strona do resetowania hasła <br>
  ![admin reset password](README%20images/image-22.png)
- (_**Panel admina**_) Strona logowania <br>
  ![admin login](README%20images/image-24.png)
- (_**Panel admina**_) Rejestracja nowego konta <br>
  ![admin signup](README%20images/image-25.png)

<br>

- (_**Rejestracja**_) Kolejny krok rejestracji i tworzenia konta <br>
  ![rejestracja krok 2](README%20images/image-26.png)
  <br>

- (_**Portfolio**_) Pierwszy przycisk do GitHub, drugi do LinkedIn <br>
  ![portfolio buttons](README%20images/image-27.png)

- (_**Portfolio**_) Pierwszy przycisk do zewnętrznej strony, drugi kopiuje link <br>
  ![kopiuj link](README%20images/image-28.png)

- (_**Portfolio**_) Kliknięcie na obrazek otwiera powiększenie <br>
  ![powiększenie obrazka](README%20images/image-29.png)

- (_**Portfolio**_) Kliknięcie przycisku pokazuje poprzedni obraz <br>
  ![poprzedni obraz](README%20images/image-36.png)

- (_**Portfolio**_) Kliknięcie przycisku pokazuje następny obraz <br>
  ![następny obraz](README%20images/image-37.png)

- (_**Portfolio**_) Kliknięcie powiększa obrazek w popupie <br>
  ![popup powiększenia](README%20images/image-35.png)

- (_**Portfolio**_) Kliknięcie przycisku otwiera e-mail do napisania <br>
  ![wysyłanie email](README%20images/image-39.png)

<br>

- (_**Portfolio**_) Kliknięcie przycisku wysyła email do resetowania hasła <br>
  ![reset password email](README%20images/image-40.png)

<br>

- (_**Nawigacja**_) Kliknięcie przycisku otwiera panel nawigacyjny <br>
  ![nawigacja](README%20images/image-41.png)
- (_**Nawigacja**_) Przyciski przenoszą na strony witryny <br>
  ![nawigacja linki](README%20images/image-42.png)

<br>

- (_**Nawigacja**_) Przyciski prowadzą do social mediów (Instagram, LinkedIn, GitHub) <br>
  ![social media](README%20images/image-43.png)

#### Inputs (mobile i desktop)

- (_**Strona główna**_) Inputy do wypełnienia poprawnymi danymi do wysłania wiadomości <br>
  ![inputs](README%20images/image-44.png)

<br>

- (_**Strona logowania**_) Inputy do poprawnego logowania <br>
  ![inputs login](README%20images/image-45.png)

<br>

- (_**Strona rejestracji**_) Input do poprawnych danych przy rejestracji <br>
  ![inputs rejestracja](README%20images/image-46.png)  
  ![inputs rejestracja 2](README%20images/image-47.png)  
  ![inputs rejestracja 3](README%20images/image-48.png)  
  ![inputs rejestracja 4](README%20images/image-49.png)  
  ![inputs rejestracja 5](README%20images/image-50.png)

---

## Licencja

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

### Zapytania AI

#### Zapytanie 1

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Inf.02.

---

#### Zapytanie 2

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Zapytanie 3

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Inf.04

---

#### Zapytanie 4

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Zapytanie 5

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Angielskiego B2

---

#### Zapytanie 6

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Zapytanie 7

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla Niemieckiego B1

---

#### Zapytanie 8

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Zapytanie 9

> Stwórz mi taki plik (wraz takim samym formatem i układem treści) dla It (podstaw)

---

#### Zapytanie 10

> Poprawne mają być różnie (raz a raz b tyle nie cały czas to samo)

---

#### Zapytanie 11

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

#### Zapytanie 12

> Opisz tę stronę po angielsku (jakie technologie, co wykorzystuje, co zawiera, itp)

---

#### Zapytanie 13

> A teraz dla tej strony stwórz plik terms.pdf w języku angielskim

---

#### Zapytanie 14

> Teraz privacy po angielsku

---

#### Zapytanie 15

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

#### Zapytanie 16

> Teraz (samą treść) opisz 4 tematy związane z AI też po angielsku i też w tej formie

---

### Zapytanie 17

> Napisz od nowa plik readme.md. Nowy plik ma zawierać:, uzyte technologie, strony (główne pliki .jsx zawarte w header i footer i inne), kolory, czcionki/czcionkę, treść w skrócie, skąd pomysł na aplikacje.

---

### Zapytanie 18

> Jak zrobić efekt na stronie, że jeśli dojadę do pewnego elementu to on lekko z dołu się pojawia? Wiesz o co chodzi? Można samy js bez biblioteki?

---

### Zapytanie 19

> Popraw accessibility tych komponentów, tzn. pododawaj aria labels

---

### Zapytanie 20

> Popraw kod php

---

### Zapytanie 21

> Za pomocą jakiej technologii mogę wysyłać maila ze strony

---

### Zapytanie 22

> Dlaczego strona devsportal.ct8.pl (moja) w security headers dało ocenę F, jak mogę to naprawić?

---
