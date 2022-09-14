import AxiosService from "./AxiosService"

export const getListItem = (data) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=366b14feac764c1e140395800882020a&text=${data?.text}&format=json&nojsoncallback=1`
    return AxiosService.get(url, {})
}