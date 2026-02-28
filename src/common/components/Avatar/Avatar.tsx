import { Image } from 'expo-image';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { AVATAR_SIZES } from './Avatar.types';
import type { AvatarProps } from './Avatar.types';

export function Avatar({ source, initials, icon, size = 'md', accessibilityLabel }: AvatarProps) {
  const dimension = AVATAR_SIZES[size];
  const fontSize = dimension * 0.4;

  const containerStyle = [
    styles.container,
    { width: dimension, height: dimension, borderRadius: dimension / 2 },
  ];

  if (source) {
    return (
      <Image
        source={source}
        style={containerStyle}
        contentFit="cover"
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
      />
    );
  }

  if (initials) {
    return (
      <View
        style={containerStyle}
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
      >
        <Text weight="semibold" style={[styles.initials, { fontSize }]}>
          {initials.slice(0, 2).toUpperCase()}
        </Text>
      </View>
    );
  }

  if (icon) {
    return (
      <View
        style={containerStyle}
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
      >
        {icon}
      </View>
    );
  }

  return (
    <View
      style={containerStyle}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? 'User avatar'}
    >
      <Icon name="person" variant="inverse" size={dimension * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.brand.primary,
    overflow: 'hidden',
  },
  initials: {
    color: theme.colors.text.inverse,
  },
}));
