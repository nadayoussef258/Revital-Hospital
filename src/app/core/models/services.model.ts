// models/services.model.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  items?: string[];
  subSections?: SubSection[];
}

export interface SubSection {
  title: string;
  items: string[];
}

export interface Department {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: string;
  description: string;
  heroImage: string;
  services: Service[];
  specialties?: string[];
}

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: 'dental',
    nameAr: 'طب الأسنان',
    nameEn: 'Dental Care',
    icon: 'bi-heart-pulse',
    description: 'نقدم رعاية أسنان متكاملة تجمع بين العلاج والتجميل بأحدث التقنيات',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200',
    services: [
      {
        id: 'consultations',
        title: 'الاستشارات والفحوصات',
        description: 'فحوصات شاملة وتشخيص دقيق لصحة الفم والأسنان',
        items: ['الاستشارات الطبية', 'الأشعة الرقمية المتقدمة', 'التشخيص الشامل']
      },
      {
        id: 'preventive',
        title: 'العناية الوقائية',
        description: 'برامج وقائية للحفاظ على صحة أسنانك',
        items: ['تطبيق الفلورايد', 'سد الشقوق والحفر', 'إرشادات العناية بنظافة الفم', 'تنظيف وتلميع الأسنان']
      },
      {
        id: 'restorative',
        title: 'العلاجات الترميمية',
        description: 'استعادة وظيفة ومظهر الأسنان الطبيعي',
        items: ['الحشوات الترميمية', 'التيجان والجسور', 'بناء الدعامة (Post & Core)', 'علاج جذور الأسنان']
      },
      {
        id: 'cosmetic',
        title: 'طب الأسنان التجميلي',
        description: 'ابتسامة مشرقة وثقة أكبر',
        items: ['القشور التجميلية (Veneers)', 'إن سيرام', 'زركون', 'بورسلان']
      },
      {
        id: 'surgery',
        title: 'الجراحة والزراعة',
        description: 'حلول جراحية متقدمة',
        items: ['زراعة الأسنان الأساسية', 'خلع الأسنان (العادي والمعقد)']
      },
      {
        id: 'gum',
        title: 'علاج اللثة',
        description: 'عناية متخصصة بصحة اللثة',
        items: ['علاج أمراض اللثة', 'تنظيف اللثة المتخصص']
      }
    ]
  },
  {
    id: 'family-medicine',
    nameAr: 'طب الأسرة',
    nameEn: 'Family Medicine',
    icon: 'bi-people',
    description: 'رعاية صحية شاملة لجميع أفراد الأسرة من جميع الأعمار',
    heroImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200',
    services: [
      {
        id: 'pediatric-care',
        title: 'رعاية الأطفال والمراهقين',
        description: 'عناية طبية متخصصة للأطفال',
        items: ['أمراض الطفولة', 'إصابات الأطفال', 'متابعة النمو']
      },
      {
        id: 'adult-care',
        title: 'رعاية البالغين',
        description: 'خدمات طبية شاملة للبالغين',
        items: ['الأمراض الحادة والمزمنة', 'الإصابات', 'المتابعة الدورية']
      },
      {
        id: 'elderly-care',
        title: 'رعاية كبار السن',
        description: 'عناية خاصة بالمسنين',
        items: ['الأمراض المزمنة', 'متابعة الحالات المتعددة']
      },
      {
        id: 'emergency',
        title: 'الحالات الطارئة',
        description: 'تعامل سريع مع الحالات العاجلة',
        items: ['معالجة الحالات الطارئة', 'إدارة التسمم الحاد', 'علاج الحروق']
      },
      {
        id: 'preventive-family',
        title: 'الرعاية الوقائية',
        description: 'الوقاية خير من العلاج',
        items: ['التطعيمات واللقاحات', 'الفحوصات الشاملة', 'برامج تعزيز الصحة']
      },
      {
        id: 'other-services',
        title: 'خدمات إضافية',
        description: 'خدمات طبية متنوعة',
        items: ['الحقن الموضعي', 'تضميد الشدات العضلية', 'التحويل والتنسيق الطبي']
      }
    ]
  },
  {
    id: 'internal-medicine',
    nameAr: 'الطب الباطني',
    nameEn: 'Internal Medicine',
    icon: 'bi-activity',
    description: 'تشخيص وعلاج شامل للأمراض الباطنية والحالات المعقدة',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200',
    services: [
      {
        id: 'chronic-diseases',
        title: 'إدارة الأمراض المزمنة',
        description: 'متابعة متخصصة للحالات المزمنة',
        items: ['السكري', 'ارتفاع ضغط الدم', 'اضطرابات الدهون', 'أمراض الغدد الصماء']
      },
      {
        id: 'digestive',
        title: 'أمراض الجهاز الهضمي',
        description: 'تشخيص وعلاج اضطرابات الجهاز الهضمي',
        items: ['أمراض المعدة والأمعاء', 'اضطرابات الكبد', 'مشاكل الهضم']
      },
      {
        id: 'infectious',
        title: 'الأمراض المعدية والمناعية',
        description: 'علاج العدوى والاضطرابات المناعية',
        items: ['الأمراض المعدية', 'الاضطرابات المناعية', 'لقاحات السفر']
      },
      {
        id: 'wellness',
        title: 'برامج الصحة والعافية',
        description: 'فحوصات شاملة ورعاية وقائية',
        items: ['الفحوصات الشاملة', 'برامج العافية', 'الفحوصات الوقائية']
      },
      {
        id: 'nutrition-disorders',
        title: 'اضطرابات التغذية',
        description: 'تشخيص وعلاج مشاكل التغذية',
        items: ['نقص التغذية', 'السمنة', 'اضطرابات الأيض']
      },
      {
        id: 'pre-surgery',
        title: 'العيادة التحضيرية',
        description: 'تحضير المرضى قبل العمليات',
        items: ['التقييم الطبي قبل الجراحة', 'الفحوصات المطلوبة']
      }
    ]
  },
  {
    id: 'orthopedics',
    nameAr: 'جراحة العظام والطب الرياضي',
    nameEn: 'Orthopedics & Sports Medicine',
    icon: 'bi-bandaid',
    description: 'رعاية متكاملة للجهاز العضلي الهيكلي والإصابات الرياضية',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    specialties: [
      'جراحة العظام والكسور',
      'عظام الأطفال',
      'جراحة القدم',
      'الطب الرياضي',
      'العلاج الطبيعي',
      'إطالة الأطراف وإعادة بنائها',
      'الطب التجديدي',
      'عيادة الألم'
    ],
    services: [
      {
        id: 'surgery',
        title: 'الجراحة التخصصية',
        description: 'عمليات متقدمة بأحدث التقنيات',
        items: ['جراحة العظام والكسور', 'عظام الأطفال', 'جراحة القدم']
      },
      {
        id: 'sports',
        title: 'الطب الرياضي',
        description: 'علاج الإصابات الرياضية',
        items: ['تشخيص الإصابات الرياضية', 'برامج التأهيل الرياضي', 'العودة للملاعب']
      },
      {
        id: 'rehabilitation',
        title: 'التأهيل والعلاج',
        description: 'برامج تأهيل متكاملة',
        items: ['برامج تأهيل ما بعد العمليات', 'العلاج الطبيعي المتخصص']
      },
      {
        id: 'advanced',
        title: 'العلاجات المتقدمة',
        description: 'تقنيات علاجية حديثة',
        items: ['الطب التجديدي', 'إطالة الأطراف', 'عيادة الألم']
      },
      {
        id: 'consultation',
        title: 'الاستشارات الطبية',
        description: 'رأي طبي متخصص',
        items: ['خدمة الرأي الطبي الثاني', 'التقييم الشامل']
      }
    ]
  },
  {
    id: 'pmr',
    nameAr: 'الطب الطبيعي والتأهيل',
    nameEn: 'Physical Medicine & Rehabilitation',
    icon: 'bi-heart-pulse-fill',
    description: 'استعادة الوظائف وتحسين جودة الحياة من خلال برامج تأهيلية متخصصة',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
    services: [
      {
        id: 'conditions',
        title: 'الحالات المعالجة',
        description: 'نطاق واسع من الحالات التأهيلية',
        items: [
          'إصابات الدماغ',
          'السكتات الدماغية',
          'إصابات العمود الفقري',
          'الآلام المزمنة',
          'الإصابات الرياضية',
          'مشاكل المثانة العصبية',
          'التشنجات العضلية'
        ]
      },
      {
        id: 'services-pmr',
        title: 'خدماتنا التأهيلية',
        description: 'برامج شاملة لإعادة التأهيل',
        items: [
          'تدريب مهارات العناية الذاتية',
          'إدارة الألم المتقدمة',
          'الرعاية التغذوية المتخصصة',
          'تدريب الحركة والتنقل',
          'العناية التنفسية',
          'الدعم النفسي',
          'تطوير المهارات المعرفية والتواصلية',
          'التدريب المهني'
        ]
      },
      {
        id: 'family-support',
        title: 'دعم الأسرة',
        description: 'إشراك العائلة في رحلة التعافي',
        items: [
          'التدريب والتعليم للأسرة',
          'دعم الأسرة',
          'التخطيط للخروج',
          'المتابعة المنزلية'
        ]
      }
    ]
  },
  {
    id: 'pediatrics',
    nameAr: 'طب الأطفال',
    nameEn: 'Pediatrics',
    icon: 'bi-balloon-heart',
    description: 'رعاية صحية متكاملة للأطفال من الولادة حتى المراهقة',
    heroImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200',
    services: [
      {
        id: 'preventive-care',
        title: 'الرعاية الوقائية',
        description: 'حماية صحة طفلك منذ البداية',
        items: ['التطعيمات الأساسية', 'التقييمات النمائية', 'الفحوصات الدورية']
      },
      {
        id: 'common-diseases',
        title: 'الأمراض الشائعة',
        description: 'علاج أمراض الطفولة',
        items: [
          'أمراض الجهاز التنفسي',
          'أمراض الجهاز الهضمي',
          'الربو والحساسية',
          'فقر الدم'
        ]
      },
      {
        id: 'growth-disorders',
        title: 'اضطرابات النمو والتطور',
        description: 'متابعة نمو الطفل',
        items: [
          'تأخر النمو',
          'السمنة',
          'اضطرابات الغدة الدرقية',
          'نقص فيتامين د'
        ]
      }
    ]
  },
  {
    id: 'psychiatry',
    nameAr: 'الطب النفسي',
    nameEn: 'Psychiatry',
    icon: 'bi-emoji-smile',
    description: 'رعاية نفسية شاملة في بيئة آمنة وداعمة',
    heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200',
    services: [
      {
        id: 'age-groups',
        title: 'خدماتنا حسب الفئة العمرية',
        description: 'رعاية نفسية متخصصة لكل مرحلة عمرية',
        items: [
          'طب نفس الأطفال والمراهقين',
          'الطب النفسي للبالغين',
          'الطب النفسي لكبار السن',
          'الطب النفسي للمرأة (الحمل وما بعد الولادة)'
        ]
      },
      {
        id: 'psychological-services',
        title: 'الخدمات النفسية',
        description: 'علاج نفسي فردي وجماعي',
        items: [
          'علاج الاكتئاب والقلق',
          'اضطرابات ما بعد الصدمة',
          'اضطراب فرط الحركة وتشتت الانتباه',
          'اضطراب طيف التوحد',
          'صعوبات التعلم'
        ]
      },
      {
        id: 'assessments',
        title: 'التقييمات النفسية',
        description: 'تقييمات شاملة ودقيقة',
        items: [
          'المقابلات السريرية',
          'الاختبارات المعيارية',
          'اختبارات الذكاء (IQ)',
          'التقييمات النفسية التربوية',
          'تقارير تفصيلية'
        ]
      }
    ]
  },
  {
    id: 'prenatal-postnatal',
    nameAr: 'تأهيل ما قبل وبعد الولادة',
    nameEn: 'Prenatal & Postnatal Rehabilitation',
    icon: 'bi-person-heart',
    description: 'برامج تأهيلية متخصصة للأمهات قبل وبعد الولادة',
    heroImage: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200',
    services: [
      {
        id: 'prenatal',
        title: 'العلاج الطبيعي قبل الحمل',
        description: 'تحضير الجسم للحمل والولادة',
        items: ['تقوية عضلات الحوض', 'تحسين اللياقة البدنية', 'تمارين التنفس']
      },
      {
        id: 'postnatal',
        title: 'العلاج الطبيعي بعد الولادة',
        description: 'استعادة اللياقة بعد الولادة',
        items: ['تأهيل عضلات البطن', 'علاج انفصال العضلات', 'استعادة القوة']
      },
      {
        id: 'pelvic',
        title: 'تأهيل عضلات الحوض',
        description: 'تقوية وعلاج عضلات قاع الحوض',
        items: ['علاج السلس البولي', 'تقوية عضلات الحوض', 'تمارين كيجل المتقدمة']
      },
      {
        id: 'posture',
        title: 'تصحيح الوضعية',
        description: 'علاج مشاكل الوضعية بعد الحمل',
        items: ['تصحيح وضعية العمود الفقري', 'تمارين تقوية الجذع', 'علاج آلام الظهر']
      }
    ]
  },
  {
    id: 'specialized-programs',
    nameAr: 'البرامج التأهيلية المتخصصة',
    nameEn: 'Specialized Rehabilitation Programs',
    icon: 'bi-clipboard2-pulse',
    description: 'برامج تأهيلية متقدمة باستخدام أحدث التقنيات',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    services: [
      {
        id: 'lymphedema',
        title: 'برنامج علاج الوذمة اللمفية',
        description: 'علاج متخصص للتورمات اللمفية',
        items: ['التصريف اللمفاوي اليدوي', 'العلاج بالضغط', 'التمارين العلاجية']
      },
      {
        id: 'incontinence',
        title: 'برنامج علاج سلس البول',
        description: 'برنامج شامل لعلاج سلس البول',
        items: ['العلاج المغناطيسي', 'تمارين قاع الحوض', 'العلاج السلوكي']
      },
      {
        id: 'fall-prevention',
        title: 'برنامج الوقاية من السقوط',
        description: 'تقليل مخاطر السقوط لدى كبار السن',
        items: ['تقييم التوازن', 'تمارين التقوية', 'تدريب المشي']
      },
      {
        id: 'spinal',
        title: 'تأهيل العمود الفقري',
        description: 'برامج متخصصة لعلاج آلام الظهر',
        items: ['العلاج اليدوي', 'تمارين التثبيت', 'تصحيح الوضعية']
      },
      {
        id: 'cardiopulmonary',
        title: 'التأهيل القلبي الرئوي',
        description: 'تحسين وظائف القلب والرئتين',
        items: ['تمارين القلب', 'التدريب التنفسي', 'برامج التحمل']
      }
    ]
  },
  {
    id: 'advanced-therapies',
    nameAr: 'العلاجات المتقدمة',
    nameEn: 'Advanced Therapies',
    icon: 'bi-lightning-charge',
    description: 'تقنيات علاجية حديثة ومتطورة',
    heroImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200',
    services: [
      {
        id: 'hydrotherapy',
        title: 'العلاج المائي',
        description: 'علاج بخصائص الماء الطبيعية',
        items: ['تقليل الضغط على المفاصل', 'تحسين التوازن', 'تقوية العضلات', 'تخفيف الألم']
      },
      {
        id: 'gait-training',
        title: 'تدريب وتحليل المشي',
        description: 'تحسين القدرة على المشي',
        items: ['تحليل المشية', 'تمارين التوازن', 'تقوية العضلات', 'الوقاية من السقوط']
      },
      {
        id: 'dry-needling',
        title: 'العلاج بالإبر الجافة',
        description: 'تخفيف الألم وتحسين الحركة',
        items: ['علاج آلام الظهر والرقبة', 'الصداع', 'التهاب الأوتار', 'آلام المفاصل']
      },
      {
        id: 'cryotherapy',
        title: 'العلاج بالتبريد الكامل',
        description: 'علاج بدرجات حرارة منخفضة',
        items: ['تقليل الألم والالتهاب', 'تحسين الأداء الرياضي', 'تعزيز الأيض', 'تحسين النوم']
      },
      {
        id: 'smart-balance',
        title: 'برنامج التوازن الذكي',
        description: 'تقييم وتحسين التوازن',
        items: ['تقييم مخاطر السقوط', 'برامج تدريب مخصصة', 'ألعاب تفاعلية', 'تقارير تقدم']
      },
      {
        id: 'robotic',
        title: 'التقييم الحركي الروبوتي',
        description: 'تدريب متقدم بالروبوتات',
        items: ['التدريب بالروبوتات', 'الواقع الافتراضي', 'التحفيز التفاعلي', 'تحسين الاستقلالية']
      }
    ]
  },
  {
    id: 'therapy-services',
    nameAr: 'خدمات العلاج التأهيلي',
    nameEn: 'Therapy Services',
    icon: 'bi-heart-pulse',
    description: 'فريق متكامل من المعالجين المتخصصين',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
    services: [
      {
        id: 'physiotherapy',
        title: 'العلاج الطبيعي',
        description: 'استعادة الحركة والوظائف الطبيعية',
        items: [
          'تأهيل الإصابات الرياضية',
          'علاج أمراض الجهاز العصبي',
          'التأهيل القلبي الرئوي',
          'صحة المرأة',
          'علاج الأطفال'
        ]
      },
      {
        id: 'occupational',
        title: 'العلاج الوظيفي',
        description: 'تحسين الأداء في الأنشطة اليومية',
        items: [
          'تمارين علاجية متخصصة',
          'تدريب التوازن والتناسق',
          'تصنيع الجبائر الطبية',
          'التدريب المعرفي',
          'تأهيل الأطراف العلوية'
        ]
      },
      {
        id: 'speech',
        title: 'علاج النطق واللغة',
        description: 'تحسين التواصل والبلع',
        items: [
          'اضطرابات النطق واللغة',
          'علاج التأتأة',
          'اضطرابات الصوت والرنين',
          'علاج البلع والتغذية',
          'الإدراك والتواصل'
        ]
      },
      {
        id: 'respiratory',
        title: 'العلاج التنفسي',
        description: 'تحسين وظائف الجهاز التنفسي',
        items: [
          'اختبارات وظائف الرئة',
          'العلاج بالأكسجين',
          'إدارة أجهزة التنفس',
          'التأهيل الرئوي',
          'تمارين التنفس'
        ]
      }
    ]
  },
  {
    id: 'nutrition',
    nameAr: 'خدمات التغذية العلاجية',
    nameEn: 'Nutrition Services',
    icon: 'bi-heart-pulse-fill',
    description: 'برامج غذائية متخصصة لصحة أفضل',
    heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200',
    services: [
      {
        id: 'clinical-nutrition',
        title: 'التغذية العلاجية',
        description: 'خطط غذائية للحالات المرضية',
        items: [
          'إدارة السكري',
          'ضبط ضغط الدم',
          'علاج اضطرابات الدهون',
          'دعم الحالات المزمنة'
        ]
      },
      {
        id: 'weight-management',
        title: 'إدارة الوزن',
        description: 'برامج صحية لإنقاص أو زيادة الوزن',
        items: [
          'تقييم التغذية الشامل',
          'برامج إنقاص الوزن',
          'برامج زيادة الوزن الصحي',
          'المتابعة الدورية'
        ]
      },
      {
        id: 'wellness',
        title: 'برامج العافية',
        description: 'تحسين الصحة العامة',
        items: [
          'تعزيز المناعة',
          'الوقاية من الأمراض',
          'برامج الطاقة والحيوية',
          'التغذية الرياضية'
        ]
      },
      {
        id: 'special-diets',
        title: 'الأنظمة الغذائية الخاصة',
        description: 'أنظمة غذائية متخصصة',
        items: [
          'الأنظمة النباتية',
          'الحساسية الغذائية',
          'الأنظمة الطبية الخاصة',
          'التغذية الوريدية والأنبوبية'
        ]
      }
    ]
  }
];