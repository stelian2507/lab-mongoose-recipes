const mongoose = require('mongoose');

const Recipe = require('./models/Recipe.model');

const data = require('./data');
const MONGODB_URI = "mongodb+srv://victor2:victorvictor@cluster0.hzjcy.mongodb.net/myRecipe?retryWrites=true&w=majority"


mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    
    return self.connection.dropDatabase();
  })

  //Iteration 2 - Create a recipe 
  .then(async() => {

    await Recipe.create({
      title: "delicacy",
      level: "masterchef",
      ingredients: ["froglegs", "eggs"],
      cuisine: "Florida",
      dishType: "steak",
      duration: 17,
      creator: "Stelian"
    }).then(console.log)

   // Iteration 3 - Insert multiple recipes

    await Recipe.insertMany(data).then(console.log)

    //Iteration 4 - Update recipe
  
    await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}).then(console.log)

    //Iteration 5 - Remove a recipe
    await Recipe.deleteOne({title:'Carrot Cake'}).then((res) => console.log('Carrot Cake Deleted'))
    
    mongoose.connection.close()

  })

  //Iteration 6 - Close the Database
  .catch(error => {
    console.error('Error connecting to the database', error);
    
  });