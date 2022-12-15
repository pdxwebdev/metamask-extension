import { connect } from 'react-redux';
import { setSeedPhraseBackedUp } from '../../../../store/actions';
import RecoverWithCenterIdentity from './recover-with-center-identity.component';

const mapDispatchToProps = (dispatch) => {
  return {
    setSeedPhraseBackedUp: (seedPhraseBackupState) =>
      dispatch(setSeedPhraseBackedUp(seedPhraseBackupState)),
  };
};

export default connect(null, mapDispatchToProps)(RecoverWithCenterIdentity);
