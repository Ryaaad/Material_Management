import { createMember, getAllMembers } from "../../../controllers/memberControllers"


export default function handler( req,res) {
  if(req.method === 'GET') return getAllMembers(req,res)
  if(req.method === 'POST') return createMember(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}