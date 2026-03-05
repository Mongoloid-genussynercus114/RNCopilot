#!/usr/bin/env node

/**
 * Reset the showcase home screen back to a clean starter template.
 *
 * This script:
 * 1. Replaces the home screen with a clean welcome screen
 * 2. Removes the showcase feature directory
 * 3. Removes the home feature directory
 * 4. Removes the showcase tab screen file
 * 5. Updates the tabs layout to remove the showcase tab
 * 6. Removes the showcase icon entry from TabBar
 * 7. Removes showcase and home i18n keys from both en.json and ar.json
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

const CLEAN_TABS_LAYOUT = `import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { TabBar } from '@/common/components/TabBar';

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
        }}
      />
    </Tabs>
  );
}
`;

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function removeDirectory(dirPath, label) {
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true });
      console.log(`  ✓ ${label} removed`);
      return true;
    }
    console.log(`  - ${label} not found (already clean)`);
    return false;
  } catch (err) {
    console.error(`  ✗ Failed to remove ${label}: ${err.message}`);
    return false;
  }
}

function removeFile(filePath, label) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`  ✓ ${label} removed`);
      return true;
    }
    console.log(`  - ${label} not found (already clean)`);
    return false;
  } catch (err) {
    console.error(`  ✗ Failed to remove ${label}: ${err.message}`);
    return false;
  }
}

function writeFile(filePath, content, label) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
    console.log(`  ✓ ${label}`);
    return true;
  } catch (err) {
    console.error(`  ✗ Failed: ${label} - ${err.message}`);
    return false;
  }
}

function cleanI18nKeys(filePath, keysToRemove) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(content);

    for (const key of keysToRemove) {
      delete json[key];
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
    return true;
  } catch (err) {
    console.error(`  ✗ Failed to clean ${path.basename(filePath)}: ${err.message}`);
    return false;
  }
}

function removeTabBarIcon(iconKey) {
  try {
    const tabBarPath = path.join(ROOT, 'src', 'common', 'components', 'TabBar', 'TabBar.tsx');
    let content = fs.readFileSync(tabBarPath, 'utf-8');

    // Remove the icon entry line (e.g. "  showcase: { active: 'apps', inactive: 'apps-outline' },\n")
    const regex = new RegExp(`\\s*${iconKey}:\\s*\\{[^}]+\\},?\\n`, 'g');
    content = content.replace(regex, '\n');

    fs.writeFileSync(tabBarPath, content);
    console.log(`  ✓ TabBar icon entry '${iconKey}' removed`);
    return true;
  } catch (err) {
    console.error(`  ✗ Failed to update TabBar: ${err.message}`);
    return false;
  }
}

// ─────────────────────────────────────────────
// Execute
// ─────────────────────────────────────────────

console.log('\nResetting showcase...\n');

// 1. Replace home screen
console.log('📱 Resetting screens...');
writeFile(
  path.join(ROOT, 'app', '(main)', '(tabs)', 'index.tsx'),
  CLEAN_HOME_SCREEN,
  'Home screen reset to clean template'
);

// 2. Remove showcase tab screen file
removeFile(path.join(ROOT, 'app', '(main)', '(tabs)', 'showcase.tsx'), 'Showcase tab screen');

// 3. Update tabs layout to remove showcase tab
writeFile(
  path.join(ROOT, 'app', '(main)', '(tabs)', '_layout.tsx'),
  CLEAN_TABS_LAYOUT,
  'Tabs layout updated (showcase tab removed)'
);

// 4. Remove showcase icon from TabBar
removeTabBarIcon('showcase');

// 5. Remove feature directories
console.log('\n📦 Removing feature directories...');
removeDirectory(path.join(ROOT, 'src', 'features', 'showcase'), 'Showcase feature');
removeDirectory(path.join(ROOT, 'src', 'features', 'home'), 'Home feature');

// 6. Clean i18n files
console.log('\n🌍 Cleaning i18n keys...');
const enPath = path.join(ROOT, 'src', 'i18n', 'locales', 'en.json');
const arPath = path.join(ROOT, 'src', 'i18n', 'locales', 'ar.json');
const keysToRemove = ['showcase'];

if (cleanI18nKeys(enPath, keysToRemove)) {
  console.log('  ✓ English translations cleaned');
}
if (cleanI18nKeys(arPath, keysToRemove)) {
  console.log('  ✓ Arabic translations cleaned');
}

console.log('\nDone! Your app is ready for your own content.\n');
