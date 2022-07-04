import React, {useContext} from 'react';
import './AppModal.css'
import AppGrid from "./AppGrid";

function AppModal(props) {
    const {product, onSubmitSellPoruct, onCloseModal} = props

    const isSoldOut = (value) => {
        if (value === 0) {
            return <p className="text-sm line-through text-gray-500 px-8">Sold Out</p>
        }
    }

    const productList = product.map((data, i) => {
        return (
            <div key={i}>
                <div className="text-center p-5 flex-auto justify-center">
                    <img src='/img/bottle.png' className='bottle mx-auto'/>
                    <h2 className="text-xl font-bold py-4 ">{data.product_name}</h2>
                    <p className="text-sm text-gray-500 px-8">ราคา: ฿ {data.price}</p>
                    <p
                        className={`text-sm text-gray-500 px-8 ${data.number === 0 ? 'line-through' : ''}`}>
                        จำนวน: {data.number}
                    </p>
                    {isSoldOut(data.number)}

                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button
                            disabled={data.number === 0}
                            onClick={() => {
                                onSubmitSellPoruct(data)
                            }}
                            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div
                className="main-modal min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-80"
                id="modal-id">
                <div className="w-full h-full p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold text-gray-500">Machine no.01</p>
                        <div
                            className="modal-close cursor-pointer z-50"
                            onClick={() => {
                                onCloseModal()
                            }}
                        >
                            <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="">
                        <AppGrid grid={4}>
                            {productList}
                        </AppGrid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppModal;