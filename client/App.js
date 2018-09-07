import React, { Component } from 'react';
import { Page, AppProvider } from '@shopify/polaris';

import ApiConsole from './components/ApiConsole'

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <AppProvider shopOrigin={shopOrigin} apiKey={apiKey}>
        <Page
          title="OAuth information"
          breadcrumbs={[{ content: 'Home', url: '/chefclub-app' }]}
        >
          <ApiConsole shopOrigin={shopOrigin} apiKey={apiKey}/>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
