const { appendFileWithTemplate } = require('./utils');

module.exports = (pageName, rowIndex, {
    type,
    width = 220, 
    id,
    label,
    selectBoxCode,
    hasALLValue
}) => {
    return [
        appendFileWithTemplate(
            pageName,
            'search-form-select',
            new RegExp(`(<!--ROW_${rowIndex}_SEARCH_ITEM-->)`, 'gi'),
            {
                type,
                width, 
                id,
                label,
                hasALLValue
            }
        ),

        appendFileWithTemplate(
            pageName,
            'select-definition',
            /(\/\/--SELECT_DEFINITION)/gi,
            { 
                id,
                selectBoxCode
            }
        )
    ]
}