import * as Types from '#shared/graphql/types.ts';

import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type ReactiveFunction<TParam> = () => TParam;

export const AccountTwoFactorInitiateMethodConfigurationDocument = gql`
    query accountTwoFactorInitiateMethodConfiguration($methodName: EnumTwoFactorAuthenticationMethod!) {
  accountTwoFactorInitiateMethodConfiguration(methodName: $methodName)
}
    `;
export function useAccountTwoFactorInitiateMethodConfigurationQuery(variables: Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables | VueCompositionApi.Ref<Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables> | ReactiveFunction<Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>, options: VueApolloComposable.UseQueryOptions<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>(AccountTwoFactorInitiateMethodConfigurationDocument, variables, options);
}
export function useAccountTwoFactorInitiateMethodConfigurationLazyQuery(variables?: Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables | VueCompositionApi.Ref<Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables> | ReactiveFunction<Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>, options: VueApolloComposable.UseQueryOptions<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>(AccountTwoFactorInitiateMethodConfigurationDocument, variables, options);
}
export type AccountTwoFactorInitiateMethodConfigurationQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<Types.AccountTwoFactorInitiateMethodConfigurationQuery, Types.AccountTwoFactorInitiateMethodConfigurationQueryVariables>;