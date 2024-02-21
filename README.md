<a name="readme-top"></a>

<!-- GETTING STARTED WITH THE README -->
<!--
*** 1. Search for repo_name and replace with github repo name
-->

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Patchalv/ebay-clone">
    <img src="./public/images/ebay_logo.png" alt="Logo" >
  </a>

  <h3 align="center">ebay E-Commerce Clone</h3>

  <p align="center">
    Fullstack e-commerce website using Next JS, React, Supabase, TailwindCSS, Prisma, Stripe based upon ebay design. 
    <br />
    <a href="https://github.com/Patchalv/ebay-clone"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Patchalv/ebay-clone">View Demo</a>
    ·
    <a href="https://github.com/Patchalv/ebay-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/Patchalv/ebay-clone/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a clone of popular e-commerce website eBay, an online auction and shopping website, eBay provides virtual marketplaces for selling goods, and to buy products provided with online payment services.

In this functional ebay clone users can:

-   Register + Login using Google OAuth
-   Search for items in the search bar
-   See a list of products available (fetched from supabase database)
-   See full details of each product by entering that products individual page.
-   Add + edit their address for delivery
-   Add products to their cart
-   See their cart dynamically update in the top bar.
-   View their full cart details and total by clicking the cart icon
-   Go to the checkout where they can see the products they are buying, their shipping address.
-   Pay for their items using Stripe.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This following frameworks/libraries were used to bootstrap this project:

[![React][React.js]][React-url]
[![Redux][Redux.js]][Redux-url]
[![Next][Next.js]][Next-url]
[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![Bootstrap][Bootstrap.com]][Bootstrap-url]
[![Postgres][postgresql]][postgresql-url]
[![Swagger][swagger]][swagger-url]

Notable mentions:

-   Stripe payments
-   Tailwind CSS
-   Prisma
-   Supbase

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

1. Clone the repo
    ```sh
    git clone https://github.com/Patchalv/ebay-clone.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create .env file (See example.env for example)
4. Setup supabase and add in required keys to .env
5. Setup Google OAth in supabase (https://supabase.com/docs/guides/auth/social-login/auth-google)
6. Setup stripe and add in reqiored keys to .env
7. Run the development server
    ```sh
    npm run dev
    ```
8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

[![LinkedIn][linkedin-contact-shield]][linkedin-url]
[![Email][email-shield]][email-url]
[![Portfolio][portfolio-shield]][portfolio-url]
[![Github][github-shield]][github-url]

Whether you want to reach out about this project, collaborating together in the future, or you just want to reach out, please don't hesitiate to get in touch!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Some resources that I found helpful and would like to give credit to:

-   [John Weeks - Tutorial](https://github.com/John-Weeks-Dev)
-   [Img Shields](https://shields.io)
-   [GitHub Pages](https://pages.github.com)
-   [Font Awesome](https://fontawesome.com)
-   [React Icons](https://react-icons.github.io/react-icons/search)
-   [React Toastify](https://github.com/fkhadra/react-toastify)
-   [Othneil Drew README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Project Specfic -->

[product-screenshot]: images/screenshot.png
[product-logo]: images/logo.png

<!-- Project Shields -->

[contributors-shield]: https://img.shields.io/github/contributors/Patchalv/ebay-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/Patchalv/ebay-clone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Patchalv/ebay-clone.svg?style=for-the-badge
[forks-url]: https://github.com/Patchalv/ebay-clone/network/members
[stars-shield]: https://img.shields.io/github/stars/Patchalv/ebay-clone.svg?style=for-the-badge
[stars-url]: https://github.com/Patchalv/ebay-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/Patchalv/ebay-clone.svg?style=for-the-badge
[issues-url]: https://github.com/Patchalv/ebay-clone/issues
[license-shield]: https://img.shields.io/github/license/Patchalv/ebay-clone.svg?style=for-the-badge
[license-url]: https://github.com/Patchalv/ebay-clone/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Social Mediua -->

[linkedin-contact-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/patrickalvarezeades/
[email-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[email-url]: mailto:p.alvarezeades@gmail.com
[portfolio-shield]: https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white
[portfolio-url]: https://patrickalvarez.com/
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/Patchalv

<!-- Languages & Tech used -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: #
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: #
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: #
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[postgresql]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=nextdotjs&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
