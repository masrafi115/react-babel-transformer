const getDay = (d) => {
    let day = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes','sábado']
    
    return day[d]
}

const getMonth = (m) => {
    let month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
     'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    
    return month[m]
}

export const getTodayDate = () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}

export const getDefaultEndDate = () => {
    let newDate = new Date()
    newDate.setDate(new Date().getDate() + 7)
    let dd = String(newDate.getDate()).padStart(2, '0')
    let mm = String(newDate.getMonth() + 1).padStart(2, '0')
    let yyyy = newDate.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}

export const getTextDate = date => {
    let newDate = new Date()
    newDate.setTime(Date.parse(date))
    newDate.setDate(newDate.getDate() + 1)

    return `${getDay(newDate.getDay())}, ${String(newDate.getDate()).padStart(2, '0')} 
    de ${getMonth(newDate.getMonth())} de ${newDate.getFullYear()}`
}