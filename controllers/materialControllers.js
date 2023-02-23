import prisma from "@/lib/prisma";


export async function getAllMaterials(_req,res){
    try{
        const Materials=await prisma.Material.findMany()
        return res.status(200).json({status:200,data:Materials})
    }
    catch(err){
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function createMaterial(_req,res){
    try{
        const {name,type,qte,img} =_req.body
        if(!name || !type || !qte) return res.status(400).json({status:400,message:"missing data"})
        let Material
        if(!img){
             Material=await prisma.Material.create({
                data:{
                    name,qte,type
                }
            })
        }
        else{
            Material=await prisma.Material.create({
               data:{
                   name,qte,type,img
               }
           })
       }
       
        return res.status(201).json({status:200,data:Material})
    }
    catch(err){
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function getMaterial(_req,res){
    try{
        const id= _req.query.id 
        const Material=await prisma.Material.findUnique({
            where:{
                name:id
            }
        })
        if(!Material){
            return res.status(404).json({status:404,message:"material not found"})
        }
        return res.status(200).json({status:200,data:Material})
    }
    catch(err){
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function deleteMaterial(_req,res){
    try{
        const id= _req.query.id 
        const Material=await prisma.Material.findUnique({
            where:{
                name:id
            }
        })
        if(!Material){
            return res.status(404).json({status:404,message:"material not found"})
        }
        await prisma.delete({
            where:{
                name:id
            }
        })
        return res.status(204).json({status:200})
    }
    catch(err){
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function UpdateMaterial(_req,res){
    try{
        const id= _req.query.id
        const {name,type,qte,img} =_req.body
        if(!name && !type && !qte && !img) return res.status(400).json({status:400,message:"missing data"})
        const Material=await prisma.Material.findUnique({
            where:{
                name:id
            }
        })
        if(!Material){
            return res.status(404).json({status:404,message:"material not found"})
        }
        let updatedMaterial

        if(!img){
            updatedMaterial=await prisma.Material.update({
                where:{
                    name:id
                },
               data:{
                   name,qte,type
               }
           })
       }
       else{
        updatedMaterial=await prisma.Material.update({
            where:{
                name:id
            },
              data:{
                  name,qte,type,img
              }
          })
      }
        return res.status(200).json({status:200,data:updatedMaterial})
    }
    catch(err){
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}