// import prisma from "@/lib/prisma";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function getAllBorrows(req,res){
    try{
        const Borrows=await prisma.Borrows.findMany({
            include:{
                member:true,
                material:true
            }
        })
        return res.status(200).json({status:200,data:Borrows})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function getBorrow(req,res){
    try{
        const id=req.query.id
        
        const Borrow=await prisma.Borrows.findUnique({
            where:{
                numBorrow:id
            },
            include:{
                member:true,
                material:true
            }
        })
        return res.status(200).json({status:200,data:Borrow})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}



export async function deleteBorrow(req,res){
    try{
        const id=req.query.id
        
        const Borrow=await prisma.Borrows.findUnique({
            where:{
                numBorrow:id
            },
            include:{
                member:true,
                material:true
            }
        })

        const Material = await prisma.Material.findUnique({
            where:{
                name:Borrow.material.name 
            }
         })
         const qte2 = Material.qteMissing - Borrow.qte
    
         const updateMaterial = await prisma.Material.update({
            where:{
                name:Material.name
            },
            data:{
                qteMissing:qte2
            }
         })

        if(!Borrow) return res.status(404).json({status:404,message:"borrow not found"})
        await prisma.Borrows.delete({
            where:{
                numBorrow:id
            }
        })
        
        return res.status(204).json({status:204})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function updateBorrow(req,res){
    try{
        const id=req.query.id  
        const {dateB,qte,materialName,memberId} =req.body
        if(!qte || !materialName || !memberId) return res.status(400).json({status:400,message:"missing data"})
        const Borrow=await prisma.Borrows.findUnique({
            where:{
                numBorrow:id
            },
            include:{
                member:true,
                material:true
            }
        })
        if(!Borrow) return res.status(404).json({status:404,message:"borrow not found"})
        let updatedBorrow
      if(!dateB){
         updatedBorrow = await prisma.Borrows.update({
            where:{
                numBorrow:id
            },
            data:{
                qte,materialName,memberId
            }
        })
      }
      else{
        updatedBorrow = await prisma.Borrows.update({
           where:{
               numBorrow:id
           },
           data:{
               qte,materialName,memberId,dateB
           }
       })
     }
     const Material = await prisma.Material.findUnique({
        where:{
            name:materialName
        }
     })
     const qte2 = Material.qteMissing - qte
     const qteUpdate = Material.qteMissing + qte2
     if(qteUpdate > Material.qte) return res.status(400).json({status:400,message:"you can't borrow qte greater than qte total"})
     const updateMaterial = await prisma.Material.update({
        where:{
            name:materialName
        },
        data:{
            qteMissing:qteUpdate
        }
     })

        return res.status(200).json({status:200,data: updatedBorrow})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function createBorrow(req,res){
    try{
        const {dateB,qte,materialName,memberId,cause} =req.body
        if(!qte || !materialName || !memberId || !cause) return res.status(400).json({status:400,message:"missing data"})
        const Material= await prisma.Material.findUnique({
            where:{
                name:materialName
            } 
         })
         if(!Material) return res.status(404).json({status:404,message:"material not found"})
         const Member= await prisma.Member.findUnique({
            where:{
                memberId
            }
         })
         if(!Member) return res.status(404).json({status:404,message:"member not found"})

         const qte2=Material.qteMissing + qte
         if(qte2 > Material.qte) return res.status(400).json({status:400,message:"qte you want to borrow is greater than the qte total"})
     const updatedMaterial= await prisma.Material.update({
        where:{
            name:Material.name
        },
        data:{
            qteMissing:qte2
        }
     })
        let Borrow

      if(!dateB){
         Borrow = await prisma.Borrows.create({
            data:{
                qte,materialName,memberId
            }
        })
      }
      else{
        Borrow = await prisma.Borrows.create({
           data:{
               qte,materialName,memberId,dateB
           }
       })
     }
     
        return res.status(201).json({status:201,data: Borrow})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}