//GENERAL IMPORTS
import express, { Request, Response, Router } from "express";

//SHARED MIDDLEWARES
import { logMiddleware } from "./middlewares/logMiddleware";
import { authenticationMiddleware } from "./middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "./middlewares/authorizationMiddleware";

//SPECIFIC MIDDLEWARES
import { deleteCandidateMiddleware, getByIdCandidateMiddleware } from "./middlewares/candidateMiddleware";


//SHARED MODULES
import { AuthenticationModule } from "./modules/AuthenticationModule";

//SPECIFIC MODULES
import { ApplicationDocumentsModule } from "./modules/ApplicationDocumentsModule";
import { ApplicationStatusModule } from "./modules/ApplicationStatusModule";
import { CandidateModule } from "./modules/CandidateModule";
import { CompanyModule } from "./modules/CompanyModule";
import { DashboardModule } from "./modules/DashboardModule";
import { EmploymentHistoryModule } from "./modules/EmploymentHistoryModule";
import { FeedbackModule } from "./modules/FeedbackModule";
import { HiringProcessModule } from "./modules/HiringProcessModule";
import { InterviewModule } from "./modules/InterviewModule";
import { JobPostingModule } from "./modules/JobPostingModule";
import { NotificationsModule } from "./modules/NotificationsModule";
import { RecruiterModule } from "./modules/RecruiterModule";
import { UserModule } from "./modules/UserModule";


const router: Router = express.Router();
router.use(express.json());


router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "Welcome to fisrt route!"})
})

namespace AuthenticationRoutes {
  const { controller } = AuthenticationModule.make()

  router.post("/login", logMiddleware, authenticationMiddleware, controller.login.bind(controller))
}

namespace ApplicationDocumentsRoutes {
  const { controller } = ApplicationDocumentsModule.make()

  router.post("/applicationDocuments", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/applicationDocuments/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/applicationDocuments", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/applicationDocuments/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/applicationDocuments/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace ApplicationStatusRoutes {
  const { controller } = ApplicationStatusModule.make()

  router.post("/applicationStatus", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/applicationStatus/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/applicationStatus", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/applicationStatus/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/applicationStatus/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace CandidateRoutes {
  const { controller } = CandidateModule.make()

  router.post("/candidate", logMiddleware, controller.create.bind(controller));
  router.get("/candidate/:id", logMiddleware, authorizationMiddleware, getByIdCandidateMiddleware, controller.getById.bind(controller));
  router.get("/candidate", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/candidate/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/candidate/:id", logMiddleware, authorizationMiddleware, deleteCandidateMiddleware, controller.delete.bind(controller))
}


namespace CompanyRoutes {
  const { controller } = CompanyModule.make()

  router.post("/company", logMiddleware, authorizationMiddleware, controller.create.bind(controller))
  router.get("/company/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller))
  router.get("/company", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller))
  router.patch("/company", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/company", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace DashboardRoutes {
  const { controller } = DashboardModule.make()

  router.post("/dashboard", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/dashboard/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/dashboard", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/dashboard/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/dashboard/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace EmploymentHistoryRoutes {
  const { controller } = EmploymentHistoryModule.make()

  router.post("/employmenthistory", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/employmenthistory/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/employmenthistory", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/employmenthistory/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/employmenthistory/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace FeedbackRoutes {
  const { controller } = FeedbackModule.make()

  router.post("/feedback", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/feedback/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/feedback", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/feedback/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/feedback/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace HiringProcessRoutes {
  const { controller } = HiringProcessModule.make()

  router.post("/hiringprocess", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/hiringprocess/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/hiringprocess", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/hiringprocess/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/hiringprocess/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace InterviewRoutes {
  const { controller } = InterviewModule.make()

  router.post("/interview", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/interview/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/interview", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/interview/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/interview/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace JobPostingRoutes {
  const { controller } = JobPostingModule.make()

  router.post("/jobposting", logMiddleware, authorizationMiddleware, controller.create.bind(controller));
  router.get("/jobposting/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/jobposting", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/jobposting/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/jobposting/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace NotificationsRoutes {
  const { controller } = NotificationsModule.make()

  router.post("/notifications", logMiddleware, controller.create.bind(controller));
  router.get("/notifications/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/notifications", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/notifications/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/notifications/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace RecruiterRoutes {
  const { controller } = RecruiterModule.make()

  router.post("/recruiter", logMiddleware, controller.create.bind(controller));
  router.get("/recruiter/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/recruiter", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/recruiter/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/recruiter/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

namespace UserRoutes {
  const { controller } = UserModule.make()

  router.post("/user", logMiddleware, controller.create.bind(controller));
  router.get("/user/:id", logMiddleware, authorizationMiddleware, controller.getById.bind(controller));
  router.get("/user", logMiddleware, authorizationMiddleware, controller.getAll.bind(controller));
  router.patch("/user/:id", logMiddleware, authorizationMiddleware, controller.update.bind(controller))
  router.delete("/user/:id", logMiddleware, authorizationMiddleware, controller.delete.bind(controller))
}

export { router }