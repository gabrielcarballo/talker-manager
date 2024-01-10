# Project README - Talker Registration Manager

## Project Overview

This project involves creating a backend only speaker registration system where users can perform CRUD operations (Create, Read, Update, and Delete) on speaker profiles. Additionally, the project includes endpoints to read and write data to a file using the fs module in Node.js. The project also includes a login endpoint that authenticates users and generates a token for further requests.

## Development

### Technologies
- Node.js
- Express.js
- JavaScript
- fs (file system) module
- Jest
- ESLint
- Bcrypt

## Project Structure
The project is structured around multiple endpoints, each serving a specific function:
- `GET /talker`: Retrieve all registered speakers.
- `GET /talker/:id`: Retrieve a specific speaker by ID.
- `POST /login`: Authenticate and generate a token for further requests.
- `POST /talker`: Register a new speaker.
- `PUT /talker/:id`: Edit an existing speaker.
- `DELETE /talker/:id`: Delete a speaker.
- `GET /talker/search?q=searchTerm`: Search for speakers by name.

## Project Requirements
<details>
<summary>
1. Endpoint GET /talker
</summary>
Retrieve all registered speakers.

*Example Response:*
```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  // ... more speakers
]
```
*Empty Response if No Speakers:*

```json
[]
```
</details>
<details>
<summary>
2. Endpoint GET /talker/:id
</summary>
Retrieve a specific speaker by ID.

*Example Response:*

```json

{
  "name": "Henrique Albuquerque",
  "age": 62,
  "id": 1,
  "talk": { "watchedAt": "23/10/2020", "rate": 5 }
}
```

*Not Found Response:*

```json

{
  "message": "Pessoa palestrante não encontrada"
}
```
</details>
<details>
<summary>
3. Endpoint POST /login
</summary>
Authenticate and generate a token.

*Request Body:*

```json

{
  "email": "email@email.com",
  "password": "123456"
}
```

*Validation Errors:*

```json

{
  "message": "O campo \"email\" é obrigatório"
}
// ... more validation errors
```
</details>
<details>
<summary>
4. Validations for POST /login
</summary>
Validate email and password fields.

*Validation Errors:*

```json

{
  "message": "O campo \"email\" é obrigatório"
}
// ... more validation errors
```
</details>
<details>
<summary>
5. Endpoint POST /talker
</summary>
Register a new speaker.

*Request Body:*

```json

{
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
  }
}
```

*Validation Errors:*

```json

{
  "message": "Token não encontrado"
}
// ... more validation errors
```
*Successful Response:*

```json

{
  "id": 1,
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
  }
}
```
</details>
<details>
<summary>
6. Endpoint PUT /talker/:id
</summary>
Edit an existing speaker.

*Request Body:*

```json

{
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
  }
}
```
*Validation Errors:*

```json

{
  "message": "Token não encontrado"
}
// ... more validation errors
```
*Successful Response:*

```json

{
  "id": 1,
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 4
  }
}
```
</details>
<details>
<summary>
7. Endpoint DELETE /talker/:id
</summary>
Delete a speaker by ID.

*Validation Errors:*

```json

{
  "message": "Token não encontrado"
}
// ... more validation errors
```

*Successful Response:*

```json

{} // Empty response with status 204
```
</details>
<details>
<summary>
8. Endpoint GET /talker/search?q=searchTerm
</summary>
Search for speakers by name.

*Token Validation Errors:*

```json

{
  "message": "Token não encontrado"
}
// ... more token validation errors
```
*Search Results:*

```json

[
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5,
    },
  }
]
```
*Empty Response if No Results:*

```json

[]
```
</details>

## Installation and Setup Instructions

1. Clone this repository. You will need `node` and `npm` installed globally on your machine.
    ```
    git clone https://github.com/gabrielcarballo/talker-manager.git
    ```

2. Installation:
    ```
    cd talker-manager
    npm install
    ```

3. To Start Server:
    ```
    npm start
    ```

## Usage Instructions

Since this project is a backend application, you interact with it using API calls. You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to make these requests.

Here are some examples:

1. To retrieve all registered speakers:
    ```
    GET /talker
    ```

2. To retrieve a specific speaker by ID:
    ```
    GET /talker/:id
    ```

3. To authenticate and generate a token for further requests:
    ```
    POST /login
    ```

    Body:
    ```json
    {
      "email": "email@email.com",
      "password": "123456"
    }
    ```

Remember to replace `:id` with the actual ID of the speaker you want to retrieve, and to replace the email and password in the `POST /login` request with your actual email and password.

## Feedback

Your feedback is crucial! Please provide insights and suggestions regarding the project. I'm eager to incorporate any improvements you may suggest.

## Portfolio

Check out my [portfolio](https://my-folio-weld.vercel.app/) for more of my work!