## BENJ

## Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#product-detail">Product Detail</a></li>
        <li><a href="#related-items-and-outfit-creation">Related Items & Outfit Creation</a></li>
        <li><a href="#questions-and-answers">Questions & Answers</a></li>
        <li><a href="#ratings-and-reviews">Ratings & Reviews</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Overview

Project Atelier is an dynamic and responsive web application that I built using [React](https://reactjs.org/) and [Node.js](https://nodejs.org/en/). The application showcases a range of products to potential customers, and facilitates a seamless shopping experience.

This project met the goals of designing a retail portal to implement the following mentioned features:

## Product Detail

- ## Product information

  - The Product Detail page provides essential information about the product, including the rating, category, title, price, overview, and social media links. This allows customers to quickly and easily make an informed decision about whether the product meets their needs.

- Image gallery

  - The Image gallery provides a smooth experience when navigating through images. Allowing image expansion and dynamic zoom functionality.

- Style Selector & Add to Cart

  - This component will guide the customer through finding the product and style combo they like, and provide a smooth checkout experience.

  <p align="right">(<a href="#top">back to top</a>)</p>

## Related Items and Your Outfits

The Related Items & Your Outfits module will display two sets of Carousels with cards about the product. The first set,'Related Items', will be a list of products, determined internally, that are related to the product currently being shown in the overview. The second set,'Your Outfits', will be a list custom created by the user with products which the user has added to the carousel themselves.

- Related Product
  - The related product list display products which have been associated with the current product by the company.
  - The product card itself will be clickable. Clicking the card will navigate to the detail page for that product.
  - The product card will also have a ☆ button, that opens up a modal.
    - Inside the modal will be a comparison of features with the clicked card, and current overview item.
- Your Outfit
  - The outfit list contain products which the user has selected to group together as an outfit.
  - the first card in this carousel is a custom card button, and when clicked will add the current overview product.
  - Each card is stored in the user's local storage, to ensure uniqueness and retains the list the reload.
  - Each card will have a a X button, that deletes the product from the users 'Your Outfits' list.

 <p align="right">(<a href="#top">back to top</a>)</p>

## Questions and Answers

The Questions & Answers module allows asking and answering of questions for the product selected. The module contains the following components:

- View questions
  - The section displays up to 4 questions and 2 answers per question. Questions only contain their question body and include helpfulness and report functionality. Each answer includes the same functionality, with additional user and date information for the
    posted answer. If more than 2 answers exist, then a See More Answers button will appear that displays the remaining questions when clicked. Collapse Answers will then display at the bottom of the list to collapse the answers back to 2.
  - Clicking on the More Answered Questions button will expand the questions list to a scrollable list that includes the remaining questions.
  - Each question and it's corresponding answers can be marked as helpful by clicking Yes. This will increase the helpfulness count of the respective question or answer by 1. Questions can be reported by clicking on report which will mark them as reported
    in the system and remove them from the list. Reporting answers will provide visual feedback that the answer has been marked as reported but keep the answer in the list.
- Search for a question
  - The search bar in the section allows searching for specific questions. The typed text will be matched against the question body and return any matching results. Clearing the search bar will return the questions list to the original questions.
- Asking a question
  - If a question is not found in the list, a new one can be asked by clicking the Add a Question button.
- Answering a question
  - Each question has an Add Answer button that will display a form modal for the question to be answered. This modal consists of 3 fields: answer body, nickname, and email. These 3 fields are required and must be filled out before submitting. At least 1 character is required for the answer field, no more than 60 characters are allowed for the nickname field, and the email must be in the proper format. An optional photo is allowed to be uploaded by clicking on the Upload Photo button. Up to 5 photos can be selected. Clicking submit will submit the answer and close the form, displaying the answer as the very last one for the selected question. If photos were selected, they will appear between the answer body and user information.

This component will extend the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.

<p align="right">(<a href="#top">back to top</a>)</p>

## Ratings and Reviews

The Ratings & Reviews module presents an interactive and user-friendly platform for displaying product reviews. The module incorporates several features to facilitate users in sorting, filtering, and reading reviews with ease. The module consists of the following functionalities:

Write new review: This feature enables users to create a new review for the product. It is accessed through a button labeled "write a review" at the bottom of the page.

Reviews List: The Reviews List is the core of the module and displays all available reviews for the user to read. The list displays two review titles at a time and offers a "show more" button to reveal additional reviews. The "show more" button is replaced by a "show less" button once all reviews have been displayed, which returns the list to its default state. Users can sort the reviews by helpfulness, relevance, or newest.

Rating Breakdown: The Rating Breakdown displays the product's average rating and individual star bars that users can click on to filter the review list by that particular star rating. If users click on another star rating, it will be added to the filter. Double-clicking on the same star rating will bring the review list back to its default state.

Product Breakdown: Displaying the average feedback received for all relevant product characteristics, this feature offers users a concise summary of the product's key characteristics.

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

The main purpose of this repository is for education and practicing building a React application.

## Installation

1. Create Github personal access token [here](https://www.google.com).

2. Fork and clone this repo, then open the terminal and navigate to the project root directory.

3. Change config.example.js file to config.js, and change to your Github access token.

```js
TOKEN = "YOUR TOKEN";
```

4. In the terminal run the following scripts:

```
npm install
npm run build
npm start
```

5. Navigate to [localhost:3000](http://localhost:3000) in the browser.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

#### Creators:

- [Sajana Balal](https://github.com/SajanaB)
- [YuHeng Jiang](https://www.linkedin.com)
- [Louise Ly](https://www.linkedin.com)

<p align="right">(<a href="#top">back to top</a>)</p>
