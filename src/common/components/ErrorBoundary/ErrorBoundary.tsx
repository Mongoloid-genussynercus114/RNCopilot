import { Component, type ErrorInfo, type ReactNode } from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '@/common/components/Text';
import { styles } from './ErrorBoundary.styles';

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

// Note: Class component - cannot use useVariants hook.
// Styles are extracted to a separate file but applied via style arrays.
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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
