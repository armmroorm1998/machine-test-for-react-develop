import {request} from "../utils/api";
import env from '../config/environemnt'

export default {
    getAllMachine() {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/machine`,
            method: 'get',
            data: {}
        })
        // return apiServices.get('/machine')
    },

    placeOrder({productId, totalPrice, totalNumber}) {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/orders/placeOrder`,
            method: 'post',
            data: {productId, totalPrice, totalNumber}
        })
        // return apiServices.post('/orders/placeOrder', { productId, totalPrice, totalNumber })
    },

    createMachine({machineName, location, address}) {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/machine`,
            method: 'post',
            data: {machineName, location, address}
        })
        // return apiServices.post('/machine', { machineName, location, address })
    },

    updateMachine(id, {machineName, location, address}) {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/machine/${id}`,
            method: 'put',
            data: {machineName, location, address}
        })
        // return apiServices.put(`/machine/${id}`, { machineName, location, address })
    },

    createProduct({productName, price, number, machineId}) {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/product`,
            method: 'post',
            data: {productName, price, number, machineId}
        })
        // return apiServices.post('/product', { productName, price, number, machineId })
    },

    updateProduct(id, {productName, price, number, machineId}) {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/product/${id}`,
            method: 'put',
            data: {productName, price, number, machineId}
        })
        // return apiServices.put(`/product/${id}`, { productName, price, number, machineId })
    },

    checkStock() {
        return request({
            url: `${env.serveConfig.SERVICE_URL}/product/checkStock`,
            method: 'get',
            data: {}
        })
        // return apiServices.get('/product/checkStock')
    }
}
