// نگاشت گزینه‌های سوالات به کلیدهای roadmap
const questionOptionToRoadmapFields = {
    // نگاشت‌های فرانت‌اند
    frontend: {
        0: { // سوال ۱: چقدر تجربه در توسعه فرانت‌اند دارید؟
            0: ["مبانی", "HTML", "CSS", "JavaScript"],
            1: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها"],
            2: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "استراتژی‌های احراز هویت", "مبانی امنیت وب"],
            3: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "استراتژی‌های احراز هویت", "مبانی امنیت وب", "عملکرد", "ذخیره‌سازی و APIها"]
        },
        1: { // سوال ۲: آیا تا به حال در تیم توسعه نرم‌افزار کار کرده‌اید؟
            0: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه"],
            1: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت"],
            2: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست"],
            3: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "استراتژی‌های احراز هویت", "مبانی امنیت وب", "عملکرد", "ذخیره‌سازی و APIها"]
        },
        2: { // سوال ۳: کدام حوزه‌های فرانت‌اند را تاکنون یاد گرفته‌اید؟
            0: ["مبانی", "HTML", "CSS"],
            1: ["مبانی", "HTML", "CSS", "JavaScript"],
            2: ["مبانی", "HTML", "CSS", "JavaScript", "فریم‌ورک‌ها"],
            3: ["مبانی", "HTML", "CSS", "JavaScript", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "کنترل نسخه", "مدیریت پکیج", "مبانی امنیت وب"]
        },
        3: { // سوال ۴: آیا روی پروژه‌های فرانت‌اند کار کرده‌اید؟
            0: ["مبانی", "HTML", "CSS", "JavaScript"],
            1: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه"],
            2: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست"],
            3: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "استراتژی‌های احراز هویت", "مبانی امنیت وب", "عملکرد", "ذخیره‌سازی و APIها"]
        },
        4: { // سوال ۵: آیا با مفاهیمی مانند HTTP، DNS و هاستینگ آشنایی دارید؟
            0: ["مبانی"],
            1: ["مبانی"],
            2: ["مبانی", "ذخیره‌سازی و APIها", "APIهای مرورگر"],
            3: ["ذخیره‌سازی و APIها", "APIهای مرورگر", "مبانی امنیت وب", "عملکرد"]
        },
        5: { // سوال ۶: آیا با نحوه کار مرورگرها و موتورهای رندرینگ آشنایی دارید؟
            0: ["مبانی"],
            1: ["مبانی"],
            2: ["مبانی", "ابزارهای ساخت", "APIهای مرورگر"],
            3: ["ابزارهای ساخت", "APIهای مرورگر", "عملکرد"]
        },
        6: { // سوال ۷: آیا با اصول HTML و HTML معنایی آشنایی دارید؟
            0: ["مبانی", "HTML"],
            1: ["مبانی", "HTML"],
            2: ["مبانی", "HTML", "CSS"],
            3: ["مبانی", "HTML", "CSS", "JavaScript"]
        },
        7: { // سوال ۸: مهارت‌های شما در CSS چگونه است؟
            0: ["CSS"],
            1: ["CSS"],
            2: ["CSS"],
            3: ["CSS", "ابزارهای ساخت"]
        },
        8: { // سوال ۹: آیا با اصول طراحی UI/UX و ابزارهای طراحی آشنایی دارید؟
            0: ["مبانی"],
            1: ["مبانی", "CSS"],
            2: ["مبانی", "CSS", "ابزارهای ساخت"],
            3: ["مبانی", "CSS", "ابزارهای ساخت", "فریم‌ورک‌ها"]
        },
        9: { // سوال ۱۰: آیا از فریم‌ورک‌های CSS مانند Bootstrap یا Tailwind استفاده کرده‌اید؟
            0: ["CSS"],
            1: ["CSS", "ابزارهای ساخت"],
            2: ["CSS", "ابزارهای ساخت", "فریم‌ورک‌ها"],
            3: ["CSS", "ابزارهای ساخت", "فریم‌ورک‌ها", "عملکرد"]
        },
        10: { // سوال ۱۱: سطح مهارت شما در JavaScript چگونه است؟
            0: ["JavaScript"],
            1: ["JavaScript"],
            2: ["JavaScript", "مبانی", "ابزارهای ساخت", "کنترل نسخه"],
            3: ["JavaScript", "مبانی", "ابزارهای ساخت", "کنترل نسخه", "عملکرد", "تست"]
        },
        11: { // سوال ۱۲: کدام یک از مفاهیم JavaScript را می‌شناسید؟
            0: [],
            1: ["JavaScript", "ابزارهای ساخت"],
            2: ["JavaScript", "ابزارهای ساخت", "عملکرد"],
            3: ["JavaScript", "ابزارهای ساخت", "عملکرد", "مدیریت پکیج"]
        },
        12: { // سوال ۱۳: آیا از Git و GitHub برای کنترل نسخه استفاده کرده‌اید؟
            0: [],
            1: ["کنترل نسخه"],
            2: ["کنترل نسخه", "ابزارهای ساخت"],
            3: ["کنترل نسخه", "ابزارهای ساخت", "مدیریت پکیج"]
        },
        13: { // سوال ۱۴: آیا تجربه دیباگ و تست کد فرانت‌اند را دارید؟
            0: [],
            1: ["ابزارهای ساخت"],
            2: ["ابزارهای ساخت", "تست"],
            3: ["ابزارهای ساخت", "تست", "عملکرد"]
        },
        14: { // سوال ۱۵: آیا با package managerهایی مانند npm یا yarn کار کرده‌اید؟
            0: [],
            1: ["مدیریت پکیج"],
            2: ["مدیریت پکیج", "ابزارهای ساخت"],
            3: ["مدیریت پکیج", "ابزارهای ساخت", "فریم‌ورک‌ها"]
        },
        15: { // سوال ۱۶: آیا از Webpack، Vite یا Parcel برای مدیریت پروژه‌های فرانت‌اند استفاده کرده‌اید؟
            0: [],
            1: ["ابزارهای ساخت"],
            2: ["ابزارهای ساخت", "عملکرد"],
            3: ["ابزارهای ساخت", "عملکرد", "تست"]
        },
        16: { // سوال ۱۷: آیا با مفاهیم امنیت وب مانند CORS، HTTPS و Content Security Policy آشنایی دارید؟
            0: [],
            1: ["مبانی امنیت وب"],
            2: ["مبانی امنیت وب", "تست"],
            3: ["مبانی امنیت وب", "تست", "عملکرد"]
        },
        17: { // سوال ۱۸: آیا از Lighthouse برای ارزیابی عملکرد وب‌سایت استفاده کرده‌اید؟
            0: [],
            1: ["عملکرد"],
            2: ["عملکرد", "ابزارهای ساخت"],
            3: ["عملکرد", "ابزارهای ساخت", "مبانی امنیت وب"]
        },
        18: { // سوال ۱۹: چرا می‌خواهید توسعه فرانت‌اند یاد بگیرید؟
            0: ["مبانی"],
            1: ["مبانی", "CSS"],
            2: ["مبانی", "CSS", "ابزارهای ساخت"],
            3: ["مبانی", "CSS", "ابزارهای ساخت", "JavaScript"]
        },
        19: { // سوال ۲۰: چقدر زمان در هفته می‌توانید به یادگیری اختصاص دهید؟
            0: ["مبانی", "HTML"],
            1: ["مبانی", "HTML", "CSS"],
            2: ["مبانی", "HTML", "CSS", "JavaScript"],
            3: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه"]
        }
    },
    // نگاشت‌های بک‌اند
    backend: {
        0: { // سوال ۱: چقدر تجربه در توسعه بک‌اند دارید؟
            0: ["Programming Languages", "Internet Fundamentals", "Operating Systems", "Version Control"],
            1: ["Programming Languages", "Internet Fundamentals", "Operating Systems", "Version Control", "Software Design & Architecture", "Databases"],
            2: ["Programming Languages", "Internet Fundamentals", "Operating Systems", "Version Control", "Software Design & Architecture", "Architectural Patterns", "Databases", "APIs", "Web Servers", "Containerization"],
            3: ["Programming Languages", "Internet Fundamentals", "Operating Systems", "Version Control", "Software Design & Architecture", "Architectural Patterns", "Databases", "APIs", "Web Servers", "Containerization", "Authentication & Security", "Hashing Algorithms", "Testing", "CI/CD", "Observability", "Scaling", "Frameworks and Tools"]
        },
        1: { // سوال ۲: آشنایی با پایگاه‌داده؟
            0: [],
            1: ["Databases"],
            2: ["Databases", "Software Design & Architecture"],
            3: ["Databases", "Software Design & Architecture", "Scaling"]
        },
        2: { // سوال ۳: کدام زبان‌های برنامه‌نویسی بک‌اند را می‌شناسید؟ (multiple)
            0: [],
            1: ["Programming Languages", "Software Design & Architecture"], // Python
            2: ["Programming Languages", "Software Design & Architecture", "APIs"], // Node.js
            3: ["Programming Languages", "Software Design & Architecture", "Architectural Patterns"], // Java
            4: ["Programming Languages", "Software Design & Architecture", "Web Servers"], // PHP
            5: ["Programming Languages", "Software Design & Architecture", "Frameworks and Tools"], // Ruby
            6: ["Programming Languages", "Software Design & Architecture", "Scaling"]  // Go
        },
        3: { // سوال ۴: آشنایی با API و REST؟
            0: [],
            1: ["APIs", "Internet Fundamentals"],
            2: ["APIs", "Internet Fundamentals", "Software Design & Architecture"],
            3: ["APIs", "Internet Fundamentals", "Software Design & Architecture", "GraphQL"]
        },
        4: { // سوال ۵: آشنایی امنیت بک‌اند؟
            0: [],
            1: ["Authentication & Security", "Internet Fundamentals"],
            2: ["Authentication & Security", "Internet Fundamentals", "Hashing Algorithms"],
            3: ["Authentication & Security", "Internet Fundamentals", "Hashing Algorithms", "Testing"]
        },
        5: { // سوال ۶: آشنایی با Authentication و Authorization
            0: [],
            1: ["Authentication & Security", "APIs", "Internet Fundamentals"],
            2: ["Authentication & Security", "APIs", "Internet Fundamentals", "Software Design & Architecture"],
            3: ["Authentication & Security", "APIs", "Internet Fundamentals", "Software Design & Architecture", "Testing"]
        },
        6: { // سوال ۷: آشنایی با Microservices؟
            0: [],
            1: ["Architectural Patterns", "Software Design & Architecture"],
            2: ["Architectural Patterns", "Software Design & Architecture", "Containerization"],
            3: ["Architectural Patterns", "Software Design & Architecture", "Containerization", "Scaling", "Message Brokers"]
        },
        7: { // سوال ۸: آشنایی با Docker و Containerization؟
            0: [],
            1: ["Containerization", "Operating Systems"],
            2: ["Containerization", "Operating Systems", "Frameworks and Tools"],
            3: ["Containerization", "Operating Systems", "Frameworks and Tools", "Scaling", "CI/CD"]
        },
        8: { // سوال ۹: آشنایی با Caching؟
            0: [],
            1: ["Caching", "Databases"],
            2: ["Caching", "Databases", "Software Design & Architecture"],
            3: ["Caching", "Databases", "Software Design & Architecture", "Scaling", "Message Brokers"]
        },
        9: { // سوال ۱۰: تجربه کار با ابزارهای کنترل نسخه مانند Git؟
            0: [],
            1: ["Version Control", "Operating Systems"],
            2: ["Version Control", "Operating Systems", "CI/CD"],
            3: ["Version Control", "Operating Systems", "CI/CD", "Frameworks and Tools"]
        },
        10: { // سوال ۱۱: آشنایی با تست (واحد، یکپارچه، عملکرد)؟
            0: [],
            1: ["Testing", "Software Design & Architecture"],
            2: ["Testing", "Software Design & Architecture", "CI/CD"],
            3: ["Testing", "Software Design & Architecture", "CI/CD", "Observability"]
        },
        11: { // سوال ۱۲: آشنایی با استقرار (Deployment) و CI/CD؟
            0: [],
            1: ["CI/CD", "Operating Systems"],
            2: ["CI/CD", "Operating Systems", "Containerization"],
            3: ["CI/CD", "Operating Systems", "Containerization", "Scaling", "Observability"]
        },
        12: { // سوال ۱۳: آشنایی با DevOps؟
            0: [],
            1: ["CI/CD", "Containerization", "Operating Systems"],
            2: ["CI/CD", "Containerization", "Operating Systems", "Observability"],
            3: ["CI/CD", "Containerization", "Operating Systems", "Observability", "Scaling", "Frameworks and Tools"]
        },
        13: { // سوال ۱۴: آشنایی با Agile و Scrum؟
            0: [],
            1: ["Software Design & Architecture", "Version Control"],
            2: ["Software Design & Architecture", "Version Control", "CI/CD"],
            3: ["Software Design & Architecture", "Version Control", "CI/CD", "Observability", "Frameworks and Tools"]
        },
        14: { // سوال ۱۵: آشنایی با Testing و Unit Testing؟
            0: [],
            1: ["Testing", "Software Design & Architecture"],
            2: ["Testing", "Software Design & Architecture", "CI/CD"],
            3: ["Testing", "Software Design & Architecture", "CI/CD", "Observability", "Frameworks and Tools"]
        },
        15: { // سوال ۱۶: آشنایی با Message Queue؟
            0: [],
            1: ["Message Brokers", "Software Design & Architecture"],
            2: ["Message Brokers", "Software Design & Architecture", "Scaling"],
            3: ["Message Brokers", "Software Design & Architecture", "Scaling", "Containerization"]
        },
        16: { // سوال ۱۷: آشنایی با Search Engines؟
            0: [],
            1: ["Search Engines", "Databases"],
            2: ["Search Engines", "Databases", "Software Design & Architecture"],
            3: ["Search Engines", "Databases", "Software Design & Architecture", "Scaling"]
        },
        17: { // سوال ۱۸: آشنایی با Serverless؟
            0: [],
            1: ["Serverless", "APIs"],
            2: ["Serverless", "APIs", "Software Design & Architecture"],
            3: ["Serverless", "APIs", "Software Design & Architecture", "Scaling"]
        },
        18: { // سوال ۱۹: آشنایی با Migration Strategies؟
            0: [],
            1: ["Migration Strategies", "Databases"],
            2: ["Migration Strategies", "Databases", "Software Design & Architecture"],
            3: ["Migration Strategies", "Databases", "Software Design & Architecture", "Scaling"]
        },
        19: { // سوال ۲۰: آشنایی با Web Servers؟
            0: [],
            1: ["Web Servers", "Internet Fundamentals"],
            2: ["Web Servers", "Internet Fundamentals", "Operating Systems"],
            3: ["Web Servers", "Internet Fundamentals", "Operating Systems", "Scaling"]
        }
    }
};

