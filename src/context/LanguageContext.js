import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'appLanguage';

const translations = {
  en: {
    available: 'Available',
    availableForWork: 'Available for work',
    offline: 'Offline',
    goOnline: 'Go Online',
    goOffline: 'Go Offline',
    totalEarnings: 'Total Earnings',
    viewDetails: 'View details',
    yourVehicle: 'Your Vehicle',
    rideRequests: 'Ride Requests',
    requestHash: 'Request #',
    distance: 'Distance',
    fare: 'Fare',
    decline: 'Decline',
    accept: 'Accept',
    noRideRequests: 'No ride requests',
    turnOnAvailability: 'Turn on availability to receive requests',
    pendingPayments: 'Pending Payments',
    waitingForConfirmation: 'Waiting for confirmation',
    paymentReceived: 'Payment Received',
    earningsHistory: 'Earnings History',
    withdrawEarnings: 'Withdraw Earnings',
    profileSettings: 'Profile Settings',
    logout: 'Logout',
    language: 'Language',
    english: 'English',
    arabic: 'Arabic',
    // HomeScreen
    whereTo: 'Where to?',
    currentLocation: 'Current location',
    whereDoYouWantToGo: 'Where do you want to go?',
    youAreHere: 'You are here',
    destination: 'Destination',
    go: 'GO',
    youreOffline: "You're offline",
    availableDrivers: 'Available Drivers',
    noDriversNearby: 'No drivers available nearby.',
    rideDetails: 'Ride Details',
    eta: 'ETA',
    min: 'min',
    confirmRide: 'Confirm Ride',
    paymentInstructions: 'Payment Instructions',
    bankTransferRequired: 'Bank Transfer Required',
    transferTo: 'Transfer to:',
    bank: 'Bank:',
    accountName: 'Account Name:',
    accountNumber: 'Account Number:',
    bankNameNA: 'Bank name not available',
    accountNameNA: 'Account name not available',
    accountNumberNA: 'Account number not available',
    pleaseConfirmWithDriver:
      'Please complete the bank transfer and confirm with your driver.',
    iHaveTransferred: 'I have transferred the money',
    // ProfileScreen
    email: 'Email',
    username: 'Username',
    enterUsername: 'Enter username',
    saveChanges: 'Save Changes',
    logoutBtn: 'Log out',
  },
  ar: {
    available: 'متاح',
    availableForWork: 'متاح للعمل',
    offline: 'غير متصل',
    goOnline: 'اتصال',
    goOffline: 'غير متصل',
    totalEarnings: 'إجمالي الأرباح',
    viewDetails: 'عرض التفاصيل',
    yourVehicle: 'مركبتك',
    rideRequests: 'طلبات الرحلات',
    requestHash: 'طلب رقم',
    distance: 'المسافة',
    fare: 'الأجرة',
    decline: 'رفض',
    accept: 'قبول',
    noRideRequests: 'لا توجد طلبات رحلات',
    turnOnAvailability: 'قم بتفعيل الحالة لتلقي الطلبات',
    pendingPayments: 'مدفوعات معلقة',
    waitingForConfirmation: 'بانتظار التأكيد',
    paymentReceived: 'تم استلام الدفعة',
    earningsHistory: 'سجل الأرباح',
    withdrawEarnings: 'سحب الأرباح',
    profileSettings: 'إعدادات الملف الشخصي',
    logout: 'تسجيل الخروج',
    language: 'اللغة',
    english: 'الإنجليزية',
    arabic: 'العربية',
    // HomeScreen
    whereTo: 'إلى أين؟',
    currentLocation: 'الموقع الحالي',
    whereDoYouWantToGo: 'إلى أين تريد الذهاب؟',
    youAreHere: 'أنت هنا',
    destination: 'الوجهة',
    go: 'انطلق',
    youreOffline: 'أنت غير متصل',
    availableDrivers: 'السائقون المتاحون',
    noDriversNearby: 'لا يوجد سائقون قريبون.',
    rideDetails: 'تفاصيل الرحلة',
    eta: 'الوقت المتوقع',
    min: 'دقيقة',
    confirmRide: 'تأكيد الرحلة',
    paymentInstructions: 'تعليمات الدفع',
    bankTransferRequired: 'مطلوب تحويل بنكي',
    transferTo: 'حوّل إلى:',
    bank: 'البنك:',
    accountName: 'اسم الحساب:',
    accountNumber: 'رقم الحساب:',
    bankNameNA: 'اسم البنك غير متاح',
    accountNameNA: 'اسم الحساب غير متاح',
    accountNumberNA: 'رقم الحساب غير متاح',
    pleaseConfirmWithDriver: 'يرجى إتمام التحويل البنكي والتأكيد مع السائق.',
    iHaveTransferred: 'لقد قمت بالتحويل',
    // ProfileScreen
    email: 'البريد الإلكتروني',
    username: 'اسم المستخدم',
    enterUsername: 'أدخل اسم المستخدم',
    saveChanges: 'حفظ التغييرات',
    logoutBtn: 'تسجيل الخروج',
  },
};

const LanguageContext = createContext({
  language: 'en',
  setLanguage: _lang => {},
  t: key => key,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setLanguageState(stored);
      } catch {}
    })();
  }, []);

  const setLanguage = async lang => {
    setLanguageState(lang);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  };

  const t = useMemo(() => {
    const dict = translations[language] || translations.en;
    return key => dict[key] ?? key;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
