const connection= require("../Model/db_connect")

const gettest = async(req,res) =>{
try{
    const q1= "select * from hospital_lab_test_rate"
    await connection.query(q1,(error,result,field)=>{
         if(err){
            req.send(error.sqlMessage)
           }  res.send(result)
          
    })
} catch(err){
    res.send(err.sqlMessage) 
  }
}

const posttest = async(req,res) =>{
    try{
        const q1 = 'INSERT INTI hspital_lab_test_rate SET ?'
        await connection.query(q1,(error,result,field)=>{
            if(error){
                req.send(error.sqlMessage)
            } res.send(result)
        })
    } catch(err){
        res.send(err.sqlMessage)
    }
}

const patchtest = async(req,res)=>{
    try{
        const q1 = [req.body.test_id,req.body.test_name,req.body.test_rate]
        await connection.query(q1,(error,result,field)=>{
            if(err){
                res.send(sqlMessage)
            } res.send(result)
        })
    } catch(err){
        res.send(err.sqlMessage)
    }
}
const deletetest = async(req,res)=>{
    try{
        const q1 = [req.params.body]
        await connection.query(q1,(error,result,field)=>{
            if(err){
                res.send(sqlMessage)
            } res.send(result)
        })
    } catch(err){
        res.send(err.sqlMessage)
    }
}
module.export={gettest,posttest,patchtest,deletetest}