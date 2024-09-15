/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IntegrationUpdateManyWithoutProjectsInput } from "./IntegrationUpdateManyWithoutProjectsInput";
import { Type } from "class-transformer";
import { PageUpdateManyWithoutProjectsInput } from "./PageUpdateManyWithoutProjectsInput";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => IntegrationUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => IntegrationUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => IntegrationUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  integrations?: IntegrationUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PageUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => PageUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => PageUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  pages?: PageUpdateManyWithoutProjectsInput;
}

export { ProjectUpdateInput as ProjectUpdateInput };