# backend


## Login - Log in as a user. 
    POST - /api/auth/login

    BODY - all fields required.
        {
            username: "test",
            password: "test",
            name: "test name",
            city: "Test City",
        }

    RETURNS - if successful
        {
            "message": "Welcome!",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsInVzZXJuYW1lIjoidGVzdDgiLCJpYXQiOjE1ODgwODg5OTcsImV4cCI6MTU4ODA4OTA1N30.LE57fJZOxhbnAMxY0-tqTg_icGo2LcbhKRrVeieCbXU"
        }

## Register
    POST - /api/auth/register

    BODY - all fields required. 
        {
            username: "test",
            password: "test",
        }

    RETURNS - if successful
        {
            "message": "user created"
        }


## Get a list of all equipment
    GET  - /api/equipment
     
    RETURNS - if successful, an array of equipment
        [
            {
                "id": 1,
                "name": "Sam's PC",
                "price": 100,
                "timeframe": 2,
                "details": "you can use my pc for a server for 2 days",
                "renting": 0,
                "owner_id": 1
            },
        ]

## Select the equipment they want to rent 
    ENDPOINT IN PROGRESS


## USER -OWNER- GET for all equipement they are renting out.
    ENDPOINT IN PROGRESS
    have a post for adding a new equi
    put to update their owned equipment
    delete owned items.

## user get all renting. 
    ENDPOINT IN PROGRESS

## User can see their profile.
    GET /api/users/:id

    RETURNS - if successful

    {
        "id": 1,
        "username": "sam1",
        "password": "test",
        "name": "sam",
        "city": "DC",
        "user_rating": null
    }

## User can update their profile
    PUT /api/users/:id

    BODY - all fields optional
    {
        "username": "sam1",
        "name": "sam",
        "city": "Washington DC",
    }

    RETURNS - if successful
        {
            "id": 1,
            "username": "sam1",
            "password": "test",
            "name": "sam",
            "city": "Washington DC",
            "user_rating": null
        }

## User can delete their profile
    DELETE /api/users/:id

    RETURNS - if successful

        {
            "removed": 1
        }
