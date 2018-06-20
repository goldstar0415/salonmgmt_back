const mongoose = require('mongoose');
const Billings = mongoose.model('Billings');

class BillingsHelper {
	constructor(){}
	
	saveBilling(saveObj){
		return new Promise((resolve, reject)=>{
			let billings = new Billings(saveObj);
			billings.save((err, billings)=>{
				if(err){
					reject(err);
				}else{
					resolve(billings);
				}
			});
		});
	}
}

module.exports = BillingsHelper;