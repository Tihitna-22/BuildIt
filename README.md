# BuildIT ~ *Build your online presence here*
[![builditlogo.jpg](https://i.postimg.cc/V6cbFp1p/builditlogo.jpg)](https://postimg.cc/rdQmVhDN)

## Table of content

- [Inspiration](#inspiration)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Features](#features)
    - [Templete Selection](#templete-selection)
    - [Editing Custom Templetes](#editing-custom-templetes)
    - [Create Custom Templetes](#create-custom-templetes)
    
- [API](#API)
- [Future](#future)
- [Front-end](#front-end)
--[Back-end](#back-end)
- [The Team](#the-team)

## Inspiration
In the final month before graduating from the Alx-Holberton software engineering program, we were struggling to build and deploy our own portfolio website. Let alone the struggle to choose the perfect design for our portfolio project, it takes a lot of time coding to get the perfect portfolio site.  We think a lot of people have faced the same problem.

Our platform's primary objective is to help non-coders get their own portfolio and landing pages in just few clicks. This is why we created **BuildIT**. A web builder that helps you create your portfolio project in just a few minutes.

### Context
This project is our Portfolio Project, concluding our Foundations Year at Holberton School. We were able to choose who we wanted to work with and what we wanted to work on, as long as we present a working program at the end of the three weeks of development.

[**BuildIT**](https://letsbuidit.netlify.app/) website builder website 

## Technologies
### Tools

[![technologies.png](https://i.postimg.cc/R0jNZnZY/technologies.png)](https://postimg.cc/McmWsHR0)
### Architecture

[![auth2.png](https://i.postimg.cc/PqpBM8JP/auth2.png)](https://postimg.cc/67KjWqdX)



## Getting Started

To start using this web application, visit https://letsbuidit.netlify.app. To install it, simply clone this repository. You can start the app locally by downloading the neccessary dependencies for the frontend and start the app using the command "npm start". In addition you have to clone the repository for the backend , download the neccessary dependencies for the backend and run the backend using the command "python3 manage.py runserver".
clone the repository

```
git clone git@github.com:NathyG2524/BuildIt.git
```

install dependencies

```
npm install
```

Start the dev server

```
npm run dev
```

## Features

### **Template selection**

BuildIt provides a selection of "clean" and elelegant website designs to explore from a variety of different catagories. The data for each templete is fetched from the internal RESTful API and is used to fill each Bootstrap card. The templete's id is used as the id for the "View" button within the templete card. This allows for the correct templete details to be fetched when the user clicks on the button since the id becomes part of the URL for the templete.

[![previewtemletes.png](https://i.postimg.cc/yY3WqBvm/previewtemletes.png)](https://postimg.cc/kB97KrrG)

### **Use Custom Templetes**

When a user clicks on the edit button below the templete an editable templete-specific page where the templete's details are fetched from the internal RESTful API.
The user can change the fontstyles, font-color, upload-pictures ... and save the page inside the users profile.

[![editor.png](https://i.postimg.cc/2j4t89TP/editor.png)](https://postimg.cc/7bZ9KVFV)

### **Create Custom Templetes**
By clicking on the edior nav bar you can create you own templete by dragging and dropping the components on the left side bar.

[![editorfild.png](https://i.postimg.cc/vBg3jdGN/editorfild.png)](https://postimg.cc/KkbPkwkP)



## API

We built an API using Django-Rest framework where the front end can access the backend server and  can do CRUD operations. Here's a description of each endpoint:

### Endpoints
---
    1.  GET /pages: Get all pages.

    Fetches all pages.
    returns: an object with the following fields:

    Sample: curl -X GET http://localhost:8000/api/pages/
    
``` json
    [
    {
        "id": 18,
        "name": "untitled",
        "description": "",
        "html": "<body><link rel=\"preconnect\" 
                    ........
                    ..... </footer></body>",
        "css": "* { box-sizing: border-box; } body {margin: 0;}section{font-family:Poppins, sans-serif;}#ivhzpl{background-image:url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80);}"
    },
    {
        "id": 19,
        "name": "untitled",
        "description": "",
        "html": "<body><div class=\"mx-auto right-0 mt-2 w-60\"><div class=\"bg-white rounded overflow-hidden shadow-lg\"><div class=\"text-center p-6 bg-gray-800 border-b\">\r\n
        ................
        .........</div></footer></body>",
        "css": "* { box-sizing: border-box; } body {margin: 0;}section{font-family:Poppins, sans-serif;}#i9rjso{background-image:url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80);}"
    },
    {
        "id": 20,
        "name": "untitled",
        "description": "",
        "html": "<body><div class=\"mx-auto right-0 mt-2 w-60\"><div class=\"bg-white rounded overflow-hidden shadow-lg\"><div class=\"text-center p-6 bg-gray-800 border-b\">\r\n.............
        ..............................
        ..................</footer></body>",
        "css": "* { box-sizing: border-box; } body {margin: 0;}section{font-family:Poppins, sans-serif;}#i9rjso{background-image:url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80);}"
    }
]
```
---

---
    1.  GET '/pages${integer}': Get all pages.

    Fetches all pages.
    returns: an object with the following fields:

    Sample: curl -X GET http://localhost:8000/api/pages/
    
``` json

---

    3. DELETE '/pages/${integer}':  Deletes a page

    Request Arguments: `id` is the page id of the page to be deleted.
    Returns: An object with the following fields:

    Sample: curl -X GET http://localhost:8000/pages/18

``` json
{
    "success": true,
    "deleted": "18"
}
```
---
     
## Future

Beyond this initial MVP which was built in 2 weeks, we would like to continue to add many more features to BuildIt website. In particular, we would like to include an automated deployment feature to it, where the user can deploy the website  he/she created by just clicking on it. In addition we are considering to add a payment integration system to the website. 

If you have any feedback (ex: feature ideas) or would like to contribute to this project, please feel free to contact us.

### Front-End :dog2:

[View the dedicated front-end README.md.](./frontend)

### Back-End :feet:

[View the dedicated back-end README.md.](https://github.com/abdisag1/builditproduction#readme)

## The Team
We are three dog enthusiasts who are passionate about coding but also like to keep it fun!

* **Natnael Girma** [@Natnael](https://) - Software Enginineer
* **Tihitina Sisay** [@Tihitina](https://) - Software Engineer
* **Tihitina Sisay** [@Tihitina]() - Software Enginineer
* **Abdisa Gemechu** [@Abdisa](https://linkedin/abdisa-gemechu) -Software Enginineer
