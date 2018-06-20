const helpersConfigs = require('../helpers/helpers.json');
const ClientsHelper = require('../helpers/clients.helper');
const clientsHelper = new ClientsHelper();
const shortid = require('shortid');

class ClientsController {
  constructor(){}
  
  listClient(req, res){
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);
    if(req.headers && req.headers.userId){
      clientsHelper.findClient({}, {_id: 0})
        .then(clientInfos=>{
          res.status(200).json({
            success: true,
            data: clientInfos,
            message: langObj['Client list retrieved successfully.'] || 'Client list retrieved successfully.'
          });
        })
        .catch(clientInfoErr=>{
          res.status(400).json({
            success: false,
            data: clientInfoErr,
            message: langObj['Failed to retrieve client list.'] || 'Failed to retrieve client list.'
          });
        });
    }else{
      res.status(401).json({
        success: false,
        data: {},
        message: langObj['Token is not verified. Please Login.'] || 'Token is not verified. Please Login.'
      });
    }
  }

  getClient(req, res){
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);
    if(req.headers && req.headers.userId){
      clientsHelper.findClient(req.query, {})
        .then(clientInfos=>{
          res.status(200).json({
            success: true,
            data: clientInfos,
            message: langObj['Client information retrieved successfully.'] || 'User information retrieved successfully.'
          });
        })
        .catch(clientInfoErr=>{
          res.status(400).json({
            success: false,
            data: clientInfoErr,
            message: langObj['Failed to retrieve user information.'] || 'Failed to retrieve user information.'
          });
        });
    }else{
      res.status(401).json({
        success: false,
        data: {},
        message: langObj['Token is not verified. Please Login.'] || 'Token is not verified. Please Login.'
      });
    }
  }

  createClient(req, res){
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);
    if(req.headers && req.headers.userId){
      let saveObj = {
        "userId": req.headers.userId,
        "shortClientId": shortid.generate(),
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "gender": req.body.gender || "",
        "birthday": req.body.birthday || "",
        "referral_source": req.body.referral_source || "",
        "client_notes": req.body.client_notes || "",
        "email": req.body.email || "",
        "notification_method": req.body.notification_method || "",
        "mobile_number": req.body.mobile_number || "",
        "telephone_number": req.body.telephone_number || "",
        "address": req.body.address || "",
        "post_code": req.body.post_code || "",
        "city": req.body.city || "",
        "country": req.body.country || "",
        "appointment_ids": [],
        "created_date": new Date(),
        "updated_date": new Date()
      };

      clientsHelper.saveClient(saveObj)
        .then(saveClientResp=>{
          res.status(200).json({
            success: true,
            data: saveClientResp,
            message: langObj['Client Created Successfully.'] || 'Client Created Successfully.'
          });
        })
        .catch(saveClientErr=>{
          res.status(400).json({
            success: false,
            data: saveClientErr,
            message: langObj['Failed to create client.'] || 'Failed to create client.'
          });
        });
    }else{
      res.status(401).json({
        success: false,
        data: {},
        message: langObj['Token is not verified. Please Login.'] || 'Token is not verified. Please Login.'
      });
    }
  }

  editClient(req, res){
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);
    if(req.headers && req.headers.userId){
      let updateQuery = {shortClientId:req.query.shortClientId};
      let updateObj = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "gender": req.body.gender || "",
        "birthday": req.body.birthday || "",
        "referral_source": req.body.referral_source || "",
        "client_notes": req.body.client_notes || "",
        "email": req.body.email || "",
        "notification_method": req.body.notification_method || "",
        "mobile_number": req.body.mobile_number || "",
        "telephone_number": req.body.telephone_number || "",
        "address": req.body.address || "",
        "post_code": req.body.post_code || "",
        "city": req.body.city || "",
        "country": req.body.country || "",
        "updated_date": new Date()
      };

      clientsHelper.updateClient(updateQuery, updateObj)
        .then(saveClientResp=>{
          res.status(200).json({
            success: true,
            data: req.body,
            message: langObj['Client information updated successfully.'] || 'Client information updated successfully.'
          });
        })
        .catch(saveClientErr=>{
          res.status(400).json({
            success: false,
            data: saveClientErr,
            message: langObj['Failed to update client information.'] || 'Failed to update client information.'
          });
        });
    }else{
      res.status(401).json({
        success: false,
        data: {},
        message: langObj['Token is not verified. Please Login.'] || 'Token is not verified. Please Login.'
      });
    }
  }

  deleteClient(req, res){
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);
    if(req.headers && req.headers.userId){
      clientsHelper.removeClient({shortClientId: req.query.shortClientId, userId: req.headers.userId})
        .then(clientDelResp=>{
          res.status(200).json({
            success: true,
            data: clientDelResp,
            message: langObj['Client deleted successfully.'] || 'Client deleted successfully.'
          })
        })
        .catch(clientDelErr=>{
          res.status(400).json({
            success: false,
            data: clientDelErr,
            message: langObj['Failed to delete client.'] || 'Failed to delete client.'
          })
        });
    }else{
      res.status(401).json({
        success: false,
        data: {},
        message: langObj['Token is not verified. Please Login.'] || 'Token is not verified. Please Login.'
      });
    }
  }
}

module.exports = ClientsController;