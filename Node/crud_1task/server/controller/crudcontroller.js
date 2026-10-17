import crudModel from "../model/crudmodel.js"

export const createdata =async (req,res)=>{

    // console.log(req.body);
    
    try {

        const {name,email,age} = req.body

        const add = await crudModel.create({name,email,age})
        res.status(201).json({msg:"Created Successfully"})
        
    } catch (error) {

        res.status(501).json({msg:error})
        
    }
}

export const getdata = async (req,res)=>{

    try {

        const get = await crudModel.find()
        res.status(200).json({getdata:get})
        
    } catch (error) {
        res.status(501).json({msg:error})
        
    }

}

export const editdata = async (req,res)=>{
    try {

        const {userid} = req.params

        const edit = await crudModel.findById({userid})

        res.status(200).json({editdata:edit})
        
    } catch (error) {

        res.status(501).json({msg:error})
        
    }
}

 export const updatedata = async(req,res)=>{

    try {

        const update =await crudModel.findByIdAndUpdate(req.params.userid,req.body,{returnDocument:"after"})
        res.status(200).json({msg:"updated successfully"})
        
    } catch (error) {

        res.status(501).json({msg:error})
        
    }

}

export const deletedata = async(req,res)=>{

    try {

        const data = await crudModel.findByIdAndDelete(req.params.userid)
        res.status(200).json({msg:"deleted successfully"})
        
    } catch (error) {

        res.status(501).json({msg:error})
        
    }

}