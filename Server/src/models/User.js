const { DataTypes } = require('sequelize');
 
module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false, // no puede estar en false 
         primaryKey: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true // solo permite que entren string que cumplan con las condiciones de email
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
