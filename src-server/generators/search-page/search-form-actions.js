const isEmpty = require('lodash.isempty');
const { appendFileWithTemplate } = require('./utils');
const { clearConditionItemPattern, clearConditionRowPattern } = require('./clear-actions');
const inputActions = require('./input-actions');
const selectActions = require('./select-actions');

const rowIndexMap = {
    0: 'First',
    1: 'Second',
    2: 'Third',
    3: 'Fourth'
}

module.exports = ({searchFormRows, pageName}) => {
    let actions = [];
    
    if (!isEmpty(searchFormRows)) {
        for (let rowIndex in searchFormRows.reverse()) {
            const rowIndexName = rowIndexMap[rowIndex];
            actions.push(
                appendFileWithTemplate(
                    pageName, 
                    'search-form-row',
                    /(<!--ROWS_CONDITIONS-->)/gi,
                    { rowIndexName, rowIndex }
                )
            )
            for (let itemIndex in searchFormRows[rowIndex].reverse()) {
                const item = searchFormRows[rowIndex][itemIndex];
                if (!isEmpty(item)) {
                    const { type } = item;
                    if (type) {
                        if (type === 'I') {
                            actions = [
                                ...actions,
                                ...inputActions(pageName, item),
                            ]
                        }
                        if (type === 'S') {
                            actions = [
                                ...actions,
                                ...selectActions(pageName, rowIndex, item),
                            ]
                        }
                    }
                }
                
            }
            actions.push(clearConditionItemPattern(pageName));
        }
        actions.push(clearConditionRowPattern(pageName))
    }
    return actions
}