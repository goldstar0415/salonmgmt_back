const mongoose = require('mongoose');
let BillingsSchema = new mongoose.Schema({
	userId: String,
	billingType: Number,
	cost: Number,
	activatedOn: Date,
	expiresOn: Date,
	paymentMethod: String,
	remainingDays: Number,
	usesDays: Number,
	status: {type: Boolean, default: true},
	created_date: Date,
	updated_date: Date
});
mongoose.model('Billings', BillingsSchema);