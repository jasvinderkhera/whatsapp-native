/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/` | `/(auth)/login` | `/(auth)/terms_agree` | `/(auth)/verify_otp` | `/(main)` | `/(main)/` | `/_sitemap` | `/login` | `/terms_agree` | `/verify_otp`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
