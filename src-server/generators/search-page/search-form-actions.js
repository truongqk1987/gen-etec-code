const isEmpty = require('lodash.isempty');
const inputActions = require('./input-actions');


module.exports = ({searchFormRows, pageName}) => {
    let actions = [];
    
    if (!isEmpty(searchFormRows)) {
        for (let rowIndex in searchFormRows.reverse()) {
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
                    }
                }
            }
        }
    }
    return actions
}