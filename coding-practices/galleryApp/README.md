In this assignment let's build a **Gallery App** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif" alt="gallery-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

#### Design Files

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/gallery-sm-output.png)
  
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/gallery-lg-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the user clicks on a thumbnail then the corresponding image should be displayed.

- The list of image and thumbnail URLs is passed to the `Gallery` component as a prop `photosData` in the form of an array object.

- Each photo object will have the following properties.

  | Key              | Data Type |
  | ---------------- | --------- |
  | id               | Number    |
  | imageUrl           | String    |
  | thumbnailUrl     | String    |
  | imageAltText     | String    |
  | thumbnailAltText | String    |

- The value of the key `id` should be used as a key to the `thumbnail` image.
- The value of the key `imageAltText` should be used as alt text to the selected image.
- The value of the key `thumbnailAltText` should be used as alt text to the thumbnail images.
- The default selected image should be the first image in the `photosData` array.
- The `ThumbnailsList` component should render thumbnail images.


- Your task is to complete the implementation of
  - `src/components/Gallery/index.js`
  - `src/components/Gallery/index.css`
  - `src/components/ThumbnailsList/index.js`
  - `src/components/ThumbnailsList/index.css`

### Quick Tip

  - Use the CSS opacity property to set the degree to which content behind an element is hidden. It has a value in the range of 0. Click <a href="https://www.w3schools.com/cssreF/css3_pr_opacity.asp#:~:text=The%20opacity%20property%20sets%20the,and%200%20is%20completely%20transparent." target="_blank">this</a> to know more.

### Resources

#### Images

Image URLs

  - [https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png](https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png](https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png](https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png](https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png](https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-tree-img.png](https://assets.ccbp.in/frontend/react-js/nature-tree-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png](https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-river-img.png](https://assets.ccbp.in/frontend/react-js/nature-river-img.png)

Thumbnail image URLs

  - [https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png)
  - [https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png](https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png)

#### Colors

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>


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
