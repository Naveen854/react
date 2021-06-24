In this assignment let's build a **Cryptocurrency Tracker** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif" alt="cryptocurrency-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Success](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-sm-success-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Loading](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-sm-loading-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-lg-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Loading](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-lg-loading-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the page is opened,

  - _loader_ should be displayed
  - Make HTTP GET request to the following URL
    `https://apis.ccbp.in/crypto-currency-converter`
  - After fetching the data, the updated list of different cryptocurrencies should be displayed

- The fetched data contains a list of _cryptocurrency_ objects.
- Each cryptocurrency object will have the following properties.

  | Key           | Data Type |
  | ------------- | --------- |
  | id            | String    |
  | currency_logo | String    |
  | currency_name | String    |
  | usd_value     | Number    |
  | euro_value    | Number    |

- The `CryptocurrencyItem` component should receive the following keys in _cryptoCurrencyData_ prop.

  | Key             | Data Type |
  | --------------- | --------- |
  | id              | String    |
  | currencyLogoUrl | String    |
  | currencyName    | String    |
  | usdValue        | Number    |
  | euroValue       | Number    |

- The _modified_ list of cryptocurrency items is passed to the `CryptocurrenciesList` component as a _cryptoCurrenciesData_ prop in the form of an array object.
- The `CryptocurrenciesList` component should render cryptocurrency items as a list.
- The value of the key _id_ should be used as a key to the `CryptocurrencyItem`.

- Your task is to complete the implementation of
  - `src/components/CryptocurrencyTracker/index.js`
  - `src/components/CryptocurrencyTracker/index.css`
  - `src/components/CryptocurrenciesList/index.js`
  - `src/components/CryptocurrenciesList/index.css`
  - `src/components/CryptocurrencyItem/index.js`
  - `src/components/CryptocurrencyItem/index.css`

#### Quick Tip

- To show the animated loader, we need to import the loader component as
  - `import Loader from 'react-loader-spinner`
- In order to form the given animated loader, use **Rings** for `type` attribute
  & also use **#ffffff** for `color` attribute of `Loader` component

  ```
  <Loader type="Rings" color="#ffffff" height={80} width={80} />
  ```

> #### Important Note
>
> **The following HTML attributes are required for the HTML for the tests to pass**
>
> - The API response received from the given apiUrl should be converted to camel case
> - The value of the key `currencyName` from the converted API response should be used as `alt` attribute value to each crypto currency icon.
>
>  ```
>  <img ... alt={currencyName}/>
>  ```
>
> - Wrap the Loader component with an HTML container element and add the
>   `testid` attribute value as `loader` to it as shown below
>
> ```
> <div testid="loader">
>      <Loader type="Rings" color="#ffffff" height={80} width={80} />
> </div>
> ```

### Resources

#### Data Fetch URLs

- `https://apis.ccbp.in/crypto-currency-converter`

#### Images

- [https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png](https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png)

#### Colors

<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #00e7ff; width: 150px; padding: 10px; color: black">Hex: #00e7ff</div>
<div style="background-color: #00e7ff33; width: 150px; padding: 10px; color: black">Hex: #00e7ff33</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
