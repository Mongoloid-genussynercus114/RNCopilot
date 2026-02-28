#!/usr/bin/env node

/**
 * Reset the showcase home screen back to a clean starter template.
 *
 * This script:
 * 1. Replaces the home screen with a clean welcome screen
 * 2. Removes the showcase feature directory
 * 3. Removes showcase i18n keys from both en.json and ar.json
 *
 * Usage: npm run reset-showcase
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const CLEAN_HOME_SCREEN = `import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ScreenContainer, Text } from '@/common/components';

export default function HomeTab() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text variant="h1" align="center">
          {t('home.welcome')}
        </Text>
        <Text variant="body" align="center" color="secondary">
          {t('home.subtitle')}
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.metrics.spacing.p32,
    gap: theme.metrics.spacingV.p8,
  },
}));
`;

function removeShowcaseKeys(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(content);
    delete json.showcase;
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
    return true;
  } catch (err) {
    console.error(`  Failed to clean ${path.basename(filePath)}: ${err.message}`);
    return false;
  }
}

function removeDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true });
      return true;
    }
    return false;
  } catch (err) {
    console.error(`  Failed to remove directory: ${err.message}`);
    return false;
  }
}

// --- Execute ---

console.log('\nResetting showcase...\n');

// 1. Replace home screen
const homeScreenPath = path.join(ROOT, 'app', '(main)', '(tabs)', 'index.tsx');
fs.writeFileSync(homeScreenPath, CLEAN_HOME_SCREEN);
console.log('  ✓ Home screen reset to clean template');

// 2. Remove showcase feature directory
const showcaseDir = path.join(ROOT, 'src', 'features', 'showcase');
if (removeDirectory(showcaseDir)) {
  console.log('  ✓ Showcase feature directory removed');
} else {
  console.log('  - Showcase directory not found (already clean)');
}

// 3. Clean i18n files
const enPath = path.join(ROOT, 'src', 'i18n', 'locales', 'en.json');
const arPath = path.join(ROOT, 'src', 'i18n', 'locales', 'ar.json');

if (removeShowcaseKeys(enPath)) {
  console.log('  ✓ English translations cleaned');
}
if (removeShowcaseKeys(arPath)) {
  console.log('  ✓ Arabic translations cleaned');
}

console.log('\nDone! Your app is ready for your own content.\n');
