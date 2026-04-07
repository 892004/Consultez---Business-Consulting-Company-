const { Activity } = require('react');
const db =  require ('../config/db');

// 1 .add Services

exports.addServices =  async(req , res ) => {
    try{
        const {title , slug , description , image , category_id } = req.body ;

        await db.query('CALL sp_add_service(?,?,?,?,?)', [title , slug , description , image , category_id])
        res.json({message:"Services Added Succesfully.."})
    }catch(error){
        console.log(error)
        res.status(500).json("server error")
    }
}


// 2. get services
exports.getServices = async(req , res ) => {
    try{
        const [result] = await db.query('CALL sp_get_services()');
        const services =  result[0];

        res.json(services);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"})
    }
}

// 3. get service by id
exports.getServiceById = async(req , res ) => {
    try{
        const {id} = req.params;
        const [result] =  await db.query("CALL sp_get_service_by_id(?)",[id]);
        const service = result[0][0]

        if(!service){
            return res.status(404).json({message:"Service is not found"})
        }
        res.json(service)
    }catch(error){
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}

// 4. update service 
exports.UpdateService = async(req , res) => {
    try{
        const {id} =  req .params;
        const {title , slug , description , image , category_id } =  req.body;
        await db.query('CALL sp_update_service(?,?,?,?,?,?)',[id , title , slug , description , image , category_id]);

        res.json({message:"Service Updated Succesfully..."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:'server error'})
    }
}


// 5. delete service
exports.deleteService =  async (req , res ) =>{
    try{

        const {id} =  req.params 
        await db.query('CALL sp_delete_service(?)' , [id]);
        
        res.json({message:"Serveice Deleted Succesfully.."})
    }catch(error){
        console.error(error)
        res.status(500).json({message:"server error"})
    }
}