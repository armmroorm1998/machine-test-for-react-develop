import React, {useEffect, useState} from 'react';
import MainServices from "../../services/MainServices";
import ModalMachine from "./ModalMachine";
import Swal from 'sweetalert2'

const postMachine = {
    machine_name: '', location: '', address: ''
}

function ProductManage(props) {
    const [machineList, setMachineList] = useState([]);
    const [machineData, setMachineData] = useState(postMachine)
    const [refMachine, setRefMachine] = useState('create');
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        ReadData();
    }, [])

    async function ReadData() {
        let resp = await MainServices.getAllMachine();
        setMachineList(resp.data)
    }

    function onSubmitMachine(e) {
        e.preventDefault()
        console.log(machineData)
        if (machineData.machine_name === '' || machineData.location === '' || machineData.address === '') {
            return Swal.fire(
                'โปรดกรอกข้อมูลให้ครบ',
                '',
                'error'
            )
        }

        MainServices.createMachine(machineData).then(resp => {
            Swal.fire(
                'Create Success',
                '',
                'success'
            )

            setMachineData(postMachine);
            ReadData()
            onCloseModalMachine()
        })
    }

    function onCreateMachine() {
        setRefMachine('create')
        setMachineData(postMachine);
        toggleModalMachine()
    }

    function onValueChange(event) {
        const {name, value} = event.target

        setMachineData((prevMachine) => {
            return {
                ...prevMachine,
                [name]: value
            }
        })
    };

    function onEditMachine(data) {
        toggleModalMachine()
        setRefMachine('edit')
        setMachineData(data);
        console.log(data)
    }

    function toggleModalMachine() {
        setShowModal(!showModal)
    }

    function onCloseModalMachine() {
        const modalToClose = document.querySelector('.main-modal');
        modalToClose.classList.remove('fadeIn');
        modalToClose.classList.add('fadeOut');
        setTimeout(() => {
            modalToClose.style.display = 'none';
            toggleModalMachine()
        }, 1000);
    }

    let MachinePost = null;
    if (showModal) {
        MachinePost = <ModalMachine onCloseModalMachine={onCloseModalMachine}
                                    machineData={machineData}
                                    onSubmitMachine={onSubmitMachine}
                                    refMachine={refMachine}
                                    onValueChange={onValueChange}/>
    }

    const TBodyMachine = machineList.map((machine) => {
        return (
            <div key={machine.id} className='mb-8'>
                <img
                    className="w-32 rounded-lg bg-cover bg-center rounded-b-none cursor-pointer hover:scale-110 transition duration-300 ease-in-out transform"
                    src="/img/logo.png"
                    alt="thumbnail"
                    loading="lazy"
                    onClick={() => {
                        onEditMachine(machine)
                    }}
                />
                <h1 className='text-xl font-medium leading-6 tracking-wide text-gray-800 hover:text-blue-500 cursor-pointer'>
                    {machine.machine_name}
                </h1>
                <table className="min-w-max w-full table-auto">
                    <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name Product</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-center">Quantity</th>
                        <th className="py-3 px-6 text-center">Location Address</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                    </thead>

                    {
                        machine.product.map((item) => {
                            return (
                                <tbody key={item.id} className="text-gray-600 text-sm font-light">
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="font-medium">{item.product_name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span
                                            className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{item.price}</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span
                                            className={`${item.number < 10 ? 'bg-red-200 text-red-600' : 'bg-purple-200 text-purple-600'} py-1 px-3 rounded-full text-xs`}>{item.number}</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span
                                            className="bg-indigo-200 text-indigo-600 py-1 px-3 rounded-full text-xs">{machine.address}</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-4 transform hover:text-yellow-500 hover:scale-110">
                                                <span>Edit</span>
                                            </div>
                                            <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <span>delete</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        )
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="w-full">
                    <button
                        className="bg-blue-200 px-5 py-3 my-4 text-sm shadow-sm font-medium tracking-wider border text-blue-600 rounded-full hover:shadow-lg hover:bg-blue-300"
                        onClick={() => {
                            onCreateMachine()
                        }}
                    >
                        Create Machine
                    </button>

                    <div className="bg-white shadow-md rounded my-6">
                        {TBodyMachine}
                    </div>
                </div>
            </div>
            {MachinePost}
        </div>
    );
}

export default ProductManage;