import React, { Component } from 'react'
import image from "../../Image/Books17.jpg"
export default class Card extends Component {
  render() {
    return (
        <>
          <div className="card bg-dark text-white">
            <img className="card-img " src={image} alt="Card image" />
              <div className="card-img-overlay ms-3 align-content-center text-start  ">
                  <h5 className="card-title text-danger fs-1 ">Ismail Eshenawy</h5>
                  <p className="card-text fs-2">Web Devoloper.</p>
                  <button className="btn btn-primary p-3 ">contact us</button>
              </div>
          </div>
        </>
    )
  }
}
