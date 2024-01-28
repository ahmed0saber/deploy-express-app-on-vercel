import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const users = [
    {
        "id": "2",
        "username": "user2",
        "fullname": "User Two",
        "email": "user2@example.com",
        "age": 30,
        "gender": "Male"
    },
    {
        "id": "3",
        "username": "user3",
        "fullname": "User Three",
        "email": "user3@example.com",
        "age": 20,
        "gender": "Female"
    },
    {
        "id": "4",
        "username": "user4",
        "fullname": "User Four",
        "email": "user4@example.com",
        "age": 22,
        "gender": "Male"
    },
    {
        "id": "7",
        "username": "user7",
        "fullname": "User Seven",
        "email": "user7@example.com",
        "age": 27,
        "gender": "Female"
    },
    {
        "id": "8",
        "username": "user8",
        "fullname": "User Eight",
        "email": "user8@example.com",
        "age": 31,
        "gender": "Male"
    },
    {
        "id": "9",
        "username": "user9",
        "fullname": "User Nine",
        "email": "user9@example.com",
        "age": 24,
        "gender": "Female"
    }
]

app.get('/users', async (req, res) => {
    return res.json(users)
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const currentUser = users.find(user => user.id.toString() === id)

    if (currentUser) {
        return res.json(currentUser)
    }

    return res.status(404).json({ message: 'User not found' })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

export default app