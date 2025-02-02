<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">FOODS2IMPACT-</h1>
</p>
<p align="center">
    <em><code>REACT ACND TYPESCRIPT SIMPLE APP</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/boobaGreen/S2ImpactTriviaReactTSRefactor?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
>   - [📦 Key Features](#-key-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running S2ImpactTriviaReactTSRefactor](#-running-S2ImpactTriviaReactTSRefactor)
>   - [🔧 Customizing Questions and Levels](#️-customizing-questions-and-levels)
>   - [🧪 Tests](#-tests)
> - [📚 Types](#-types)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

S2ImpactTriviaReactTSRefactor is an interactive trivia game built with React and TypeScript. The game challenges users with questions on various topics, tracks their scores, and advances them through levels based on their performance. The application uses local storage to save user progress and employs custom hooks for managing state and decrypting answers.

You can try the application deployed at: [https://foods-2-impact.vercel.app/](https://foods-2-impact.vercel.app/)

### 📦 Key Features

- Interactive trivia game with multiple levels
- User progress tracking with local storage
- Custom hooks for state management and answer decryption
- Responsive design with Tailwind CSS
- Integration with Jest for testing React components
- Ability to share scores on Twitter
- Deployed on Vercel for live hosting

---

## 📂 Repository Structure

```sh
└── FOODS2IMPACT/
    ├── README.md
    ├── __mocks__
    │   ├── fileMock.js
    │   └── useDecryptedAnswers.ts
    ├── favicon.ico
    ├── index.html
    ├── jest.config.tss
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   └── font
    ├── setupTests.ts
    ├── src
    │   ├── __tests__
    │   ├── components
    │   ├── elements
    │   ├── index.css
    │   ├── lib
    │   ├── main.tsx
    │   ├── page
    │   ├── quiz
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- Node.js: version 20.x.x
- npm: version 8.x.x

### ⚙️ Installation

1. Clone the S2ImpactTriviaReactTSRefactor repository:

```sh
git clone https://github.com/boobaGreen/FOODS2IMPACT
```

2. Change to the project directory:

```sh
cd FOODS2IMPACT
```

3. Install the dependencies:

```sh
npm install
```

4. **Important**: Create a `.env` file in the root of the project with the constant

```sh
VITE_KEY_DECRYPTION="forzacesenalaserieAnoncibastapiuvogliamlachampionsleaguewsb81"
```

which should contain your own secret key for decryption. Since this is a study project, I have left the key visible in a `.envfake` file. You can simply rename it to `.env` and use my decryption password. I have left it visible only because this is a study project.

### 🔧 Customizing Questions and Levels

To customize the questions and levels, follow these steps:

1.  **Create Question Files**: Create JSON files for each level containing the questions. The files should be named `originalAnswer.json` and placed in the respective level directories:
    ``   -`./src/quiz/level1/originalAnswer.json`        -`./src/quiz/level2/originalAnswer.json`        -`./src/quiz/level3/originalAnswer.json```

Each file should contain an array of questions in the following format:

            ```
            [
              {
                "question": "Your question here?",
                "answers": [
                  "Answer 1",
                  "Answer 2",
                  "Answer 3",
                  "Answer 4"
                ]
              },
              ...
            ]
            ```

2.  **Create Question Files**: Create JSON files for each level containing the questions. The files should be named `originalAnswer.json` and placed in the respective level directories:

            - `./src/quiz/level1/originalAnswer.json`
            - `./src/quiz/level2/originalAnswer.json`
            - `./src/quiz/level3/originalAnswer.json`

Each file should contain an array of correct answers in the following format:

            ```
            [

            "Correct answer for question 1",
            "Correct answer for question 2",
            "ecc"
            ]

            ```

3.  **Encrypt the Answers**: Run the encryption script to encrypt the correct answers. This will create encrypted answer files in the respective level directories.

            node src/lib/encryptAnswers.js

You should see the following output:

            Correct answers successfully encrypted!

4.  **Decryption Key**: The decryption key is specified in the .env file as explained in the installation step 4. This key is used to encrypt and decrypt the answers, ensuring that even advanced users cannot easily find the correct answers without the key.

By following these steps, you can customize the questions and levels while ensuring that the correct answers are securely encrypted. This prevents users from easily accessing the correct answers without the decryption key.

### 🤖 Running FOODS2IMPACT

Use the following command to run in local FOODS2IMPACT

```sh
npm run dev
```

### 🧪 Tests

To execute tests, run:

```sh
npm run test
```

or for test-watch mode

```sh
npm run watch
```

---

## 📚 Types

### GameStatus Enum

This enum represents the different states that the game can be in.

```typescript
export enum GameStatus {
  Quiz = "quiz", // The game is in the quiz state , the quiz started
  EndGame = "endGame", // The game is in the end game state , the quiz is just ended
  Cover = "cover", // The game is in the cover initial state
}
```

### TUser Type

This type represents a user in the game.

```typescript
export type TUser = {
  name: string; // The name of the user
  singleGamePoints: number; // The points the user has scored in a single game
  level: number; // The current level of the user in the game (min level 1,max level 3)
};
```

### SocialLink Interface

This interface represents a social media link.

```typescript
export interface SocialLink {
  id: number; // The unique identifier for the social link
  icon: JSX.Element; // The icon representing the social media platform
  url: string; // The URL of the social media profile or page
}
```

### THeader Type

This type represents the props for the Header component.

```typescript
export type THeader = {
  user: TUser; // The user object
  children: ReactNode; // The children elements
  handleRemoveUser: () => void; // Function to handle user removal
};
```

### TLayout Type

This type represents the props for the Layout component.

```typescript
export type TLayout = {
  user: TUser; // The user object
  children: ReactNode; // The children elements
  handleRemoveUser: () => void; // Function to handle user removal
};
```

### TModal Type

This type represents the props for the Modal component.

```typescript
export type TModal = {
  confirmRemoveUser: () => void; // Function to confirm user removal
  cancelRemoveUser: () => void; // Function to cancel user removal
};
```

### EndQuizProps Type

This type represents the props for the EndGame component.

```typescript
export type EndQuizProps = {
  user: TUser; // The user object
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>; // Function to set the game status
  setUser: React.Dispatch<React.SetStateAction<TUser>>; // Function to set the user
};
```

### TSucces Type

This type represents the props for the Result component.

```typescript
type TResult = {
  user: TUser;
  handleSetToQuiz: () => void;
};
```

### TQuizQuestionProps Type

This type represents the props for the QuizQuestion component.

```typescript
export type TQuizQuestionProps = {
  question: string; // The quiz question
  answers: string[]; // The possible answers for the question
  questionNumber: number; // The current question number
  totalQuestions: number; // The total number of questions
  onConfirm: (selectedAnswer: string) => void; // Function to handle answer confirmation
};
```

### ScorePopupProps Type

This type represents the props for the ScorePopup component.

```typescript
export type ScorePopupProps = {
  forPopUp: boolean; // Indicates whether the popup is for a correct answer
  color: string; // The color of the popup
};
```

### TuserInput Type

This type represents the props for the UserInput component.

```typescript
export type TuserInput = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void; // Function to handle input change
  handleSubmit: () => void; // Function to handle form submission
  inputValue: string; // The input value
};
```

---

## 🛠 Project Roadmap

- [x] Define the data structure
- [x] Define the scoring mechanics and overall app functionality
- [x] Define the screen structure
- [x] Implement a system for decrypting answers to prevent cheating via browser inspection
- [x] Utilize custom hooks (e.g., `useDecryptedAnswers`)
- [x] Use local storage for user registration
- [x] Manage the possibility to share on Twitter
- [x] Enhance the UI with Tailwind CSS
- [x] Add a testing section with Jest for React and include a couple of sample tests
- [x] Deploy the application on Vercel for live hosting
- [x] Refine and review the README file
- [x] Prepare the presentation
- [ ] Add tests and continue experimenting with Jest on React for Unit tests, Integration tests and E2E tests.

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/boobaGreen/FOODS2IMPACT/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/boobaGreen/FOODS2IMPACT/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/boobaGreen/FOODS2IMPACT/issues)**: Submit bugs found or log feature requests for S2impacttriviareacttsrefactor.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). For more details, refer to the [LICENSE](https://opensource.org/licenses/MIT) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Manage "meta.process.env" for Jest**](https://stackoverflow.com/questions/70440505/ts1343-the-import-meta-meta-property-is-only-allowed-when-the-module-opti)

[**Jest Tyepecript and React example**](https://codermo.medium.com/setting-up-a-react-app-with-vite-typescript-jest-and-react-testing-library-e001ddce4f53)

[**Animation in Tailwind**](https://v2.tailwindcss.com/docs/animation)

---
