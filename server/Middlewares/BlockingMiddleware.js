const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const checkStatus =async (req,res,next)=>{
        const currentuser = await prisma.users.findUnique({
            where: {
              email: req.body.email}
            });
            if (currentuser){
                if(currentuser.status){
                    next()
                }else {
                    res.status(401).send('You are blocked')
                }
            }
    
}

module.exports = {checkStatus}