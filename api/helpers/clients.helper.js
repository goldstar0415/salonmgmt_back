const mongoose = require('mongoose');
const Clients = mongoose.model('Clients');

class ClientsHelper {
  constructor(){}
  
  findClient(query, projection){
    return new Promise((resolve, reject)=>{
      Clients.find(query, projection, (err, clients)=>{
        if(err){
          reject(err);
        }else{
          resolve(clients);
        }
      });
    });
  }

  saveClient(saveObj){
    return new Promise((resolve, reject)=>{
      let clients = new Clients(saveObj);
      clients.save((err, clients)=>{
        if(err){
          reject(err);
        }else{
          resolve(clients);
        }
      });
    });
  }

  updateClient(query, updateObj){
    return new Promise((resolve, reject)=>{
      Clients.update(query, updateObj, (err, updateResp)=>{
        if(err){
          reject(err);
        }else{
          resolve(updateResp);
        }
      });
    });
  }

  removeClient(query){
    return new Promise((resolve, reject)=>{
      Clients.remove(query, (err, removeResp)=>{
        if(err){
          reject(err);
        }else{
          resolve(removeResp);
        }
      });
    });
  }
}

module.exports = ClientsHelper;