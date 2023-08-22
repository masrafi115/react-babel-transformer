import Header from './components/header'
import Filter from './components/filter'
import Container from './components/container'
import { hotelsData } from './data'
import { getTextDate } from './util/date'
import { getHotelSize, getPrices, getCountries, getFilteredHotels } from './data/filterData'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hotelList: hotelsData,
            initDate: null,
            endDate: null
        }

        this.getInitDateText = this.getInitDateText.bind(this)
        this.getEndDateText = this.getEndDateText.bind(this)
        this.getFilterHotelList = this.getFilterHotelList.bind(this)
    }

    getInitDateText(date) {
        this.setState({ initDate: getTextDate(date) })
    }

    getEndDateText(date) {
        this.setState({ endDate: getTextDate(date) })
    }

    getFilterHotelList(country, price, size) {
        this.setState({ hotelList: getFilteredHotels(country, price, size) })
    }

    render() {
        return (
            <div>
                <Header 
                    initDate={this.state.initDate}
                    endDate={this.state.endDate}
                />
                <Filter 
                    countries={getCountries()}
                    prices={getPrices()}
                    sizes={getHotelSize()}
                    getInitDateText={this.getInitDateText}
                    getEndDateText={this.getEndDateText}
                    getFilterHotelList={this.getFilterHotelList}
                />
                <Container hotelList={this.state.hotelList} />
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)