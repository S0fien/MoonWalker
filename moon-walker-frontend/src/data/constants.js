// CONSTANTS
export const API_BASE_URL = 'http://localhost:8080/astronauts'
export const API_SPECIFIC_ON_ASTRONAUT = (id) => `${API_BASE_URL}/${id}`

export const staticValues = [
    {
        "isStatic": true,
        "id": "none1",
        "updatedAt": "2022-01-28T10:05:39.891Z",
        "firstname": "John",
        "lastname": "Doe",
        "age": 30,
        "skills": [
            "ð Spaceship Driver",
            "ðĪš Sword Fighting",
            "ðŧ Technology Expert",
        ],
        "gender": "male",
        "country": "France",
        "description": "John Doe is the first astronaut to ever land on another constellation."
    },
    {
        "isStatic": true,
        "id": "none2",
        "updatedAt": "2022-01-28T10:05:39.891Z",
        "firstname": "Jane",
        "lastname": "Doe",
        "age": 28,
        "skills": [
            "ð Open Minded",
            "ð High perpeption",
            "ð Pharmalogy",
        ],
        "gender": "female",
        "country": "France",
        "description": "John Doe is the first astronaut to ever land on another constellation."
    },
    {
        "isStatic": true,
        "id": "none3",
        "updatedAt": "2022-01-28T10:05:39.891Z",
        "firstname": "Cordelia",
        "lastname": "Chase",
        "age": 30,
        "skills": [
            "ð§ Advanced Mechanics",
            "ðŠ Super Strength",
            "ðĻ Accomplished Artist",
        ],
        "gender": "female",
        "country": "France",
        "description": "John Doe is the first astronaut to ever land on another constellation."
    }
]
// TODO: EXPAND LIST LATER ON
export const skillsSelection = [
    "ð Open Minded",
    "ð High perpeption",
    "ð Pharmalogy",
    "ð Spaceship Driver",
    "ðĪš Sword Fighting",
    "ðŧ Technology Expert",
    "ð§  Incredible Intelligence",
    "ð§ Advanced Mechanics",
    "ðŠ Super Strength",
    "ðĻ Accomplished Artist",
    "ð Organization and Management",
    "ðĨ Firefighting"
]
