#!/usr/bin/env node

/**
 * Full template reset - removes ALL example content and gives you a blank canvas.
 *
 * This script:
 * 1. Resets the home screen to a clean welcome screen
 * 2. Removes the showcase feature directory
 * 3. Removes the auth feature directory (components, services, schemas)
 * 4. Cleans up i18n keys (showcase + auth)
 * 5. Replaces auth store with a minimal stub
 * 6. Resets settings screen to a minimal skeleton
 *
 * The core infrastructure is preserved:
 * - All 33 shared components (src/common/components/)
 * - Theme system, i18n config, API client, storage utils
 * - Providers (QueryProvider, auth store pattern)
 * - Global hooks, integrations, types
 * - All AI documentation and config files
 *
 * Usage: npm run reset-template
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ─────────────────────────────────────────────
// Template files
// ─────────────────────────────────────────────

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

const CLEAN_SETTINGS_SCREEN = `import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ScreenContainer, Text } from '@/common/components';

export default function SettingsTab() {
  const { t } = useTranslation();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text variant="h2">{t('settings.title')}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    paddingTop: theme.metrics.spacingV.p16,
  },
}));
`;

const CLEAN_AUTH_STORE = `import { useEffect } from 'react';
import { create } from 'zustand';

interface AuthUser {
  id: string;
  email: string;
  [key: string]: unknown;
}

interface AuthSession {
  access_token: string;
  refresh_token: string;
  [key: string]: unknown;
}

interface AuthState {
  user: AuthUser | null;
  session: AuthSession | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  setSession: (session: AuthSession | null) => void;
  setLoading: (isLoading: boolean) => void;
  clearSession: () => void;
  initialize: () => Promise<void>;
  cleanup: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  isLoading: true,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  setSession: (session) => set({ session }),

  setLoading: (isLoading) => set({ isLoading }),

  clearSession: () => set({ user: null, session: null, isAuthenticated: false }),

  initialize: async () => {
    // TODO: Add your auth initialization logic here
    // Example: Check for existing session, set up auth state listener
    set({ isLoading: false });
  },

  cleanup: () => {
    // TODO: Clean up auth subscriptions here
  },
}));

export function useAuthInit() {
  const initialize = useAuthStore((s) => s.initialize);
  const cleanup = useAuthStore((s) => s.cleanup);

  useEffect(() => {
    initialize();
    return () => cleanup();
  }, [initialize, cleanup]);
}
`;

const CLEAN_AUTH_SERVICE = `// TODO: Implement your auth service functions here
// This file provides the API for authentication operations.
//
// Example with Supabase:
//   import { supabase } from '@/integrations/supabase';
//   export async function login({ email, password }) { ... }
//
// Example with custom API:
//   import { api } from '@/services/api';
//   export async function login({ email, password }) { ... }

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  email: string;
  password: string;
  username?: string;
}

export async function login(_params: LoginParams) {
  // TODO: Implement login
  throw new Error('Auth not configured. See docs/MIGRATION.md for setup instructions.');
}

export async function register(_params: RegisterParams) {
  // TODO: Implement registration
  throw new Error('Auth not configured. See docs/MIGRATION.md for setup instructions.');
}

export async function logout() {
  // TODO: Implement logout
}

export async function getSession() {
  // TODO: Implement session retrieval
  return { session: null };
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

// ─────────────────────────────────────────────
// Execute
// ─────────────────────────────────────────────

console.log('\n🔄 Resetting template to blank canvas...\n');

// 1. Reset screens
console.log('📱 Resetting screens...');
writeFile(
  path.join(ROOT, 'app', '(main)', '(tabs)', 'index.tsx'),
  CLEAN_HOME_SCREEN,
  'Home screen reset'
);
writeFile(
  path.join(ROOT, 'app', '(main)', '(tabs)', 'settings.tsx'),
  CLEAN_SETTINGS_SCREEN,
  'Settings screen reset'
);

// 2. Remove example feature directories
console.log('\n📦 Removing example features...');
removeDirectory(path.join(ROOT, 'src', 'features', 'showcase'), 'Showcase feature');

// Remove auth components and schemas (keep services as stub)
removeDirectory(
  path.join(ROOT, 'src', 'features', 'auth', 'components'),
  'Auth components (LoginForm, RegisterForm)'
);
removeDirectory(path.join(ROOT, 'src', 'features', 'auth', 'schemas'), 'Auth schemas');

// Replace auth service with stub
writeFile(
  path.join(ROOT, 'src', 'features', 'auth', 'services', 'authService.ts'),
  CLEAN_AUTH_SERVICE,
  'Auth service replaced with stub'
);

// 3. Reset auth store
console.log('\n🔐 Resetting auth store...');
writeFile(
  path.join(ROOT, 'src', 'providers', 'auth', 'authStore.ts'),
  CLEAN_AUTH_STORE,
  'Auth store reset to minimal stub'
);

// 4. Clean i18n
console.log('\n🌍 Cleaning i18n keys...');
const enPath = path.join(ROOT, 'src', 'i18n', 'locales', 'en.json');
const arPath = path.join(ROOT, 'src', 'i18n', 'locales', 'ar.json');
const keysToRemove = ['showcase', 'auth'];

if (cleanI18nKeys(enPath, keysToRemove)) {
  console.log('  ✓ English translations cleaned');
}
if (cleanI18nKeys(arPath, keysToRemove)) {
  console.log('  ✓ Arabic translations cleaned');
}

// 5. Summary
console.log('\n' + '─'.repeat(50));
console.log('\n✅ Template reset complete!\n');
console.log('What was kept (infrastructure):');
console.log('  • 33 shared UI components (src/common/components/)');
console.log('  • Theme system with light/dark mode');
console.log('  • i18n config with EN/AR support');
console.log('  • API client with auth interceptors');
console.log('  • React Query provider with MMKV persistence');
console.log('  • Auth store pattern (ready to configure)');
console.log('  • Storage utilities (MMKV)');
console.log('  • Global hooks');
console.log('  • All AI documentation files');
console.log('  • ESLint, Prettier, Jest configuration');

console.log('\nNext steps:');
console.log('  1. Update app.json with your app name and identifiers');
console.log('  2. Update package.json name field');
console.log('  3. Customize theme colors in src/theme/');
console.log('  4. Configure .env with your backend credentials');
console.log('  5. Start building features in src/features/');
console.log('  6. See docs/MIGRATION.md for detailed guide');
console.log('');
