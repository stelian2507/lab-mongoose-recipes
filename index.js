const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const MONGODB_URI = "mongodb+srv://victor2:victorvictor@cluster0.hzjcy.mongodb.net/myRecipe?retryWrites=true&w=majority"

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(async() => {
    // Run your code here, after you have insured that the connection was made


    await Recipe.create({
      title: "delicacy",
      level: "masterchef",
      ingredients: ["froglegs", "eggs"],
      cuisine: "Florida",
      dishType: "Snack on the steak",
      duration: 17,
      creator: "almighty Victor"
    }).then(console.log)

    await Recipe.insertMany(data).then(console.log)

    await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}).then(console.log)


    await Recipe.deleteOne({title:'Carrot Cake'}).then((res) => console.log('Carrot Cake Deleted'))
    
    mongoose.connection.close()

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
    
  });