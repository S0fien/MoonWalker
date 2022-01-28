import axios from "axios";
import {API_BASE_URL, API_SPECIFIC_ON_ASTRONAUT} from "../../data/constants";

export default class Manager {
    createAstronaut = (data) => {
        return new Promise((resolve, reject) => {
            axios.post(API_BASE_URL, data).then((response) => {
                resolve(response.data)
            }).catch((error) => reject(error))
        })
    }
    getAstronaut = (id) => {
        return new Promise((resolve, reject) => {
            axios.get(API_SPECIFIC_ON_ASTRONAUT(id)).then((response) => {
                resolve(response.data)
            }).catch((error) => reject(error))
        })
    }
    getAllAstronauts = () => {
        return new Promise((resolve, reject) => {
            axios.get(API_BASE_URL).then((response) => {
                resolve(response.data)
            }).catch((error) => reject(error))
        })
    }
    updateAstronaut = (id, data) => {
        return new Promise((resolve, reject) => {
            axios.patch(API_SPECIFIC_ON_ASTRONAUT(id), data).then((response) => {
                resolve(response.data)
            }).catch((error) => reject(error))
        })
    }
    deleteAstronaut = (id) => {
        return new Promise((resolve, reject) => {
            axios.delete(API_SPECIFIC_ON_ASTRONAUT(id)).then((response) => {
                resolve(response.data)
            }).catch((error) => reject(error))
        })
    }
}
