import { Model, ModelStatic } from 'sequelize';

class BaseRepository<T> {
  private model: ModelStatic<Model<T, any>>;

  constructor(model: ModelStatic<Model<T, any>>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    try {
      const createdDocument = await this.model.create(data);
      return createdDocument;
    } catch (error) {
      console.error('Error creating document:', error);
      throw new Error('Failed to create item');
    }
  }

  async findById(id: string): Promise<T | null> {
    try {
      const document = await this.model.findByPk(id);
      if (!document) {
        throw new Error(`ID ${id} - Item not found`);
      }
      return document;
    } catch (error) {
      console.error(`Error finding document by ID ${id}:`, error);
      throw new Error(`Failed to find item by ID ${id}`);
    }
  }

  async findAll(): Promise<T[]> {
    try {
      const documents = await this.model.findAll();
      if (!documents || documents.length === 0) {
        throw new Error('No items found');
      }
      return documents;
    } catch (error) {
      console.error('Error finding all documents:', error);
      throw new Error('Failed to find all items');
    }
  }

  async findByEmail(email: string): Promise<T | null> {
    try {
      const document = await this.model.findOne({ where: { email } });
      if (!document) {
        throw new Error(`Email ${email} - Item not found`);
      }
      return document;
    } catch (error) {
      console.error(`Error finding document by email ${email}:`, error);
      throw new Error(`Failed to find item by email ${email}`);
    }
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    try {
      const [rowsAffected, updatedDocuments] = await this.model.update(data, { where: { id }, returning: true });
      if (rowsAffected === 0 || !updatedDocuments || updatedDocuments.length === 0) {
        throw new Error(`ID ${id} - Item not found for update`);
      }
      return updatedDocuments[0];
    } catch (error) {
      console.error(`Error updating document with ID ${id}:`, error);
      throw new Error(`Failed to update item with ID ${id}`);
    }
  }

  async softDelete(id: string): Promise<T | null> {
    try {
      const [rowsAffected, deletedDocuments] = await this.model.update({ deletedAt: new Date() }, {
        where: { id },
        returning: true,
      });
      if (rowsAffected === 0 || !deletedDocuments || deletedDocuments.length === 0) {
        throw new Error(`ID ${id} - Item not found for deletion`);
      }
      return deletedDocuments[0];
    } catch (error) {
      console.error(`Error soft deleting document with ID ${id}:`, error);
      throw new Error(`Failed to soft delete item with ID ${id}`);
    }
  }
}

export default BaseRepository;
