# BuildIt


# API Reference

## Getting Started

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

