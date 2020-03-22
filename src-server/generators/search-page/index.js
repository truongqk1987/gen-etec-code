const moment = require('moment');

const { addFile, appendFileWithTemplate, appendFileWithText, modifyFileWithText } = require('./utils');

module.exports = plop => {
  plop.setHelper('jsx-bracket', (txt) => `{${txt}}`);

  plop.setGenerator("search-page", {
    description: "Generate Search Page",
    prompts: [],
    actions: (answers) => {
      const {
          pageName, author, subject, startDate
      } = answers;

      let actions = [
        addFile(pageName, 'search-page'),

        // Subject
        modifyFileWithText(
            pageName, 
            /(<!--SUBJECT--!>)/gi,
            subject
          ),

        // Author
        modifyFileWithText(
            pageName, 
            /(<!--AUTHOR--!>)/gi,
            author
        ),

        // Start date
        modifyFileWithText(
            pageName, 
            /(<!--START_DATE--!>)/gi,
            moment().format('YYYY.MM.DD')
        )
      ]
      return actions
    }
  });
};
