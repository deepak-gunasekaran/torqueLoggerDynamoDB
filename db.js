// import and use mongodb.MongoClient
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
//const dbUsername = process.env.dbUsername;
//const dbPassword = process.env.dbPassword;
//const dbOptions = process.env.dbOptions;
//const dbdomain = process.env.dbDomain;
//const dbName = process.env.dbName;
//const dbConnectionUrl = 'mongodb+srv://'+dbUsername+':'+dbPassword+'@'+dbdomain+'/'+dbName+'?'+dbOptions;

const dbConnectionUrl = process.env.MONGO_DB_CONNECTION_STRING;
console.log(dbConnectionUrl);
function initialize(dbName, dbCollectionName, successCallback, failureCallback) {
	MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
		if (err) {
			console.log(`[MongoDB connection] ERROR: ${err}`);
			failureCallback(err);        // this should be "caught" by the calling function
		} else {
			const dbObject = dbInstance.db(dbName);
			const dbCollection = dbObject.collection(dbCollectionName);

			console.log("[MongoDB connection] SUCCESS");
			console.log(dbName);
			console.log(dbCollectionName);
			successCallback(dbCollection);
		}
	});
}

module.exports = { initialize };
