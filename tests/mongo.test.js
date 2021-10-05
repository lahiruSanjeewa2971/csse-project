const {MongoClient} = require('mongodb');
require('dotenv').config()
const URI = process.env.MONGODB_URL
describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.construction);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('Users');

    const mockUser = {name: 'global', email: 'global@gmail.com', password: '123456'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({email: 'global@gmail.com'});
    expect(insertedUser.name).toEqual('global');
  });
});