// تابع برای جمع‌آوری کلیدهای roadmap بر اساس پاسخ‌های کاربر
function collectRoadmapKeys(userAnswers, path) {
    console.log('User Answers:', userAnswers); // برای دیباگ
    console.log('Current Path:', path); // برای دیباگ
    
    const selectedKeys = new Set(); // استفاده از Set برای جلوگیری از تکرار
    const mappings = questionOptionToRoadmapFields[path];
    
    if (!mappings) {
        console.error('No mappings found for path:', path);
        return [];
    }

    // بررسی هر پاسخ و اضافه کردن کلیدهای مربوطه
    Object.entries(userAnswers).forEach(([questionIndex, answerIndex]) => {
        console.log(`Processing question ${questionIndex} with answer ${answerIndex}`); // برای دیباگ
        
        const questionMapping = mappings[questionIndex];
        if (questionMapping) {
            // اگر پاسخ یک آرایه است (multiple choice)
            if (Array.isArray(answerIndex)) {
                answerIndex.forEach(index => {
                    if (questionMapping[index]) {
                        console.log(`Adding keys for multiple choice answer ${index}:`, questionMapping[index]); // برای دیباگ
                        questionMapping[index].forEach(key => selectedKeys.add(key));
                    }
                });
            } else {
                // اگر پاسخ یک مقدار واحد است
                if (questionMapping[answerIndex]) {
                    console.log(`Adding keys for single answer ${answerIndex}:`, questionMapping[answerIndex]); // برای دیباگ
                    questionMapping[answerIndex].forEach(key => selectedKeys.add(key));
                }
            }
        }
    });

    console.log('Selected Keys before sorting:', Array.from(selectedKeys)); // برای دیباگ

    // تبدیل Set به آرایه و مرتب‌سازی بر اساس ترتیب اصلی roadmap
    const roadmapOrder = path === 'frontend' ? [
        "مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج",
        "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "استراتژی‌های احراز هویت",
        "مبانی امنیت وب", "کامپوننت‌های وب", "بررسی‌کننده‌های نوع",
        "فریم‌ورک‌های SSR", "GraphQL", "مولدهای سایت استاتیک",
        "PWA و اپلیکیشن‌های موبایل", "اپلیکیشن‌های دسکتاپ",
        "عملکرد", "ذخیره‌سازی و APIها", "APIهای مرورگر"
    ] : [
        "Programming Languages", "Internet Fundamentals", "Operating Systems",
        "Version Control", "Software Design & Architecture", "Architectural Patterns",
        "Databases", "APIs", "GraphQL", "Caching", "Web Servers", "Containerization",
        "Authentication & Security", "Hashing Algorithms", "Testing", "CI/CD",
        "Observability", "Search Engines", "Message Brokers", "Serverless",
        "Migration Strategies", "Scaling", "Frameworks and Tools", "Others"
    ];

    const sortedKeys = Array.from(selectedKeys).sort((a, b) => {
        return roadmapOrder.indexOf(a) - roadmapOrder.indexOf(b);
    });

    console.log('Final Sorted Keys:', sortedKeys); // برای دیباگ
    return sortedKeys;
}

