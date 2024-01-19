import { UserModule } from "../modules/UserModule";
import { AuthenticationController } from "../controllers/AuthenticationController";
import { AuthenticationService } from "../services/AuthenticationService";

export class AuthenticationModule {
  static make() {
    const { repository } = UserModule.make();
    const service = new AuthenticationService(repository);
    const controller = new AuthenticationController(service);
    return { service, controller };
  }
}
