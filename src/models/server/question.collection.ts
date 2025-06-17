/* eslint-disable @typescript-eslint/no-unused-vars */
import {IndexType, Permission} from "node-appwrite"
import { db,  questionCollection } from '../name';
import { databases } from "./config";
import { log } from "console";


export default async function createQuestionCollection(){
    
    // create collection
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Question collection is being created")


    // create attributes
    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 100, true),
        databases.createStringAttribute(db, questionCollection, "content", 10000, true),
        databases.createStringAttribute(db, questionCollection, "autherId", 50, true),
        databases.createStringAttribute(db, questionCollection, "tags", 100, true, undefined, true),
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
    ])

    console.log("Question Attribute is being created")

    // create index -< not working -> had to create manually
    // await Promise.all([
    //     databases.createIndex(
    //         db,
    //         questionCollection,
    //         "title",
    //         IndexType.Fulltext,
    //         ["title"],
    //         ["asc"]
    //     ),
    //     databases.createIndex(
    //         db,
    //         questionCollection,
    //         "content",
    //         IndexType.Fulltext,
    //         ["content"],
    //         ["asc"]
    //     ),

    // ])
}