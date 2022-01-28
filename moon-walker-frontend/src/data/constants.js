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
            "🚀 Spaceship Driver",
            "🤺 Sword Fighting",
            "💻 Technology Expert",
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
            "🌈 Open Minded",
            "👀 High perpeption",
            "💊 Pharmalogy",
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
            "🔧 Advanced Mechanics",
            "💪 Super Strength",
            "🎨 Accomplished Artist",
        ],
        "gender": "female",
        "country": "France",
        "description": "John Doe is the first astronaut to ever land on another constellation."
    }
]
// TODO: EXPAND LIST LATER ON
export const skillsSelection = [
    "🌈 Open Minded",
    "👀 High perpeption",
    "💊 Pharmalogy",
    "🚀 Spaceship Driver",
    "🤺 Sword Fighting",
    "💻 Technology Expert",
    "🧠 Incredible Intelligence",
    "🔧 Advanced Mechanics",
    "💪 Super Strength",
    "🎨 Accomplished Artist",
    "📌 Organization and Management",
    "🔥 Firefighting"
]
