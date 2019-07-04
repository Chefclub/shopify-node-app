# Shopify Node App

The goal of this app is to provide a quick way for Shopify app developers to grap test shop tokens. 
I don't save the tokens or anything but I recommand you clone the code yourself and run the app using yarn or docker.   

## Requierements
- If you are going to use this deployed app all you need is this [link](https://shopify-app.chefclub.tools)  
- Node, Yarn and ngrok if you are using Yarn to run the app yourself
- Docker, Docker Compose and ngrok if you are using Docker to run the app yourself 

## Grap the token using our app
### Install the app
- Go to the app's [website](https://shopify-app.chefclub.tools)
- Chnage the TO_CHANGE part to your shop name, accept the required scopes and install the app. 
![](https://i.ibb.co/s5gHTjM/Screenshot-from-2019-07-04-18-25-30.png)
- That's it now you will be greeted with the credentials
![](https://i.ibb.co/LCCtWgD/Screenshot-from-2019-06-30-18-02-51-1.jpg)


## Running the project locally

### Allow your app to talk to Shopify
- Create a tunnel to localhost:3000 using [forward](https://forwardhq.com/) or [ngrok](https://ngrok.com/)
  - Note the tunnel url (we’ll refer to it as `HOST`)

### Register your app in the Partner Dashboard
- Sign into your [Shopify Partner Dashboard](https://partners.shopify.com/organizations)
- Click 'Apps' in the sidebar and create a new app
- Set the app url to `{{ HOST }}/`
- Set the whitelisted URL to `{{ HOST }}/shopify/auth/callback`
- Go to extensions tab and enable “Embed in Shopify admin”

### Configure the .env file
- Rename `.env.example` to `.env` and
  - Set Add HOST from your tunnel service as `SHOPIFY_APP_HOST`
  - Add the api key from partners dash as `SHOPIFY_APP_KEY`
  - Add the api secret from partners dash as `SHOPIFY_APP_SECRET`

### If you are using Yarn
- Run `yarn install && yarn run start`

### If you are Using Dokcer
- Run `make build && make run`

### Get the credentials
- Open a browser to `{{ HOST }}/install`
- Enter your store’s domain and hit install
- Get the credentials
- 🚀 🎉
