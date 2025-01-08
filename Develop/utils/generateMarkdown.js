// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
      ' ',
      '_'
    )}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '\n* [License](#license)\n';
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
//  check to see if a license is selected
  if (license !== 'None') {
    // if a license is selected return a License section with the license name
    return `## License

This project is licensed under the ${license} license.`;
  }
  // return empty string if no license selected
  return '';
}
// generate markdown for README
function generateMarkdown(data) {
  //pulls the different categories as listed in the index.js answers and places them into the file
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or inquiries:
- GitHub: [${data.contact}](https://github.com/${data.contact})
- Email: [${data.email}](mailto:${data.email})
`;
}

//export the function as the default export
export default generateMarkdown;
