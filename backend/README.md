# Food Recipe API Documentation

## Base URL
The base URL for the API is: 
```
http://localhost:5000
```

## Authentication
This API uses token-based authentication. To authenticate requests, include the token in the `Authorization` header as follows:
```
Authorization: Bearer <your_token>
```

## Endpoints

### 1. GET /recipe
Retrieve all recipes.

- **Request:**
  - Method: GET
  - Headers: 
    - Authorization: Bearer <your_token> (optional)

- **Response:**
  - Status: 200 OK
  - Body: 
    ```json
    [
      {
        "_id": "recipe_id",
        "title": "Recipe Title",
        "ingredients": ["ingredient1", "ingredient2"],
        "instructions": "Cooking instructions",
        "time": "50min",
        "coverImage": "image_filename",
        "createdBy": "user_id"
      },
      ...
    ]
    ```

### 2. GET /recipe/:id
Retrieve a specific recipe by ID.

- **Request:**
  - Method: GET
  - Parameters: 
    - id (path parameter): The ID of the recipe to retrieve.

- **Response:**
  - Status: 200 OK
  - Body: 
    ```json
    {
      "_id": "recipe_id",
      "title": "Recipe Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Cooking instructions",
      "time": "50min",
      "coverImage": "image_filename",
      "createdBy": "user_id"
    }
    ```

### 3. POST /recipe
Add a new recipe (requires authentication).

- **Request:**
  - Method: POST
  - Headers: 
    - Authorization: Bearer <your_token>
  - Body: 
    ```json
    {
      "title": "Recipe Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Cooking instructions",
      "time": "50min",
      "file": "image_file" // optional
    }
    ```

- **Response:**
  - Status: 201 Created
  - Body: 
    ```json
    {
      "_id": "new_recipe_id",
      "title": "Recipe Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Cooking instructions",
      "time": "50min",
      "coverImage": "image_filename",
      "createdBy": "user_id"
    }
    ```

### 4. PUT /recipe/:id
Edit an existing recipe (requires authentication).

- **Request:**
  - Method: PUT
  - Headers: 
    - Authorization: Bearer <your_token>
  - Parameters: 
    - id (path parameter): The ID of the recipe to edit.
  - Body: 
    ```json
    {
      "title": "Updated Recipe Title",
      "ingredients": ["updated_ingredient1", "updated_ingredient2"],
      "instructions": "Updated cooking instructions",
      "time": "45min",
      "file": "updated_image_file" // optional
    }
    ```

- **Response:**
  - Status: 200 OK
  - Body: 
    ```json
    {
      "title": "Updated Recipe Title",
      "ingredients": ["updated_ingredient1", "updated_ingredient2"],
      "instructions": "Updated cooking instructions",
      "time": "45min"
    }
    ```

### 5. DELETE /recipe/:id
Delete a recipe (requires authentication).

- **Request:**
  - Method: DELETE
  - Headers: 
    - Authorization: Bearer <your_token>
  - Parameters: 
    - id (path parameter): The ID of the recipe to delete.

- **Response:**
  - Status: 200 OK
  - Body: 
    ```json
    {
      "status": "ok"
    }
    ```

## Error Handling
Common error responses include:

- **400 Bad Request**: The request was invalid. Check the request parameters and body.
- **401 Unauthorized**: Authentication failed. Ensure the token is valid.
- **404 Not Found**: The requested resource was not found. Check the ID provided.
- **500 Internal Server Error**: An unexpected error occurred on the server. Please try again later.