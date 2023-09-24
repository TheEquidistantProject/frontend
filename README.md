
![Equidistant Project Logo](logo_banner.png)

Welcome to the Frontend repository of The Equidistant Project. This repository houses the code and resources for the frontend part of our mission to combat misinformation and bias in the news sphere. Our goal is to create a platform where users can access and interpret factual news, nurturing a more enlightened public discourse.

## Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Frontend Architecture](#frontend-architecture)
- [Features](#features)
- [Getting Started](#getting-started)
- [License](#license)

## Project Overview

The Equidistant Project stands as a beacon against the tide of misinformation and bias prevalent in the news sphere. Our mission is to provide users with a platform where they can access and interpret factual news. We achieve this by scraping a diverse range of news articles, extracting the factual essence, and crafting new, unbiased articles. This project is geared towards nurturing a more enlightened public discourse.

### Technology Stack

Our frontend is built using the following technologies and frameworks:

- **Next.js**: We use Next.js as the foundation of our frontend. It enables server-side rendering (SSR) and client-side rendering (CSR), providing the benefits of both approaches in a single application.

- **Tailwind CSS**: Tailwind CSS is our chosen CSS framework for building user interfaces. It streamlines the styling process and helps maintain a consistent design.

- **Algolia**: Algolia powers our search functionality, allowing users to efficiently search for news articles and relevant information.

- **React Server Components**: We leverage React Server Components to build interactive and dynamic user interfaces, enhancing the user experience.

### Frontend Architecture

Our frontend architecture is a hybrid between server-side rendering (SSR) and client-side rendering (CSR). Here's how it works:

- **Article Pages**: All article pages are generated during the build process and cached. This approach ensures that articles load quickly and efficiently when users access them.

- **Index and Search Pages**: The index and search pages are dynamic and rendered on the client side. This enables real-time interactions and a responsive user interface.

### Features

Our frontend offers the following key features:

- **Access to Unbiased News**: Users can access unbiased news articles crafted from a diverse range of sources, helping them stay informed with accurate information.

- **Efficient Search**: The Algolia-powered search functionality allows users to quickly find articles on specific topics of interest.

- **Interactive User Interface**: React Server Components enable interactive elements that enhance the user experience and engagement.

## Getting Started

To get started with the Equidistant Project Frontend repository, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/YourUsername/Equidistant-Frontend.git
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Configure the frontend settings, including Algolia credentials, in the appropriate configuration files.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for joining us in our mission to combat misinformation and promote unbiased news. Together, we can create a more enlightened public discourse. If you have any questions or feedback, please don't hesitate to [contact us](mailto:contact@equidistantproject.com).
