import { Component, type ErrorInfo, type ReactNode } from 'react';
import { View, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';

// ErrorBoundary is a class component that cannot use hooks like useTranslation.
// These fallback strings are intentionally hardcoded as a last-resort crash screen.
// They will only show if something catastrophically breaks before i18n loads.
const FALLBACK_TEXT = {
  icon: '!',
  title: 'Something went wrong',
  message: 'The app ran into an unexpected error.',
  retry: 'Try Again',
} as const;

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Hook for Sentry or other error tracking
    this.props.onError?.(error, errorInfo);
    if (__DEV__) {
      console.error('[ErrorBoundary]', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <View style={styles.container} accessibilityRole="alert">
          <Text variant="h1" style={styles.icon}>
            {FALLBACK_TEXT.icon}
          </Text>
          <Text variant="h3" align="center" style={styles.title}>
            {FALLBACK_TEXT.title}
          </Text>
          <Text variant="body" align="center" style={styles.message}>
            {FALLBACK_TEXT.message}
          </Text>
          {__DEV__ && this.state.error && (
            <Text variant="caption" align="center" style={styles.errorDetail}>
              {this.state.error.message}
            </Text>
          )}
          <Pressable
            style={styles.button}
            onPress={this.handleReset}
            accessibilityRole="button"
            accessibilityLabel={FALLBACK_TEXT.retry}
          >
            <Text variant="body" weight="semibold" style={styles.buttonText}>
              {FALLBACK_TEXT.retry}
            </Text>
          </Pressable>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.metrics.spacing.p32,
    backgroundColor: theme.colors.background.app,
  },
  icon: {
    color: theme.colors.state.error,
    marginBottom: theme.metrics.spacingV.p16,
  },
  title: {
    marginBottom: theme.metrics.spacingV.p8,
  },
  message: {
    color: theme.colors.text.secondary,
    marginBottom: theme.metrics.spacingV.p24,
  },
  errorDetail: {
    color: theme.colors.text.muted,
    marginBottom: theme.metrics.spacingV.p24,
  },
  button: {
    backgroundColor: theme.colors.brand.primary,
    paddingHorizontal: theme.metrics.spacing.p24,
    paddingVertical: theme.metrics.spacingV.p12,
    borderRadius: theme.metrics.borderRadius.lg,
  },
  buttonText: {
    color: theme.colors.text.inverse,
  },
}));
