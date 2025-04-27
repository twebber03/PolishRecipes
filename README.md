# Full Stack Group Project Template
This repository is a template for your Full Stack Group Project. It includes a basic project structure, along with Markdown examples for weekly meeting notes and the project README.  

Use this repository to store your code and collaborate throughout all FGP stages, starting from FGP3.  

**Note:** This layout is an example. The official requirements for your project README will be provided later in the course.  

## About
The goal of our project is to provide users with an immersive experience in Polish culture through its culinary traditions. Our application allows users to explore authentic Polish recipes by providing detailed instructions, ingredients, servings, and the cultural origins of each dish. This not only enables users to deepen their understanding of Polish heritage but also offers them the opportunity to recreate these dishes in their own kitchens, bridging the gap between culture and cuisine.

## How to use this project<!-- Required -->
- About us Page -- Get more information for the individuals behind this project, acknowledgements, as well as brief description of each page  
- Home Page -- Features a carousel that displays the top K most popular dishes to users, which was implemented using a Priority Queue Data Structure 
- Discover Page -- Also features a carousel that displays the bottom K less common dishes to users so that we cover a broad range of recipes, also implemented with a Priority Queue
    - This feature was added in because we wanted to include cuisines/dishes from areas in Poland that may not be commonly known, but also have significance in the culture so we wanted our users to be able to learn more about that. 
- Saved Page -- Our application allows users to mark a dish as a favorite where they can go back and look for the saved (favorited) dish on this page
- Search -- This page features two types of search capabilities
    - Search by Recipe Name -- has an autocomplete capability that generates the dishes based on the letters users type in, which was implemented using a Trie Data Structure. Once a user clicks on the dish it navigates to the recipe.
    - Search by Tag -- allows users to search recipes through various tags, such as Dish Type (Lunch, Dinner, etc.), Serving Size, and Country of Origin. Afterwards, the search button navigates a user to another page where it displays all the recipes from our data that match those tags. Users can then select a recipe from that list. 

## 
## Demo<!-- Required -->
<!-- 
* You can add a demo here GH supports images/ GIFs/videos 
* 
* It's recommended to use GIFs as they are more dynamic
-->


## Table of Contents<!-- Optional -->
<!-- 
* This section is optional, yet having a contents table 
* helps keeping your README readable and more professional.
* 
* If you are not familiar with HTML, no worries we all been there :D 
* Review learning resources to create anchor links. 
-->


<dev align="center">
    <table align="center">
        <tr>
            <td><a href="README.md#about">About</a></td>  
            <td><a href="README.md#how-to-use-this-project">Getting started</a></td>
            <td><a href="README.md#demo">Demo</a></td>
            <td><a href="README.md#project-roadmap--">Project Roadmap</a></td>
            <td><a href="README.md#documentation">Documentation</a></td>
        </tr>
        <tr>
            <td><a href="README.md#contributors">Contributors</a></td>
            <td><a href="README.md#acknowledgments">Acknowledgments</a></td>
            <td><a href="README.md#feedback">Feedback</a></td>
            <td><a href="README.md#contact">Contact</a></td>
        </tr>
    </table>
</dev>


<!-- - Use this html element to create a back to top button. -->
<p align="right"><a href="#how-to-use-this-project">back to top ⬆️</a></p>


## Contributors<!-- Required -->
<a href="https://github.com/University-of-Illinois-Chicago/fgp-team5/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=University-of-Illinois-Chicago/fgp-team5" />
</a>

<!--  manually adding contributors because dependency graph was not allowed above -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/angelalojko">
        <img src="https://avatars.githubusercontent.com/angelalojko" width="50px;" alt=""/><br />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/okosi3">
        <img src="https://avatars.githubusercontent.com/okosi3" width="50px;" alt=""/><br />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/twebber03">
        <img src="https://avatars.githubusercontent.com/twebber03" width="50px;" alt=""/><br />
      </a>
    </td>
  </tr>
</table>

## Acknowledgments
Thanks to [recipe-scrapers](https://github.com/hhursev/recipe-scrapers) by [hhursev](https://github.com/hhursev) for providing an excellent tool for extracting recipe data from websites.

## Feedback<!-- Required -->
We would love to hear your thoughts on this project! If you have any feedback, suggestions, or questions, feel free to get in touch with us. To reach out, you can find our contact infromation in the contact section below.

## Contact<!-- Required -->
- Project Lead -- Angela Lojko, alojko2@uic.edu
- Frontend Developer -- Oli Kosiacki, okosi3@uic.edu
- Backend Developer -- Thomas Webber, twebb21@uic.edu

<!-- - Use this html element to create a back to top button. -->
<p align="right"><a href="#how-to-use-this-project">back to top ⬆️</a></p>
