import React, { Component } from 'react'
import Title from '../Title';
import FavColumns from './FavColumns'
import EmptyFav from './EmptyFav';
import { ProductConsumer } from '../../context';
import FavList from './FavList'
import TotalSum from './TotalSum'


export default class Favourites extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { favourites } = value;
                        if (favourites.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title title="polubione samochody" />
                                    <FavColumns />
                                    <FavList value={value} />
                                    <TotalSum value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyFav />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
