import { deleteReturns, getReturns, updateReturns } from "../../../controllers/returnControllers"

export default function handler( req,res) {
  if(req.method === 'GET') return getReturns(req,res)
  if(req.method === 'PUT') return updateReturns(req,res)
  if(req.method === 'DELETE') return deleteReturns(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}