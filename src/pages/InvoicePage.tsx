import ClientInfo from "src/sections/InvoicePage/ClientInfo";
import InvoiceTable from "src/sections/InvoicePage/InvoiceTable";
import Button from "src/components/ui/Button";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import logo from "src/assets/Logo1.webp";

import Loader from "src/components/ui/Loader";
export default function InvoicePage() {
  const { t } = useTranslation("trackOrder");
  const invoiceRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
  });
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex h-dvh flex-col items-center justify-center gap-y-2 text-lg font-medium">
        <Loader className="border-main-color h-8 w-8" /> Loading Your Invoice...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="flex flex-col items-end gap-3">
        <Button
          onClick={handlePrint}
          text={t("bar.downloadInvoice")}
          className="bg-main animate w-full !py-3 text-white lg:w-[240px]"
        />
      </div>
      <div
        ref={invoiceRef}
        className="mx-auto my-6 rounded bg-white p-6 drop-shadow-xl"
        id="invoice"
      >
        <img src={logo} alt="Ballora-logo" height="150" width="150" />
        <ClientInfo />
        <InvoiceTable />
      </div>
    </div>
  );
}
