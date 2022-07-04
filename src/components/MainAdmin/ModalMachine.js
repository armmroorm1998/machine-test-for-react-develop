import React from 'react';

function ModalMachine(props) {
    const {onCloseModalMachine, machineData, onValueChange, onSubmitMachine, refMachine} = props
    return (
        <div>
            <div
                className="main-modal min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-80"
                id="modal-id">
                <div
                    className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                    <form onSubmit={onSubmitMachine}>
                        <div
                            className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                        >
                            <p className="font-semibold text-gray-800">Machine</p>
                            <div
                                className="modal-close cursor-pointer z-50"
                                onClick={() => {
                                    onCloseModalMachine()
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
                        <div className="flex flex-col px-6 py-5 bg-gray-50">
                            <p className="mb-2 font-semibold text-gray-700">Name Product</p>
                            <input
                                className="py-2 px-3 rounded-lg border-2 border-purple-300 my-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                value={machineData.machine_name}
                                onChange={onValueChange}
                                name='machine_name'
                                placeholder="Name Product"
                            />
                            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-semibold text-gray-700">Address</p>
                                    <input
                                        className="py-2 px-3 rounded-lg border-2 border-purple-300 my-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        type="text"
                                        value={machineData.address}
                                        onChange={onValueChange}
                                        name='address'
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p className="mb-2 font-semibold text-gray-700">Location longitude</p>
                                    <input
                                        className="py-2 px-3 rounded-lg border-2 border-purple-300 my-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        type="text"
                                        value={machineData.location}
                                        onChange={onValueChange}
                                        name='location'
                                        placeholder="Location longitude"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                            <p
                                className="font-semibold text-gray-600 cursor-pointer"
                                onClick={() => {
                                    onCloseModalMachine()
                                }}
                            >
                                Cancel
                            </p>
                            <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded cursor-pointer"
                                    type='submit'>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalMachine;