import { hotelsData } from './data'

//get hotel list for the dropdown
export const getHotelSize = () => {
    return [{ id: 1, size:'Hotel pequeño'}, { id: 2, size:'Hotel mediano'}, { id: 3, size:'Hotel grande'}]
}

//get price list for the dropdown
export const getPrices = () => {
    return [1,2,3,4]
}

//Method that return unique countries from hotelsData
export const getCountries = () => {
    return [...new Set(hotelsData.map(function(hotel) {
        return hotel.country
    }))]
}

const isSize = (hotelRooms, size) => {

    if(size === "1" && hotelRooms <= 10)
        return true

    if(size === "2" && hotelRooms > 10 && hotelRooms <= 20)
        return true
    
    if(size === "3" && hotelRooms > 20)
        return true

    return false
}

//Method that filter hotelsData list by country, price and size
export const getFilteredHotels = (country, price, size) => {

    let hotelList = hotelsData

    if(country !== 'Todos los países')
        hotelList = hotelList.filter(hotel => {
            if(hotel.country.toLowerCase() === country.toLowerCase())
                return hotel
        })

    if(price && price !== 'Cualquier precio')
        hotelList = hotelList.filter(hotel => {
            if(hotel.price == price)
                return hotel
        })

    if(size && size !== 'Cualquier tamaño') {
        hotelList = hotelList.filter(hotel => {
            if(isSize(hotel.rooms,size))
                return hotel
        })
    }

    return hotelList
}