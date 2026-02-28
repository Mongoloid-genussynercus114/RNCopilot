import { useCallback, useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { vs } from '@/theme/metrics';
import type { AccordionItem, AccordionProps } from './Accordion.types';

function AccordionSection({
  item,
  isExpanded,
  onToggle,
}: {
  item: AccordionItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const { theme } = useUnistyles();
  const rotation = useSharedValue(isExpanded ? 1 : 0);
  const contentHeight = useSharedValue(isExpanded ? 1 : 0);

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 180}deg` }],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentHeight.value,
    maxHeight: contentHeight.value * vs(500),
  }));

  const handleToggle = useCallback(() => {
    if (item.disabled) return;
    const newExpanded = !isExpanded;
    rotation.value = withTiming(newExpanded ? 1 : 0, { duration: 250 });
    contentHeight.value = withTiming(newExpanded ? 1 : 0, { duration: 250 });
    onToggle();
  }, [isExpanded, item.disabled, onToggle, rotation, contentHeight]);

  return (
    <View style={[styles.section, item.disabled && styles.disabled]}>
      <Pressable
        onPress={handleToggle}
        disabled={item.disabled}
        style={styles.header}
        accessibilityRole="button"
        accessibilityState={{ expanded: isExpanded, disabled: item.disabled }}
      >
        <Text variant="body" weight="medium" style={styles.title}>
          {item.title}
        </Text>
        <Animated.View style={chevronStyle}>
          <Icon name="chevron-down" size={theme.metrics.iconSize.lg} variant="secondary" />
        </Animated.View>
      </Pressable>
      <Animated.View style={[styles.content, contentStyle]}>{item.content}</Animated.View>
    </View>
  );
}

export function Accordion({ items, multiple = false, defaultExpanded = [] }: AccordionProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpanded));

  const toggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(multiple ? prev : []);
        if (prev.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [multiple]
  );

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <AccordionSection
          key={item.id}
          item={item}
          isExpanded={expanded.has(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: theme.metrics.borderRadius.lg,
    overflow: 'hidden',
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.default,
  },
  disabled: {
    opacity: 0.5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.metrics.spacingV.p12,
    paddingHorizontal: theme.metrics.spacing.p16,
  },
  title: {
    flex: 1,
  },
  content: {
    paddingHorizontal: theme.metrics.spacing.p16,
    paddingBottom: theme.metrics.spacingV.p12,
    overflow: 'hidden',
  },
}));
