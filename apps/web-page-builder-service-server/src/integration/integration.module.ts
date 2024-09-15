import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IntegrationModuleBase } from "./base/integration.module.base";
import { IntegrationService } from "./integration.service";
import { IntegrationController } from "./integration.controller";
import { IntegrationResolver } from "./integration.resolver";

@Module({
  imports: [IntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [IntegrationController],
  providers: [IntegrationService, IntegrationResolver],
  exports: [IntegrationService],
})
export class IntegrationModule {}
