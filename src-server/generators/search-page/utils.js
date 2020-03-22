const path = require("path");
const cwdPath = process.env.PWD || process.cwd();


const addFile = (targetFileName, templateFileName) => {
  return {
      path: path.join(cwdPath, "build", `${targetFileName}.html`),
      templateFile: path.join(__dirname, "templates", `${templateFileName}.hbs`),
      type: "add"
  }
}

const appendFileWithText = (targetFileName, pattern, template) => {
  return {
    type: 'append',
    path: path.join(cwdPath, "build", `${targetFileName}.html`),
    pattern,
    template,
  }
}

const modifyFileWithText = (targetFileName, pattern, template) => {
  return {
    type: 'modify',
    path: path.join(cwdPath, "build", `${targetFileName}.html`),
    pattern,
    template,
  }
}

const appendFileWithTemplate = (targetFileName, templateFileName, pattern) => {
  return {
    type: 'append',
    path: path.join(cwdPath, "build", `${targetFileName}.html`),
    pattern,
    templateFile: path.join(__dirname, "templates", `${templateFileName}.hbs`),
  }
}


module.exports = {
    addFile,
    appendFileWithText,
    modifyFileWithText,
    appendFileWithTemplate
}