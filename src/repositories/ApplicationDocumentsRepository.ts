import { Sequelize } from "sequelize";
import { ApplicationDocuments } from "../models/ApplicationDocuments";
import {
  CreateApplicationDocumentsDTO,
  UpdateApplicationDocumentsDTO,
} from "../dto/ApplicationDocumentsDTO";

class ApplicationDocumentsRepository {
  private model: typeof ApplicationDocuments;

  constructor(sequelize: Sequelize) {
    this.model = sequelize.models
      .ApplicationDocuments as typeof ApplicationDocuments;
  }

  async create(
    data: CreateApplicationDocumentsDTO
  ): Promise<ApplicationDocuments> {
    try {
      const createdDocument = await this.model.create(data);
      return createdDocument;
    } catch (error) {
      console.error("Error creating document:", error);
      throw new Error("Failed to create item");
    }
  }

  async findById(id: number): Promise<ApplicationDocuments | null> {
    try {
      const document = await this.model.findByPk(id);
      return document;
    } catch (error) {
      console.error(`Error finding document by ID ${id}:`, error);
      throw new Error(`Failed to find item by ID ${id}`);
    }
  }

  async findAll(): Promise<ApplicationDocuments[]> {
    try {
      const documents = await this.model.findAll();
      return documents;
    } catch (error) {
      console.error("Error finding all documents:", error);
      throw new Error("Failed to find all items");
    }
  }

  async update(
    id: number,
    data: UpdateApplicationDocumentsDTO
  ): Promise<ApplicationDocuments | null> {
    try {
      const existingDocument = await this.model.findByPk(id);

      if (!existingDocument) {
        throw new Error(`Document with ID ${id} not found`);
      }

      const updatedDocument = await existingDocument.update(data);

      return updatedDocument || null;
    } catch (error) {
      console.error(`Error updating document with ID ${id}:`, error);
      throw new Error(`Failed to update item with ID ${id}`);
    }
  }

  async softDelete(id: number): Promise<ApplicationDocuments | null> {
    try {
      const existingDocument = await this.model.findByPk(id);

      if (!existingDocument) {
        throw new Error(`Document with ID ${id} not found`);
      }

      await existingDocument.destroy();

      return existingDocument || null;
    } catch (error) {
      console.error(`Error soft deleting document with ID ${id}:`, error);
      throw new Error(`Failed to soft delete item with ID ${id}`);
    }
  }
}

export default ApplicationDocumentsRepository;
