In this assignment let's build a **Registration Form** by applying the concepts
we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/registration-form-output-v2.gif" alt="registration-form-desktop-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details close>
<summary>Click to view the Design Files</summary>
<br>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Registration](https://assets.ccbp.in/frontend/content/react-js/registration-form-sm-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Registration Error](https://assets.ccbp.in/frontend/content/react-js/registration-form-sm-error-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Registration Success](https://assets.ccbp.in/frontend/content/react-js/registration-form-sm-success-output-v2.png)

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registration](https://assets.ccbp.in/frontend/content/react-js/registration-form-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registration Error](https://assets.ccbp.in/frontend/content/react-js/registration-form-lg-error-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registration Success](https://assets.ccbp.in/frontend/content/react-js/registration-form-lg-success-output-v2.png)

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

- Display an error message with the text **Required** for all the empty input
  fields when the `submit` button is clicked.
- Display an error message with the text **Required**, when the last name is
  provided and the `submit` button is clicked.
- Display an error message with the text **Required**, when the first name is
  provided and the `submit` button is clicked.
- Display an error message with the text **Required** for the empty field on
  blur
- Display the success screen on successful submit
- When the **Submit Another Response** button is clicked then the form should be
  displayed

</details>

<details close>
<summary>Click to view the Implementation Files</summary>
<br>

- Your task is to complete the implementation of

  - `src/components/RegistrationForm/index.js`
  - `src/components/RegistrationForm/index.css`

</details>

#### Quick Tips

<details close>
<summary>Click to view Quick Tips</summary>
<br>

- The `onBlur` event listener is called when the element has lost the focus.
- You can use the below box-shadow CSS property to apply box-shadow effect to
  the containers,

  ```
    box-shadow: 0px 4px 16px rgba(126, 133, 142, 0.16);

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

### Resources

<details close>
<summary>Image URLs</summary>
<br>

- [https://assets.ccbp.in/frontend/react-js/success-icon-img.png](https://assets.ccbp.in/frontend/react-js/success-icon-img.png) -
alt text should be **success**
</details>

<details close>
<summary>Colors</summary>
<br>
<div style="background-color: #ea580c; width: 150px; padding: 10px; color: black">Hex: #ea580c</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #cbd2d9; width: 150px; padding: 10px; color: black">Hex: #cbd2d9</div>
<div style="background-color: #9aa5b1; width: 150px; padding: 10px; color: black">Hex: #9aa5b1</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #fef2f4; width: 150px; padding: 10px; color: black">Hex: #fef2f4</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
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
