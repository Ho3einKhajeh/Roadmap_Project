// مدیریت وضعیت کاربر
let currentUser = null;

// اضافه کردن event listener برای فرم لاگین
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const loginContainer = document.getElementById('login-container');
    const mainContainer = document.getElementById('main-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const errorMessage = document.getElementById('error-message');

    loginBtn.addEventListener('click', function() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        let errors = [];

        if (!firstName) {
            errors.push('لطفاً نام خود را وارد کنید');
        }
        if (!lastName) {
            errors.push('لطفاً نام خانوادگی خود را وارد کنید');
        }

        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join('<br>');
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';
        currentUser = { firstName, lastName };
        loginContainer.style.display = 'none';
        mainContainer.style.display = 'block';
        welcomeMessage.innerHTML = `<h2>خوش آمدید ${firstName} ${lastName} عزیز!</h2>`;
    });
});

// تابع شروع مجدد
function restartApp() {
    // پاک کردن وضعیت کاربر
    currentUser = null;
    
    // پاک کردن مقادیر ورودی‌ها
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    
    // پاک کردن پاسخ‌های کاربر
    userAnswers = {};
    currentQuestionIndex = 0;
    currentPath = null;
    
    // نمایش صفحه لاگین و مخفی کردن صفحه اصلی
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('main-container').style.display = 'none';
    
    // پاک کردن محتوای main-container
    document.getElementById('main-container').innerHTML = `
        <div id="welcome-message"></div>
        <div class="buttons-container">
            <button class="path-btn" data-path="frontend">فرانت‌اند</button>
            <button class="path-btn" data-path="backend">بک‌اند</button>
            <button class="path-btn" data-path="devops">DevOps</button>
            <button class="path-btn" data-path="fullstack">فول‌استک</button>
            <button class="path-btn" data-path="react">React</button>
        </div>
    `;
    
    // اضافه کردن event listener‌ها به دکمه‌های مسیر
    const buttons = document.querySelectorAll('.path-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            currentPath = button.dataset.path;
            currentQuestionIndex = 0;
            userAnswers = {};
            showQuestion(data[currentPath].questions);
        });
    });
}

