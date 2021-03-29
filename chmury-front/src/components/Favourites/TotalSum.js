import React from 'react'
import { Link } from 'react-router-dom'

export default function TotalSum({ value }) {
    const { favSubTotal, favTax, favTotal, clearFav } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                                onClick={() => clearFav()}
                            >
                                Wyczyść polubione
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                suma częściowa:</span>
                            <strong>{favSubTotal}zł</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Prowizja strony:</span>
                            <strong>{favTax}zł</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Całkowita cena:</span>
                            <strong>{favTotal}zł</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
