export const useConfirm = (message, onConfirm, onCancel) => {
  const confirmAction = () => {
    const confirmYes = window.confirm(message);
    if (confirmYes) {
      if (!onConfirm && typeof onConfirm !== "function") return;
      onConfirm();
    } else {
      if (!onCancel && typeof onCancel !== "function") return;
      onCancel();
    }
  };
  return confirmAction;
};
