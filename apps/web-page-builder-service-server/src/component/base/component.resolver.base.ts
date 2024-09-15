/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Component } from "./Component";
import { ComponentCountArgs } from "./ComponentCountArgs";
import { ComponentFindManyArgs } from "./ComponentFindManyArgs";
import { ComponentFindUniqueArgs } from "./ComponentFindUniqueArgs";
import { CreateComponentArgs } from "./CreateComponentArgs";
import { UpdateComponentArgs } from "./UpdateComponentArgs";
import { DeleteComponentArgs } from "./DeleteComponentArgs";
import { Page } from "../../page/base/Page";
import { ComponentService } from "../component.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Component)
export class ComponentResolverBase {
  constructor(
    protected readonly service: ComponentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "read",
    possession: "any",
  })
  async _componentsMeta(
    @graphql.Args() args: ComponentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Component])
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "read",
    possession: "any",
  })
  async components(
    @graphql.Args() args: ComponentFindManyArgs
  ): Promise<Component[]> {
    return this.service.components(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Component, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "read",
    possession: "own",
  })
  async component(
    @graphql.Args() args: ComponentFindUniqueArgs
  ): Promise<Component | null> {
    const result = await this.service.component(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Component)
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "create",
    possession: "any",
  })
  async createComponent(
    @graphql.Args() args: CreateComponentArgs
  ): Promise<Component> {
    return await this.service.createComponent({
      ...args,
      data: {
        ...args.data,

        page: args.data.page
          ? {
              connect: args.data.page,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Component)
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "update",
    possession: "any",
  })
  async updateComponent(
    @graphql.Args() args: UpdateComponentArgs
  ): Promise<Component | null> {
    try {
      return await this.service.updateComponent({
        ...args,
        data: {
          ...args.data,

          page: args.data.page
            ? {
                connect: args.data.page,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Component)
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "delete",
    possession: "any",
  })
  async deleteComponent(
    @graphql.Args() args: DeleteComponentArgs
  ): Promise<Component | null> {
    try {
      return await this.service.deleteComponent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Page, {
    nullable: true,
    name: "page",
  })
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async getPage(@graphql.Parent() parent: Component): Promise<Page | null> {
    const result = await this.service.getPage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => Component)
  async GetAiHelper(
    @graphql.Args()
    args: ComponentFindManyArgs
  ): Promise<Component> {
    return this.service.GetAiHelper(args);
  }
}
