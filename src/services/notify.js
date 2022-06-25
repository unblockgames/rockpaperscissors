const onClose = (toastContext) => {
  toastContext.setMessage(undefined);
  return;
};

const notify = async (message, toastContext) => {
  console.log(message);
  toastContext.setMessage(message);
  setTimeout(() => onClose(toastContext), 4000);
  return;
};
export default notify;
