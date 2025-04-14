### Użyte technologie

1. **React**: Aplikacja została zbudowana przy użyciu Reacta, popularnej biblioteki JavaScript do tworzenia interfejsów użytkownika. Wykorzystuje funkcjonalne komponenty i składnię JSX do renderowania dynamicznej zawartości.
2. **JavaScript (ES6+)**: Kod korzysta z nowoczesnych funkcji JavaScript, takich jak funkcje strzałkowe, destrukturyzacja i operator rozproszenia (spread).
3. **CSS**: Stylizacja jest realizowana za pomocą oddzielnych plików CSS (np. `AdminPanel.css`, `Blog.css`), importowanych do każdego komponentu dla stylów o ograniczonym zasięgu.
4. **HTML**: Używany pośrednio przez JSX, który kompiluje się do elementów HTML w przeglądarce.
5. **Importowanie plików**: Aplikacja wykorzystuje moduły ES6 do zarządzania zależnościami, takimi jak komponenty, zasoby (obrazy) i arkusze stylów.

### Struktura i komponenty

Aplikacja składa się z wielokrotnie używanych, modułowych komponentów, zorganizowanych w przejrzystą strukturę katalogów. Oto główne sekcje i ich cele:

1. **Wspólne komponenty**:

   - **`Header.jsx`**: Wielokrotnie używany nagłówek, importowany na różne strony (np. `AdminPanel`, `Blog`, `App`).
   - **`Footer.jsx`**: Wielokrotnie używana stopka, podobnie obecna na wielu stronach.
   - **`Button.jsx`**: Dostosowalny komponent przycisku, wykorzystywany np. w `CodeGenerator` do linków pobierania.

2. **Strony**:
   - **`AdminPanel`**: Prosta strona wyświetlająca tekst "AdminPanel" między nagłówkiem a stopką.
   - **`Blog`**: Podstawowa strona blogowa z treścią "Blog", również otoczona nagłówkiem i stopką.
   - **`Challenges`**: Strona pokazująca treść "Challenges" w tej samej strukturze nagłówek-stopka.
   - **`CodeGenerators`**: Bardziej złożona strona oferująca listę pobieralnych fragmentów kodu (np. "Clean React Project", "Vanilla JS Project", "Basic Clock") prezentowanych jako komponenty `CodeGenerator`. Każdy fragment zawiera etykietę, link do pliku ZIP i stylizowany przycisk.
   - **`App`**: Główna strona aplikacji, pełniąca rolę strony startowej. Zawiera sekcje `About`, `Partners` i `Applications`, wraz z nagłówkiem i stopką.

### Funkcje i zawartość

- **Modułowa konstrukcja**: Aplikacja kładzie nacisk na ponowne wykorzystanie komponentów, takich jak `Header`, `Footer`, `Button` i `Partner`, dzielonych między strony.
- **Dynamiczne renderowanie**: Komponenty `Partners` i `CodeGenerators` używają tablic i mapowania do dynamicznego generowania zawartości (np. logo partnerów, pobieralne fragmenty kodu).
- **Elementy interaktywne**: Przyciski pobierania w `CodeGenerators` linkują do plików ZIP, a komponent `AppOption` sugeruje klikalne opcje z dostosowalnymi stylami.
- **Układ responsywny**: Klasy CSS, takie jak `wrapper`, `snippets-wrapper` czy `partners-wrapper`, wskazują na fokus na układ i stylizację, być może z myślą o responsywności (choć pliki CSS nie zostały podane).
- **Tematyka treści**: Strona zdaje się być skierowana do programistów lub entuzjastów technologii, oferując fragmenty kodu, blog, wyzwania i prezentację znanych partnerów technologicznych (np. OpenAI, Microsoft, Apple).

### Przeznaczenie

Strona internetowa wydaje się być portfolio, platformą edukacyjną lub centrum zasobów dla programistów. Oferuje:

- Pobieralne szablony kodu (`CodeGenerators`).
- Informacje o partnerstwach z wiodącymi firmami technologicznymi (`Partners`).
- Dodatkowe sekcje, takie jak blog i wyzwania do tutoriali lub angażowania społeczności.

### Zapytania AI

- [Zapytanie1](#zapytanie-1)
- [Zapytanie2](#zapytanie-2)
- [Zapytanie3](#zapytanie-3)
- [Zapytanie4](#zapytanie-4)
- [Zapytanie5](#zapytanie-5)
- [Zapytanie6](#zapytanie-6)
- [Zapytanie7](#zapytanie-7)
- [Zapytanie8](#zapytanie-8)
- [Zapytanie9](#zapytanie-9)
- [Zapytanie10](#zapytanie-10)
- [Zapytanie11](#zapytanie-11)
- [Zapytanie12](#zapytanie-12)
- [Zapytanie13](#zapytanie-13)
- [Zapytanie14](#zapytanie-14)
- [Zapytanie15](#zapytanie-15)
- [Zapytanie16](#zapytanie-16)
- [Zapytanie17](#zapytanie-17)
- [Zapytanie18](#zapytanie-18)
- [Zapytanie19](#zapytanie-19)
- [Zapytanie20](#zapytanie-20)

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
