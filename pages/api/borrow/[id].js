import { deleteBorrow, getBorrow, updateBorrow } from "../../../controllers/borrowControllers"

export default function handler( req,res) {
  if(req.method === 'GET') return getBorrow(req,res)
  if(req.method === 'PUT') return updateBorrow(req,res)
  if(req.method === 'DELETE') return deleteBorrow(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}