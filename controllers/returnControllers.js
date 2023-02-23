import prisma from "@/lib/prisma";

export async function getAllReturns(req,res){
    try{
        const returns=await prisma.returns.findMany({
            include:{
                member:true,
                material:true
            }
        })
        return res.status(200).json({status:200,data:returns})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function getReturns(req,res){
    try{
        const id=req.query.id *1
        
        const returns=await prisma.returns.findUnique({
            where:{
                numReturns:id
            },
            include:{
                member:true,
                material:true
            }
        })
        return res.status(200).json({status:200,data:returns})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}


export async function deleteReturns(req,res){
    try{
        const id=req.query.id *1
        
        const returns=await prisma.returns.findUnique({
            where:{
                numReturns:id
            },
            include:{
                member:true,
                material:true
            }
        })
        if(!returns) return res.status(404).json({status:404,message:"returns not found"})
        await prisma.returns.delete({
            where:{
                numReturns:id
            }
        })
        return res.status(204).json({status:204})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function updateReturns(req,res){
    try{
        const id=req.query.id *1
        const {dateR,qte,materialName,memberId} =req.body
        if(!qte || !materialName || !memberId) return res.status(400).json({status:400,message:"missing data"})
        const returns=await prisma.returns.findUnique({
            where:{
                numReturns:id
            },
            include:{
                member:true,
                material:true
            }
        })
        if(!returns) return res.status(404).json({status:404,message:"returns not found"})
        let updatedreturns
      if(!dateR){
         updatedreturns = await prisma.returns.update({
            where:{
                numReturns:id
            },
            data:{
                qte,materialName,memberId
            }
        })
      }
      else{
        updatedreturns = await prisma.returns.update({
           where:{
               numReturns:id
           },
           data:{
               qte,materialName,memberId,dateR
           }
       })
     }
        return res.status(200).json({status:200,data: updatedreturns})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function createReturns(req,res){
    try{
        const {dateR,qte,materialName,memberId} =req.body
        if(!qte || !materialName || !memberId) return res.status(400).json({status:400,message:"missing data"})

        let returns
      if(!dateR){
         returns = await prisma.returns.create({
            data:{
                qte,materialName,memberId
            }
        })
      }
      else{
        returns = await prisma.returns.create({
           data:{
               qte,materialName,memberId,dateR
           }
       })
     }
        return res.status(201).json({status:201,data: returns})
    }catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}