import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class EventEntity {
  @Field(() => Date, { nullable: false })
  date!: Date

  @Field(() => BigInt, { nullable: true, defaultValue: 0n })
  max!: bigint

  @Field(() => Number, { nullable: true, defaultValue: 0 })
  count!: number

  constructor(props: Partial<EventEntity>) {
    Object.assign(this, props);
}
}