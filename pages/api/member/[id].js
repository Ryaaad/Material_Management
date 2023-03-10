import { UpdateMember, deleteMember, getMember } from "../../../controllers/memberControllers"

export default function handler( req,res) {
  if(req.method === 'GET') return getMember(req,res)
  if(req.method === 'PUT') return UpdateMember(req,res)
  if(req.method === 'DELETE') return deleteMember(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}