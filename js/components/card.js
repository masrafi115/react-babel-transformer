export default class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.photo} alt="Image" />
                <div className="card-content">
                    <p className="title">{ this.props.name }</p>
                    <p className="description">{ this.props.description }</p>
                    <div className="data">
                        <i className="fas fa-map-marker block" />
                        <label className="location">{ this.props.city + ' , ' + this.props.country }</label>
                    </div>
                    <div className="data inline">
                        <i className="fas fa-bed" />
                        <label className="rooms">{`${this.props.rooms} Habitaciones`}</label>
                    </div>
                    <div className="price inline">
                        <i className={`fas fa-dollar-sign ${ 1 <= this.props.price ? '' : 'opacity'}`} />
                        <i className={`fas fa-dollar-sign ${ 2 <= this.props.price ? '' : 'opacity'}`} />
                        <i className={`fas fa-dollar-sign ${ 3 <= this.props.price ? '' : 'opacity'}`} />
                        <i className={`fas fa-dollar-sign ${ this.props.price === 4 ? '' : 'opacity'}`} />
                    </div>
                </div>
                <a className="card-btn">Reservar</a>
            </div>
        )
    }

}