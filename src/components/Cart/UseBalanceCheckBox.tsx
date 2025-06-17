import { useTranslation, Trans } from "react-i18next";
import priceFormatter from "src/utils/priceFormatter";
import { useOrder } from "src/context/orderCtx";
import { useCart } from "src/context/user/cartCtx";
import { useAuth } from "src/context/authCtx";
const UseBalanceCheckBox = () => {
    const { t } = useTranslation("sharedCart");
    const { updateOrder, order } = useOrder();
    const { setIsBalanceUsed } = useCart();
    const { authData: { user } } = useAuth()

    const balance = Number(user?.balance)
    if (balance <= 0) return null;

    return (
        <button
            onClick={() => {
                updateOrder({ useBalance: !order.useBalance });
                setIsBalanceUsed(!order.useBalance);
            }}
            className={`bg-main-50 hover:border-main border-stroke animate w-full rounded-xl border p-3 text-start `}
        >
            <input
                checked={order.useBalance}
                type="checkbox"
                className="accent-text-main me-2 rounded-xl opacity-100"
            />
            <Trans
                t={t}
                values={{ balance: priceFormatter(balance) }}
                components={{ strong: <strong /> }}
                i18nKey="useBalance"
            />
        </button>
    );
};

export default UseBalanceCheckBox;
