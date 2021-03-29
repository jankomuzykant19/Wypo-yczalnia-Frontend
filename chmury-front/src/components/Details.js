import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'


export default class  extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const{id,title,img,price,brand,model,engine,power,author_id,description,color,fuel,
                        transmission,technical_state,country_origin,location, inFavourites}=value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/*title*/}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                            {/*title*/}
                            {/*product info*/}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                            {/*product text*/}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h1>{brand} {model}</h1>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Silnik: {engine} l</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Moc: {power} KM</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">{fuel}</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Kolor: {color}</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Kraj pochodzenia: {country_origin}</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Spalanie: {transmission}l/100km</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Lokalizacja: {location}</span>
                                        </h4>
                                        <h4 className="text-title text uppercas text mudted mt-3 mb-2">
                                            <span className="text-uppercase">Stan techniczny: {technical_state}</span>
                                        </h4>
                                        <h3 className="text-blue">
                                            <strong>
                                                Cena: {price}zł/dzień
                                            </strong>
                                        </h3>
                                        <h3 className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Informacje od właściciela:
                                        </h3>
                                        <p className="text-muted lead">{description}</p>
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>
                                                    Powrót
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                            fav
                                            disabled={inFavourites?true:false}
                                            onClick={()=>{
                                                value.addToFavourite(id);
                                                value.openModal(id);
                                            }}>
                                                {inFavourites?"Polubiono":"Dodaj do polubionych"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
