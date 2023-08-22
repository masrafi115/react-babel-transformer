export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <h1>Hoteles</h1>
                <p>desde el <b>{this.props.initDate}</b> hasta el <b>{this.props.endDate}</b></p>
            </header>
        )
    }

}