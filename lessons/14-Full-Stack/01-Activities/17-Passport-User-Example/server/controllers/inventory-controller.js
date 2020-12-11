var db = require("../models");
const Op = db.Sequelize.Op;

function createStorePageObject(obj) {
  return {
    isStoresPage: true,
    ...obj
  }
}

function createProductPageObject(obj) {
  return {
    isProductsPage: true,
    ...obj
  }
}

module.exports = {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //                  html routes                              //
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  html: {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // GET: /inventory/create/store/:storeId                   //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    createStoreInventory: function (req, res) {
      return db.store.findOne({
        where: {
          id: req.params.storeId,
          userId: req.user.id
        },
        include: [{
          model: db.product,
          where: {
            userId: req.user.id
          },
          required: false
        }]
      }).then(function (rawStore) {
        return db.product.findAll({
          where: {
            id: {
              [Op.notIn]: rawStore.products.map(product => product.id)
            },
            userId: req.user.id
          }
        }).then(function (rawProducts) {
          // some object destructuring doesn't work with the direct results
          // of a sequelize query, so we utilize instance.get({plain: true})
          // to turn our results into normal objects.
          const products = rawProducts.map(product => product.get({ plain: true }));
          const plainStore = rawStore.get({ plain: true });
          const store = {
            ...plainStore,
            products
          }
          console.log("store", store, rawStore.products.map(product => product.id));
          res.render("inventory/create-store", createStorePageObject(store))
        });
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    },
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // GET: /inventory/create/product/:productId               //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    createProductInventory: function (req, res) {
      console.log("test", req.params.productId)
      return db.product.findOne({
        where: {
          id: req.params.productId,
          userId: req.user.id
        },
        include: [{
          model: db.store,
          where: {
            userId: req.user.id
          },
          required: false
        }]
      }).then(function (rawProduct) {
        return db.store.findAll({
          where: {
            id: {
              [Op.notIn]: rawProduct.stores.map(store => store.id)
            },
            userId: req.user.id
          }
        }).then(function (rawStores) {
          // some object destructuring doesn't work with the direct results
          // of a sequelize query, so we utilize instance.get({plain: true})
          // to turn our results into normal objects.
          const stores = rawStores.map(store => store.get({ plain: true }));
          const plainProduct = rawProduct.get({ plain: true });
          const product = {
            ...plainProduct,
            stores
          }
          res.render("inventory/create-product", createProductPageObject(product))
        });
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    },
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // GET: /inventory/edit/store/:storeId/:productId          //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    editStoreInventory: function (req, res) {
      console.log("test2", req.params.productId)
      db.product.findOne({
        where: {
          id: req.params.productId,
          userId: req.user.id
        },
        include: [{
          model: db.store,
          where: {
            id: req.params.storeId,
            userId: req.user.id
          }
        }]
      }).then(function (product) {
        // some object destructuring doesn't work with the direct results
        // of a sequelize query, so we utilize instance.get({plain: true})
        // to turn our results into normal objects.
        res.render("inventory/edit", createStorePageObject(product.get({ plain: true })));
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    },
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // GET: /inventory/edit/product/:productId/:storeId        //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    editProductInventory: function (req, res) {
      db.product.findOne({
        where: {
          id: req.params.productId,
          userId: req.user.id
        },
        include: [{
          model: db.store,
          where: {
            id: req.params.storeId,
            userId: req.user.id
          }
        }]
      }).then(function (product) {
        // some object destructuring doesn't work with the direct results
        // of a sequelize query, so we utilize instance.get({plain: true})
        // to turn our results into normal objects.
        res.render("inventory/edit", createProductPageObject(product.get({ plain: true })));
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    },
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  //                   api routes                              //
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  api: {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // POST: /api/inventory                                    //
    // req.body: {                                             //
    //    price - decimal                                      //
    //    quantity - integer                                   //
    //    productId - integer (from product table)             //
    //    storeId - integer (from store table)                 //
    // }                                                       //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    create: function (req, res) {
      // we use 
      db.inventory.create({
        price: req.body.price,
        quantity: req.body.quantity,
        productId: req.body.productId,
        storeId: req.body.storeId
      }).then(function (results) {
        res.json(results);
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    },
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // PUT: /api/inventory                                    //
    // req.body: {                                             //
    //    price - decimal                                      //
    //    quantity - integer                                   //
    //    productId - integer (from product table)             //
    //    storeId - integer (from store table)                 //
    // }                                                       //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    update: function (req, res) {
      db.inventory.update({
        price: req.body.price,
        quantity: req.body.quantity
      }, {
        where: {
          productId: req.body.productId,
          storeId: req.body.storeId
        }
      }).then(function (results) {
        res.json(results);
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    },
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // DELETE: /api/inventory/:storeId/:productId              //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    delete: function (req, res) {
      db.inventory.destroy({
        where: {
          productId: req.params.productId,
          storeId: req.params.storeId
        }
      }).then(function (results) {
        res.json(results);
      }).catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
    }
  }
}