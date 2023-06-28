export const filterReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "PRODUCT_LIST":
            return { productList: payload.products }
        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy }
        case "RATING":
            return { ...state, rating: payload.rating }
        case "BEST_SELLER":
            return { ...state, onlyBestSeller: payload.onlyBestSeller }
        case "IN_STOCK":
            return { ...state, onlyInStock: payload.onlyInStock }
        case "CLEAR_FILTER":
            return {
                ...state,
                sortBy: null,
                rating: null,
                onlyBestSeller: false,
                onlyInStock: false
            }
        default:
            throw new Error("No Case Found!")

    }

}

