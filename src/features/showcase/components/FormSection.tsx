import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import {
  Checkbox,
  Input,
  RadioGroup,
  SearchBar,
  SegmentedControl,
  Select,
  Switch,
  Text,
  TextArea,
} from '@/common/components';
import {
  RADIO_OPTION_KEYS,
  SEGMENT_OPTIONS,
  SELECT_OPTIONS,
} from '../constants/showcase.constants';
import type { ShowcaseState } from '../hooks/useShowcaseState';
import { SectionHeader } from './SectionHeader';

interface FormSectionProps {
  state: ShowcaseState;
}

export function FormSection({ state }: FormSectionProps) {
  const { t } = useTranslation();
  const [selectValue, setSelectValue] = useState('');

  const radioOptions = RADIO_OPTION_KEYS.map((key, index) => ({
    value: `option${index + 1}`,
    label: t(key),
  }));

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.form" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.input')}
      </Text>
      <View style={styles.column}>
        <Input
          label={t('showcase.form.emailLabel')}
          placeholder={t('showcase.form.emailPlaceholder')}
          helperText={t('showcase.form.emailHelper')}
          value={state.inputValue}
          onChangeText={state.setInputValue}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label={t('showcase.form.passwordLabel')}
          placeholder={t('showcase.form.passwordLabel')}
          value=""
          onChangeText={() => {}}
          secureTextEntry
        />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.inputSizes')}
      </Text>
      <View style={styles.column}>
        <Input placeholder={t('showcase.form.small')} size="sm" value="" onChangeText={() => {}} />
        <Input placeholder={t('showcase.form.medium')} size="md" value="" onChangeText={() => {}} />
        <Input placeholder={t('showcase.form.large')} size="lg" value="" onChangeText={() => {}} />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.textArea')}
      </Text>
      <TextArea
        label={t('showcase.form.textAreaLabel')}
        placeholder={t('showcase.form.textAreaPlaceholder')}
        value={state.textAreaValue}
        onChangeText={state.setTextAreaValue}
        numberOfLines={4}
        showCount
        maxLength={200}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.searchBar')}
      </Text>
      <SearchBar
        value={state.searchValue}
        onChangeText={state.setSearchValue}
        placeholder={t('showcase.form.searchPlaceholder')}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.searchBarSizes')}
      </Text>
      <View style={styles.column}>
        <SearchBar
          value=""
          onChangeText={() => {}}
          placeholder={t('showcase.form.small')}
          size="sm"
        />
        <SearchBar
          value=""
          onChangeText={() => {}}
          placeholder={t('showcase.form.large')}
          size="lg"
        />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.select')}
      </Text>
      <Select
        label={t('showcase.form.selectLabel')}
        placeholder={t('showcase.form.selectPlaceholder')}
        value={selectValue}
        onChange={setSelectValue}
        options={SELECT_OPTIONS}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.selectSizes')}
      </Text>
      <View style={styles.column}>
        <Select
          placeholder={t('showcase.form.small')}
          size="sm"
          value=""
          onChange={() => {}}
          options={SELECT_OPTIONS}
        />
        <Select
          placeholder={t('showcase.form.large')}
          size="lg"
          value=""
          onChange={() => {}}
          options={SELECT_OPTIONS}
        />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.radioGroup')}
      </Text>
      <RadioGroup
        value={state.selectedRadio}
        onChange={state.setSelectedRadio}
        options={radioOptions}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.radioGroupSizes')}
      </Text>
      <View style={styles.column}>
        <RadioGroup
          value="option1"
          onChange={() => {}}
          options={[{ value: 'option1', label: t('showcase.form.small') }]}
          size="sm"
        />
        <RadioGroup
          value="option1"
          onChange={() => {}}
          options={[{ value: 'option1', label: t('showcase.form.large') }]}
          size="lg"
        />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.segmentedControl')}
      </Text>
      <SegmentedControl
        value={state.selectedSegment}
        onChange={state.setSelectedSegment}
        options={SEGMENT_OPTIONS}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.checkbox')}
      </Text>
      <Checkbox
        checked={state.checkboxChecked}
        onChange={state.setCheckboxChecked}
        label={t('showcase.form.agreeTerms')}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.checkboxStates')}
      </Text>
      <View style={styles.column}>
        <Checkbox
          checked={true}
          indeterminate
          onChange={() => {}}
          label={t('showcase.form.indeterminate')}
        />
        <Checkbox
          checked={false}
          onChange={() => {}}
          label={t('showcase.action.disabled')}
          disabled
        />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.checkboxSizes')}
      </Text>
      <View style={styles.row}>
        <Checkbox checked={true} onChange={() => {}} size="sm" label={t('showcase.form.small')} />
        <Checkbox checked={true} onChange={() => {}} size="md" label={t('showcase.form.medium')} />
        <Checkbox checked={true} onChange={() => {}} size="lg" label={t('showcase.form.large')} />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.switch')}
      </Text>
      <Switch
        value={state.switchValue}
        onValueChange={state.setSwitchValue}
        label={t('showcase.form.enableNotifications')}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.form.switchSizes')}
      </Text>
      <View style={styles.column}>
        <Switch value={true} onValueChange={() => {}} size="sm" label={t('showcase.form.small')} />
        <Switch value={true} onValueChange={() => {}} size="lg" label={t('showcase.form.large')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  subheading: {
    marginTop: theme.metrics.spacingV.p12,
    marginBottom: theme.metrics.spacingV.p8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: theme.metrics.spacing.p12,
  },
  column: {
    gap: theme.metrics.spacingV.p8,
  },
}));
