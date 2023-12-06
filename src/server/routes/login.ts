import express from 'express';
import { Path } from '../../path/paths';

export const router = express.Router()

router.get(Path.Login, (req, res) => {
  res.send("login page")
})
  
router.get(Path.Register, (req, res) => {
  res.send("register")
})
