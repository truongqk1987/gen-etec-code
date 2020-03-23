const path = require("path");
const cwdPath = process.env.PWD || process.cwd();


const addFile = (targetFileName, templateFileName, data) => {
  return {
      path: path.join(cwdPath, "build", `${targetFileName}.html`),
      templateFile: path.join(__dirname, "templates", `${templateFileName}.hbs`),
      type: "add",
      data
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

const appendFileWithTemplate = (targetFileName, templateFileName, pattern, data) => {
  return {
    type: 'append',
    path: path.join(cwdPath, "build", `${targetFileName}.html`),
    pattern,
    templateFile: path.join(__dirname, "templates", `${templateFileName}.hbs`),
    data
  }
}


module.exports = {
    addFile,
    appendFileWithText,
    modifyFileWithText,
    appendFileWithTemplate
}