const STORES_MODULES = [];
const { STORES } = require('../config/config.json');
const { diffMinutes } = require("../utils/");
const { getAllProducts } = require(`./products`);
const { loadUniqueProducts } = require("../utils/pg");
const fs = require('fs');

const directories = fs.readdirSync(__dirname, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

directories.forEach((directory) => {
  const storeKey = directory;
  const { getCategories } = require(`./${directory}/category`);
  const { getProductsByPage, getTotalPages } = require(`./${directory}/products`);
  STORES_MODULES[storeKey] = {};
  STORES_MODULES[storeKey].main = async () => {
    log.end('================================================================================');
    log.end(`Proceso Iniciado para [${STORES[storeKey].name}]`);
    log.end('================================================================================');
    
    const startDate = new Date();
    const categories = await getCategories();
    if (!STORES[storeKey].useOwnProducts) await getAllProducts(storeKey, categories, getTotalPages, getProductsByPage);
    else {
      const products = require(`./${directory}/products`);
      await products.getAllProducts(categories);
    }
    await loadUniqueProducts(STORES[storeKey].name);

    const endDate = new Date();
    const finalTime = diffMinutes(startDate, endDate);
    log.end('================================================================================');
    log.end(`Proceso Finalizado Correctamente[${STORES[storeKey].name}], duración total ${finalTime} minutos`);
    log.end('================================================================================');
  }
});

module.exports = STORES_MODULES;