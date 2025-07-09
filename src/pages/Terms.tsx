import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-gray-800">
      {isArabic ? (
        <>
          <h1 className="text-2xl font-bold">الشروط والأحكام – Ballora</h1>
          <p>آخر تحديث: 8-7-2025</p>

          <p>مرحبًا بك في Ballora، متجر الهدايا والبالونات المصمّمة بشكل باقات ورد. يرجى قراءة الشروط والأحكام بعناية قبل استخدام خدماتنا.</p>

          <h2 className="text-xl font-semibold">1. الموافقة على الشروط</h2>
          <p>باستخدامك موقعنا أو تطبيقنا، فإنك توافق تلقائيًا على جميع الشروط والأحكام الموضّحة أدناه.</p>

          <h2 className="text-xl font-semibold">2. الخدمات المقدمة</h2>
          <ul className="list-disc pl-6">
            <li>باقات بالونات مصممة يدويًا بشكل ورد</li>
            <li>توصيل داخل الإمارات</li>
            <li>إمكانية تخصيص الهدايا حسب المناسبة</li>
          </ul>

          <h2 className="text-xl font-semibold">3. طلب المنتجات</h2>
          <ul className="list-disc pl-6">
            <li>الطلب عبر الموقع أو التطبيق فقط</li>
            <li>التأكيد بعد الدفع</li>
            <li>العميل مسؤول عن دقة بيانات التوصيل</li>
          </ul>

          <h2 className="text-xl font-semibold">4. التوصيل</h2>
          <ul className="list-disc pl-6">
            <li>داخل دولة الإمارات فقط</li>
            <li>تحديد توقيت التوصيل عند الطلب</li>
            <li>إعادة التوصيل برسوم إضافية عند غياب العميل</li>
          </ul>

          <h2 className="text-xl font-semibold">5. الإلغاء والتعديلات</h2>
          <ul className="list-disc pl-6">
            <li>لا يمكن الإلغاء بعد الدفع</li>
            <li>لا يمكن التعديل بعد تجهيز الباقة</li>
            <li>في حال الخطأ، يتم التعويض أو الإعادة</li>
          </ul>

          <h2 className="text-xl font-semibold">6. المنتجات المصممة حسب الطلب</h2>
          <p>قد تختلف الألوان أو الترتيب قليلًا حسب توفر المواد. الصور لأغراض توضيحية فقط.</p>

          <h2 className="text-xl font-semibold">7. الأسعار والدفع</h2>
          <p>الأسعار تشمل كل شيء، ويتم الدفع عبر بوابات آمنة. الطلب لا يُعتبر مؤكدًا إلا بعد الدفع الكامل.</p>

          <h2 className="text-xl font-semibold">8. الاسترجاع والاستبدال</h2>
          <p>لا استرجاع للمنتجات المصممة خصيصًا. الاستبدال خلال 24 ساعة من الاستلام مع تقديم صور للمنتج المتضرر.</p>

          <h2 className="text-xl font-semibold">9. الاستخدام غير القانوني</h2>
          <p>يُمنع الاستخدام المخالف، ويحق لنا حظر المستخدم دون إشعار.</p>

          <h2 className="text-xl font-semibold">10. حقوق الملكية</h2>
          <p>جميع المحتويات ملك لـ Ballora ويُمنع النسخ أو الاستخدام دون إذن.</p>

          <h2 className="text-xl font-semibold">11. منتجات العطور والشوكولاتة والكيك</h2>
          <p>نقدم منتجات إضافية من شركاء موثوقين. المسؤولية على المورد. يرجى التواصل خلال 24 ساعة في حال وجود ملاحظات.</p>

          <h2 className="text-xl font-semibold">12. التعديلات على الشروط</h2>
          <p>نحتفظ بالحق في تعديل الشروط، وسيتم إشعار العملاء عبر البريد أو الإشعارات.</p>

          <h2 className="text-xl font-semibold">13. التواصل والدعم</h2>
          <p>📩 Email: support@ballora.net</p>
          <p>📱 Instagram: @ballora.ae</p>
          <p>📞 رقم التواصل: [أضف رقم واتساب أو الدعم]</p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">📜 Terms & Conditions – Ballora</h1>
          <p>Last Updated: 8-7-2025</p>

          <p>Welcome to Ballora, the gift and balloon store specializing in floral-inspired balloon arrangements. Please read these terms and conditions carefully before using our services.</p>

          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>By using our website or app, you automatically agree to all the terms and conditions outlined below.</p>

          <h2 className="text-xl font-semibold">2. Services Provided</h2>
          <ul className="list-disc pl-6">
            <li>Handmade balloon bouquets designed to look like flowers</li>
            <li>Delivery within the UAE</li>
            <li>Gift customization based on occasion</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Placing Orders</h2>
          <ul className="list-disc pl-6">
            <li>Orders can only be placed through the website or mobile app</li>
            <li>Orders are confirmed upon payment</li>
            <li>Customers must provide accurate delivery information</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Delivery</h2>
          <ul className="list-disc pl-6">
            <li>Available within the UAE only</li>
            <li>Delivery time is selected at checkout</li>
            <li>Redelivery fee applies if customer is unavailable</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Cancellation and Modifications</h2>
          <ul className="list-disc pl-6">
            <li>No cancellation after payment</li>
            <li>No modifications once bouquet prep starts</li>
            <li>Errors on our part will be resolved via redelivery or refund</li>
          </ul>

          <h2 className="text-xl font-semibold">6. Custom-Designed Products</h2>
          <p>Handmade items may vary slightly. Images are illustrative only.</p>

          <h2 className="text-xl font-semibold">7. Pricing and Payment</h2>
          <p>Prices include all components. Secure payment required for confirmation.</p>

          <h2 className="text-xl font-semibold">8. Returns and Replacements</h2>
          <p>No returns for custom products. Replacements within 24 hours of delivery with photo proof.</p>

          <h2 className="text-xl font-semibold">9. Prohibited Use</h2>
          <p>Illegal use is prohibited. We reserve the right to ban violators.</p>

          <h2 className="text-xl font-semibold">10. Intellectual Property</h2>
          <p>All content is owned by Ballora. No use or copying without written permission.</p>

          <h2 className="text-xl font-semibold">11. Perfume, Chocolate & Cake (Third-Party Partnerships)</h2>
          <p>Offered via trusted partners. Quality and responsibility lie with the suppliers. Report issues within 24 hours.</p>

          <h2 className="text-xl font-semibold">12. Amendments to Terms</h2>
          <p>We may update these terms and notify customers via email or in-app notice.</p>

          <h2 className="text-xl font-semibold">13. Contact & Support</h2>
          <p>📩 Email: support@ballora.net</p>
          <p>📱 Instagram: @ballora.ae</p>
          <p>📞 Contact Number: [Add WhatsApp or support number]</p>
        </>
      )}
    </div>
  );
};

export default TermsConditions;