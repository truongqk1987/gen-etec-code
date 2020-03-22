const { modifyFileWithText } = require('./utils');

module.exports = ({ pageName }) => [
    modifyFileWithText(
        pageName, 
        /(<!--ROWS_CONDITIONS-->)/gi,
        null
    ),

    modifyFileWithText(
        pageName, 
        /(<!--ITEM-->)/gi,
        null
    ),
]