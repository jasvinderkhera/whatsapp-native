/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/` | `/(auth)/lang_select` | `/(auth)/login` | `/(auth)/otp` | `/(auth)/terms_agree` | `/(auth)/verify_otp` | `/(main)` | `/(main)/` | `/..\constants\colors` | `/_sitemap` | `/lang_select` | `/login` | `/otp` | `/terms_agree` | `/verify_otp`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
