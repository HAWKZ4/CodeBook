import { useContext, useReducer, createContext } from "react";
import { filterReducers } from "../reducers";

const filterInitialState = {
    productList: [],
    sortBy: null,
    rating: null,
    onlyBestSeller: false,
    onlyInStock: false
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducers, filterInitialState)

    const initialProductList = (products) => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }

    const inStock = (products) => {
        return state.onlyInStock ? products.filter((product) => product.in_stock === true) : products
    }
    const bestSeller = (products) => {
        return state.onlyBestSeller ? products.filter((product) => product.best_seller === true) : products // test it without equal true:)
    }

    const sort = (products) => {
        if (state.sortBy === "lowToHigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price))
        }
        if (state.sortBy === "highToLow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price))
        }
        return products
    }

    const ratings = (products) => {
        if (state.rating === "4STARSANDABOVE") {
            return products.filter((product) => product.rating >= 4)
        }
        if (state.rating === "3STARSANDABOVE") {
            return products.filter((product) => product.rating >= 3)
        }
        if (state.rating === "2STARSANDABOVE") {
            return products.filter((product) => product.rating >= 2)
        }
        if (state.rating === "1STARANDABOVE") {
            return products.filter((product) => product.rating >= 1)
        }
        return products
    }

    const filterdProducts = ratings(sort(bestSeller(inStock(state.productList))))

    const value = {
        state,
        dispatch,
        products: filterdProducts,
        initialProductList
    }

    return (
        <FilterContext.Provider value={value} >
            {children}
        </FilterContext.Provider>
    )

}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context
}