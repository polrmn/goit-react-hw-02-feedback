
const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <ul>
            <li><button name="good" type="button" onClick={onLeaveFeedback}>Good</button></li>
            <li><button name="neutral" type="button" onClick={onLeaveFeedback}>Neutral</button></li>
            <li><button name="bad" type="button" onClick={onLeaveFeedback}>Bad</button></li>
        </ul>
    )
}

export default FeedbackOptions;