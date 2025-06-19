interface ToastAPI {
  success: (message: string) => void;
  error: (message: string) => void;
  loading: (message: string) => void;
  dismiss?: () => void;
}

let toastImpl: ToastAPI;

export const registerToastImpl = (impl: ToastAPI) => {
  toastImpl = impl;
};

export const showToast = {
  success: (msg: string) => toastImpl?.success(msg),
  error: (msg: string) => toastImpl?.error(msg),
  loading: (msg: string) => toastImpl?.loading(msg),
  dismiss: () => toastImpl?.dismiss?.(),
};
