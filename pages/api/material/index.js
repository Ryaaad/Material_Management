import { createMaterial, getAllMaterials } from "../../../controllers/materialControllers";


export default function handler( req,res) {
  if(req.method === 'GET') return getAllMaterials(req,res)
  if(req.method === 'Post') return createMaterial(req,res)
  return res.status(400).json({message:"we can't handle this request"})
}