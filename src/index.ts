#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

// ASCII Logo
const asciiLogo = `          
          ██████╗ ██╗  ██╗
          ╚════██╗╚██╗██╔╝
           █████╔╝ ╚███╔╝
          ██╔═══╝  ██╔██╗
          ███████╗██╔╝ ██╗
          ╚══════╝╚═╝  ╚═╝
          
                  ██╗
                  ╚═╝

  ██████╗ ███████╗██╗   ██╗███████╗
  ██╔══██╗██╔════╝██║   ██║██╔════╝
  ██║  ██║█████╗  ██║   ██║███████╗
  ██║  ██║██╔══╝  ╚██╗ ██╔╝╚════██║
  ██████╔╝███████╗ ╚████╔╝ ███████║
  ╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝
`;

const details = {
    name: chalk.cyan("Arroju Parameshwar"),
    occupation: chalk.magenta("A Full Stack developer"),
    website: chalk.blue(`https://parameshwar.dev`),
    github: chalk.green(`https://github.com/parameshwar-arroju`),
    email: chalk.cyan(`parameshwararroju1@gmail.com`),
    languages: {
        C: { icon: "🟨", color: chalk.yellow },
        "C++": { icon: "🟨", color: chalk.yellow },
        Java: { icon: "🟨", color: chalk.yellow },
        Python: { icon: "🟨", color: chalk.yellow },
    },
    web: {
        HTML: { icon: "🔵", color: chalk.blue },
        CSS: { icon: "🔵", color: chalk.blue },
        JavaScript: { icon: "🔵", color: chalk.blue },
        Typescript: { icon: "🔵", color: chalk.blue },
    },
    libraries: {
        ReactJs: { icon: "🟩", color: chalk.green },
        TailwindCSS: { icon: "🟩", color: chalk.green },
    },
    frameworks: {
        NextJs: { icon: "🔵", color: chalk.cyan },
        NodeJs: { icon: "🔵", color: chalk.cyan },
        ExpressJs: { icon: "🔵", color: chalk.cyan },
        Hono: { icon: "🔵", color: chalk.cyan },
    },
    databases: {
        MongoDB: { icon: "🟪", color: chalk.magenta },
        PostgreSQL: { icon: "🟪", color: chalk.magenta },
        MySQL: { icon: "🟪", color: chalk.magenta },
        Prisma: { icon: "🟪", color: chalk.magenta },
    },
    others: {
        "Git/Github": { icon: "🔵", color: chalk.blue },
        Docker: { icon: "🔵", color: chalk.blue },
        AWS: { icon: "🔵", color: chalk.blue },
        CloudFlare: { icon: "🔵", color: chalk.blue },
    },
};

const languagesArray = Object.entries(details.languages);
const webArray = Object.entries(details.web);
const librariesArray = Object.entries(details.libraries);
const frameworksArray = Object.entries(details.frameworks);
const databasesArray = Object.entries(details.databases);
const othersArray = Object.entries(details.others);

const languagesRows = [];
const webRows = [];
const librariesRows = [];
const frameworksRows = [];
const databasesRows = [];
const othersRows = [];


for (let i = 0; i < languagesArray.length; i += 4) {
    const slicedLanguages = languagesArray.slice(i, i + 4);
    const row = slicedLanguages
        .map(([lang, { icon, color }]) => `${color(`   ${icon} ${lang}`)}`)
        .join(" ");
    languagesRows.push(row);
}

for (let i = 0; i < webArray.length; i += 4) {
    const slicedWeb = webArray.slice(i, i + 4);
    const row = slicedWeb
        .map(([lang, { icon, color }]) => `${color(`   ${icon} ${lang}`)}`)
        .join(" ");
    webRows.push(row);
}

for (let i = 0; i < librariesArray.length; i += 4) {
    const slicedLibraries = librariesArray.slice(i, i + 4);
    const row = slicedLibraries
        .map(([lang, { icon, color }]) => `${color(`   ${icon} ${lang}`)}`)
        .join(" ");
    librariesRows.push(row);
}

for (let i = 0; i < frameworksArray.length; i += 4) {
    const slicedFrameworks = frameworksArray.slice(i, i + 4);
    const row = slicedFrameworks
        .map(([lang, { icon, color }]) => `${color(`   ${icon} ${lang}`)}`)
        .join(" ");
    frameworksRows.push(row);
}

for (let i = 0; i < databasesArray.length; i += 4) {
    const slicedDatabases = databasesArray.slice(i, i + 4);
    const row = slicedDatabases
        .map(([lang, { icon, color }]) => `${color(`   ${icon} ${lang}`)}`)
        .join(" ");
    databasesRows.push(row);
}

for (let i = 0; i < othersArray.length; i += 4) {
    const slicedOthers = othersArray.slice(i, i + 4);
    const row = slicedOthers
        .map(([lang, { icon, color }]) => `${color(`   ${icon} ${lang}`)}`)
        .join(" ");
    othersRows.push(row);
}

const info = [
    `${chalk.bold("⭐ Name:")}      ${details.name}`,
    `${chalk.bold("💡 About:")}     ${details.occupation}`,
    `${chalk.bold("🌐 Website:")}   ${details.website}`,
    `${chalk.bold("🔗 GitHub:")}    ${details.github}`,
    `${chalk.bold("💬 Email:")}     ${details.email}`,
    `${chalk.bold("💻 Languages:")}`,
    ...languagesRows,
    `${chalk.bold("🌐 Web:")}`,
    ...webRows,
    `${chalk.bold("🔧 Libraries:")}`,
    ...librariesRows,
    `${chalk.bold("🔨 Frameworks:")}`,
    ...frameworksRows,
    `${chalk.bold("💾 Databases:")}`,
    ...databasesRows,
    `${chalk.bold("🧰 Others:")}`,
    ...othersRows,
];

const asciiLogoLines = asciiLogo.split("\n");
const infoLines = info;

const logoWidth = Math.max(...asciiLogoLines.map((line) => line.length));
const detailsWidth = Math.max(...infoLines.map((line) => line.length));
logoWidth + 4 + detailsWidth;

const outputLines = [];
for (let i = 0; i < Math.max(asciiLogoLines.length, infoLines.length); i++) {
    const logoLine = asciiLogoLines[i] || "";
    const infoLine = infoLines[i] || "";
    const paddedLogoLine = logoLine.padEnd(logoWidth, " ");
    outputLines.push(`${paddedLogoLine}    ${infoLine}`);
}

const output = outputLines.join("\n");

const message = boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: "bold",
});

console.log(message);
