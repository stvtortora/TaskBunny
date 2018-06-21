export const MOD_DROPDOWN = 'MOD_DROPDOWN';
export const DROPDOWN_ITEM_SELECTED = 'DROPDOWN_ITEM_SELECTED';

export const modDropdown = (status) => {
  return {
    type: MOD_DROPDOWN,
    status
  }
}

export const dropDownItemSelected = (location) => {
  return {
    type: DROPDOWN_ITEM_SELECTED,
    location
  };
};
