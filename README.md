# Backend Challenge - Riderize

This repository contains a solution for the [Desafio Backend - Riderize](https://github.com/Riderize/backend-test?tab=readme-ov-file#desafio-backend---riderize).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js and npm (or yarn)

### 1. Clone this repository:

```bash
git clone https://github.com/<paulomarian0>/backend-challenge-riderize.git
```

### 2. Navigate to the project directory:

```bash
cd backend-challenge-riderize
```

### 3. Install dependencies:

```
npm install
```

or 

```
yarn
```

# Running the server

### Step 1: Configure Environment Variables
Create a .env file in the root directory and set your credentials. You can refer to the example provided in .env.example

### Example .env file

```
DATABASE_URL="file:./dev.db"
SECRET='maria eduarda eu te amo'
PORT=3000
```
Ensure to replace the placeholder values with your actual credentials.

##

### Step 2: Run the Development Server

```bash
yarn dev
# or
npm run dev
```

# Running the tests 

### You can check the script on `package.json`

```
"test": "vitest"
```
Or run it directly:
```
npm run test
# or
yarn test
```
### Feedback should look like this:

```
✓ src/test/users/UserUseCase.spec.ts (4)
 ✓ src/test/ride/RideUseCase.spec.ts (4)
 ✓ src/test/auth/AuthUseCase.spec.ts (2)

 Test Files  3 passed (3)
      Tests  10 passed (10)
   Start at  01:22:46
   Duration  428ms (transform 203ms, setup 15ms, collect 329ms, tests 17ms, environment 1ms, prepare 349ms)

```

# Docummentation

Explore the API documentation using Swagger. Run the server and navigate to `localhost:3000/docs` in your browser.

Feel free to contribute, report issues, or suggest improvements. Happy coding!






