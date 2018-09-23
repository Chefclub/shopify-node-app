import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Card, ResourceList, Avatar, TextStyle,TextContainer,Heading } from '@shopify/polaris';

class ApiConsole extends Component {
  render() {
    return (
      <Layout sectioned>
        {this.renderForm()}
      </Layout>
    )
  }

  renderForm() {
    const { dispatch, requestFields } = this.props;

    return (
      <div>
        <Layout.Section>
        <TextContainer>
              <Heading>Info</Heading>
              <p>
                This diplays your shops credentials
              </p>
              <Heading></Heading>
            </TextContainer>
          <Card>
            <ResourceList
              resourceName={{ singular: 'customer', plural: 'customers' }}
              items={[
                {
                  id: 341,
                  name: 'Shop',
                  value: this.props.shopOrigin,
                  avatarSource: 'https://image.flaticon.com/icons/svg/138/138310.svg'
                },
                {
                  id: 256,
                  name: 'Api Key',
                  avatarSource: 'https://image.flaticon.com/icons/svg/179/179543.svg',
                  value: this.props.apiKey,
                },
                {
                  id: 718,
                  name: 'Access Token',
                  avatarSource: 'https://image.flaticon.com/icons/svg/1067/1067458.svg',
                  value: this.props.accessToken,
                },
                {
                  id: 439,
                  name: 'Scopes',
                  avatarSource: 'https://image.flaticon.com/icons/svg/1090/1090665.svg',
                  value: 'write_fulfillments, read_fulfillments,read_shipping,read_all_orders,write_shipping,read_customers,write_customers,read_orders,write_orders,write_products',
                },
              ]}
              renderItem={(item) => {
                const { id, name, value, avatarSource } = item;
                const media = <Avatar customer size="large" name={name} source={avatarSource} />;

                return (
                  <ResourceList.Item
                    id={id}
                    media={media}
                    accessibilityLabel={`View details for ${name}`}
                  >
                    <h3>
                      <TextStyle variation="strong">{name}</TextStyle>
                    </h3>
                    <div>{value}</div>
                  </ResourceList.Item>
                );
              }}
            />
          </Card>
        </Layout.Section>
      </div>
    )
  }
}

function mapStateToProps({
  requestFields,
  requestInProgress,
  requestError,
  responseBody,
}) {
  return {
    requestFields,
    requestInProgress,
    requestError,
    responseBody,
  };
}

export default connect(mapStateToProps)(ApiConsole);
