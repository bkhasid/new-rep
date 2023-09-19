
import jsonConfig from '../../../config.json';
import { getRequest, postRequest, updateRequest, getAllRequest, deleteRequest } from '../../infra/rest/api-request';
import { Restaurant } from './api-request/get-restaurants-request';

const baseUrl = jsonConfig.baseUrl + '/';

const getRestaurants = async () => {
    return getAllRequest(baseUrl + 'restaurants');

}

const resetServer = async () => {
    return postRequest(baseUrl + 'reset');

}

const createRestaurant = async (body: Restaurant) => {
    return postRequest(baseUrl + 'restaurant', body);
}

const getRestaurantById = async (id: number) => {
    return getRequest(baseUrl + 'restaurant', id);
}

const updateRestaurantById = async (id: number, newParam?: any) => {
    return updateRequest(baseUrl + 'restaurant/' + id, newParam);
}

const deleteRestaurantById = async (id: number) => {
    return deleteRequest(baseUrl + 'restaurant/' + id);
}

export default { getRestaurants, resetServer, createRestaurant, getRestaurantById, updateRestaurantById, deleteRestaurantById }