// تابع برای نمایش roadmap بر اساس کلیدهای انتخاب شده
function displaySelectedRoadmap(selectedKeys, roadmap) {
    const mainContainer = document.getElementById('main-container');
    let html = '<h1>مسیر یادگیری پیشنهادی</h1><div class="roadmap">';

    selectedKeys.forEach(key => {
        const section = roadmap[key];
        if (section) {
            html += `<div class="roadmap-section"><h2>${key}</h2>`;
            
            if (Array.isArray(section)) {
                html += '<ul>';
                section.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += '</ul>';
            } else if (typeof section === 'object') {
                Object.entries(section).forEach(([subsection, items]) => {
                    html += `<h3>${subsection}</h3><ul>`;
                    if (Array.isArray(items)) {
                        items.forEach(item => {
                            html += `<li>${item}</li>`;
                        });
                    } else if (typeof items === 'object') {
                        Object.entries(items).forEach(([subsubsection, subitems]) => {
                            html += `<h4>${subsubsection}</h4><ul>`;
                            subitems.forEach(item => {
                                html += `<li>${item}</li>`;
                            });
                            html += '</ul>';
                        });
                    }
                    html += '</ul>';
                });
            }
            
            html += '</div>';
        }
    });

    html += '</div>';
    mainContainer.innerHTML = html;
} 