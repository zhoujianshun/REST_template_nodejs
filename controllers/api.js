const products = require('../products');
const rest = require('../rest');
const APIError = rest.APIError;

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts(),
        });
    },
    'GET /api/products/:id': async (ctx, next) => {
        var p = products.getProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    },
    'POST /api/products': async (ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, ctx.request.body.price);
        ctx.rest(p);
    },
    'DELETE /api/products/:id': async (ctx, next) => {
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    },
}