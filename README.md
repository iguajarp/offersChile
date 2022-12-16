
# Ofertas Chile

Get the best offers and promotions from different online stores in Chile so you can take advantage of the best discounts

The system is in charge of carrying out web scraping to the different online stores in search of the best offers and these are stored in a mongodb database for later use in other systems.

# Previous Requirements

It is required to have previously installed the following

`nodejs >= 14.x`

`mongodb >= 5.x`
## Installation

Install this project with npm

```bash
  npm install
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/luiscruzga/offersChile
```

Go to the project directory

```bash
  cd offersChile
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Once finished, you will be able to review the offers in the DB (by default it is hosted at mongodb://localhost/storePromotions)

## Stores
Stores from which promotions are currently obtained

| Store             | Url                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Abcdin | [https://www.abcdin.cl](https://www.abcdin.cl) |
| MicroPlay | [https://www.microplay.cl](https://www.microplay.cl) |
| Hites | [https://www.hites.com](https://www.hites.com) |
| Best Store | [https://www.beststore.cl](https://www.beststore.cl) |
| CIntegral | [https://cintegral.cl](https://cintegral.cl) |
| Ripley | [https://simple.ripley.cl](https://simple.ripley.cl) |
| Falabella | [https://www.falabella.com/falabella-cl](https://www.falabella.com/falabella-cl) |
| Jumbo | [https://www.jumbo.cl](https://www.jumbo.cl) |
| Santa Isabel | [https://www.santaisabel.cl](https://www.santaisabel.cl) |
| Lider | [https://www.lider.cl/catalogo](https://www.lider.cl/catalogo) |
| Lider-Supermercado | [https://www.lider.cl/supermercado/](https://www.lider.cl/supermercado/) |
| La Barra | [https://labarra.cl](https://labarra.cl) |
| Easy | [https://www.easy.cl](https://www.easy.cl) |
| Paris | [https://www.paris.cl](https://www.paris.cl) |
| La Polar | [https://www.lapolar.cl](https://www.lapolar.cl) |
| Tricot | [https://www.tricot.cl](https://www.tricot.cl/) |


## Products saves

The products are stored in the DB as follows

```js
{
  store: 'Hites',
  sku: '808253002',
  name: 'Zapatilla Urbana Chunky Mujer Rolly Go',
  description: 'Zapatilla Urbana Chunky Mujer Rolly Go',
  brand: 'ROLLY GO',
  url: 'https://www.hites.com/zapatilla-urbana-chunky-mujer-rolly-go-808253002.html',
  images: ['https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dw9ec95f9c/images/original/calzado-mujer/808253001.jpg?sw=400&sh=400'],
  thumbnail: 'https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dw9ec95f9c/images/original/calzado-mujer/808253001.jpg?sw=400&sh=400',
  category: 'https://www.hites.com/zapatos/marcas-zapatos/',
  categoryName: 'Zapatos -> Marcas Zapatos',
  discountPercentage: 88,
  discount: 28990,
  normalPrice: 32990,
  offerPrice: 4000,
  cardPrice: 0,
  isOutOfStock: false,
  isUnavailable: false,
  createdAt: 2022-12-16T15:24:26.415+00:00,
  version: 2
}
```

## Authors

- [@luiscruzga](https://www.github.com/luiscruzga)

