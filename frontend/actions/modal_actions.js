export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (tasker_id) => {
  return {
    type: OPEN_MODAL,
    tasker_id
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}
