module.exports = (connection , DataTypes)=>{
    const Admin = connection.define("admin",{
        name:{
            type : DataTypes.STRING,
        },
        email : {
            type : DataTypes.STRING,
            required : true,
            validate :{
                isEmail : true,
            },
            unique : true,
        },
        password : {
            type : DataTypes.STRING,
            required : true,
        },
    
    })
    return Admin
}