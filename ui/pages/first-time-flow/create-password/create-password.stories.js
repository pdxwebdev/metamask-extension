import React from 'react';
import { action } from '@storybook/addon-actions';
import RecoverWithCenterIdentity from './import-with-center-identity/recover-with-center-identity.component'
import ImportWithSeedPhrase from './import-with-seed-phrase/import-with-seed-phrase.component';
import NewAccount from './new-account';

export default {
  title: 'Pages/FirstTimeFlow/CreatePassword',
  id: __filename,
};

export const RecoverWithCenterIdentityComponent = () => {
  return <RecoverWithCenterIdentity onSubmit={action('Seed Phrase Imported')} />;
};

export const ImportWithSeedPhraseComponent = () => {
  return <ImportWithSeedPhrase onSubmit={action('Seed Phrase Imported')} />;
};

export const NewAccountComponent = () => {
  return <NewAccount onSubmit={action('New Account Created')} />;
};
