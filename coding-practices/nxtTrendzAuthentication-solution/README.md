In this assignment let's build a **Nxt Trendz** App with Authentication by
applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-output-v2.gif" alt="nxt-trendz-authentication-desktop-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details close>
<summary>Click to view the Design Files</summary>
<br>

- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-login-output-v2.png)
- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login Error](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-login-error-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-home-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-login-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png)
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

- When invalid credentials are provided in the login form and clicked on the
  **Login** button then the respective error message from the response should be
  displayed.
- When the `username` and `password` are provided correctly and clicked on the
  **Login** button then the page should navigate to `HomeRoute`.
- When an undefined path is provided in the URL then the page should navigate to
  the `NotFoundRoute`.

</details>

<details close>
<summary>Click to view the Implementation Files</summary>
<br>

- Your task is to complete the implementation of

  - `src/App.js`
  - `src/components/LoginForm/index.js`
  - `src/components/LoginForm/index.css`
  - `src/components/Home/index.js`
  - `src/components/Home/index.css`
  - `src/components/Header/index.js`
  - `src/components/Header/index.css`

</details>

#### Quick Tips

<details close>
<summary>Click to view Quick Tips</summary>
<br>

- The box-shadow CSS property adds shadow effects around an element's frame. You
  can set multiple effects separated by commas. Click
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="__blank">this
  </a> to know more.
- The cursor CSS property sets the type of mouse cursor, if any, to show when
  the mouse pointer is over an element. Use the CSS property cursor with the
  value pointer to indicate a link. Click
  <a href="https://css-tricks.com/almanac/properties/c/cursor/" target="_blank">this
  </a> to know more.
- An outline is a line that is drawn around an element, outside the border. The
outline CSS shorthand property sets all the outline properties. Use the CSS
property outline with value none to hide all the outline properties. Click
<a href="https://www.w3schools.com/css/css_outline.asp" target="_blank">this
</a> to know more.
</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
> <br>
>
> - `HomeRoute` should consist of "/" in URL path
> - `LoginRoute` should consist of "/login" in URL path
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
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
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
