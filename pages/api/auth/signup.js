import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema';
import {hash} from 'bcryptjs'


export default async function (req, res) {
    connectMongo().catch(error => res.json({ error : "Connection Failed...!" }))

    //Only post method is accepted
    if (req.method === 'POST') {
            if(!req.body) return res.status(404).json({error: "Don't have form data...!"})
            const {namaLengkap, email, password} = req.body;

            //check duplicate users
            const checkExisting = await Users.findOne({email});
            if(checkExisting) return res.status(422).json({message: "User Already Exist...!"})

            //hash password
            Users.create({namaLengkap, email, password : await hash(password, 12)}, function(err, data) {
                if(err) return res.status(404).json({err});
                res.status(201).json({status: true, user: data})
            })
            

    } else {
        res.status(500).json({ message: "HTTP method not valid only POST Accepted" })
    }
}