const storeKey = 'labarra';
const { STORES } = require('../../config/config.json');
const { axiosGet, saveFile, replaceAll } = require("../../utils");

const transformCategoryName = (category) => {
  return replaceAll(category, ' ', '_');
}
/**
 * Permite recorrer el listado de categorias y obtener como lista
 * @param  {object} categories - Arreglo de categorias
 */
const getUrlCategories = (categories) => {
  const finalCategories = [];
  categories.forEach(category => {
    finalCategories.push({
      id: category.backendId,
      name: category.name,
      url: `${STORES[storeKey].baseUrl}/categoria/${category.id}`,
    });
  });

  return finalCategories;
}

/**
* Permite obtener un listado de categorias desde la misma store
*/
const getCategories = async () => {
  try{
    log.info(`Getting categories of [${STORES[storeKey].name}]`);
    const categories = await axiosGet(STORES[storeKey].categoriesUrl, {'api-key': 'public1', 'apikey': 'j.w.t', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 OPR/93.0.0.0', 'visitor-uuid': '36505b0be9004b96b19b7d5d705cc264'});
    let categoriesInfo = getUrlCategories(categories.items);
    if (STORES[storeKey].allowedCategories.length > 0) {
      categoriesInfo = categoriesInfo.filter(category => STORES[storeKey].allowedCategories.filter(el => category.name.toLowerCase().includes(el.toLowerCase())).length > 0);
    }
    saveFile(`${__dirname}/categories.json`, categoriesInfo);
    return categoriesInfo;
  }
  catch (err) {
    log.error(err.message);
    const categories = require('./categories.json');
    return categories;
  }
}

module.exports = {
  getCategories
}