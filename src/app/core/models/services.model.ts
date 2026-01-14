// models/services.model.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
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
    image?: string;
  icon?: string;
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
    image: 'assets/teeth-icon.png',
    description: 'نقدم رعاية أسنان متكاملة تجمع بين العلاج والتجميل بأحدث التقنيات',
    heroImage: 'assets/dentalCover.jpeg',
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
        image:'assets/teeth1.jpg',
        description: 'برامج وقائية للحفاظ على صحة أسنانك',
        items: ['تطبيق الفلورايد', 'سد الشقوق والحفر', 'إرشادات العناية بنظافة الفم', 'تنظيف وتلميع الأسنان']
      },
      {
        id: 'restorative',
        title: 'العلاجات الترميمية',
        image:'assets/teeth2.jpg',
        description: 'استعادة وظيفة ومظهر الأسنان الطبيعي',
        items: ['الحشوات الترميمية', 'التيجان والجسور', 'بناء الدعامة (Post & Core)', 'علاج جذور الأسنان']
      },
      {
        id: 'cosmetic',
        title: 'طب الأسنان التجميلي',
                image:'assets/teeth3.jpg',
        description: 'ابتسامة مشرقة وثقة أكبر',
        items: ['القشور التجميلية (Veneers)', 'إن سيرام', 'زركون', 'بورسلان']
      },
      {
        id: 'surgery',
        title: 'الجراحة والزراعة',
                image:'assets/teeth4.jpg',
        description: 'حلول جراحية متقدمة',
        items: ['زراعة الأسنان الأساسية', 'خلع الأسنان (العادي والمعقد)']
      },
      {
        id: 'gum',
        title: 'علاج اللثة',
                        image:'assets/teeth5.jpg',
        description: 'عناية متخصصة بصحة اللثة',
        items: ['علاج أمراض اللثة', 'تنظيف اللثة المتخصص']
      }
    ]
  },
  {
    id: 'family-medicine',
    nameAr: 'طب الأسرة',
    nameEn: 'Family Medicine',
    image: 'assets/family-icon.png',
    description: 'رعاية صحية شاملة لجميع أفراد الأسرة من جميع الأعمار',
    heroImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200',
    services: [
      {
        id: 'pediatric-care',
        title: 'رعاية الأطفال والمراهقين',
        image:'',
        description: 'عناية طبية متخصصة للأطفال',
        items: ['أمراض الطفولة', 'إصابات الأطفال', 'متابعة النمو']
      },
      {
        id: 'adult-care',
        title: 'رعاية البالغين',
        image:'assets/adults-care.jpg',
        description: 'خدمات طبية شاملة للبالغين',
        items: ['الأمراض الحادة والمزمنة', 'الإصابات', 'المتابعة الدورية']
      },
      {
        id: 'elderly-care',
        title: 'رعاية كبار السن',
        image:'assets/high-edge-care.jpg',
        description: 'عناية خاصة بالمسنين',
        items: ['الأمراض المزمنة', 'متابعة الحالات المتعددة']
      },
      {
        id: 'emergency',
        title: 'الحالات الطارئة',
        image:'assets/emergency-cases.jpg',
        description: 'تعامل سريع مع الحالات العاجلة',
        items: ['معالجة الحالات الطارئة', 'إدارة التسمم الحاد', 'علاج الحروق']
      },
      {
        id: 'preventive-family',
        title: 'الرعاية الوقائية',
        image:'assets/doctor-patient.jpg',
        description: 'الوقاية خير من العلاج',
        items: ['التطعيمات واللقاحات', 'الفحوصات الشاملة', 'برامج تعزيز الصحة']
      },
      {
        id: 'other-services',
        title: 'خدمات إضافية',
        image:'assets/additional-services.jpg',
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
        image:'assets/internal1.jpg',
        description: 'متابعة متخصصة للحالات المزمنة',
        items: ['السكري', 'ارتفاع ضغط الدم', 'اضطرابات الدهون', 'أمراض الغدد الصماء']
      },
      {
        id: 'digestive',
        title: 'أمراض الجهاز الهضمي',
        image:'assets/internal2.jpg',
        description: 'تشخيص وعلاج اضطرابات الجهاز الهضمي',
        items: ['أمراض المعدة والأمعاء', 'اضطرابات الكبد', 'مشاكل الهضم']
      },
      {
        id: 'infectious',
        title: 'الأمراض المعدية والمناعية',
        image:'assets/internal3.jpg',
        description: 'علاج العدوى والاضطرابات المناعية',
        items: ['الأمراض المعدية', 'الاضطرابات المناعية', 'لقاحات السفر']
      },
      {
        id: 'wellness',
        title: 'برامج الصحة والعافية',
        image:'assets/internal4.jpg',
        description: 'فحوصات شاملة ورعاية وقائية',
        items: ['الفحوصات الشاملة', 'برامج العافية', 'الفحوصات الوقائية']
      },
      {
        id: 'nutrition-disorders',
        title: 'اضطرابات التغذية',
        image:'assets/internal5.jpg',
        description: 'تشخيص وعلاج مشاكل التغذية',
        items: ['نقص التغذية', 'السمنة', 'اضطرابات الأيض']
      },
      {
        id: 'pre-surgery',
        title: 'العيادة التحضيرية',
        image:'assets/internal6.jpg',
        description: 'تحضير المرضى قبل العمليات',
        items: ['التقييم الطبي قبل الجراحة', 'الفحوصات المطلوبة']
      }
    ]
  },
  {
    id: 'orthopedics',
    nameAr: 'جراحة العظام والطب الرياضي',
    nameEn: 'Orthopedics & Sports Medicine',
    image: 'assets/bones-icon.png',
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
        image:'assets/orthopedics1.png',
        description: 'عمليات متقدمة بأحدث التقنيات',
        items: ['جراحة العظام والكسور', 'عظام الأطفال', 'جراحة القدم']
      },
      {
        id: 'sports',
        title: 'الطب الرياضي',
        image:'assets/orthopedics2.png',
        description: 'علاج الإصابات الرياضية',
        items: ['تشخيص الإصابات الرياضية', 'برامج التأهيل الرياضي', 'العودة للملاعب']
      },
      {
        id: 'rehabilitation',
        title: 'التأهيل والعلاج',
        image:'assets/orthopedics3.png',
        description: 'برامج تأهيل متكاملة',
        items: ['برامج تأهيل ما بعد العمليات', 'العلاج الطبيعي المتخصص']
      },
      {
        id: 'advanced',
        title: 'العلاجات المتقدمة',
        image:'assets/orthopedics4.png',
        description: 'تقنيات علاجية حديثة',
        items: ['الطب التجديدي', 'إطالة الأطراف', 'عيادة الألم']
      },
      {
        id: 'consultation',
        title: 'الاستشارات الطبية',
        image:'assets/orthopedics5.png',
        description: 'رأي طبي متخصص',
        items: ['خدمة الرأي الطبي الثاني', 'التقييم الشامل']
      }
    ]
  },
  {
    id: 'pmr',
    nameAr: 'الطب الطبيعي والتأهيل',
    nameEn: 'Physical Medicine & Rehabilitation',
    image: 'assets/phyisical.png',
    description: 'استعادة الوظائف وتحسين جودة الحياة من خلال برامج تأهيلية متخصصة',
    heroImage: 'assets/physical-cover.jpeg',
    services: [
      {
        id: 'conditions',
        title: 'الحالات المعالجة',
        image:'assets/physical-1.jpg',
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
        image:'assets/physical-2.jpg',

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
        image:'assets/family-support.jpeg',
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
    heroImage: 'assets/childrenCover.jpg',
    services: [
      {
        id: 'preventive-care',
        title: 'الرعاية الوقائية',
        image:'assets/child1.jpg',
        description: 'حماية صحة طفلك منذ البداية',
        items: ['التطعيمات الأساسية', 'التقييمات النمائية', 'الفحوصات الدورية']
      },
      {
        id: 'common-diseases',
        title: 'الأمراض الشائعة',
        image:'assets/child2.jpg',
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
        image:'assets/child3.jpg',
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
    heroImage: 'assets/psychiatryCover.jpg',
    services: [
      {
        id: 'age-groups',
        title: 'خدماتنا حسب الفئة العمرية',
        image:'assets/psychiatry1.jpg',
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
        image:'assets/psychiatry2.jpg',
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
        image:'assets/psychiatry3.jpg',
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
    image: 'assets/Rehabilitation-icon.png',
    description: 'برامج تأهيلية متخصصة للأمهات قبل وبعد الولادة',
    heroImage: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200',
    services: [
      {
        id: 'prenatal',
        title: 'العلاج الطبيعي قبل الحمل',
        image: 'assets/Rehabilitation1.png',
        description: 'تحضير الجسم للحمل والولادة',
        items: ['تقوية عضلات الحوض', 'تحسين اللياقة البدنية', 'تمارين التنفس']
      },
      {
        id: 'postnatal',
        title: 'العلاج الطبيعي بعد الولادة',
        image: 'assets/Rehabilitation2.png',
        description: 'استعادة اللياقة بعد الولادة',
        items: ['تأهيل عضلات البطن', 'علاج انفصال العضلات', 'استعادة القوة']
      },
      {
        id: 'pelvic',
        title: 'تأهيل عضلات الحوض',
        image: 'assets/Rehabilitation3.png',
        description: 'تقوية وعلاج عضلات قاع الحوض',
        items: ['علاج السلس البولي', 'تقوية عضلات الحوض', 'تمارين كيجل المتقدمة']
      },
      {
        id: 'posture',
        title: 'تصحيح الوضعية',
        image: 'assets/Rehabilitation4.png',
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
    heroImage: 'assets/ProgramsCover.png',
    services: [
      {
        id: 'lymphedema',
        title: 'برنامج علاج الوذمة اللمفية',
        image: 'assets/Programs1.png',
        description: 'علاج متخصص للتورمات اللمفية',
        items: ['التصريف اللمفاوي اليدوي', 'العلاج بالضغط', 'التمارين العلاجية']
      },
      {
        id: 'incontinence',
        title: 'برنامج علاج سلس البول',
        image: 'assets/Programs2.png',
        description: 'برنامج شامل لعلاج سلس البول',
        items: ['العلاج المغناطيسي', 'تمارين قاع الحوض', 'العلاج السلوكي']
      },
      {
        id: 'fall-prevention',
        title: 'برنامج الوقاية من السقوط',
        image: 'assets/Programs3.png',
        description: 'تقليل مخاطر السقوط لدى كبار السن',
        items: ['تقييم التوازن', 'تمارين التقوية', 'تدريب المشي']
      },
      {
        id: 'spinal',
        title: 'تأهيل العمود الفقري',
        image: 'assets/Programs4.png',
        description: 'برامج متخصصة لعلاج آلام الظهر',
        items: ['العلاج اليدوي', 'تمارين التثبيت', 'تصحيح الوضعية']
      },
      {
        id: 'cardiopulmonary',
        title: 'التأهيل القلبي الرئوي',
        image: 'assets/Programs5.png',
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
    heroImage: 'assets/advanced1.jpeg',
    services: [
      {
        id: 'hydrotherapy',
        title: 'العلاج المائي',
        image: 'assets/advanced2.png',
        description: 'علاج بخصائص الماء الطبيعية',
        items: ['تقليل الضغط على المفاصل', 'تحسين التوازن', 'تقوية العضلات', 'تخفيف الألم']
      },
      {
        id: 'gait-training',
        title: 'تدريب وتحليل المشي',
        image: 'assets/advanced3.png',
        description: 'تحسين القدرة على المشي',
        items: ['تحليل المشية', 'تمارين التوازن', 'تقوية العضلات', 'الوقاية من السقوط']
      },
      {
        id: 'dry-needling',
        title: 'العلاج بالإبر الجافة',
        image: 'assets/advanced4.jpg',
        description: 'تخفيف الألم وتحسين الحركة',
        items: ['علاج آلام الظهر والرقبة', 'الصداع', 'التهاب الأوتار', 'آلام المفاصل']
      },
      {
        id: 'cryotherapy',
        title: 'العلاج بالتبريد الكامل',
        image: 'assets/advanced5.jpg',
        description: 'علاج بدرجات حرارة منخفضة',
        items: ['تقليل الألم والالتهاب', 'تحسين الأداء الرياضي', 'تعزيز الأيض', 'تحسين النوم']
      },
      {
        id: 'smart-balance',
        title: 'برنامج التوازن الذكي',
        image: 'assets/advanced6.jpg',
        description: 'تقييم وتحسين التوازن',
        items: ['تقييم مخاطر السقوط', 'برامج تدريب مخصصة', 'ألعاب تفاعلية', 'تقارير تقدم']
      },
      {
        id: 'robotic',
        title: 'التقييم الحركي الروبوتي',
        image: 'assets/advanced7.jpeg',
        description: 'تدريب متقدم بالروبوتات',
        items: ['التدريب بالروبوتات', 'الواقع الافتراضي', 'التحفيز التفاعلي', 'تحسين الاستقلالية']
      }
    ]
  },
  {
    id: 'therapy-services',
    nameAr: 'خدمات العلاج التأهيلي',
    nameEn: 'Therapy Services',
    image: 'assets/therapy-icoon.png',
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
    image: 'assets/nutrition-icon.png',
    description: 'برامج غذائية متخصصة لصحة أفضل',
    heroImage: 'assets/nutritionCover.jpeg',
    services: [
      {
        id: 'clinical-nutrition',
        title: 'التغذية العلاجية',
        image: 'assets/nutrition1.jpeg',
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
        image: 'assets/nutrition2.jpg',
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
        image: 'assets/nutrition3.jpg',
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
        image: 'assets/nutrition4.jpg',
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
