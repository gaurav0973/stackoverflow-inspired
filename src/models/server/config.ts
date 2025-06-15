/* eslint-disable @typescript-eslint/no-unused-vars */
import env from "@/app/env";

import {Avatars, Client, Databases, Storage, Users} from "node-appwrite";
const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectID) 
    .setKey(env.appwrite.apikey)

const databases = new Databases(client)
const avatars = new Avatars(client)
const storage = new Storage(client)
const users = new Users(client)


export {
    client,
    users,
    databases,
    avatars,
    storage
}
