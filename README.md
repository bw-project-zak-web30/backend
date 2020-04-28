# backend
address for requests : https://usemytechstuffmb.herokuapp.com
                OR   : https://usetechstuffap.herokuapp.com


## AUTHENTICATION 
    all requests with /user/ or /Eqipment/ in the URL will require authentication. Authentication is disabled for now.

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
            "token": "sample token"
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


## USER -OWNER- GET for all equipment they are renting out.
    GET /api/users/rentals

    RETURNS - if successful, an array of rentals
        [
            {
                "id": 1,
                "return_date": "2020-10-10",
                "start_date": "2020-10-8",
                "details": "Rental is only for two days.",
                "renter_id": 2,
                "owner_id": 1,
                "equipment_id": 2
            }
        ]

# USER owner can update their equipment
    ENDPOINT IN PROGRESS

## user ownder can delete equipment
    ENDPOINT IN PROGRESS


## user can display all items the are borrowing
    GET /api/users/:id/renting

    RETURNS - if successful, an array of rentals

    [
        {
            "id": 1,
            "return_date": "2020-10-10",
            "start_date": "2020-10-8",
            "details": "Rental is only for two days.",
            "renter_id": 2,
            "owner_id": 1,
            "equipment_id": 2
        }
    ]

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
