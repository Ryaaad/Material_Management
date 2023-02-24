import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function getAllMembers(_req,res){
    try{
        const Members=await prisma.Member.findMany()
        return res.status(200).json({status:200,data:Members})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function createMember(_req,res){
    try{
        const {firstName,lastName,discord,Tel,img} =_req.body
        if(!firstName || !lastName || !discord || !Tel) return res.status(400).json({status:400,message:"missing data"})
        let Member
        if(!img){
             Member=await prisma.Member.create({
                data:{
                    firstName,lastName,Tel,discord
                }
            })
        }
        else{
            Member=await prisma.Member.create({
               data:{
                    firstName,lastName,Tel,discord,img
               }
           })
       }
       
        return res.status(201).json({status:201,data:Member})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function getMember(_req,res){
    try{
        const id= _req.query.id 
        const Member=await prisma.Member.findUnique({
            where:{
                memberId:id
            },
            include:{
                Borrows:true
            }
        })
        if(!Member){
            return res.status(404).json({status:404,message:"Member not found"})
        }
        return res.status(200).json({status:200,data:Member})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function deleteMember(_req,res){
    try{
        const id= _req.query.id 
        const Member=await prisma.Member.findUnique({
            where:{
                memberId:id
            }
        })
        if(!Member){
            return res.status(404).json({status:404,message:"Member not found"})
        }
        await prisma.delete({
            where:{
                memberId:id
            }
        })
        return res.status(204).json({status:204})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function UpdateMember(_req,res){
    try{
        const id= _req.query.id 
        const {firstName,lastName,discord,Tel,img} =_req.body
        if(!firstName && !lastName && !discord && !Tel && !img) return res.status(400).json({status:400,message:"missing data"})
        const Member=await prisma.Member.findUnique({
            where:{
                memberId:id
            }
        })
        if(!Member){
            return res.status(404).json({status:404,message:"Member not found"})
        }
        let updatedMember

        if(!img){
            updatedMember=await prisma.Member.update({
                where:{
                    memberId:id
                },
               data:{
                firstName,lastName,discord,Tel
               }
           })
       }
       else{
        updatedMember=await prisma.Member.update({
            where:{
                memberId:id
            },
              data:{
                    firstName,lastName,discord,Tel,img
              }
          })
      }
        return res.status(200).json({status:200,data:updatedMember})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}