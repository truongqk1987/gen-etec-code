const { modifyFileWithText } = require('./utils');

const clearConditionRowPattern = (pageName) => modifyFileWithText(
    pageName, 
    /(<!--ROWS_CONDITIONS-->)/gi,
    ""
);

const clearConditionItemPattern = (pageName) => modifyFileWithText(
    pageName, 
    /(<!--ROW_[0-9]_SEARCH_ITEM-->)/gi,
    ""
);

module.exports = {
    clearConditionRowPattern,
    clearConditionItemPattern
}