import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.Databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.Databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }

  async UpdatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.Databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          status,
          content,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.Databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.Databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.Databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
    }
  }

  // file upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
    }
  }
  async deleteFile(fileid) {
    try {
      await this.bucket.createFile(conf.appwriteBucketId, fileid);
      return true;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
    }
  }

  getFilepreview(fileid) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileid);
  }
}
const service = new Service();
export default service;
