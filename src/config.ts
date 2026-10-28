/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const APP_CONFIG = {
  name: "멍라이프",
  nameEn: "MungLife",
  tagline: "우리 강아지와 함께하는 모든 순간, 멍라이프!",
  subDescription: "소중한 반려견의 하루를 더 쉽고, 더 편리하고, 더 행복하게.",
  kicker: "전국 반려견 보호자를 위한 감성 라이프스타일 앱",
  appUrl: "https://wan-muk-mung-life.vercel.app/",
  shareTitle: "멍라이프 - 우리 강아지와 함께하는 행복한 일상",
  shareDescription: "반려 생활을 더 쉽고 즐겁게! 멍라이프를 만나보세요.",
};

export interface ScreenshotData {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  defaultDescription: string;
  customImage?: string;
  type: "home" | "search" | "health";
}
