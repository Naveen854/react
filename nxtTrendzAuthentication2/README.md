In this assignment let's build a **Nxt Trendz** App with Authentication by
applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-output-v2.gif" alt="nxt-trendz-authorisation-desktop-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details close>
<summary>Click to view the Design Files</summary>
<br>

- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-login-output-v2.png)
- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login Error](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-login-error-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-home-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-products-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-cart-output.png)

- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-login-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-lg-products-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-lg-cart-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-not-found-output.png)

</details>

### Project Set Up Instructions

<details close>
<summary>Click to view the Set Up Instructions</summary>
<br>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Project Completion Instructions

<details close>
<summary>Click to view the Functionality to be added</summary>
<br>

#### Add Functionality

The app must have the following functionalities

- When an unauthenticated user tries to access the `HomeRoute`, `ProductsRoute`
  or `CartRoute` then the page should be redirected to the `LoginRoute`.
- When an authenticated user tries to access the `HomeRoute`, `ProductsRoute` or
  `CartRoute` then the page should be navigated to the respective route.
- When an authenticated user tries to access the `LoginRoute` then the page
  should be redirected to the `HomeRoute`.
- When the Logout button is clicked then the page should be navigated to the
  `LoginRoute`.
- When an undefined path is provided in the URL then the page should navigate to
the `NotFoundRoute`
</details>

<details close>
<summary>Click to view the Example response</summary>
<br>

- Success response from the URL `https://apis.ccbp.in/login` will be

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

- Failure response from the URL `https://apis.ccbp.in/login` for an invalid
  username will be

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>

<details close>
<summary>Click to view the Implementation Files</summary>
<br>

- Your task is to complete the implementation of

  - `src/App.js`
  - `src/components/LoginForm/index.js`
  - `src/components/Header/index.js`
  - `src/components/Header/index.css`
  - `src/components/Products/index.js`
  - `src/components/Products/index.css`
  - `src/components/Cart/index.js`
  - `src/components/Cart/index.css`

</details>

#### Quick Tips

<details close>
<summary>Click to view Quick Tips</summary>
<br>

- The `onBlur` event listener is called when the element has lost the focus.
- You can use the below box-shadow CSS property to apply box-shadow effect to
  the containers,

  ```
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);

  ```

- You can use the below cursor CSS property for buttons to set the type of mouse
  cursor, to show when the mouse pointer is over an element,

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below outline CSS property for buttons and input elements to
  remove the highlighting when the elements are clicked,

  ```
    outline: none;
  ```

</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
> <br>
>
> - `HomeRoute` should consist of "/" in URL path
> - `LoginRoute` should consist of "/login" in URL path
> - `ProductsRoute` should consist of "/products" in URL path
> - `CartRoute` should consist of "/cart" in URL path
> - No need to use the `BrowserRouter` in `App.js` as we have already included
>   in `index.js`
> - Request body
>
>   ```
>   {
>     "username": "rahul",
>     "password": "rahul@2021"
>   }
>   ```
>
> - Valid credentials
>
>   ```
>    username: rahul
>    password: rahul@2021
>   ```
>
> - Access the error message for invalid requests with the key `error_msg`
> </details>

### Resources

<details close>
<summary>Data Fetch URLs</summary>
<br>

- `https://apis.ccbp.in/login`
</details>

<details close>
<summary>Image URLs</summary>
<br>

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png) -
  alt text should be **website logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png) -
  alt text should be **website login**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png) -
  alt text should be **clothes that get you noticed**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png) -
  alt text should be **nav logout**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png) -
  alt text should be **nav home**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png) -
  alt text should be **nav products**

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png) -
  alt text should be **nav cart**

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png) -
  alt text should be **products**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png) -
alt text should be **cart**
</details>

<details close>
<summary>Colors</summary>
<br>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #e6f6ff; width: 150px; padding: 10px; color: black">Hex: #e6f6ff</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: black">Hex: #64748b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>

</details>

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
