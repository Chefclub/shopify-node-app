import React, { Component } from 'react';
import { Page, AppProvider } from '@shopify/polaris';

import ApiConsole from './components/ApiConsole'

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <AppProvider shopOrigin={shopOrigin} apiKey={apiKey}>
        <Page
          title="My application"
          breadcrumbs={[{ content: 'Home', url: '/foo' }]}
          primaryAction={{ content: 'Add something' }}
        >
          <ApiConsole shopOrigin={shopOrigin} apiKey={apiKey}/>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
