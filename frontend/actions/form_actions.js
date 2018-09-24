export const INVALID_LOCATION = 'INVALID_LOCATION';
export const INVALID_SIZE = 'INVALID_SIZE';
export const INVALID_VEHICLE = 'INVALID_VEHICLE';
export const UPDATE_FORM_TRACKER = 'UPDATE_FORM_TRACKER';
export const RESET_SHOWFORM = 'RESET_SHOWFORM';
export const UPDATE_SHOWFORM = 'UPDATE_SHOWFORM';
export const RESET_FORM = 'RESET_FORM';
export const CLEAR_FORM = 'CLEAR_FORM'

export const updateShowForm = (formName) => {
  return {
    type: UPDATE_SHOWFORM,
    formName
  }
}

export const resetShowForm = () => {
  return {
    type: RESET_SHOWFORM
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

export const invalidSize = () => {
  return {
    type: INVALID_SIZE
  }
}

export const invalidVehicle = () => {
  return {
    type: INVALID_VEHICLE
  }
}

export const resetForm = () => {
  return {
    type: RESET_FORM
  }
}

export const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}
