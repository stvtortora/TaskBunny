export const uploadFile = () => {
  const file = this.state.imgFile;

  const formData = new FormData();
  formData.append("user[id]", this.props.userId);
  if (file) formData.append("user[image]", file);

  return this.props.uploadTaskerPhoto(formData).then(response => {
    this.props.editTaskerPhoto(response.image_url);
    if (this.toggleEditMode) {
      this.toggleEditMode();
    }
  });
}

export const updateFile = (e) => {
  e.preventDefault()

  const reader = new FileReader();
  const file = e.currentTarget.files[0];
console.log(this)
debugger
  reader.onloadend = () => {
    this.setState({ imgUrl: reader.result, imgFile: file});
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    this.setState({ imgUrl: "", imgFile: null });
  }
}
