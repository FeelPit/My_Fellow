/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MatchWhereUniqueInput } from "../../match/base/MatchWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MatchUpdateManyWithoutUsersInput {
  @Field(() => [MatchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MatchWhereUniqueInput],
  })
  connect?: Array<MatchWhereUniqueInput>;

  @Field(() => [MatchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MatchWhereUniqueInput],
  })
  disconnect?: Array<MatchWhereUniqueInput>;

  @Field(() => [MatchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MatchWhereUniqueInput],
  })
  set?: Array<MatchWhereUniqueInput>;
}

export { MatchUpdateManyWithoutUsersInput as MatchUpdateManyWithoutUsersInput };
