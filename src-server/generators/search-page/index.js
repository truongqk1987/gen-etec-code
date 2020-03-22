const basicInfoActions = require('./basic-info-actions');
const searchFormActions = require('./search-form-actions');
const clearActions = require('./clear-actions');
const { addFile } = require('./utils');

module.exports = plop => {
  plop.setHelper('jsx-bracket', (txt) => `{${txt}}`);

  plop.setGenerator("search-page", {
    description: "Generate Search Page",
    prompts: [],
    actions: (buidSearchPageInfo) => {

      let actions = [
        addFile(buidSearchPageInfo.pageName, 'search-page'),
        ...basicInfoActions(buidSearchPageInfo),
        ...searchFormActions(buidSearchPageInfo),
        ...clearActions(buidSearchPageInfo)
      ]

      
      return actions
    }
  });
};
