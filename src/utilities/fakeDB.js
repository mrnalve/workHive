// Add data to local storage
const addToDb = singleJobData => {
    let appliedJobs = []

    // get previous data from local storage
    let storedCart = localStorage.getItem('Applied-jobs')
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart)
        let exist = appliedJobs.find(appliedJob => appliedJob.id == singleJobData.id);
        if (!exist) {
            appliedJobs.push(singleJobData)
        } else {
            return
        }
    } else {
        appliedJobs.push(singleJobData)
    }
    localStorage.setItem('Applied-jobs', JSON.stringify(appliedJobs))
}

// Get stored data from cart
const getLocalData = () => {
    let shoppingCart = {}

    // get previous data from local storage
    let storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

// Remove a specific element from local storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

// Clear all data from local storage
const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')

export { addToDb, getLocalData, removeFromDb, deleteShoppingCart }