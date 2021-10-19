(function () {
    'use strict';

    module.exports = {
        createClient: createClient,
        fetchClients: fetchClients,
        fetchClientById: fetchClientById,
        fetchClientByName: fetchClientByName,
        updateClient: updateClient,
        deleteClient: deleteClient
        
    };

    var ClientModel = require('./client.module')().ClientModel;

    function createClient(client) {
        return ClientModel.create(client);
    }

    function fetchClients() {
        return ClientModel.find({})
            .exec();
    }

    function fetchClientById(clientId) {
        return ClientModel.find({ client_id: clientId })
            .exec();
    }

    function fetchClientByName(clientName) {
        const nameContains = new RegExp("^" + clientName);
        console.log("name: ", nameContains);
        return ClientModel.find({ client_name: nameContains })
            .exec();
    }
   

    /*optional*/
    function updateClient(client_Id, client) {
        console.log("clientid:", client_Id);
        console.log("client:", client);
        return ClientModel.findByIdAndUpdate(client_Id, client, { new: true })
            .exec();
    }

    
    function deleteClient(client_Id) {
        return ClientModel.findByIdAndRemove(client_Id)
            .exec();
    }

 
})();