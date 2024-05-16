FROM mongo

COPY init.json /init.json
CMD mongoimport --uri 'mongodb://mongodb:27017/mongo-test' --collection pastries --type json --file /init.json --jsonArray