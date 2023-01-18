var userSchema = new Schema({
    name: String,
    username: {type: String},
    email: String,
    address : {
        city: String,
        state: {type: String, unique: true},
        country: {type: String, unique: true},
        pin: {type: Number, unique: true}
    }
})

userSchema.index({ name : 1 })
userSchema.index({country: 1, state: 1})

var articleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    tags: [String]
})

articleSchema.index({ tags: 1});
articleSchema.index({text: "text", description: "text"})