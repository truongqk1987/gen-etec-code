const isEmpty = require('lodash.isempty');
const { appendFileWithTemplate } = require('./utils');

const rowIndexMap = {
    0: 'First',
    1: 'Second',
    2: 'Third',
    3: 'Fourth'
}

module.exports = ({searchFormRows, pageName}) => {
    let actions = [];
    if (!isEmpty(searchFormRows)) {
        for (let rowIndex in searchFormRows) {
            const rowIndexName = rowIndexMap[rowIndex];
            actions.push(
                appendFileWithTemplate(
                    pageName, 
                    'search-form-row',
                    /(<!--ROWS_CONDITIONS-->)/gi,
                    { rowIndexName }
                )
            )
            for (let itemIndex in searchFormRows[rowIndex]) {
                const item = searchFormRows[rowIndex][itemIndex];
                if (!isEmpty(item)) {
                    const { type } = item;
                    if (!type) {
                        if (type === 'input') {}
                    }
                }
                
            }
        }
    }
    return
}