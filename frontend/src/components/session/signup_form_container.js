import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
});

const mdtp = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mstp, mdtp)(SessionForm)