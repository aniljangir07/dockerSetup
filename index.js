import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8002

app.use(express.json())

app.get('/user', (req, res) => {
      try {
            res.status(200).json({ message: "Hello user route ", status: true,data:null })
      } catch (error) {
            res.status(400).json({ message: "Something went wrong", status: false, data:null  })
      } 
})

app.post('/add/user', (req, res) => {
      try {
            res.status(200).json({ message: "Hello user add route ", status: true, data: req.body })
      } catch (error) {
            res.status(400).json({ message: "Something went wrong", status: false, data:null })
      }
})

app.listen(PORT, () => {
      console.log(` App is listening ON http://localhost:${PORT}`)
})