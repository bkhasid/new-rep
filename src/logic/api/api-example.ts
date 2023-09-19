import { getRequest, postRequest } from '../../infra/rest/api-request'

export class ApiExample {

    static getDataExample = async (url: string) => {
        return await getRequest(url)
    }
}
