import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        favourites: [],
        modalOpen: false,
        modalProdact: detailProduct,
        favSubTotal: 0,
        favTax: 0,
        favTotal: 0,
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        })
    }
    addToFavourite = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inFavourites = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, favourites: [...this.state.favourites, product] }
        })
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProdact: product, modalOpen: true }
        },
            () => {
                this.addTotals();
            });
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        });
    }
    increment = (id) => {
        let tempFav = [...this.state.favourites]
        const selectedCar = tempFav.find(item => item.id === id)

        const index = tempFav.indexOf(selectedCar)
        const product = tempFav[index];

        product.count = product.count + 1
        product.total = product.count * product.price

        this.setState(() => {
            return {
                favourites: [...tempFav]
            }
        }, () => {
            this.addTotals()
        })
    }
    decrement = (id) => {
        let tempFav = [...this.state.favourites]
        const selectedCar = tempFav.find(item => item.id === id)

        const index = tempFav.indexOf(selectedCar)
        const product = tempFav[index];

        product.count = product.count - 1
        if (product.count === 0) {
            this.removeCar(id)
        }
        else {
            product.total = product.count * product.price
            this.setState(() => {
                return {
                    favourites: [...tempFav]
                }
            }, () => {
                this.addTotals()
            })
        }
    }
    removeCar = (id) => {
        let tempProducts = [...this.state.products];
        let tempFav = [...this.state.favourites]

        tempFav = tempFav.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id))
        let removedCars = tempProducts[index]
        removedCars.inFavourites = false
        removedCars.count = 0
        removedCars.total = 0
        this.setState(() => {
            return {
                favourites: [...tempFav],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals()
        })
    }
    clearFav = (id) => {
        this.setState(() => {
            return { favourites: [] }
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0
        this.state.favourites.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.07
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                favSubTotal: subTotal,
                favTax: tax,
                favTotal: total,

            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToFavourite: this.addToFavourite,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeCar: this.removeCar,
                clearFav: this.clearFav,
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };