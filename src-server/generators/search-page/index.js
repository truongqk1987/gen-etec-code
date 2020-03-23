const isEmpty = require('lodash.isempty');
const moment = require('moment');

const searchFormActions = require('./search-form-actions');
const { addFile } = require('./utils');
const gridMasterActions = require('./grid-master-actions');

const indexNameMap = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  3: 'Fourth'
}

module.exports = plop => {
  plop.setHelper('getIndexName', (index) => `${indexNameMap[index]}`);

  plop.setHelper('isEqual', (
    x1, x2) => x1 === x2
  );

  plop.setHelper('reverse', (items) => !isEmpty(items) ? items.reverse() : [])

  plop.setGenerator("search-page", {
    description: "Generate Search Page",
    prompts: [],
    actions: (buildSearchPageInfo) => {
      buildSearchPageInfo['startDate'] = moment().format('YYYY.MM.DD');
      let actions = [
        addFile(buildSearchPageInfo.pageName, 'search-page', {...buildSearchPageInfo}),
        ...searchFormActions(buildSearchPageInfo)
      ]

      if (!isEmpty(buildSearchPageInfo.gridColumns)) {
        actions.push(gridMasterActions(buildSearchPageInfo))
      }
      
      return actions
    }
  });
};
