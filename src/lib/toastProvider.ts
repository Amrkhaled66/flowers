import toast from "react-hot-toast";

export const reactHotToastImpl = {
  success: (msg: string) =>
    toast(msg, {
      style: {
        background: "oklch(69.6% 0.17 162.48)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "10px",
        padding: "10px 23px",
      },
    }),
  error: (msg: string) =>
    toast(msg, {
      style: {
        background: "#f86886",
        fontWeight: "bold",
        borderRadius: "10px",
        padding: "10px 23px",
      },
    }),
  loading: (msg: string) => toast.loading(msg),
  dismiss: () => toast.dismiss(),
};
