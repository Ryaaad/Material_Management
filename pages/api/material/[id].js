import { UpdateMaterial, deleteMaterial, getMaterial } from "../../../controllers/materialControllers";


export default function handler( req,res) {
  if(req.method === 'GET') return getMaterial(req,res)
  if(req.method === 'PUT') return UpdateMaterial(req,res)
  if(req.method === 'DELETE') return deleteMaterial(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}