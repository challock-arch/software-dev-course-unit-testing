function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    let discountedPrice = price * (1-discountRate);
    return discountedPrice;
    // return null;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    return products.filter(callback);
    // return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    inventory.sort((a,b) => a.key - b.key);
    return [];
}

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
};