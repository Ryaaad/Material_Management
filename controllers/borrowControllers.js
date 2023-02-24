import prisma from "@/lib/prisma";

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
        const id=req.query.id *1
        
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
        const id=req.query.id *1
        
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
        const id=req.query.id *1
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
        return res.status(200).json({status:200,data: updatedBorrow})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function createBorrow(req,res){
    try{
        const {dateB,qte,materialName,memberId} =req.body
        if(!qte || !materialName || !memberId) return res.status(400).json({status:400,message:"missing data"})

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