// داده‌های سوالات و roadmap
const data = {
    frontend: {
        questions: [
            {
                "question": "چقدر تجربه در توسعه فرانت‌اند دارید؟",
                "options": [
                    "هیچ تجربه‌ای ندارم، تازه‌کار هستم",
                    "سطح پایه، چند دوره گذرانده‌ام",
                    "متوسط، روی پروژه‌های کوچک کار کرده‌ام",
                    "پیشرفته، روی پروژه‌های واقعی کار کرده‌ام"
                ]
            },
            {
                "question": "آیا تا به حال در تیم توسعه نرم‌افزار کار کرده‌اید؟",
                "options": [
                    "خیر، تجربه کار تیمی ندارم",
                    "فقط روی پروژه‌های شخصی کار کرده‌ام",
                    "در تیم‌های کوچک یا استارتاپ‌ها کار کرده‌ام",
                    "در تیم‌های حرفه‌ای توسعه کار کرده‌ام"
                ]
            },
            {
                "question": "کدام حوزه‌های فرانت‌اند را تاکنون یاد گرفته‌اید؟",
                "type": "multiple",
                "options": [
                    "هیچ کدام",
                    "HTML و CSS",
                    "JavaScript",
                    "یک فریم‌ورک فرانت‌اند (React, Vue, Angular)"
                ]
            },
            {
                "question": "آیا روی پروژه‌های فرانت‌اند کار کرده‌اید؟",
                "options": [
                    "خیر، هنوز روی هیچ پروژه‌ای کار نکرده‌ام",
                    "پروژه‌های کوچک و تمرینی انجام داده‌ام",
                    "روی پروژه‌های متوسط و تیمی کار کرده‌ام",
                    "روی پروژه‌های حرفه‌ای و بزرگ کار کرده‌ام"
                ]
            },
            {
                "question": "آیا با مفاهیمی مانند HTTP، DNS و هاستینگ آشنایی دارید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "کمی آشنایی دارم اما نیاز به یادگیری بیشتر دارم",
                    "متوجه هستم اما تجربه عملی ندارم",
                    "تسلط کامل دارم و تجربه عملی دارم"
                ]
            },
            {
                "question": "آیا با نحوه کار مرورگرها و موتورهای رندرینگ آشنایی دارید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "درک پایه دارم",
                    "می‌دانم مرورگرها چگونه صفحات را پردازش می‌کنند",
                    "تجربه و دانش فنی عمیق دارم"
                ]
            },
            {
                "question": "آیا با اصول HTML و HTML معنایی آشنایی دارید؟",
                "options": [
                    "خیر، نیاز به یادگیری دارم",
                    "درک پایه دارم",
                    "دانش خوبی دارم اما نیاز به تمرین بیشتر دارم",
                    "تسلط کامل دارم و در پروژه‌ها استفاده می‌کنم"
                ]
            },
            {
                "question": "مهارت‌های شما در CSS چگونه است؟",
                "options": [
                    "هیچ دانشی ندارم",
                    "مهارت‌های پایه (سلکتورها، ویژگی‌ها)",
                    "مهارت‌های متوسط (طراحی واکنش‌گرا، Flexbox، Grid)",
                    "مهارت‌های پیشرفته (انیمیشن‌های CSS، SCSS، Tailwind)"
                ]
            },
            {
                "question": "آیا با اصول طراحی UI/UX و ابزارهای طراحی آشنایی دارید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "اصول پایه را می‌دانم (مانند فاصله‌گذاری و تئوری رنگ)",
                    "تجربه کار با ابزارهایی مانند Figma یا Adobe XD دارم",
                    "تسلط کامل دارم و تجربه حرفه‌ای طراحی دارم"
                ]
            },
            {
                "question": "آیا از فریم‌ورک‌های CSS مانند Bootstrap یا Tailwind استفاده کرده‌اید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "تجربه پایه در استفاده از کلاس‌های از پیش ساخته شده دارم",
                    "می‌توانم قالب‌های سفارشی ایجاد کنم",
                    "تجربه پیشرفته در بهینه‌سازی و سفارشی‌سازی دارم"
                ]
            },
            {
                "question": "سطح مهارت شما در JavaScript چگونه است؟",
                "options": [
                    "هیچ تجربه‌ای ندارم",
                    "پایه (شرط‌ها، حلقه‌ها، توابع)",
                    "متوسط (DOM، مدیریت رویدادها)",
                    "پیشرفته (Async/Await، Promises، Closures، برنامه‌نویسی تابعی)"
                ]
            },
            {
                "question": "کدام یک از مفاهیم JavaScript را می‌شناسید؟",
                "type": "multiple",
                "options": [
                    "هیچ کدام",
                    "مدیریت DOM",
                    "Fetch API / Ajax",
                    "ES6+ (let, const, توابع پیکانی، promises)"
                ]
            },
            {
                "question": "آیا از Git و GitHub برای کنترل نسخه استفاده کرده‌اید؟",
                "options": [
                    "خیر، هیچ تجربه‌ای ندارم",
                    "برای ذخیره و commit استفاده کرده‌ام",
                    "با branching و pull requests آشنا هستم",
                    "تسلط کامل دارم و حرفه‌ای استفاده می‌کنم"
                ]
            },
            {
                "question": "آیا تجربه دیباگ و تست کد فرانت‌اند را دارید؟",
                "options": [
                    "خیر، هیچ تجربه‌ای ندارم",
                    "از DevTools مرورگر استفاده کرده‌ام",
                    "مهارت‌های متوسط دیباگ دارم",
                    "تجربه نوشتن تست‌های خودکار با Jest، Cypress دارم"
                ]
            },
            {
                "question": "آیا با package managerهایی مانند npm یا yarn کار کرده‌اید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "پکیج‌ها را نصب کرده‌ام",
                    "می‌توانم وابستگی‌ها و اسکریپت‌ها را مدیریت کنم",
                    "تجربه حرفه‌ای با monorepo و workflowهای پیشرفته دارم"
                ]
            },
            {
                "question": "آیا از Webpack، Vite یا Parcel برای مدیریت پروژه‌های فرانت‌اند استفاده کرده‌اید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "نصب و استفاده از پیکربندی‌های پایه",
                    "می‌توانم پیکربندی‌های سفارشی ایجاد کنم",
                    "تجربه حرفه‌ای در بهینه‌سازی و مدیریت build دارم"
                ]
            },
            {
                "question": "آیا با مفاهیم امنیت وب مانند CORS، HTTPS و Content Security Policy آشنایی دارید؟",
                "options": [
                    "خیر، هیچ دانشی ندارم",
                    "دانش پایه درباره CORS و HTTPS دارم",
                    "می‌توانم راه‌حل‌های امنیتی پایه پیاده‌سازی کنم",
                    "تسلط کامل دارم و تست امنیت انجام می‌دهم"
                ]
            },
            {
                "question": "آیا از Lighthouse برای ارزیابی عملکرد وب‌سایت استفاده کرده‌اید؟",
                "options": [
                    "خیر، هرگز استفاده نکرده‌ام",
                    "آشنایی پایه دارم",
                    "چندین بار استفاده کرده‌ام",
                    "در بهینه‌سازی عملکرد تبحر دارم"
                ]
            },
            {
                "question": "چرا می‌خواهید توسعه فرانت‌اند یاد بگیرید؟",
                "options": [
                    "برای ورود به بازار کار",
                    "برای بهبود مهارت‌های شغلی",
                    "برای تغییر شغل به توسعه فرانت‌اند",
                    "برای ساخت پروژه‌های شخصی و علاقه شخصی"
                ]
            },
            {
                "question": "چقدر زمان در هفته می‌توانید به یادگیری اختصاص دهید؟",
                "options": [
                    "کمتر از 5 ساعت",
                    "5 تا 10 ساعت",
                    "10 تا 20 ساعت",
                    "بیش از 20 ساعت"
                ]
            }
        ],
        roadmap: {
            "مبانی": [
                "توسعه فرانت‌اند چیست؟",
                "اینترنت چگونه کار می‌کند؟",
                "HTTP چیست؟",
                "نام دامنه چیست؟",
                "هاستینگ چیست؟",
                "DNS و نحوه کار آن",
                "مرورگرها و نحوه کار آنها"
            ],
            "HTML": [
                "یادگیری مبانی",
                "نوشتن HTML معنایی",
                "فرم‌ها و اعتبارسنجی",
                "دسترس‌پذیری",
                "مبانی SEO"
            ],
            "CSS": [
                "یادگیری مبانی",
                "ساخت لایه‌بندی",
                "طراحی واکنش‌گرا",
                "نوشتن CSS",
                "معماری CSS",
                "پیش‌پردازنده‌های CSS: BEM, Sass, PostCSS",
                "CSS-in-JS, CSS Modules, Styled Components",
                "Panda CSS, Shadcn UI, Mantine"
            ],
            "JavaScript": [
                "یادگیری مبانی",
                "یادگیری دستکاری DOM",
                "Fetch API / Ajax (XHR)"
            ],
            "کنترل نسخه": {
                "سیستم‌ها": ["Git"],
                "میزبانی": ["GitHub", "GitLab", "Bitbucket"]
            },
            "مدیریت پکیج": ["npm", "yarn", "pnpm"],
            "فریم‌ورک‌ها": [
                "React",
                "Vue.js",
                "Angular",
                "Svelte",
                "Solid JS",
                "Qwik"
            ],
            "ابزارهای ساخت": {
                "باندلرهای ماژول": [
                    "Webpack",
                    "Rollup",
                    "Parcel",
                    "esbuild",
                    "Vite"
                ],
                "لینترها و فرمت‌کننده‌ها": [
                    "Prettier",
                    "ESLint"
                ]
            },
            "تست": [
                "Vitest",
                "Jest",
                "Playwright",
                "Cypress"
            ],
            "استراتژی‌های احراز هویت": [
                "JWT",
                "OAuth",
                "SSO",
                "Basic Auth",
                "Session Auth"
            ],
            "مبانی امنیت وب": [
                "CORS",
                "HTTPS",
                "Content Security Policy",
                "ریسک‌های امنیتی OWASP"
            ],
            "کامپوننت‌های وب": [
                "عناصر سفارشی",
                "قالب‌های HTML",
                "Shadow DOM"
            ],
            "بررسی‌کننده‌های نوع": ["TypeScript"],
            "فریم‌ورک‌های SSR": [
                "React",
                "Angular",
                "Vue.js",
                "Svelte",
                "Next.js",
                "Nuxt.js",
                "Svelte Kit",
                "react-router"
            ],
            "GraphQL": ["Apollo", "Relay Modern"],
            "مولدهای سایت استاتیک": [
                "Vuepress",
                "Nuxt.js",
                "Astro",
                "Eleventy",
                "Next.js"
            ],
            "PWA و اپلیکیشن‌های موبایل": [
                "React Native",
                "Flutter",
                "Ionic"
            ],
            "اپلیکیشن‌های دسکتاپ": [
                "Electron",
                "Tauri",
                "Flutter"
            ],
            "عملکرد": [
                "الگوی PRPL",
                "مدل RAIL",
                "معیارهای عملکرد",
                "استفاده از Lighthouse",
                "استفاده از DevTools",
                "بهترین روش‌های عملکرد"
            ],
            "ذخیره‌سازی و APIها": [
                "Web Sockets",
                "Server Sent Events",
                "Service Workers",
                "Location",
                "Notifications",
                "Device Orientation",
                "Payments",
                "Credentials"
            ],
            "APIهای مرورگر": ["اندازه‌گیری و بهبود عملکرد"],
            "نکات": {
                "وبسایت": ["https://roadmap.sh"],
                "مسیرهای مرتبط": [
                    "فول‌استک",
                    "نسخه مناسب مبتدیان"
                ],
                "توصیه‌ها": [
                    "ترتیب سختگیرانه نیست / هر زمان می‌توانید یاد بگیرید",
                    "گزینه جایگزین / این یا بنفش را انتخاب کنید"
                ]
            }
        }
    },
    backend: {
        questions: [
            {
                "question": "چقدر تجربه در توسعه بک‌اند دارید؟",
                "options": [
                    "هیچ تجربه‌ای ندارم، تازه‌کار هستم",
                    "سطح پایه، چند دوره گذرانده‌ام",
                    "متوسط، روی پروژه‌های کوچک کار کرده‌ام",
                    "پیشرفته، روی پروژه‌های واقعی کار کرده‌ام"
                ]
            },
            {
                "question": "آیا با مفاهیم پایگاه داده آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با SQL",
                    "تجربه کار با پایگاه داده‌های رابطه‌ای",
                    "تجربه کار با پایگاه داده‌های NoSQL"
                ]
            },
            {
                "question": "کدام زبان‌های برنامه‌نویسی بک‌اند را می‌شناسید؟",
                "type": "multiple",
                "options": [
                    "هیچ کدام",
                    "Python",
                    "Node.js",
                    "Java",
                    "PHP",
                    "Ruby",
                    "Go"
                ]
            },
            {
                "question": "آیا با مفاهیم API و REST آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه ساخت API‌های ساده",
                    "تجربه ساخت API‌های پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم امنیت در بک‌اند آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی امنیت پایه",
                    "تجربه پیاده‌سازی امنیت پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Authentication و Authorization آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی پایه",
                    "تجربه پیاده‌سازی پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Microservices آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Microservices",
                    "تجربه طراحی و پیاده‌سازی Microservices"
                ]
            },
            {
                "question": "آیا با Docker و Containerization آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Docker",
                    "تجربه پیشرفته با Docker و Kubernetes"
                ]
            },
            {
                "question": "آیا با مفاهیم Caching آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Caching",
                    "تجربه پیاده‌سازی Caching پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Message Queue آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Message Queue",
                    "تجربه پیشرفته با Message Queue"
                ]
            },
            {
                "question": "آیا با مفاهیم طراحی سیستم آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه طراحی سیستم‌های ساده",
                    "تجربه طراحی سیستم‌های پیچیده"
                ]
            },
            {
                "question": "آیا با مفاهیم Load Balancing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Load Balancing",
                    "تجربه پیاده‌سازی Load Balancing پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Scaling آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Scaling",
                    "تجربه پیاده‌سازی Scaling پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Monitoring و Logging آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با ابزارهای Monitoring",
                    "تجربه پیشرفته با Monitoring و Logging"
                ]
            },
            {
                "question": "آیا با مفاهیم Cloud Computing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با یک Cloud Platform",
                    "تجربه پیشرفته با چند Cloud Platform"
                ]
            },
            {
                "question": "آیا با مفاهیم Infrastructure as Code آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Terraform یا Ansible",
                    "تجربه پیشرفته با IaC"
                ]
            },
            {
                "question": "آیا با مفاهیم CI/CD آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی پایه",
                    "تجربه پیاده‌سازی پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم DevOps آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با ابزارهای DevOps",
                    "تجربه پیشرفته با DevOps"
                ]
            },
            {
                "question": "آیا با مفاهیم Agile و Scrum آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار در تیم‌های Agile",
                    "تجربه پیشرفته با Agile و Scrum"
                ]
            },
            {
                "question": "آیا با مفاهیم Testing و Unit Testing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه نوشتن تست‌های ساده",
                    "تجربه نوشتن تست‌های پیشرفته"
                ]
            }
        ],
        roadmap: {
            "زبان‌های برنامه‌نویسی": [
                "JavaScript",
                "Python",
                "Go",
                "Java",
                "Rust",
                "C#",
                "PHP",
                "Ruby"
            ],
            "مبانی اینترنت": [
                "اینترنت چگونه کار می‌کند؟",
                "HTTP چیست؟",
                "نام دامنه چیست؟",
                "هاستینگ چیست؟",
                "DNS و نحوه کار آن",
                "مرورگرها و نحوه کار آنها"
            ],
            "سیستم‌عامل‌ها": {
                "دانش": [
                    "مدیریت حافظه",
                    "ارتباط بین فرآیندها",
                    "مدیریت I/O",
                    "مبانی POSIX",
                    "مفاهیم پایه شبکه",
                    "مدیریت فرآیندها",
                    "نخ‌ها و همروندی",
                    "نحوه کار کلی سیستم‌عامل‌ها"
                ],
                "استفاده از ترمینال": [
                    "دستورات پایه ترمینال: grep, awk, sed, lsof, curl, wget, tail, head, less, find, ssh, kill, dig"
                ]
            },
            "کنترل نسخه": {
                "سیستم‌ها": ["Git"],
                "میزبانی ریپازیتوری": ["GitHub", "GitLab", "Bitbucket"]
            },
            "طراحی نرم‌افزار و معماری": [
                "الگوهای طراحی GOF",
                "طراحی مبتنی بر دامنه",
                "توسعه مبتنی بر تست",
                "CQRS",
                "Event Sourcing",
                "Service Mesh",
                "Twelve Factor Apps"
            ],
            "الگوهای معماری": [
                "اپلیکیشن‌های مونولیت",
                "میکروسرویس‌ها",
                "SOA"
            ],
            "پایگاه‌داده‌ها": {
                "رابطه‌ای": ["PostgreSQL", "MySQL", "MariaDB", "MS SQL", "Oracle"],
                "NoSQL": {
                    "پایگاه‌داده‌های سند": ["MongoDB", "CouchDB"],
                    "سری زمانی": ["InfluxDB", "TimeScale"],
                    "بلادرنگ": ["Firebase", "RethinkDB"],
                    "ستونی": ["Cassandra", "HBase"],
                    "کلید-مقدار": ["Redis", "DynamoDB"],
                    "گراف": ["Neo4j"]
                },
                "مفاهیم": [
                    "ACID",
                    "تراکنش‌ها",
                    "مشکل N+1",
                    "استراتژی‌های Sharding",
                    "نرمال‌سازی",
                    "تکثیر داده",
                    "ایندکس‌های پایگاه داده",
                    "مقیاس‌پذیری پایگاه‌داده‌ها"
                ]
            },
            "APIها": {
                "انواع": ["REST", "JSON APIs", "SOAP", "HATEOAS", "Open API Specs", "gRPC"],
                "احراز هویت": [
                    "OAuth",
                    "Basic Auth",
                    "Token Auth",
                    "JWT",
                    "OpenID",
                    "SAML",
                    "Cookie Based"
                ]
            },
            "GraphQL": ["Apollo", "Relay Modern"],
            "کش": ["Redis", "Memcached", "سمت کلاینت", "سمت سرور", "CDN"],
            "وب سرورها": ["Nginx", "Apache", "Caddy", "MS IIS"],
            "کانتینریزاسیون": ["Docker", "LXC"],
            "احراز هویت و امنیت": [
                "CORS",
                "HTTPS",
                "Content Security Policy",
                "ریسک‌های OWASP",
                "SSL/TLS"
            ],
            "الگوریتم‌های هش": ["MD5", "SHA Family", "scrypt", "bcrypt"],
            "تست‌نویسی": ["تست واحد", "تست یکپارچه‌سازی", "تست عملکردی"],
            "CI/CD": ["CI / CD"],
            "قابل مشاهده بودن": [
                "معیارها",
                "لاگ‌گیری",
                "پروفایلینگ عملکرد",
                "Instrumentation",
                "مانیتورینگ",
                "Telemetry"
            ],
            "موتورهای جستجو": ["Elasticsearch", "Solr"],
            "کارگزاران پیام": ["RabbitMQ", "Kafka"],
            "سرورلس": ["سرورلس"],
            "استراتژی‌های مهاجرت": ["استراتژی‌های مهاجرت"],
            "مقیاس‌پذیری": [
                "انواع مقیاس‌پذیری",
                "استراتژی‌های کاهش",
                "تخریب آرام",
                "Throttling",
                "Backpressure",
                "Loadshifting",
                "Circuit Breaker",
                "حالت‌های خرابی"
            ],
            "فریم‌ورک‌ها و ابزارها": ["ORMs", "Kubernetes"],
            "سایر": {
                "Server Sent Events": ["Server Sent Events"],
                "استفاده از راهنمای DevOps": ["استفاده از راهنمای DevOps"]
            },
            "وبسایت": ["https://roadmap.sh"]
        }
    },
    devops: {
        questions: [
            {
                "question": "چقدر تجربه در DevOps دارید؟",
                "options": [
                    "هیچ تجربه‌ای ندارم، تازه‌کار هستم",
                    "سطح پایه، چند دوره گذرانده‌ام",
                    "متوسط، روی پروژه‌های کوچک کار کرده‌ام",
                    "پیشرفته، روی پروژه‌های واقعی کار کرده‌ام"
                ]
            },
            {
                "question": "آیا با مفاهیم CI/CD آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی پایه",
                    "تجربه پیاده‌سازی پیشرفته"
                ]
            },
            {
                "question": "آیا با Linux و Bash آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با دستورات",
                    "تجربه کار با Linux",
                    "تسلط کامل بر Linux و Bash"
                ]
            },
            {
                "question": "آیا با Docker و Containerization آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Docker",
                    "تجربه پیشرفته با Docker و Kubernetes"
                ]
            },
            {
                "question": "آیا با Kubernetes آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Kubernetes",
                    "تجربه پیشرفته با Kubernetes"
                ]
            },
            {
                "question": "آیا با Infrastructure as Code آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Terraform یا Ansible",
                    "تجربه پیشرفته با IaC"
                ]
            },
            {
                "question": "آیا با Monitoring و Logging آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با ابزارهای Monitoring",
                    "تجربه پیشرفته با Monitoring و Logging"
                ]
            },
            {
                "question": "آیا با Cloud Platforms آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با یک Cloud Platform",
                    "تجربه پیشرفته با چند Cloud Platform"
                ]
            },
            {
                "question": "آیا با مفاهیم Security در DevOps آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی امنیت پایه",
                    "تجربه پیاده‌سازی امنیت پیشرفته"
                ]
            },
            {
                "question": "آیا با Scripting و Automation آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با Scripting",
                    "تجربه نوشتن Script‌های ساده",
                    "تجربه نوشتن Script‌های پیچیده"
                ]
            },
            {
                "question": "آیا با مفاهیم Load Balancing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Load Balancing",
                    "تجربه پیاده‌سازی Load Balancing پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Scaling آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Scaling",
                    "تجربه پیاده‌سازی Scaling پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Microservices آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Microservices",
                    "تجربه طراحی و پیاده‌سازی Microservices"
                ]
            },
            {
                "question": "آیا با مفاهیم Caching آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Caching",
                    "تجربه پیاده‌سازی Caching پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Message Queue آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Message Queue",
                    "تجربه پیشرفته با Message Queue"
                ]
            },
            {
                "question": "آیا با مفاهیم طراحی سیستم آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه طراحی سیستم‌های ساده",
                    "تجربه طراحی سیستم‌های پیچیده"
                ]
            },
            {
                "question": "آیا با مفاهیم Agile و Scrum آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار در تیم‌های Agile",
                    "تجربه پیشرفته با Agile و Scrum"
                ]
            },
            {
                "question": "آیا با مفاهیم Testing و Unit Testing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه نوشتن تست‌های ساده",
                    "تجربه نوشتن تست‌های پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم API و REST آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه ساخت API‌های ساده",
                    "تجربه ساخت API‌های پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم پایگاه داده آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با SQL",
                    "تجربه کار با پایگاه داده‌های رابطه‌ای",
                    "تجربه کار با پایگاه داده‌های NoSQL"
                ]
            }
        ],
        roadmap: {
            "سیستم‌عامل‌ها": [
                "Linux",
                "RHEL / Derivatives",
                "Ubuntu / Debian",
                "SUSE Linux",
                "Unix (FreeBSD, OpenBSD, NetBSD)",
                "Windows"
            ],
            "ویرایشگرها": ["Vim", "Nano", "Emacs"],
            "اسکریپت‌نویسی": ["Bash", "Power Shell"],
            "کنترل نسخه": ["Git", "GitHub", "GitLab", "Bitbucket"],
            "وب سرورها": ["Apache", "Nginx", "Tomcat", "IIS"],
            "شبکه": [
                "مدل OSI",
                "DNS",
                "HTTP",
                "HTTPS",
                "FTP / SFTP",
                "SSL / TLS",
                "SSH",
                "ایمیل (SMTP, IMAPS, POP3S, DMARC, SPF, Domain Keys, White/Grey Listing)"
            ],
            "کانتینرها": ["Docker", "LXC"],
            "ارکستراسیون کانتینر": [
                "Docker Swarm",
                "Kubernetes",
                "GKE / EKS / AKS",
                "AWS ECS / Fargate"
            ],
            "تدارک زیرساخت": [
                "Terraform",
                "AWS CDK",
                "Pulumi",
                "CloudFormation"
            ],
            "مدیریت پیکربندی": ["Ansible", "Chef", "Puppet"],
            "ابزارهای CI/CD": [
                "Jenkins",
                "Gitlab CI",
                "Travis CI",
                "GitHub Actions",
                "TeamCity",
                "Circle CI",
                "Drone",
                "Azure DevOps Services"
            ],
            "GitOps": ["ArgoCD", "FluxCD"],
            "Service Mesh": ["Consul", "Istio", "Envoy", "Linkerd"],
            "ارائه‌دهندگان ابری": [
                "AWS",
                "Google Cloud",
                "Azure",
                "Digital Ocean",
                "Heroku",
                "Linode",
                "Vultr",
                "Alibaba Cloud"
            ],
            "سرورلس": [
                "Cloudflare",
                "AWS Lambda",
                "Azure Functions",
                "GCP Functions",
                "Vercel",
                "Netlify"
            ],
            "مانیتورینگ": {
                "مانیتورینگ زیرساخت": [
                    "Grafana",
                    "Datadog",
                    "Zabbix",
                    "Prometheus"
                ],
                "مانیتورینگ اپلیکیشن": [
                    "Jaeger",
                    "New Relic",
                    "AppDynamics",
                    "OpenTelemetry"
                ]
            },
            "مدیریت لاگ‌ها": [
                "Elastic Stack",
                "Graylog",
                "Splunk",
                "Papertrail",
                "Loki"
            ],
            "مدیریت آرتیفکت": ["Artifactory", "Nexus", "Cloud Smith"],
            "مدیریت اسرار": ["Vault", "Sealed Secrets", "SOPS"],
            "الگوهای طراحی ابری": [
                "دسترس‌پذیری",
                "مدیریت داده",
                "طراحی و پیاده‌سازی",
                "مدیریت و مانیتورینگ",
                "شبکه، امنیت و پروتکل‌ها"
            ],
            "زبان‌های برنامه‌نویسی": [
                "Python",
                "Go",
                "JavaScript / Node.js",
                "Rust",
                "Ruby"
            ],
            "مهارت‌های ترمینال": [
                "یادگیری زندگی در ترمینال",
                "مانیتورینگ فرآیندها",
                "مانیتورینگ عملکرد",
                "دستکاری متن"
            ],
            "منابع": [
                "DevOps Bootcamp by Nana (پولی)",
                "KodeCloud DevOps Courses (پولی)"
            ],
            "سایر": [
                "بازدید از نسخه مبتدی",
                "یادگیری هر زمان (ترتیب سختگیرانه نیست)",
                "گزینه‌های جایگزین (یکی را انتخاب کنید)"
            ]
        }
    },
    fullstack: {
        questions: [
            {
                "question": "چقدر تجربه در توسعه فول‌استک دارید؟",
                "options": [
                    "هیچ تجربه‌ای ندارم، تازه‌کار هستم",
                    "سطح پایه، چند دوره گذرانده‌ام",
                    "متوسط، روی پروژه‌های کوچک کار کرده‌ام",
                    "پیشرفته، روی پروژه‌های واقعی کار کرده‌ام"
                ]
            },
            {
                "question": "آیا با مفاهیم هر دو بخش فرانت‌اند و بک‌اند آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با هر دو",
                    "تجربه کار در هر دو بخش",
                    "تجربه حرفه‌ای در هر دو بخش"
                ]
            },
            {
                "question": "کدام زبان‌های برنامه‌نویسی را می‌شناسید؟",
                "type": "multiple",
                "options": [
                    "هیچ کدام",
                    "JavaScript",
                    "Python",
                    "Java",
                    "PHP",
                    "Ruby",
                    "Go"
                ]
            },
            {
                "question": "آیا با مفاهیم پایگاه داده آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با SQL",
                    "تجربه کار با پایگاه داده‌های رابطه‌ای",
                    "تجربه کار با پایگاه داده‌های NoSQL"
                ]
            },
            {
                "question": "آیا با مفاهیم API و REST آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه ساخت API‌های ساده",
                    "تجربه ساخت API‌های پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم امنیت در توسعه وب آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی امنیت پایه",
                    "تجربه پیاده‌سازی امنیت پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Authentication و Authorization آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی پایه",
                    "تجربه پیاده‌سازی پیشرفته"
                ]
            },
            {
                "question": "آیا با Docker و Containerization آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Docker",
                    "تجربه پیشرفته با Docker و Kubernetes"
                ]
            },
            {
                "question": "آیا با مفاهیم CI/CD آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی پایه",
                    "تجربه پیاده‌سازی پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Microservices آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Microservices",
                    "تجربه طراحی و پیاده‌سازی Microservices"
                ]
            },
            {
                "question": "آیا با مفاهیم طراحی سیستم آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه طراحی سیستم‌های ساده",
                    "تجربه طراحی سیستم‌های پیچیده"
                ]
            },
            {
                "question": "آیا با مفاهیم Caching آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Caching",
                    "تجربه پیاده‌سازی Caching پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Message Queue آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Message Queue",
                    "تجربه پیشرفته با Message Queue"
                ]
            },
            {
                "question": "آیا با مفاهیم Load Balancing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Load Balancing",
                    "تجربه پیاده‌سازی Load Balancing پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Scaling آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه پیاده‌سازی Scaling",
                    "تجربه پیاده‌سازی Scaling پیشرفته"
                ]
            },
            {
                "question": "آیا با مفاهیم Monitoring و Logging آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با ابزارهای Monitoring",
                    "تجربه پیشرفته با Monitoring و Logging"
                ]
            },
            {
                "question": "آیا با مفاهیم Cloud Computing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با یک Cloud Platform",
                    "تجربه پیشرفته با چند Cloud Platform"
                ]
            },
            {
                "question": "آیا با مفاهیم Infrastructure as Code آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با Terraform یا Ansible",
                    "تجربه پیشرفته با IaC"
                ]
            },
            {
                "question": "آیا با مفاهیم DevOps آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار با ابزارهای DevOps",
                    "تجربه پیشرفته با DevOps"
                ]
            },
            {
                "question": "آیا با مفاهیم Agile و Scrum آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه کار در تیم‌های Agile",
                    "تجربه پیشرفته با Agile و Scrum"
                ]
            },
            {
                "question": "آیا با مفاهیم Testing و Unit Testing آشنایی دارید؟",
                "options": [
                    "خیر، آشنایی ندارم",
                    "آشنایی پایه با مفاهیم",
                    "تجربه نوشتن تست‌های ساده",
                    "تجربه نوشتن تست‌های پیشرفته"
                ]
            }
        ],
        roadmap: {
            "مبانی فرانت‌اند": [
                "HTML",
                "CSS",
                "JavaScript",
                "نقطه کنترل — صفحات وب استاتیک",
                "نقطه کنترل — تعامل‌پذیری",
                "npm",
                "نقطه کنترل — پکیج‌های خارجی",
                "Git",
                "GitHub",
                "نقطه کنترل — کار تیمی"
            ],
            "فریم‌ورک‌های فرانت‌اند": [
                "React",
                "Tailwind",
                "نقطه کنترل — اپلیکیشن‌های فرانت‌اند"
            ],
            "توسعه بک‌اند": {
                "توصیه زبان": "Node.js",
                "نقطه کنترل — اپلیکیشن‌های CLI": ["true"],
                "پایگاه داده": ["PostgreSQL", "Redis"],
                "نقطه کنترل — CRUD ساده": ["true"],
                "RESTful APIs": ["true"],
                "احراز هویت JWT": ["true"],
                "نقطه کنترل — اپلیکیشن کامل": ["true"]
            },
            "دانش DevOps": {
                "مبانی Linux": ["true"],
                "سرویس‌های AWS": [
                    "EC2",
                    "VPC",
                    "Route53",
                    "SES",
                    "S3"
                ],
                "نقطه کنترل — CI / CD": ["true"],
                "GitHub Actions": ["true"],
                "نقطه کنترل — استقرار": ["true"],
                "ابزارهای مانیتورینگ": ["Monit"],
                "نقطه کنترل — مانیتورینگ": ["true"],
                "ابزارهای اتوماسیون": ["Ansible", "Terraform"],
                "نقطه کنترل — اتوماسیون": ["true"],
                "نقطه کنترل — زیرساخت": ["true"]
            },
            "نکات اضافی": {
                "ایده‌های پروژه در داخل": ["true"],
                "مخاطب": "مبتدیان مطلق که می‌خواهند وارد توسعه فول‌استک شوند",
                "ادامه یادگیری": [
                    "راهنمای DevOps",
                    "راهنمای بک‌اند",
                    "راهنمای فرانت‌اند"
                ],
                "وبسایت": ["https://roadmap.sh"]
            }
        }
    },
    react: {
        questions: [
            {
                "question": "چقدر تجربه در React دارید؟",
                "options": [
                    "هیچ تجربه‌ای ندارم، تازه‌کار هستم",
                    "سطح پایه، کامپوننت‌های ساده ساخته‌ام",
                    "متوسط، پروژه‌های کوچک ساخته‌ام",
                    "پیشرفته، اپلیکیشن‌های حرفه‌ای ساخته‌ام"
                ]
            },
            {
                "question": "آیا تا به حال در تیمی که از React استفاده می‌کند کار کرده‌اید؟",
                "options": [
                    "خیر، فقط روی پروژه‌های شخصی کار کرده‌ام",
                    "در پروژه‌های تیمی کوچک شرکت داشته‌ام",
                    "در استارتاپ‌ها کار کرده‌ام",
                    "در تیم‌های حرفه‌ای بزرگ کار کرده‌ام"
                ]
            },
            {
                "question": "کدام حوزه‌های React را تاکنون یاد گرفته‌اید؟",
                "options": [
                    "هیچ کدام",
                    "JSX، Props و State",
                    "کامپوننت‌های تابعی و Hooks",
                    "کامپوننت‌های کلاسی و متدهای Lifecycle"
                ]
            },
            {
                "question": "آیا پروژه‌ای با React ساخته‌اید؟",
                "options": [
                    "خیر، هنوز پروژه‌ای نساخته‌ام",
                    "چند پروژه ساده ساخته‌ام",
                    "چندین پروژه در محیط تیمی ساخته‌ام",
                    "اپلیکیشن‌های حرفه‌ای و بزرگ ساخته‌ام"
                ]
            },
            {
                "question": "چقدر با مفهوم JSX آشنا هستید؟",
                "options": [
                    "اصلاً آشنا نیستم",
                    "کمی آشنا هستم",
                    "با JSX پایه راحت هستم",
                    "با ساختارهای پیچیده JSX تسلط کامل دارم"
                ]
            },
            {
                "question": "چقدر با React Hooks (مثل useState، useEffect) آشنا هستید؟",
                "options": [
                    "با Hooks آشنا نیستم",
                    "Hooks پایه مثل useState و useEffect را می‌فهمم",
                    "به طور منظم از Hooks استفاده می‌کنم، از جمله Hooks سفارشی",
                    "در بهینه‌سازی عملکرد با Hooks (useCallback، useMemo و غیره) پیشرفته هستم"
                ]
            },
            {
                "question": "چگونه با side effects در اپلیکیشن‌های React کار می‌کنید؟",
                "options": [
                    "با side effects کار نمی‌کنم",
                    "از useEffect برای side effects پایه استفاده می‌کنم",
                    "گاهی از کتابخانه‌های خارجی برای side effects پیشرفته استفاده می‌کنم",
                    "در مدیریت side effects با Hooks سفارشی و تکنیک‌های پیشرفته تسلط کامل دارم"
                ]
            },
            {
                "question": "چقدر با React Router (یا کتابخانه‌های مسیریابی دیگر) آشنا هستید؟",
                "options": [
                    "هرگز از کتابخانه مسیریابی استفاده نکرده‌ام",
                    "تجربه پایه با React Router دارم",
                    "از هر دو React Router و Reach Router استفاده کرده‌ام",
                    "تجربه پیشرفته با تکنیک‌های مسیریابی پیچیده دارم"
                ]
            },
            {
                "question": "چگونه state را در اپلیکیشن‌های React مدیریت می‌کنید؟",
                "options": [
                    "فقط از state محلی کامپوننت استفاده می‌کنم",
                    "از Context API برای مدیریت state ساده استفاده می‌کنم",
                    "از Redux یا کتابخانه‌های مشابه برای state سراسری استفاده می‌کنم",
                    "چندین روش (state محلی، Context، Redux و غیره) را به طور موثر ترکیب می‌کنم"
                ]
            },
            {
                "question": "کدام روش‌های استایل‌دهی را در React استفاده کرده‌اید؟",
                "options": [
                    "فقط از CSS ساده استفاده می‌کنم",
                    "از فریم‌ورک‌های CSS مثل Bootstrap استفاده می‌کنم",
                    "از کتابخانه‌های CSS-in-JS مثل Styled Components یا Emotion استفاده می‌کنم",
                    "از ترکیب روش‌های مختلف متناسب با نیاز پروژه استفاده می‌کنم"
                ]
            },
            {
                "question": "چقدر در فراخوانی API در React مهارت دارید؟",
                "options": [
                    "فراخوانی API انجام نداده‌ام",
                    "از Fetch API برای فراخوانی‌های پایه استفاده می‌کنم",
                    "از Axios برای فراخوانی API استفاده می‌کنم",
                    "از کتابخانه‌های پیشرفته مثل react-query یا SWR برای دریافت کارآمد داده استفاده می‌کنم"
                ]
            },
            {
                "question": "آیا در اپلیکیشن‌های React از Error Boundaries استفاده کرده‌اید؟",
                "options": [
                    "خیر، از Error Boundaries استفاده نکرده‌ام",
                    "دانش پایه درباره آنها دارم",
                    "در پروژه‌های ساده پیاده‌سازی کرده‌ام",
                    "در مدیریت خطا با Error Boundaries تسلط کامل دارم"
                ]
            },
            {
                "question": "چقدر با React Suspense آشنا هستید؟",
                "options": [
                    "اصلاً آشنا نیستم",
                    "شنیده‌ام اما استفاده نکرده‌ام",
                    "از Suspense برای lazy loading کامپوننت‌ها استفاده کرده‌ام",
                    "تجربه پیشرفته با Suspense در concurrent mode دارم"
                ]
            },
            {
                "question": "چگونه ارتباط بین کامپوننت‌ها را در React مدیریت می‌کنید؟",
                "options": [
                    "فقط از props drilling استفاده می‌کنم",
                    "از event handler و callback استفاده می‌کنم",
                    "از Context API برای اشتراک state سراسری استفاده می‌کنم",
                    "چندین روش را به طور موثر برای ارتباط کامپوننت‌ها ترکیب می‌کنم"
                ]
            },
            {
                "question": "چقدر در نوشتن Hooks سفارشی تجربه دارید؟",
                "options": [
                    "هرگز Hook سفارشی ننوشته‌ام",
                    "یک یا دو Hook سفارشی ساده نوشته‌ام",
                    "به طور منظم Hook سفارشی برای انتزاع منطق می‌نویسم",
                    "در طراحی Hook سفارشی پیچیده برای عملکرد و قابلیت استفاده مجدد تسلط کامل دارم"
                ]
            },
            {
                "question": "کدام ابزار build را عمدتاً برای پروژه‌های React استفاده می‌کنید؟",
                "options": [
                    "از ابزار build استفاده نمی‌کنم",
                    "از Create React App برای پروژه‌های پایه استفاده می‌کنم",
                    "از Vite یا پیکربندی سفارشی Webpack استفاده می‌کنم",
                    "تجربه با بهینه‌سازی‌های پیشرفته build و پیکربندی‌های سفارشی دارم"
                ]
            },
            {
                "question": "چقدر با مفاهیم امنیت وب در React آشنا هستید؟",
                "options": [
                    "اصلاً آشنا نیستم",
                    "دانش پایه دارم",
                    "می‌توانم راه‌حل‌های امنیتی پایه پیاده‌سازی کنم",
                    "تسلط کامل دارم و تست امنیت انجام می‌دهم"
                ]
            },
            {
                "question": "چقدر در تست کردن کامپوننت‌های React مهارت دارید؟",
                "options": [
                    "هرگز کامپوننت‌هایم را تست نکرده‌ام",
                    "تست‌های پایه با Jest انجام داده‌ام",
                    "از React Testing Library برای تست کامپوننت استفاده می‌کنم",
                    "تجربه پیشرفته با تست end-to-end با Cypress یا Playwright دارم"
                ]
            },
            {
                "question": "چرا می‌خواهید React یاد بگیرید؟",
                "options": [
                    "برای ورود به بازار کار",
                    "برای بهبود مهارت‌های فنی",
                    "برای ساخت اپلیکیشن‌های وب پویا و واکنش‌گرا",
                    "برای علاقه شخصی و ساخت پروژه‌های نوآورانه"
                ]
            },
            {
                "question": "چقدر زمان در هفته می‌توانید به یادگیری React اختصاص دهید؟",
                "options": [
                    "کمتر از 5 ساعت",
                    "5 تا 10 ساعت",
                    "10 تا 20 ساعت",
                    "بیش از 20 ساعت"
                ]
            }
        ],
        roadmap: {
            "ابزارهای CLI": [
                "Create React App",
                "Vite"
            ],
            "کامپوننت‌ها": {
                "پایه": [
                    "JSX",
                    "Props vs State",
                    "Conditional Rendering",
                    "Composition",
                    "Rendering",
                    "Lists and Keys"
                ],
                "انواع": [
                    "کامپوننت‌های تابعی",
                    "کامپوننت‌های کلاسی"
                ],
                "پیشرفته": [
                    "چرخه حیات کامپوننت",
                    "Render Props",
                    "Refs",
                    "رویدادها",
                    "کامپوننت‌های مرتبه بالا"
                ]
            },
            "Hooks": {
                "پایه": [
                    "useState",
                    "useEffect"
                ],
                "پیشرفته": [
                    "useRef",
                    "useCallback",
                    "useMemo",
                    "useReducer",
                    "useContext",
                    "نوشتن Hooks سفارشی",
                    "Hooks رایج"
                ]
            },
            "مسیریابی": [
                "React Router",
                "Reach Router"
            ],
            "مدیریت State": [
                "Context",
                "Zustand",
                "Redux / Toolkit",
                "MobX",
                "Recoil"
            ],
            "استایل‌دهی": [
                "Chakra UI",
                "Material UI",
                "Mantine",
                "Tailwind",
                "Styled Components",
                "Emotion"
            ],
            "فراخوانی API": {
                "GraphQL": [
                    "Apollo",
                    "Relay",
                    "Urql"
                ],
                "REST": [
                    "SWR",
                    "Axios",
                    "superagent",
                    "react-query"
                ]
            },
            "تست": [
                "Jest",
                "Vitest",
                "React Testing Library",
                "Cypress",
                "Playwright"
            ],
            "فریم‌ورک‌ها": [
                "Next.js",
                "Remix"
            ],
            "فرم‌ها": [
                "React Hook Form",
                "Formik",
                "Final Form"
            ],
            "موضوعات پیشرفته": [
                "Suspense",
                "Portals",
                "Error Boundaries",
                "معماری Fiber"
            ],
            "موبایل": [
                "React Native"
            ]
        }
    }
};

