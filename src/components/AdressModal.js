import React, { useState } from 'react'

const AdressModal = ({ boolState, handleAdress }) => {

    const [adressObj, setAdressObj] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        boolState(true);
    }


    const handleChange = (event) => {
        const value = event.target.value
        setAdressObj(
            {
                ...adressObj,
                [event.target.name]: value
            }
        )
    }

    const adressLine = adressObj.adressLine || '';
    const roomNo = (adressObj.room && (' / ' + adressObj.room)) || '';
    const city = (adressObj.city && (' / ' + adressObj.city)) || '';
    const adState = (adressObj.state && (' / ' + adressObj.state)) || '';
    const postCode = (adressObj.postalCode && (' / ' + adressObj.postalCode)) || '';
    const country = (adressObj.country && (' / ' + adressObj.country)) || '';

    handleAdress(adressLine + roomNo + city + adState + postCode + country)

    return (
        <div className="adressmodal">
            <div className="card" style={{ marginBottom: '0px' }}>
                <div className="card-header" style={{ background: '#f8f4f4' }}>
                    <h4 className="card-title">Adress</h4>
                </div>
                <div className="card-body">
                    <div className="basic-form">
                        <form onSubmit={handleSubmit}>
                            <div className="col-md-12 mb-2">
                                <input type="text" onChange={handleChange} name='adressLine' className="form-control input-default " placeholder="Adress Line 1" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" onChange={handleChange} name='room' className="form-control input-default " placeholder="Room / Suite / Apt #" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" onChange={handleChange} name='city' className="form-control input-default " placeholder="City" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" onChange={handleChange} name='state' className="form-control input-default " placeholder="State" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" onChange={handleChange} name='postalCode' className="form-control input-default " placeholder="Postal Code" />
                            </div>
                            <div className="col-md-12 mb-2">
                                <input type="text" onChange={handleChange} name='country' className="form-control input-default " placeholder="Country" />
                            </div>
                            <div className="col-md-12 mt-3 text-end">
                                <button type='button' onClick={handleSubmit} className="btn btn-primary">Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressModal
