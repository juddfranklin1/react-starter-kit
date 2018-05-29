import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  // GraphQLList as ListType,
  // GraphQLNonNull as NonNull,
} from 'graphql';

const SideEffectType = new ObjectType({
  name: 'SideEffect',
  fields: {
    meta: { type: StringType },
    results: { type: StringType },
  },
});

export default SideEffectType;