let currentPath = null;
let currentQuestionIndex = 0;
let userAnswers = {};

// نگاشت‌های فرانت‌اند
const frontendQuestionOptionToRoadmapKeys = {
    0: { // چقدر تجربه در توسعه فرانت‌اند دارید؟
        0: [
            "مبانی", "HTML", "CSS", "JavaScript",
            "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست",
            "استراتژی‌های احراز هویت", "مبانی امنیت وب", "کامپوننت‌های وب",
            "بررسی‌کننده‌های نوع", "فریم‌ورک‌های SSR", "GraphQL",
            "مولدهای سایت استاتیک", "PWA و اپلیکیشن‌های موبایل", "اپلیکیشن‌های دسکتاپ",
            "عملکرد", "ذخیره‌سازی و APIها", "APIهای مرورگر"
        ],
        1: [
            "مبانی", "HTML", "CSS", "JavaScript",
            "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت",
            "تست", "استراتژی‌های احراز هویت", "مبانی امنیت وب", "کامپوننت‌های وب"
        ],
        2: [
            "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "استراتژی‌های احراز هویت",
            "مبانی امنیت وب", "کامپوننت‌های وب", "بررسی‌کننده‌های نوع",
            "فریم‌ورک‌های SSR", "GraphQL", "مولدهای سایت استاتیک", "عملکرد"
        ],
        3: [
            "تست", "بررسی‌کننده‌های نوع", "GraphQL", "Performance", "PWA و اپلیکیشن‌های موبایل", "اپلیکیشن‌های دسکتاپ"
        ]
    },
    1: { // آیا تا به حال در تیم توسعه نرم‌افزار کار کرده‌اید؟
        0: [
            "مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج"
        ],
        1: [
            "کنترل نسخه", "مدیریت پکیج", "تست", "فریم‌ورک‌ها", "ابزارهای ساخت"
        ],
        2: [
            "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "عملکرد"
        ],
        3: [
            "تست", "عملکرد", "کامپوننت‌های وب"
        ]
    },
    2: { // حوزه‌های فرانت‌اند
        0: [
            "مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها"
        ],
        1: ["HTML", "CSS", "کامپوننت‌های وب"],
        2: ["JavaScript", "مدیریت پکیج", "تست"],
        3: ["فریم‌ورک‌ها", "ابزارهای ساخت", "بررسی‌کننده‌های نوع"]
    },
    3: { // پروژه‌های فرانت‌اند
        0: [
            "مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه"
        ],
        1: [
            "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها"
        ],
        2: [
            "ابزارهای ساخت", "تست"
        ],
        3: [
            "تست", "عملکرد"
        ]
    },
    4: { // مفاهیم HTTP، DNS و هاستینگ
        0: ["مبانی"],
        1: ["مبانی", "ذخیره‌سازی و APIها", "APIهای مرورگر"],
        2: ["ذخیره‌سازی و APIها", "APIهای مرورگر", "عملکرد"],
        3: ["عملکرد"]
    },
    5: { // کار مرورگرها و موتورهای رندرینگ
        0: ["مبانی"],
        1: ["عملکرد"],
        2: ["عملکرد", "کامپوننت‌های وب"],
        3: ["کامپوننت‌های وب"]
    },
    6: { // اصول HTML و HTML معنایی
        0: ["HTML", "دسترس‌پذیری", "مبانی SEO"],
        1: ["HTML", "دسترس‌پذیری", "مبانی SEO"],
        2: ["کامپوننت‌های وب", "مبانی SEO"],
        3: ["کامپوننت‌های وب"]
    },
    7: { // مهارت‌های CSS
        0: ["CSS", "طراحی واکنش‌گرا", "معماری CSS", "پیش‌پردازنده‌های CSS", "CSS-in-JS"],
        1: ["CSS", "طراحی واکنش‌گرا", "معماری CSS", "پیش‌پردازنده‌های CSS"],
        2: ["معماری CSS", "پیش‌پردازنده‌های CSS", "CSS-in-JS"],
        3: ["CSS-in-JS"]
    },
    8: { // اصول طراحی UI/UX و ابزارهای طراحی
        0: ["مبانی", "طراحی واکنش‌گرا", "عملکرد", "PWA و اپلیکیشن‌های موبایل"],
        1: ["طراحی واکنش‌گرا", "عملکرد", "PWA و اپلیکیشن‌های موبایل"],
        2: ["عملکرد", "PWA و اپلیکیشن‌های موبایل"],
        3: ["PWA و اپلیکیشن‌های موبایل"]
    },
    9: { // فریم‌ورک‌های CSS
        0: ["CSS", "پیش‌پردازنده‌های CSS", "CSS-in-JS"],
        1: ["پیش‌پردازنده‌های CSS", "CSS-in-JS"],
        2: ["CSS-in-JS"],
        3: []
    },
    10: { // مهارت JavaScript
        0: ["JavaScript", "مدیریت پکیج", "تست", "فریم‌ورک‌ها", "بررسی‌کننده‌های نوع"],
        1: ["مدیریت پکیج", "فریم‌ورک‌ها", "بررسی‌کننده‌های نوع"],
        2: ["فریم‌ورک‌ها", "بررسی‌کننده‌های نوع"],
        3: ["بررسی‌کننده‌های نوع"]
    },
    11: { // مفاهیم JavaScript
        0: ["JavaScript", "مدیریت پکیج", "ذخیره‌سازی و APIها", "فریم‌ورک‌ها"],
        1: ["مدیریت پکیج", "ذخیره‌سازی و APIها", "فریم‌ورک‌ها"],
        2: ["ذخیره‌سازی و APIها", "فریم‌ورک‌ها"],
        3: ["فریم‌ورک‌ها"]
    },
    12: { // Git و GitHub
        0: ["کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست"],
        1: ["مدیریت پکیج", "ابزارهای ساخت", "تست"],
        2: ["ابزارهای ساخت", "تست"],
        3: ["تست"]
    },
    13: { // دیباگ و تست کد
        0: ["مبانی", "تست", "عملکرد"],
        1: ["تست", "عملکرد"],
        2: ["تست"],
        3: ["تست"]
    },
    14: { // package manager
        0: ["مدیریت پکیج", "ابزارهای ساخت", "تست", "فریم‌ورک‌ها"],
        1: ["ابزارهای ساخت", "فریم‌ورک‌ها"],
        2: ["فریم‌ورک‌ها"],
        3: []
    },
    15: { // ابزارهای build module
        0: ["ابزارهای ساخت", "فریم‌ورک‌ها", "عملکرد"],
        1: ["فریم‌ورک‌ها", "عملکرد"],
        2: ["عملکرد"],
        3: []
    },
    16: { // امنیت وب
        0: ["مبانی امنیت وب", "استراتژی‌های احراز هویت", "ذخیره‌سازی و APIها", "عملکرد"],
        1: ["استراتژی‌های احراز هویت", "ذخیره‌سازی و APIها", "عملکرد"],
        2: ["ذخیره‌سازی و APIها", "عملکرد"],
        3: ["عملکرد"]
    },
    17: { // Lighthouse
        0: ["عملکرد", "APIهای مرورگر", "PWA و اپلیکیشن‌های موبایل", "مبانی امنیت وب"],
        1: ["APIهای مرورگر", "PWA و اپلیکیشن‌های موبایل", "مبانی امنیت وب"],
        2: ["PWA و اپلیکیشن‌های موبایل", "مبانی امنیت وب"],
        3: ["مبانی امنیت وب"]
    },
    18: { // چرا یادگیری
        0: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "عملکرد", "PWA و اپلیکیشن‌های موبایل"],
        1: ["فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "عملکرد", "PWA و اپلیکیشن‌های موبایل"],
        2: ["تست", "عملکرد", "PWA و اپلیکیشن‌های موبایل"],
        3: ["PWA و اپلیکیشن‌های موبایل"]
    },
    19: { // زمان در هفته
        0: ["مبانی", "HTML", "CSS", "JavaScript", "کنترل نسخه", "مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "عملکرد"],
        1: ["مدیریت پکیج", "فریم‌ورک‌ها", "ابزارهای ساخت", "تست", "عملکرد"],
        2: ["ابزارهای ساخت", "تست", "عملکرد"],
        3: ["تست", "عملکرد"]
    }
};


const backendQuestionOptionToRoadmapKeys = {
    0: { // چقدر تجربه در توسعه بک‌اند دارید؟
      0: [
          "زبان‌های برنامه‌نویسی", "مبانی اینترنت", "سیستم‌عامل‌ها", "کنترل نسخه",
          "پایگاه‌داده‌ها", "APIها", "وب سرورها", "احراز هویت و امنیت", "کش",
          "کارگزاران پیام", "تست‌نویسی", "CI/CD", "قابل مشاهده بودن",
          "طراحی نرم‌افزار و معماری", "الگوهای معماری", "موتورهای جستجو", "کانتینریزاسیون",
          "الگوریتم‌های هش", "مقیاس‌پذیری", "فریم‌ورک‌ها و ابزارها", "سرورلس", "استراتژی‌های مهاجرت"
      ],
      1: [
          "زبان‌های برنامه‌نویسی", "مبانی اینترنت", "سیستم‌عامل‌ها", "کنترل نسخه",
          "پایگاه‌داده‌ها", "APIها", "احراز هویت و امنیت", "وب سرورها", "کش", "تست‌نویسی"
      ],
      2: [
          "زبان‌های برنامه‌نویسی", "پایگاه‌داده‌ها", "APIها", "تست‌نویسی",
          "طراحی نرم‌افزار و معماری", "الگوهای معماری", "کارگزاران پیام", "CI/CD",
          "احراز هویت و امنیت", "مقیاس‌پذیری", "فریم‌ورک‌ها و ابزارها", "قابل مشاهده بودن"
      ],
      3: [
          "طراحی نرم‌افزار و معماری", "الگوهای معماری", "مقیاس‌پذیری", "CI/CD",
          "قابل مشاهده بودن", "استراتژی‌های مهاجرت", "سرورلس", "فریم‌ورک‌ها و ابزارها", "کانتینریزاسیون", "کارگزاران پیام"
      ]
    },
  
    1: { // پایگاه داده
      0: ["پایگاه‌داده‌ها", "مفاهیم پایگاه‌داده"],
      1: ["پایگاه‌داده‌ها"],
      2: ["پایگاه‌داده‌ها", "کش"],
      3: ["پایگاه‌داده‌ها", "کش", "موتورهای جستجو"]
    },
  
    2: { // زبان‌های برنامه‌نویسی بک‌اند
      0: ["زبان‌های برنامه‌نویسی"],
      1: ["زبان‌های برنامه‌نویسی", "فریم‌ورک‌ها و ابزارها"],
      2: ["زبان‌های برنامه‌نویسی", "فریم‌ورک‌ها و ابزارها"],
      3: ["فریم‌ورک‌ها و ابزارها"]
    },
  
    3: { // API و REST
      0: ["APIها"],
      1: ["APIها"],
      2: ["APIها", "GraphQL"],
      3: ["APIها", "GraphQL", "احراز هویت و امنیت"]
    },
  
    4: { // امنیت در بک‌اند
      0: ["احراز هویت و امنیت"],
      1: ["احراز هویت و امنیت"],
      2: ["احراز هویت و امنیت", "الگوریتم‌های هش"],
      3: ["احراز هویت و امنیت", "الگوریتم‌های هش"]
    },
  
    5: { // Auth/AuthZ
      0: ["احراز هویت و امنیت"],
      1: ["احراز هویت و امنیت"],
      2: ["احراز هویت و امنیت"],
      3: ["احراز هویت و امنیت"]
    },
  
    6: { // Microservices
      0: ["الگوهای معماری", "طراحی نرم‌افزار و معماری"],
      1: ["الگوهای معماری", "مقیاس‌پذیری"],
      2: ["الگوهای معماری", "طراحی نرم‌افزار و معماری", "کانتینریزاسیون", "مقیاس‌پذیری"],
      3: ["الگوهای معماری", "طراحی نرم‌افزار و معماری", "کانتینریزاسیون", "کارگزاران پیام"]
    },
  
    7: { // Docker و Containerization
      0: ["کانتینریزاسیون"],
      1: ["کانتینریزاسیون"],
      2: ["کانتینریزاسیون", "فریم‌ورک‌ها و ابزارها"],
      3: ["کانتینریزاسیون", "فریم‌ورک‌ها و ابزارها", "CI/CD"]
    },
  
    8: { // Caching
      0: ["کش"],
      1: ["کش"],
      2: ["کش", "احراز هویت و امنیت"],
      3: ["کش", "احراز هویت و امنیت"]
    },
  
    9: { // Message Queue
      0: ["کارگزاران پیام"],
      1: ["کارگزاران پیام"],
      2: ["کارگزاران پیام", "تست‌نویسی"],
      3: ["کارگزاران پیام", "تست‌نویسی"]
    },
  
    10: { // System Design
      0: ["طراحی نرم‌افزار و معماری"],
      1: ["طراحی نرم‌افزار و معماری"],
      2: ["طراحی نرم‌افزار و معماری", "الگوهای معماری"],
      3: ["طراحی نرم‌افزار و معماری", "الگوهای معماری"]
    },
  
    11: { // Load Balancing
      0: ["مقیاس‌پذیری", "وب سرورها"],
      1: ["مقیاس‌پذیری"],
      2: ["مقیاس‌پذیری", "وب سرورها"],
      3: ["مقیاس‌پذیری", "وب سرورها"]
    },
  
    12: { // Scaling
      0: ["مقیاس‌پذیری"],
      1: ["مقیاس‌پذیری"],
      2: ["مقیاس‌پذیری"],
      3: ["مقیاس‌پذیری"]
    },
  
    13: { // Monitoring و Logging
      0: ["قابل مشاهده بودن"],
      1: ["قابل مشاهده بودن"],
      2: ["قابل مشاهده بودن"],
      3: ["قابل مشاهده بودن", "CI/CD"]
    },
  
    14: { // Cloud Computing
      0: ["سرورلس"],
      1: ["سرورلس"],
      2: ["سرورلس", "استراتژی‌های مهاجرت"],
      3: ["سرورلس", "استراتژی‌های مهاجرت"]
    },
  
    15: { // Infrastructure as Code
      0: ["CI/CD"],
      1: ["CI/CD"],
      2: ["CI/CD", "فریم‌ورک‌ها و ابزارها"],
      3: ["CI/CD", "فریم‌ورک‌ها و ابزارها"]
    },
  
    16: { // CI/CD
      0: ["CI/CD"],
      1: ["CI/CD"],
      2: ["CI/CD"],
      3: ["CI/CD"]
    },
  
    17: { // DevOps
      0: ["CI/CD", "فریم‌ورک‌ها و ابزارها"],
      1: ["CI/CD"],
      2: ["CI/CD", "فریم‌ورک‌ها و ابزارها"],
      3: ["CI/CD", "فریم‌ورک‌ها و ابزارها", "سرورلس"]
    },
  
    18: { // Agile و Scrum
      0: ["CI/CD"],
      1: ["CI/CD"],
      2: ["CI/CD"],
      3: ["CI/CD"]
    },
  
    19: { // Testing و Unit Testing
      0: ["تست‌نویسی"],
      1: ["تست‌نویسی"],
      2: ["تست‌نویسی", "CI/CD"],
      3: ["تست‌نویسی", "CI/CD"]
    }
  };
  

const fullstackQuestionOptionToRoadmapKeys = {
    0: { // چقدر تجربه در توسعه فول‌استک دارید؟
      0: ["مبانی فرانت‌اند", "فریم‌ورک‌های فرانت‌اند", "توسعه بک‌اند", "دانش DevOps", "نکات اضافی"], // مبتدی: کل اشاره‌رودمپ
      1: ["مبانی فرانت‌اند", "فریم‌ورک‌های فرانت‌اند", "توسعه بک‌اند"], // پایه: مبانی+اصلی
      2: ["فریم‌ورک‌های فرانت‌اند", "توسعه بک‌اند", "دانش DevOps"], // متوسط: به سمت حرفه‌ای
      3: ["دانش DevOps", "نکات اضافی"] // پیشرفته: تکمیل و gap
    },
    1: { // آشنایی با هر دو بخش فرانت و بک‌اند
      0: ["مبانی فرانت‌اند", "توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند", "دانش DevOps", "نکات اضافی"],
      1: ["مبانی فرانت‌اند", "توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند"],
      2: ["توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    2: { // زبان‌های برنامه‌نویسی
      0: ["مبانی فرانت‌اند", "توسعه بک‌اند"],
      1: ["مبانی فرانت‌اند", "فریم‌ورک‌های فرانت‌اند", "توسعه بک‌اند"],
      2: ["فریم‌ورک‌های فرانت‌اند", "توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps"] // اگر حرفه‌ای پس فقط DevOps کم داره
    },
    3: { // پایگاه داده
      0: ["توسعه بک‌اند"], // کاملاً مبتدی باید با دیتابیس آشنا بشه
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"], // متوسط به دیتا و DevOps هم نیاز داره
      3: ["دانش DevOps", "نکات اضافی"] // پیشرفته gapش همینه
    },
    4: { // API و REST
      0: ["توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند", "مبانی فرانت‌اند"],
      1: ["توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند"],
      2: ["توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    5: { // امنیت
      0: ["توسعه بک‌اند", "دانش DevOps"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    6: { // Auth/AuthZ
      0: ["توسعه بک‌اند", "مبانی فرانت‌اند"], // مبتدی باید کل احراز هویت را لمس کند
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    7: { // Docker و کانتینر
      0: ["دانش DevOps", "توسعه بک‌اند", "نکات اضافی"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    8: { // CI/CD
      0: ["دانش DevOps", "نکات اضافی"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps"]
    },
    9: { // Microservices
      0: ["توسعه بک‌اند", "دانش DevOps", "نکات اضافی"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    10: { // System Design
      0: ["توسعه بک‌اند", "نکات اضافی"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    11: { // Caching
      0: ["توسعه بک‌اند", "نکات اضافی"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    12: { // Message Queue
      0: ["توسعه بک‌اند", "دانش DevOps", "نکات اضافی"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    13: { // Load Balancing
      0: ["دانش DevOps"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    14: { // Scaling
      0: ["توسعه بک‌اند", "دانش DevOps", "نکات اضافی"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "دانش DevOps"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    15: { // Monitoring و Logging
      0: ["دانش DevOps", "نکات اضافی"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    16: { // Cloud
      0: ["دانش DevOps", "نکات اضافی"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    17: { // IaC
      0: ["دانش DevOps", "نکات اضافی"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    18: { // آشنایی با مفاهیم DevOps
      0: ["دانش DevOps", "نکات اضافی"],
      1: ["دانش DevOps"],
      2: ["دانش DevOps", "نکات اضافی"],
      3: ["دانش DevOps", "نکات اضافی"]
    },
    19: { // Agile و Scrum
      0: ["نکات اضافی"],
      1: ["نکات اضافی"],
      2: ["نکات اضافی"],
      3: ["نکات اضافی"]
    },
    20: { // Testing/Unit Testing
      0: ["توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند", "نکات اضافی"],
      1: ["توسعه بک‌اند"],
      2: ["توسعه بک‌اند", "فریم‌ورک‌های فرانت‌اند"],
      3: ["نکات اضافی"]
    }
  };  

// نگاشت‌های React
const reactQuestionOptionToRoadmapKeys = {
    0: { // چقدر تجربه در React دارید؟
        0: [
            "ابزارهای CLI", "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته", "موبایل"
        ],
        1: [
            "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته", "موبایل"
        ],
        2: [
            "مسیریابی", "مدیریت State", "استایل‌دهی",
            "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته", "موبایل"
        ],
        3: [
            "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته", "موبایل"
        ]
    },
    1: { // همکاری تیمی در React
        0: [
            "ابزارهای CLI", "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "مدیریت State", "استایل‌دهی", "فراخوانی API",
            "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ]
    },
    2: { // حوزه های یادگیری React
        0: [
            "ابزارهای CLI", "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "مدیریت State", "استایل‌دهی", "فراخوانی API",
            "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    3: { // ساخت پروژه با React
        0: [
            "ابزارهای CLI", "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "مسیریابی", "مدیریت State", "استایل‌دهی",
            "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    4: { // آشنایی با JSX
        0: [
            "کامپوننت‌ها", "ابزارهای CLI", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "کامپوننت‌ها", "Hooks", "مسیریابی",
            "مدیریت State", "استایل‌دهی", "فراخوانی API",
            "تست", "فریم‌ورک‌ها", "فرم‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فرم‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    5: { // آشنایی با Hooks
        0: [
            "Hooks", "کامپوننت‌ها", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "مسیریابی", "مدیریت State", "استایل‌دهی",
            "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "مدیریت State", "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    6: { // کار با SideEffect
        0: [
            "Hooks", "کامپوننت‌ها", "فراخوانی API", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "فراخوانی API", "مدیریت State", "استایل‌دهی",
            "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "مدیریت State", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    7: { // آشنایی با React Router
        0: [
            "مسیریابی", "کامپوننت‌ها", "مدیریت State", "Hooks", "استایل‌دهی",
            "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "مدیریت State", "فریم‌ورک‌ها", "تست", "موضوعات پیشرفته"
        ],
        2: [
            "فریم‌ورک‌ها", "تست", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    8: { // مدیریت state
        0: [
            "مدیریت State", "کامپوننت‌ها", "Hooks", "فراخوانی API", "استایل‌دهی",
            "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "Hooks", "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    9: { // روش های استایل دهی
        0: [
            "استایل‌دهی", "کامپوننت‌ها", "Hooks", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "فریم‌ورک‌ها", "کامپوننت‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    10: { // آشنایی با فراخوانی API
        0: [
            "فراخوانی API", "مدیریت State", "تست", "کامپوننت‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "تست", "کامپوننت‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "تست", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    11: { // Error Boundaries
        0: [
            "کامپوننت‌ها", "موضوعات پیشرفته", "تست", "فریم‌ورک‌ها"
        ],
        1: [
            "موضوعات پیشرفته", "تست", "فریم‌ورک‌ها"
        ],
        2: [
            "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    12: { // Suspense
        0: [
            "کامپوننت‌ها", "موضوعات پیشرفته", "فریم‌ورک‌ها", "فراخوانی API"
        ],
        1: [
            "موضوعات پیشرفته", "فریم‌ورک‌ها", "فراخوانی API"
        ],
        2: [
            "فریم‌ورک‌ها", "فراخوانی API", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    13: { // مدیریت ارتباط بین کامپوننت‌ها
        0: [
            "کامپوننت‌ها", "مدیریت State", "Hooks", "موضوعات پیشرفته"
        ],
        1: [
            "مدیریت State", "Hooks", "موضوعات پیشرفته"
        ],
        2: [
            "Hooks", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    14: { // نوشتن Hooks سفارشی
        0: [
            "Hooks", "مدیریت State", "فراخوانی API", "موضوعات پیشرفته"
        ],
        1: [
            "مدیریت State", "فراخوانی API", "موضوعات پیشرفته"
        ],
        2: [
            "فراخوانی API", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    15: { // ابزار Build
        0: [
            "ابزارهای CLI", "فریم‌ورک‌ها", "تست", "موضوعات پیشرفته"
        ],
        1: [
            "فریم‌ورک‌ها", "تست", "موضوعات پیشرفته"
        ],
        2: [
            "تست", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    16: { // امنیت وب
        0: [
            "کامپوننت‌ها", "فراخوانی API", "تست", "موضوعات پیشرفته"
        ],
        1: [
            "فراخوانی API", "تست", "موضوعات پیشرفته"
        ],
        2: [
            "تست", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    17: { // مهارت تست
        0: [
            "تست", "کامپوننت‌ها", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        1: [
            "کامپوننت‌ها", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        2: [
            "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    18: { // هدف از یادگیری ری‌اکت
        0: [
            "ابزارهای CLI", "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها", "فرم‌ها"
        ],
        1: [
            "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها"
        ],
        2: [
            "مسیریابی", "مدیریت State", "استایل‌دهی",
            "فراخوانی API", "تست", "فریم‌ورک‌ها", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    },
    19: { // زمان یادگیری
        0: [
            "ابزارهای CLI", "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست", "فریم‌ورک‌ها"
        ],
        1: [
            "کامپوننت‌ها", "Hooks", "مسیریابی", "مدیریت State",
            "استایل‌دهی", "فراخوانی API", "تست"
        ],
        2: [
            "مسیریابی", "مدیریت State", "استایل‌دهی", "فراخوانی API", "تست", "موضوعات پیشرفته"
        ],
        3: [
            "موضوعات پیشرفته"
        ]
    }
};


const devopsQuestionOptionToRoadmapKeys = {
    0: { // چقدر تجربه در DevOps دارید؟
      0: [ // مبتدی: همه‌چیز از صفر تا صد
        "سیستم‌عامل‌ها", "ویرایشگرها", "مهارت‌های ترمینال", "اسکریپت‌نویسی", "کنترل نسخه", "شبکه",
        "وب سرورها", "زبان‌های برنامه‌نویسی", "کانتینرها", "ارکستراسیون کانتینر", "تدارک زیرساخت",
        "مدیریت پیکربندی", "ابزارهای CI/CD", "GitOps", "Service Mesh", "ارائه‌دهندگان ابری",
        "سرورلس", "مانیتورینگ", "مدیریت لاگ‌ها", "مدیریت اسرار", "مدیریت آرتیفکت", "الگوهای طراحی ابری"
      ],
      1: [ // پایه: همه مبانی و ابزارهای ارتباطی
        "سیستم‌عامل‌ها", "ویرایشگرها", "مهارت‌های ترمینال", "اسکریپت‌نویسی", "کنترل نسخه",
        "شبکه", "وب سرورها", "زبان‌های برنامه‌نویسی"
      ],
      2: [ // متوسط: تخصص اصلی حوزه DevOps
        "کانتینرها", "ارکستراسیون کانتینر", "تدارک زیرساخت", "مدیریت پیکربندی",
        "ابزارهای CI/CD", "ارائه‌دهندگان ابری", "مانیتورینگ", "مدیریت لاگ‌ها", "مدیریت اسرار"
      ],
      3: [ // پیشرفته: gap و تکمیل حرفه‌ای
        "GitOps", "Service Mesh", "سرورلس", "الگوهای طراحی ابری", "مدیریت آرتیفکت"
      ]
    },
  
    1: { // مفاهیم CI/CD
      0: ["ابزارهای CI/CD"], // برای مبتدی‌ها اضافه میشه پلکانی
      1: ["ابزارهای CI/CD"],
      2: ["ابزارهای CI/CD", "GitOps"],
      3: ["ابزارهای CI/CD", "GitOps", "Service Mesh"]
    },
  
    2: { // آشنایی با Linux و Bash
      0: ["سیستم‌عامل‌ها", "ویرایشگرها", "مهارت‌های ترمینال", "اسکریپت‌نویسی"], // همه مبانی لینوکسی
      1: ["سیستم‌عامل‌ها", "ویرایشگرها", "اسکریپت‌نویسی"],
      2: ["سیستم‌عامل‌ها", "مهارت‌های ترمینال"],
      3: ["مهارت‌های ترمینال"]
    },
  
    3: { // آشنایی با Docker و کانتینر
      0: ["کانتینرها", "ارکستراسیون کانتینر", "Service Mesh"], // کامل
      1: ["کانتینرها"],
      2: ["کانتینرها", "ارکستراسیون کانتینر"],
      3: ["ارکستراسیون کانتینر", "Service Mesh"]
    },
  
    4: { // آشنایی با Kubernetes
      0: ["ارکستراسیون کانتینر", "Service Mesh", "GitOps"], // کامل
      1: ["ارکستراسیون کانتینر"],
      2: ["ارکستراسیون کانتینر", "Service Mesh"],
      3: ["Service Mesh", "GitOps"]
    },
    
    5: { // IaC
      0: ["تدارک زیرساخت", "مدیریت پیکربندی"], // کامل
      1: ["تدارک زیرساخت"],
      2: ["تدارک زیرساخت", "مدیریت پیکربندی"],
      3: ["مدیریت پیکربندی", "GitOps"]
    },
    
    6: { // Monitoring و Logging
      0: ["مانیتورینگ", "مدیریت لاگ‌ها", "Service Mesh"], // کامل
      1: ["مانیتورینگ", "مدیریت لاگ‌ها"],
      2: ["مانیتورینگ", "مدیریت لاگ‌ها"],
      3: ["مدیریت لاگ‌ها", "Service Mesh"]
    },
    
    7: { // Cloud Platforms
      0: ["ارائه‌دهندگان ابری", "سرورلس", "الگوهای طراحی ابری"], // کامل
      1: ["ارائه‌دهندگان ابری"],
      2: ["ارائه‌دهندگان ابری", "سرورلس"],
      3: ["سرورلس", "الگوهای طراحی ابری"]
    },
    
    8: { // Security
      0: ["مدیریت اسرار", "شبکه", "الگوهای طراحی ابری"], // کامل
      1: ["شبکه", "مدیریت اسرار"],
      2: ["مدیریت اسرار", "شبکه"],
      3: ["مدیریت اسرار", "الگوهای طراحی ابری"]
    },
    
    9: { // Scripting and Automation
      0: ["اسکریپت‌نویسی", "زبان‌های برنامه‌نویسی", "مهارت‌های ترمینال"], // کامل
      1: ["اسکریپت‌نویسی"],
      2: ["زبان‌های برنامه‌نویسی", "مهارت‌های ترمینال"],
      3: ["مهارت‌های ترمینال"]
    },
    
    10: { // Load Balancing
      0: ["وب سرورها", "شبکه", "Service Mesh"], // کامل
      1: ["وب سرورها"],
      2: ["شبکه"],
      3: ["Service Mesh"]
    },
    
    11: { // Scaling
      0: ["ارکستراسیون کانتینر", "الگوهای طراحی ابری", "Service Mesh"], // کامل
      1: ["ارکستراسیون کانتینر"],
      2: ["ارکستراسیون کانتینر", "الگوهای طراحی ابری"],
      3: ["الگوهای طراحی ابری", "Service Mesh"]
    },
    
    12: { // Microservices
      0: ["ارکستراسیون کانتینر", "Service Mesh", "الگوهای طراحی ابری"], // کامل
      1: ["ارکستراسیون کانتینر"],
      2: ["Service Mesh"],
      3: ["Service Mesh", "الگوهای طراحی ابری"]
    },
    
    13: { // Caching
      0: ["الگوهای طراحی ابری", "Service Mesh"], // کامل
      1: ["الگوهای طراحی ابری"],
      2: ["الگوهای طراحی ابری"],
      3: ["Service Mesh"]
    },
    
    14: { // Message Queue
      0: ["الگوهای طراحی ابری", "Service Mesh"], // کامل
      1: ["الگوهای طراحی ابری"],
      2: ["الگوهای طراحی ابری"],
      3: ["Service Mesh"]
    },
    
    15: { // System Design
      0: ["الگوهای طراحی ابری", "Service Mesh"], // کامل
      1: ["الگوهای طراحی ابری"],
      2: ["الگوهای طراحی ابری"],
      3: ["Service Mesh"]
    },
    
    16: { // Agile و Scrum
      0: ["ابزارهای CI/CD", "GitOps"], // کامل
      1: ["ابزارهای CI/CD"],
      2: ["GitOps"],
      3: ["GitOps", "Service Mesh"]
    },
    
    17: { // Testing / Unit Testing
      0: ["ابزارهای CI/CD", "GitOps"], // کامل
      1: ["ابزارهای CI/CD"],
      2: ["GitOps"],
      3: ["GitOps"]
    },
    
    18: { // API و REST
      0: ["شبکه", "Service Mesh", "الگوهای طراحی ابری"], // کامل
      1: ["شبکه"],
      2: ["Service Mesh"],
      3: ["Service Mesh", "الگوهای طراحی ابری"]
    },
    
    19: { // پایگاه داده‌ها
      0: ["الگوهای طراحی ابری", "مدیریت آرتیفکت"], // کامل
      1: ["الگوهای طراحی ابری"],
      2: ["الگوهای طراحی ابری"],
      3: ["مدیریت آرتیفکت"]
    }
  };
  

function mapAnswersToRoadmap(answers, path) {
    const roadmap = data[path].roadmap;
    const selectedSections = new Set();
    let mapping;
    
    switch(path) {
        case 'frontend':
            mapping = frontendQuestionOptionToRoadmapKeys;
            break;
        case 'backend':
            mapping = backendQuestionOptionToRoadmapKeys;
            break;
        case 'devops':
            mapping = devopsQuestionOptionToRoadmapKeys;
            break;
        case 'fullstack':
            mapping = fullstackQuestionOptionToRoadmapKeys;
            break;
        case 'react':
            mapping = reactQuestionOptionToRoadmapKeys;
            break;
        default:
            mapping = {};
    }

    // پردازش پاسخ‌های کاربر
    Object.entries(answers).forEach(([qIdx, answer]) => {
        const questionMapping = mapping[qIdx];
        if (!questionMapping) return;

        if (Array.isArray(answer)) {
            // برای سوالات چند گزینه‌ای
            answer.forEach(optIdx => {
                (questionMapping[optIdx] || []).forEach(key => selectedSections.add(key));
            });
        } else {
            // برای سوالات تک گزینه‌ای
            (questionMapping[answer] || []).forEach(key => selectedSections.add(key));
        }
    });

    // اضافه کردن بخش‌های پایه برای مبتدیان
    if (answers[0] <= 1) {
        if (path === 'frontend') {
            selectedSections.add("مبانی فرانت‌اند");
            selectedSections.add("فریم‌ورک‌های فرانت‌اند");
        } else if (path === 'backend') {
            selectedSections.add("زبان‌های برنامه‌نویسی");
            selectedSections.add("مبانی اینترنت");
            selectedSections.add("سیستم‌عامل‌ها");
            selectedSections.add("کنترل نسخه");
        } else if (path === 'devops') {
            selectedSections.add("سیستم‌عامل‌ها");
            selectedSections.add("ویرایشگرها");
            selectedSections.add("اسکریپت‌نویسی");
            selectedSections.add("کنترل نسخه");
        } else if (path === 'fullstack') {
            selectedSections.add("مبانی فرانت‌اند");
            selectedSections.add("توسعه بک‌اند");
        } else if (path === 'react') {
            selectedSections.add("ابزارهای CLI");
            selectedSections.add("کامپوننت‌ها");
        }
    }

    // اگر هیچ بخشی انتخاب نشده، بخش‌های پایه را نمایش بده
    if (selectedSections.size === 0) {
        if (path === 'frontend') {
            selectedSections.add("مبانی فرانت‌اند");
            selectedSections.add("فریم‌ورک‌های فرانت‌اند");
        } else if (path === 'backend') {
            selectedSections.add("زبان‌های برنامه‌نویسی");
            selectedSections.add("مبانی اینترنت");
            selectedSections.add("سیستم‌عامل‌ها");
            selectedSections.add("کنترل نسخه");
        } else if (path === 'devops') {
            selectedSections.add("سیستم‌عامل‌ها");
            selectedSections.add("ویرایشگرها");
            selectedSections.add("اسکریپت‌نویسی");
            selectedSections.add("کنترل نسخه");
        } else if (path === 'fullstack') {
            selectedSections.add("مبانی فرانت‌اند");
            selectedSections.add("توسعه بک‌اند");
        } else if (path === 'react') {
            selectedSections.add("ابزارهای CLI");
            selectedSections.add("کامپوننت‌ها");
        }
    }

    return Array.from(selectedSections);
}

// تابع برای بارگذاری فایل JSON
function loadJSON(path, callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.path-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            currentPath = button.dataset.path;
            currentQuestionIndex = 0;
            userAnswers = {};
            showQuestion(data[currentPath].questions);
        });
    });
});

function handleAnswerSelection(btn, question, questions) {
    if (question.type === 'multiple') {
        // Toggle selection for multiple choice
        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');
            const index = userAnswers[currentQuestionIndex].indexOf(parseInt(btn.dataset.answer));
            if (index > -1) {
                userAnswers[currentQuestionIndex].splice(index, 1);
            }
        } else {
            btn.classList.add('selected');
            if (!userAnswers[currentQuestionIndex]) {
                userAnswers[currentQuestionIndex] = [];
            }
            userAnswers[currentQuestionIndex].push(parseInt(btn.dataset.answer));
        }
    } else {
        // Single choice - select and move to next
        document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        userAnswers[currentQuestionIndex] = parseInt(btn.dataset.answer);
        
        // Move to next question after a short delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(questions);
            } else {
                showRoadmap(data[currentPath].roadmap);
            }
        }, 250);
    }
}

function showQuestion(questions) {
    const question = questions[currentQuestionIndex];
    
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
        <h1>${question.question}</h1>
        <p class="question-counter">سوال ${currentQuestionIndex + 1} از ${questions.length}</p>
        <div class="buttons-container">
            ${question.options.map((option, index) => `
                <button class="answer-btn" data-answer="${index}">${option}</button>
            `).join('')}
        </div>
    `;

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Single choice - select and move to next
            answerButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            userAnswers[currentQuestionIndex] = parseInt(btn.dataset.answer);
            
            // Move to next question after a short delay
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion(questions);
                } else {
                    showRoadmap(data[currentPath].roadmap);
                }
            }, 250);
        });
    });
}

function showRoadmap(roadmap) {
    const selectedKeys = mapAnswersToRoadmap(userAnswers, currentPath);
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

    html += '</div><div class="buttons-container"><button class="path-btn" onclick="restartApp()">شروع مجدد</button></div>';
    mainContainer.innerHTML = html;
}
