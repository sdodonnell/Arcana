import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = state => ({
    errors: state.errors.session
});

const mdtp = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(mstp, mdtp)(SessionForm)