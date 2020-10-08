function readmegen(data) {
    return `
    
# ${data.Title}

## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Instructions](#instructions)
*[License](#license)
*[Contributors](#contributors)
*[Questions](#questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Instructions
${data.Instructions}

## License
${data.License}

## Contributors
${data.Contributors}

## Questions
${data.Questions}

## Questions
Contact me:

Github:[${data.Username}](https://github.com/inovelo88)

Email:[${data.Email}](https://iyn88@yahoo.com)

`}

module.exports = readmegen