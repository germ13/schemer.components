import React, {Component} from 'react';


class Meeting extends Component {
    constructor(props) {
        super(props);
        let d = new Date();

        this.state = {
            DisplayName: "Fill In Event Name",
            Year: d.getFullYear(),
            Month: d.getMonth() + 1,
            Date: d.getDate(),
            Hour: d.getHours(),
            Minute: d.getMinutes(),
            EventDate: new Date(),
            EventAllDay: false
        };

        this.changeDetails = this.changeDetails.bind(this);
    }

    changeDetails(e) {
        switch (e.target.id) {
            case '_year-start':
                this.setState({ Year: e.target.value });
                break;
            case '_month-start':
                this.setState({ Month: e.target.value });
                break;
            case '_date-start':
                this.setState({ Date: e.target.value });
                break;
            case '_hour-start':
                this.setState({ Hour: e.target.value });
                break;
            case '_minute-start':
                this.setState({ Minute: e.target.value });
                break;
            case '_all-day':
                this.setState({ EventAllDay: !this.state.EventAllDay });
            default:
                break;
        }
    }

    render() {
        return (
            <div className="Meeting">
                <div>
                    <div>
                        Event Name:
                    </div>
                    <div>
                        <input id='_event-name'
                            type='text'
                            value={this.state.DisplayName}
                            onChange={this.changeDetails} />
                    </div>
                </div>
                <div>
                    <div>
                        Year:
                    </div>
                    <div>
                        <input id='_year-start'
                            type='number'
                            min='1900'
                            max='2100'
                            value={this.state.Year}
                            onChange={this.changeDetails} />
                    </div>
                </div>
                <div>
                    <div>
                        Month:
                    </div>
                    <div>
                        <input id='_month-start'
                            type='number'
                            min='1'
                            max='12'
                            value={this.state.Month}
                            onChange={this.changeDetails} />
                    </div>
                </div>
                <div>
                    <div>
                        Date:
                    </div>
                    <div>
                        <input id='_date-start'
                            type='number'
                            min='1'
                            max='12'
                            value={this.state.Date}
                            onChange={this.changeDetails} />
                    </div>
                </div>
                <div>
                    <label>
                        <input id='_all-day'
                            type='checkbox'
                            name='tesst'
                            checked={this.state.EventAllDay}
                            onChange={this.changeDetails} />
                    All day event?:
                    </label>
                </div>
                <div>
                    <div>
                        <div>
                            Hour:
                    </div>
                        <div>
                            <input id='_hour-start'
                                type='number'
                                min='0'
                                max='23'
                                value={this.state.Hour}
                                onChange={this.changeDetails} />
                        </div>
                    </div>
                    <div>
                        <div>
                            Minute:
                    </div>
                        <div>
                            <input id='_minute-start'
                                type='number'
                                min='0'
                                max='59'
                                value={this.state.Minute}
                                onChange={this.changeDetails} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Meeting;