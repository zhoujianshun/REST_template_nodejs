// var id = 0;
// function nextId() {
//     id++;
//     return '' + id;
// }

// function Product(name, manufacturer, price) {
//     this.id = nextId();
//     this.name = name;
//     this.manufacturer = manufacturer;
//     this.price = price;
// }

// var products = [
//     new Product('iPhone 7', 'Apple', 6800),
//     new Product('ThinkPad T440', 'Lenovo', 5999),
//     new Product('LBP2900', 'Canon', 1099),
// ];

const models = require('./db/model');
const Product = models.product;

module.exports = {
    getProducts: async () => {
        let products = await Product.findAll();
        return products;
    },
    getProduct: async (pid) => {
        let p = await Product.findAll({
            where: {
                id: pid
            }
        });
        return p;
    },
    createProduct: async (name, manufacturer, price) => {
        // var p = new Product(name, manufacturer, price);
        // products.push(p);
        var p = await Product.create({
            name: name,
            manufacturer: manufacturer,
            price: price,
        });
        return p;
    },
    deleteProduct:async (pid) => {
        var p = await Product.destroy({
            where: {
                id: pid
            }
          });
        return p;
    }
};