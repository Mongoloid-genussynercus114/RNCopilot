import { useCallback, useRef, useState } from 'react';
import type { ComponentSize, SnackbarVariant } from '@/common/components';

export function useShowcaseState() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogSize, setDialogSize] = useState<ComponentSize>('md');
  const [lockedDialogVisible, setLockedDialogVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarVariant, setSnackbarVariant] = useState<SnackbarVariant>('neutral');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [selectedSegment, setSelectedSegment] = useState('tab1');
  const [selectValue, setSelectValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const menuAnchorRef = useRef(null);

  const showSnackbar = useCallback((variant: SnackbarVariant, message: string) => {
    setSnackbarVariant(variant);
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  }, []);

  const dismissSnackbar = useCallback(() => {
    setSnackbarVisible(false);
  }, []);

  return {
    dialogVisible,
    setDialogVisible,
    dialogSize,
    setDialogSize,
    lockedDialogVisible,
    setLockedDialogVisible,
    menuVisible,
    setMenuVisible,
    snackbarVisible,
    snackbarVariant,
    snackbarMessage,
    showSnackbar,
    dismissSnackbar,
    menuAnchorRef,
    checkboxChecked,
    setCheckboxChecked,
    switchValue,
    setSwitchValue,
    inputValue,
    setInputValue,
    searchValue,
    setSearchValue,
    selectedRadio,
    setSelectedRadio,
    selectedSegment,
    setSelectedSegment,
    selectValue,
    setSelectValue,
    textAreaValue,
    setTextAreaValue,
  };
}

export type ShowcaseState = ReturnType<typeof useShowcaseState>;
