import { MongoClient } from "mongodb";

const URL ="mongodb+srv://Nike:1234@cluster0.szowsrl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(URL);
const database = client.db("Nike");
export const orders=database.collection("Orders")
export const products = database.collection("Products");
// export default products;
