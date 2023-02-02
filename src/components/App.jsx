import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handlerFeedbackBtn = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({ total: prevState.total + 1 }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    return (
      <>
        <Section title="PLease leave your feedback">
          <FeedbackOptions
            // options={['good','neutral','bad']}
            onLeaveFeedback={this.handlerFeedbackBtn}
          />
          {this.state.total ?
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
            :
            <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
}
