function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Creating a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

Licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#Tests)
  - [Questions](#questions)
  - [License](#license)
  
## Description
${data.description}

  
## Installation

\`\`\`
${data.install}
\`\`\`

  
## Usage
${data.usage}
  
## Contributions
${data.contribution}
  
## Tests
${data.test}

${renderLicenseSection(data.license)}
  
## Questions
For any questions, please reach out to me at ${
    data.email
  } or visit my [GitHub profile](https://github.com/${
    data.github
  }).
  `;
}
module.exports = generateMarkdown;
