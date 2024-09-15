/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProjectService } from "../project.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { Project } from "./Project";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectUpdateInput } from "./ProjectUpdateInput";
import { IntegrationFindManyArgs } from "../../integration/base/IntegrationFindManyArgs";
import { Integration } from "../../integration/base/Integration";
import { IntegrationWhereUniqueInput } from "../../integration/base/IntegrationWhereUniqueInput";
import { PageFindManyArgs } from "../../page/base/PageFindManyArgs";
import { Page } from "../../page/base/Page";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProjectControllerBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProject(
    @common.Body() data: ProjectCreateInput
  ): Promise<Project> {
    return await this.service.createProject({
      data: data,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @ApiNestedQuery(ProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async projects(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.projects({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async project(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.project({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProject(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        where: params,
        data: data,
        select: {
          createdAt: true,
          createdBy: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProject(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/integrations")
  @ApiNestedQuery(IntegrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Integration",
    action: "read",
    possession: "any",
  })
  async findIntegrations(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Integration[]> {
    const query = plainToClass(IntegrationFindManyArgs, request.query);
    const results = await this.service.findIntegrations(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        settings: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/integrations")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async connectIntegrations(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: IntegrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      integrations: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/integrations")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async updateIntegrations(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: IntegrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      integrations: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/integrations")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async disconnectIntegrations(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: IntegrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      integrations: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/pages")
  @ApiNestedQuery(PageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async findPages(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Page[]> {
    const query = plainToClass(PageFindManyArgs, request.query);
    const results = await this.service.findPages(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pages")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async connectPages(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: PageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pages: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pages")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async updatePages(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: PageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pages: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pages")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async disconnectPages(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: PageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pages: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/projects")
  @swagger.ApiOkResponse({
    type: Project,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateProject(
    @common.Body()
    body: ProjectCreateInput
  ): Promise<Project> {
    return this.service.CreateProject(body);
  }
}