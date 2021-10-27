

(function () {
    'use strict';

    module.exports = {
        createUser: createUser,
        fetchUsers: fetchUsers,
        fetchUserById: fetchUserById,
        fetchUserByName: fetchUserByName,
        fetchUserByEmail: fetchUserByEmail,
        fetchUserByRole: fetchUserByRole,
        fetchUserByState: fetchUserByState,
        updateUser: updateUser,
        deleteUser: deleteUser,
        fetchUserData: fetchUserData

    };

    var UserModel = require('./user.module')().UserModel;

    function createUser(user) {
        return UserModel.create(user);
    }

    function fetchUsers() {
        return UserModel.find({})
            .exec();
    }

    function fetchUserById(userId) {
        return UserModel.findById({_id:userId})
            .exec();
    }

    function fetchUserByName(userName) {
        const nameContains = new RegExp("^" + userName);
        console.log("name: ", nameContains);
        return UserModel.find({ name: nameContains })
            .exec();
    }
    function fetchUserByEmail(userEmail) {
        //const emailContains = new RegExp("^" + userEmail);
        
        return UserModel.findOne({ email: userEmail })
            .exec();
    }
    function fetchUserByRole(userRole) {
        const roleContains = new RegExp("^" + userRole);
        console.log("name: ", roleContains);
        return UserModel.find({ role: roleContains })
            .exec();
    }

    function fetchUserByState(userState) {
        const statusContains = new RegExp("^" + userState);
        console.log("state: ", statusContains);
        return UserModel.find({ state: statusContains })
            .exec();
    }

    function updateUser(user_Id, user) {
        console.log("userid:", user_Id);
        console.log("user:", user);
        return UserModel.findByIdAndUpdate(user_Id, user, { new: true })
            .exec();
    }

    //  function auth() {
    //     const namee= "victoria@email.com";
    //     const doc =  UserModel.findOne({email: namee}).exec();
    //     return doc;
    //   }
    function fetchUserData(req) {
        const jwt_decode = require('jwt-decode');
        const token = req.headers.authorization.split('bearer ')[1];
        //console.log(token);
        const user = jwt_decode(token)['http://localhost/userData'];


       // console.log(user);
       
        console.log("em: ",user.email);
        const example= "prueba2@prueba2.com"
        const a= UserModel.findOne({email: example});
        console.log("a",a);

        fetchUserByEmail(example,
            (response) => {
                console.log("response: yes ",response);
            },
            (error) => {
                console.error('Salio un error:', error);
            }
        );
            
        // const exists= auth();
        // console.log("ex ",exists);
        // if (exists !=null) {
        //     console.log("No existe ");
        // } else {
        //     console.log("existe ");
            // const userdata = {
            //     "name": user.name, "email": user.email,
            //     "nickname": user.email, "picture": user.picture,
            //     "created_at": user.created_at
            // }
            //  createUser(
            //     {
            //       user: userdata,
            //       role: "no_asignado",
            //       state: "Pendiente"
            //     },
            //     (response) => {
            //       console.log(response.data);
            //     },
            //     (error) => {
            //       console.error(error);
            //     }
            //   );
        

        return UserModel.findOne({email: "victoria@eml.com"})
            .exec();
    }


    function deleteUser(user_Id) {
        return UserModel.findByIdAndRemove(user_Id)
            .exec();
    }



    // const consultarOCrearUsuario = async (req, callback) => {
    //     console.log('Estoy llegando a crear usuario');
    //     // 6.1. obtener los datos del usuario desde el token
    //     const token = req.headers.authorization.split('Bearer ')[1];
    //     const user = jwt_decode(token)['http://localhost/userData'];
    //     console.log(user);

    // 6.2. con el correo del usuario o con el id de auth0, verificar si el usuario ya esta en la bd o no
    /*
     const baseDeDatos = getDB();
     await baseDeDatos.collection('usuario').findOne({ email: user.email }, async (err, response) => {
       console.log('response consulta bd', response);
       if (response) {
         // 7.1. si el usuario ya esta en la BD, devuelve la info del usuario
         callback(err, response);
       } else {
         // 7.2. si el usuario no esta en la bd, lo crea y devuelve la info
         user.auth0ID = user._id;
         delete user._id;
         user.rol = 'sin rol';
         user.estado = 'pendiente';
         await crearUsuario(user, (err, respuesta) => callback(err, user));
       }
     });
      };
     */


})();