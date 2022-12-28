import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    namaLengkap: String,
    email: String,
    password: String,
})

// Jika model sudah ada maka gunakan pernyataan pertama : models.user jika tidak, buatkan model baru
const Users = models.user || model('user', userSchema);

export default Users;