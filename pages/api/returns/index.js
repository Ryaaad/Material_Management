import { createReturns, getAllReturns } from "../../../controllers/returnControllers"

export default function handler( req,res) {
  if(req.method === 'GET') return getAllReturns(req,res)
  if(req.method === 'POST') return createReturns(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}