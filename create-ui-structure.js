// create-ui-structure.js
/**
 * -------------------------------------------------------------
 * 📁 مسیر اصلی برای ساخت ساختار پروژه: /shirazmobile/shiraz-mobile-ui
 * 🎯 وظیفه: ساخت پوشه‌بندی استاندارد بر اساس معماری FSD برای Next.js
 * -------------------------------------------------------------
 */

import fs from 'fs';
import path from 'path';

const baseDir = 'F:/shirazMobile/shiraz-mobile-ui/src';

const folders = [
  'app/widgets/HeroSection',
  'app/widgets/CategorySection',
  'app/widgets/FeaturedProducts',
  'app/widgets/PromotionBanner',
  'app/widgets/AuthSection',
  'app/widgets/SearchBar',
  'features/auth/components',
  'features/auth/hooks',
  'features/auth/services',
  'features/catalog',
  'features/search',
  'shared/components',
  'shared/hooks',
  'shared/utils',
  'shared/types',
  'styles',
  'assets/images',
  'assets/icons'
];

folders.forEach(folder => {
  const fullPath = path.join(baseDir, folder);
  fs.mkdirSync(fullPath, { recursive: true });
  console.log(`📁 Created: ${fullPath}`);
});

console.log('\n✅ UI folder structure successfully created!');
