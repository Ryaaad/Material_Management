import { createBorrow, getAllBorrows } from "../../../controllers/borrowControllers"

export default function handler( req,res) {
  if(req.method === 'GET') return getAllBorrows(req,res)
  if(req.method === 'POST') return createBorrow(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}