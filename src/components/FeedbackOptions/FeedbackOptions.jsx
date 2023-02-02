import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <Box sx={{display: 'flex', gap: 2, justifyContent:'center', mb: 2}}>
            <Button variant='contained' color='success' sx={{fontSize: 30}} name="good" type="button" onClick={onLeaveFeedback}>Good</Button>
            <Button variant='contained' color='secondary' sx={{fontSize: 30}} name="neutral" type="button" onClick={onLeaveFeedback}>Neutral</Button>
            <Button variant='contained' color='error' sx={{fontSize: 30}} name="bad" type="button" onClick={onLeaveFeedback}>Bad</Button>
        </Box>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;