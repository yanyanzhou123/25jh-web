/** R2 公开访问前缀：开通公开域名或 r2.dev 后填这里 */
export const R2_BASE =
  import.meta.env.PUBLIC_R2_BASE?.replace(/\/$/, '') || '';

export const site = {
  name: '25京沪加行修学',
  domain: '25jh.jianxing.win',
  title: '25京沪加行修学',
  description:
    '25京沪加行修学平台。依教闻思修，学修课表与研讨平台。',
  footerNote:
    '本站内容将持续更新，以最新版本为准；所有内容仅供学修使用，禁止用于商业用途。',
  /** 工信部 ICP 备案号（页脚展示） */
  icpNo: '',
};

const MEDIA_REV = '20260816';

export function assetUrl(path: string) {
  if (!path) return '';
  const withRev = (url: string) =>
    url.includes('?') ? `${url}&v=${MEDIA_REV}` : `${url}?v=${MEDIA_REV}`;
  if (path.startsWith('http')) return withRev(path);
  const clean = path.replace(/^\//, '');
  if (!R2_BASE) return '';
  return withRev(`${R2_BASE}/${clean}`);
}
