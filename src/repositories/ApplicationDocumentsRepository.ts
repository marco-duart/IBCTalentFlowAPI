import { Sequelize, Model, DataTypes } from 'sequelize';
import { ApplicationDocuments } from '../models/ApplicationDocuments';

class ApplicationDocumentsRepository {
  private model: typeof ApplicationDocuments;

  constructor(sequelize: Sequelize) {
    this.model = sequelize.models.ApplicationDocuments as typeof ApplicationDocuments;
  }

  async create(data: Partial<ApplicationDocuments>): Promise<ApplicationDocuments> {
    try {
      const createdDocument = await this.model.create(data);
      return createdDocument;
    } catch (error) {
      console.error('Error creating document:', error);
      throw new Error('Failed to create item');
    }
  }

  async findById(id: string): Promise<ApplicationDocuments | null> {
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
      console.error('Error finding all documents:', error);
      throw new Error('Failed to find all items');
    }
  }

  async update(id: string, data: Partial<ApplicationDocuments>): Promise<ApplicationDocuments | null> {
    try {
      const updatedDocuments = await this.model.update(data, { where: { id }, returning: true });
      return updatedDocuments[1][0] || null;
    } catch (error) {
      console.error(`Error updating document with ID ${id}:`, error);
      throw new Error(`Failed to update item with ID ${id}`);
    }
  }

  async softDelete(id: string): Promise<ApplicationDocuments | null> {
    try {
      const deletedDocuments = await this.model.update(
        { deletedAt: new Date() },
        { where: { id }, returning: true }
      );
      return deletedDocuments[1][0] || null;
    } catch (error) {
      console.error(`Error soft deleting document with ID ${id}:`, error);
      throw new Error(`Failed to soft delete item with ID ${id}`);
    }
  }
}

export default ApplicationDocumentsRepository;
