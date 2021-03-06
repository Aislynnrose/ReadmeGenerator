// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ('None used');
  }
  else {
    return(`[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ('None used');
  }
    else {
      return(`(https://opensource.org/licenses/${license})`)
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ('None used');
  }
  else {
    return(`
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
    );
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**
  
  ## License
  ${renderLicenseSection(data.license)}

  ## description
  ${data.description}
  
  ## Table of Contents 
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Deployed URL](#Deployed)
  * [GitHub URL](#GitHub)
  * [Email Me](#Email)
  * [Preview](#Preview)
  * [Technologies](#technologies)

  ## Usage
  * ${data.usage}

  ## Contributions
  * ${data.contributions}

  ## _Deployed URL_: ${data.deployedURL}
  
  ## _GitHub URL_: ${data.GitHubURL}

  ## _Email Me_: ${data.email}

  ## Preview: ![Screenshot](${data.preview})

  # Technologies Used
  * ${data.technologies}

`;
}

module.exports = generateMarkdown;
