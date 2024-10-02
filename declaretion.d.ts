declare module "*.png";

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare module "@env" {
  export const EXPO_PUBLIC_API_BASE: string;
  export const EXPO_PUBLIC_USER: string;
  export const EXPO_PUBLIC_PASSWORD: string;
}