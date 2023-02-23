import { UpdateMaterial, deleteMaterial } from "../../../controllers/materialControllers";


export default function handler( req,res) {
  if(req.method === 'GET') return getMaterial(req,res)
  if(req.method === 'Put') return UpdateMaterial(req,res)
  if(req.method === 'Delete') return deleteMaterial(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}