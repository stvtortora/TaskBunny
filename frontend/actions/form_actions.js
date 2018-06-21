export const INVALID_LOCATION = 'INVALID_LOCATION';
export const UPDATE_FORM_TRACKER = 'UPDATE_FORM_TRACKER';
export const UPDATE_SHOWFORM = 'UPDATE_SHOWFORM';
export const RESET_FORM = 'RESET_FORM';

export const updateShowForm = (formName) => {
  return {
    type: UPDATE_SHOWFORM,
    formName
  }
}

export const updateFormTracker = (currentForm) => {
  return {
    type: UPDATE_FORM_TRACKER,
    currentForm
  }
}

export const invalidLocation = () => {
  return {
    type: INVALID_LOCATION
  }
}

export const resetForm = () => {
  return {
    type: RESET_FORM
  }
}
