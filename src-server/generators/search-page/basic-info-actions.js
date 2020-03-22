const moment = require('moment');

const { modifyFileWithText } = require('./utils');

module.exports = (buidSearchPageInfo) => {
    const { pageName, author, subject } = buidSearchPageInfo;
    return [
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
}