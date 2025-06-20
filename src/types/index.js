// Type definitions for the ShoppyGlobe e-commerce application
// Using JSDoc comments for type documentation in JavaScript

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {number} discountPercentage
 * @property {number} rating
 * @property {number} stock
 * @property {string} brand
 * @property {string} category
 * @property {string} thumbnail
 * @property {string[]} images
 */

/**
 * @typedef {Object} CartItem
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {number} quantity
 * @property {string} thumbnail
 * @property {number} total
 */

/**
 * @typedef {Object} ProductsResponse
 * @property {Product[]} products
 * @property {number} total
 * @property {number} skip
 * @property {number} limit
 */

/**
 * @typedef {Object} CartState
 * @property {CartItem[]} items
 * @property {number} totalQuantity
 * @property {number} totalAmount
 */

// Export empty object since this is now just for JSDoc documentation
export default {}; 