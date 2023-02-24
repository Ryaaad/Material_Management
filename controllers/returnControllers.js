import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
        const id=req.query.id  
        
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
        const id=req.query.id  
        


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

        const qte2=Material.qteMissing + returns.qte
        const updatedMaterial= await prisma.Material.update({
            where:{
                name:Material.name
            },
           data:{
            qteMissing:qte2
           }
         })
     

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
        const id=req.query.id  
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
        if(Material.qteMissing >= (qte - returns.qte)){
            const qte2=Material.qteMissing - (qte - returns.qte)
            const updatedMaterial= await prisma.Material.update({
                where:{
                    name:Material.name
                },
                data:{
                    qteMissing:qte2
                }
             })
         }else{
            return res.status(400).json({status:400,message:"qte you want to return is greater then qte missing"})
         }

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

         
     if(Material.qteMissing >= qte){
        const qte2=Material.qteMissing - qte
        const updatedMaterial= await prisma.Material.update({
            where:{
                name:Material.name
            },
            data:{
                qteMissing:qte2
            }
         })
     }else{
        return res.status(400).json({status:400,message:"qte you want to return is greater then qte missing"})
     }

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