# Parameshwar Package

A simple NPM package that prints about Me when executed.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and NPM installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installing

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parameshwar-arroju/parameshwardev-npm
   cd parameshwardev-npm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Run the package using `start`:**
   ```bash
   npm start
   ```

## Usage

After building the project, you can use the package globally with `npx`. Simply run:
```bash
npx parameshwar
```

## Development

### Scripts

- `npm start`: Runs the TypeScript file directly for development purposes.
- `npm run build`: Compiles the TypeScript files to JavaScript.
- `npx parameshwar`: Runs the compiled JavaScript file.

## Publishing

To publish the package to NPM:

1. **Login to NPM:**
   ```bash
   npm login
   ```

2. **Publish the package:**
   ```bash
   npm publish
   ```