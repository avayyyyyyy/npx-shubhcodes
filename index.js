#!/usr/bin/env node

const figlet = require("figlet");
const gradient = require("gradient-string");

console.clear();

// Create a colorful gradient for the main title
const titleGradient = gradient("cyan", "magenta", "yellow");

// Generate the main title using figlet
figlet.text(
  "ShubhCodes",
  {
    font: "Slant",
    horizontalLayout: "default",
    verticalLayout: "default",
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(titleGradient(data));
    printInfo();
  }
);

async function printInfo() {
  // Dynamically import the chalk and boxen modules
  const chalk = (await import("chalk")).default;
  const boxen = (await import("boxen")).default;

  const separator = chalk.magentaBright("\n" + "─".repeat(50) + "\n");

  const info = `
${chalk.bold.bgCyan.white("  Name:     ")} ${chalk.cyan("Shubhankit Jain")}
${chalk.bold.bgGreen.black("  Status:   ")} ${chalk.red(
    "🧃"
  )} ${chalk.greenBright("Developer from heart")}
${chalk.bold.bgBlue.white("  GitHub:   ")} ${chalk.blueBright(
    "https://github.com/avayyyyyyy"
  )}
${chalk.bold.bgMagenta.white("  Website:  ")} ${chalk.magenta(
    "https://shubhcodes.me"
  )}
${chalk.bold.bgYellow.white("  Resume:  ")} ${chalk.yellow(
    "https://shubhcodes.me/resume"
  )}

${chalk.bgWhiteBright.black.bold(" Skills: ")}

${chalk.yellow("▸")} ${chalk.cyan(
    "Languages:"
  )}    JavaScript, TypeScript, Python
${chalk.yellow("▸")} ${chalk.cyan("Frameworks:")}   React.js, Next.js
${chalk.yellow("▸")} ${chalk.cyan(
    "Technologies:"
  )} Node.js, Express.js, Prisma, Kafka
${chalk.yellow("▸")} ${chalk.cyan(
    "Databases:"
  )}    MongoDB, PostgreSQL, SQL, Pinecone
${chalk.yellow("▸")} ${chalk.cyan("DevOps:")}       Docker, Postman
${chalk.yellow("▸")} ${chalk.cyan("Tools:")}        Git, GitHub, Firebase

${separator}
${chalk.bold(" Yes, I'm actively looking for new opportunities!")}
${separator}

${chalk.bgBlack.white.dim(
  "And Thank you so much for checking out my CLI! 🥰🚀"
)}

`;

  console.log(
    boxen(info, {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "cyan",
      backgroundColor: "black",
    })
  );
}
