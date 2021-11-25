const Sequelize = require('sequelize');
const db = require('./database');
const Product = db.define("product", {
    productName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notEmpty: true,
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://img.xfinitymobile.com/image/fetch/e_trim/w_420,h_420,c_fit,f_auto,q_auto,fl_lossy/https%3A%2F%2Fimg.xfinitymobile.com%2Fimage%2Fupload%2Fv1632144927%2Fclient%2Fcatalog%2Fdevices%2Fapple%2FiPhone_13_Pro_Max_Silver_PRI.png",
      },
    //   https://www.91-img.com/gallery_images_uploads/4/8/48bf66badf23152537ad6006502eb507d4aefbde.JPG?tr=h-550,w-0,c-at_max
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    quantity:{
        type:Sequelize.INTEGER
    }
})

module.exports = Product