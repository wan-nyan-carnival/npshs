// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ↓ GitHub Pages用の設定を追加
  site: 'https://wan-nyan-carnival.github.io', // 必ずあなたのユーザー名に置き換えてください
  base: '/npshs', // 必ずあなたのリポジトリ名に置き換えてください
  // ↑ ここまで追加
});
