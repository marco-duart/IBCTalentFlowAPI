import { Sequelize } from "sequelize";
import { Candidate } from "../models/Candidate";
import { CreateCandidateDTO, UpdateCandidateDTO } from "../dto/CandidateDTO";

class CandidateRepository {
  private model: typeof Candidate;

  constructor(sequelize: Sequelize) {
    this.model = sequelize.models.Candidate as typeof Candidate;
  }

  async create(data: CreateCandidateDTO): Promise<Candidate> {
    try {
      const createdDocument = await this.model.create(data);
      return createdDocument;
    } catch (error) {
      console.error("Error creating document:", error);
      throw new Error("Failed to create item");
    }
  }

  async findById(id: number): Promise<Candidate | null> {
    try {
      const document = await this.model.findByPk(id);
      return document;
    } catch (error) {
      console.error(`Error finding document by ID ${id}:`, error);
      throw new Error(`Failed to find item by ID ${id}`);
    }
  }

  async findAll(): Promise<Candidate[]> {
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
    data: UpdateCandidateDTO
  ): Promise<Candidate | null> {
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

  async softDelete(id: number): Promise<Candidate | null> {
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

export default CandidateRepository;
