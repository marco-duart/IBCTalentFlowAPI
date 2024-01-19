import { ModelStatic, Sequelize } from 'sequelize';
import BaseRepository from './Repository';
import { ApplicationDocumentsModel } from '../models/ApplicationDocuments';

class ApplicationDocumentsRepository extends BaseRepository<ApplicationDocumentsModel> {
  private model: ModelStatic<ApplicationDocumentsModel>;

  constructor(sequelize: Sequelize) {
    super(sequelize.models.ApplicationDocuments as ModelStatic<ApplicationDocumentsModel>);
    this.model = sequelize.models.ApplicationDocuments as ModelStatic<ApplicationDocumentsModel>;
  }

  // Se necessário, você pode adicionar métodos específicos para o Sequelize aqui.

}

export default ApplicationDocumentsRepository;
