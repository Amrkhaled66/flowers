import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-gray-800">
      {isArabic ? (
        <>
          <h1 className="text-2xl font-bold">🛡️ سياسة الخصوصية لموقع Ballora.net</h1>
          <p>تاريخ السريان: 7 يوليو 2025</p>

          <p>Ballora.net ("نحن"، "لنا"، أو "الموقع") ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك الشخصية واستخدامها وحمايتها عند استخدامك لموقعنا وخدماتنا.</p>

          <h2 className="text-xl font-semibold">1. المعلومات التي نجمعها</h2>
          <ul className="list-disc pl-6">
            <li>الاسم الكامل</li>
            <li>عنوان البريد الإلكتروني</li>
            <li>رقم الهاتف</li>
            <li>عنوان التوصيل</li>
          </ul>
          <p>نحن <strong>لا نقوم</strong> بجمع أو تخزين معلومات الدفع مباشرة.</p>

          <h2 className="text-xl font-semibold">2. كيفية استخدام معلوماتك</h2>
          <ul className="list-disc pl-6">
            <li>معالجة الطلبات وتسليمها</li>
            <li>إرسال تحديثات حول الطلبات</li>
            <li>إنشاء وإدارة حساب المستخدم</li>
            <li>تقديم خدمة العملاء</li>
          </ul>

          <h2 className="text-xl font-semibold">3. مشاركة البيانات</h2>
          <p>نشارك معلومات محدودة فقط مع:</p>
          <ul className="list-disc pl-6">
            <li>شركاء التوصيل</li>
            <li>مزودي الدفع</li>
            <li>أدوات دعم العملاء</li>
          </ul>

          <h2 className="text-xl font-semibold">4. مزودي الدفع</h2>
          <ul className="list-disc pl-6">
            <li>بطاقة قيزا (Visa Card)</li>
            <li>ابل باي (Apple Pay)</li>
            <li>تمارا (Tamara)</li>
            <li>تابي (Tabby)</li>
          </ul>

          <h2 className="text-xl font-semibold">5. ملفات تعريف الارتباط (Cookies)</h2>
          <p>نحن لا نستخدم الكوكيز لأغراض التحليل أو الإعلانات، فقط للأغراض الوظيفية.</p>

          <h2 className="text-xl font-semibold">6. حسابات المستخدمين</h2>
          <p>يتعين إنشاء حساب وتكون مسؤولاً عن سرية بيانات تسجيل الدخول.</p>

          <h2 className="text-xl font-semibold">7. الاحتفاظ بالبيانات</h2>
          <p>نحتفظ بالبيانات فقط للمدة اللازمة لتنفيذ الطلبات والوفاء بالمتطلبات القانونية.</p>

          <h2 className="text-xl font-semibold">8. حقوقك</h2>
          <ul className="list-disc pl-6">
            <li>الاطلاع على البيانات</li>
            <li>تصحيح أو حذف البيانات</li>
            <li>سحب الموافقة</li>
          </ul>
          <p>تواصل معنا عبر: <strong>info@ballora.net</strong></p>

          <h2 className="text-xl font-semibold">9. أحكام خاصة بدولة الإمارات</h2>
          <p>نحن نعمل حاليًا فقط داخل دولة الإمارات ونلتزم بالقوانين المحلية.</p>

          <h2 className="text-xl font-semibold">10. تواصل معنا</h2>
          <p>📧 <strong>البريد الإلكتروني:</strong> info@ballora.net</p>
          <p>📍 <strong>الموقع الإلكتروني:</strong> <a href="https://ballora.net" className="text-blue-600 underline">ballora.net</a></p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">🛡️ Privacy Policy for Ballora.net</h1>
          <p>Effective Date: July 7, 2025</p>

          <p>Ballora.net (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Delivery Address</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>Process and deliver your orders</li>
            <li>Communicate order updates</li>
            <li>Create and manage user accounts</li>
            <li>Provide customer support</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Data Sharing</h2>
          <p>We share limited data only with:</p>
          <ul className="list-disc pl-6">
            <li>Delivery partners</li>
            <li>Payment providers</li>
            <li>Customer service tools</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Payment Providers</h2>
          <ul className="list-disc pl-6">
            <li>Visa Card</li>
            <li>Apple Pay</li>
            <li>Tamara</li>
            <li>Tabby</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Cookies and Tracking</h2>
          <p>We do not use cookies for analytics or tracking—only for functional purposes.</p>

          <h2 className="text-xl font-semibold">6. User Accounts</h2>
          <p>Customers must create accounts and are responsible for maintaining login confidentiality.</p>

          <h2 className="text-xl font-semibold">7. Data Retention</h2>
          <p>We retain data only as needed to fulfill orders and comply with legal obligations.</p>

          <h2 className="text-xl font-semibold">8. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>Access your data</li>
            <li>Request corrections or deletions</li>
            <li>Withdraw consent</li>
          </ul>
          <p>Contact us: <strong>info@ballora.net</strong></p>

          <h2 className="text-xl font-semibold">9. UAE-Specific Terms</h2>
          <p>We currently operate only in the UAE and follow its privacy laws.</p>

          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p>📧 <strong>Email:</strong> info@ballora.net</p>
          <p>📍 <strong>Website:</strong> <a href="https://ballora.net" className="text-blue-600 underline">ballora.net</a></p>
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;