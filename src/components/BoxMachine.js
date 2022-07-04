import React, {useContext, useEffect, useState} from 'react';
import AppGrid from "./AppGrid";
import Image from "./Image";
import AppModal from "./AppModal";
import MainServices from "../services/MainServices";
import Swal from 'sweetalert2'

function BoxMachine(props) {
    const [machineList, setMachineList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        ReadData();
    }, [])

    async function ReadData() {
        let resp = await MainServices.getAllMachine();
        setMachineList(resp.data)
    }

    function onCloseModal() {
        const modalToClose = document.querySelector('.main-modal');
        modalToClose.classList.remove('fadeIn');
        modalToClose.classList.add('fadeOut');
        setTimeout(() => {
            modalToClose.style.display = 'none';
            setShowModal(false);
        }, 1000);
    }

    async function onSubmitSellPoruct(item) {
        let postData = {
            'productId': item.id,
            'totalPrice': parseInt(item.price),
            'totalNumber': 1
        }

        Swal.fire({
            title: 'ยืนยันคำสั่งซื้อหรือไม่?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.isConfirmed) {
                MainServices.placeOrder(postData).then(resp => {
                    Swal.fire(
                        'สั่งซื้อสินค้าสำเร็จ',
                        'ขอบคุณสำหรับคำสั่งซื้อของท่าน',
                        'success'
                    )
                    ReadData()
                    onCloseModal()
                }).catch(err => {
                    console.log(err)
                })
            }
        })
    }

    let galleryPost = null;
    if (showModal) {
        galleryPost = <AppModal
            product={product}
            onSubmitSellPoruct={onSubmitSellPoruct}
            onCloseModal={onCloseModal}
        />
    }

    function onSelectedClick(item) {
        setProduct(item)
        setShowModal(true)
    }

    const MachineBox = machineList.map((data, i) => {
        return (
            <div
                key={i}
                className="h-full max-w-lg mx-auto bg-indigo-100 border-2 border-indigo-400 border-opacity-50 rounded-lg overflow-hidden shadow-md">
                <Image/>

                <div className="py-2 px-4">
                    <h1
                        className="text-xl font-medium leading-6 tracking-wide text-gray-800 hover:text-blue-500 cursor-pointer"
                    >
                        <span onClick={() => {onSelectedClick(data.product)}}>Name: {data.machine_name}</span>
                    </h1>
                </div>
                <div className="px-4 space-y-2 mb-4">
                    <p className="text-gray-600 font-normal leading-5 tracking-wide">
                        Address: {data.address}
                    </p>

                    <button
                        onClick={() => {
                            onSelectedClick(data.product)
                        }}
                        type="button"
                        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition ease-in duration-700 ease select-none hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                    >
                        See more...
                    </button>
                </div>
            </div>
        )
    })

    return (
        <>
            <AppGrid grid={3}>
                {MachineBox}
            </AppGrid>

            {galleryPost}
        </>
    );
}

export default BoxMachine;