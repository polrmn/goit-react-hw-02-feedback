import { Component } from "react";

export default class Statistics extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0
    }

    handlerFeedbackBtn = (e) => {
        this.setState(prevState => ({[e.target.name]: prevState[e.target.name] + 1 }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    countTotalFeedback = () => {
        this.setState((prevState) => ({total: prevState.total + 1}));
    }
        
    countPositiveFeedbackPercentage = () => {
        this.setState((prevState)=> ({positivePercentage: Math.round(prevState.good / prevState.total * 100)}))
    }

    render() {
        return (
            <>
                <h1>PLease leave your feedback</h1>
                <ul>
                    <li><button name="good" type="button"onClick={this.handlerFeedbackBtn}>Good</button></li>
                    <li><button name="neutral" type="button"onClick={this.handlerFeedbackBtn}>Neutral</button></li>
                    <li><button name="bad" type="button"onClick={this.handlerFeedbackBtn}>Bad</button></li>
                </ul>
                <div>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.state.total}</li>
                    </ul>
                </div>
            </>
        )
    }
}