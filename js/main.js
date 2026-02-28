// Language and Theme Toggle Script

// Translations object
const translations = {
    // Index page
    'index': {
        // Landing page translations
        'landing_title': {
            'zh': '神经表观遗传学课题组',
            'en': 'Neuroepigenetics Research Group'
        },
        'landing_subtitle': {
            'zh': '',
            'en': ''
        },
        'landing_inst': {
            'zh': '武汉大学医学研究院 | 武汉大学中南医院<br><span style="font-size:0.7em">Medical Research Institute & Zhongnan Hospital of Wuhan University</span>',
            'en': 'Medical Research Institute | Zhongnan Hospital of Wuhan University<br><span style="font-size:0.7em">武汉大学医学研究院 | 武汉大学中南医院</span>'
        },
        'landing_scroll': {
            'zh': '探索更多',
            'en': 'Explore More'
        },
        'hero_title': {
            'zh': '探索大脑的表观遗传密码',
            'en': 'Exploring the Epigenetic Code of the Brain'
        },
        'hero_subtitle': {
            'zh': '研究神经发育、plasticity与疾病中的表观遗传调控机制',
            'en': 'Studying epigenetic regulation in neural development, plasticity and disease'
        },
        'learn_more': {
            'zh': '了解更多',
            'en': 'Learn More'
        },
        'dna_methylation': {
            'zh': 'DNA甲基化',
            'en': 'DNA Methylation'
        },
        'dna_methylation_desc': {
            'zh': '研究神经元中DNA甲基化模式的建立与动态调控',
            'en': 'Studying the establishment and dynamic regulation of DNA methylation patterns in neurons'
        },
        'histone_modification': {
            'zh': '组蛋白修饰',
            'en': 'Histone Modification'
        },
        'histone_modification_desc': {
            'zh': '探索组蛋白修饰在神经发育和功能中的作用',
            'en': 'Exploring the role of histone modifications in neural development and function'
        },
        'noncoding_rna': {
            'zh': '非编码RNA',
            'en': 'Non-coding RNA'
        },
        'noncoding_rna_desc': {
            'zh': '解析miRNA和lncRNA在神经系统中的调控网络',
            'en': 'Analyzing the regulatory network of miRNA and lncRNA in nervous system'
        },
        'chromatin_remodeling': {
            'zh': '染色质重塑',
            'en': 'Chromatin Remodeling'
        },
        'chromatin_remodeling_desc': {
            'zh': '研究染色质结构对基因表达的调控机制',
            'en': 'Studying the regulatory mechanism of chromatin structure on gene expression'
        },
        'latest_news': {
            'zh': '最新动态',
            'en': 'Latest News'
        },
        'news1': {
            'zh': '祝贺课题组获得国家自然科学基金重点项目',
            'en': 'Congratulations to our group for receiving the Key Project of National Natural Science Foundation'
        },
        'news2': {
            'zh': '研究成果在Nature Neuroscience发表',
            'en': 'Research findings published in Nature Neuroscience'
        },
        'news3': {
            'zh': '成功举办第八届神经表观遗传学研讨会',
            'en': 'Successfully hosted the 8th Neuroepigenetics Symposium'
        }
    },
    // About page
    'about': {
        'title': {
            'zh': '关于我们',
            'en': 'About Us'
        },
        'subtitle': {
            'zh': '致力于神经表观遗传学前沿研究',
            'en': 'Committed to frontier research in Neuroepigenetics'
        },
        'intro_title': {
            'zh': '课题组简介',
            'en': 'Group Introduction'
        },
        'intro_text': {
            'zh': '神经表观遗传学课题组成立于2015年，隶属于国家重点实验室。课题组聚焦于神经系统发育、功能调控及疾病发生过程中的表观遗传机制研究。我们整合分子生物学、神经科学、计算生物学等多学科方法，旨在揭示大脑复杂调控网络的分子基础。',
            'en': 'The Neuroepigenetics Research Group was established in 2015, affiliated with the National Key Laboratory. Our group focuses on epigenetic mechanisms in nervous system development, functional regulation, and disease pathogenesis. We integrate multidisciplinary approaches including molecular biology, neuroscience, and computational biology to reveal the molecular basis of complex brain regulatory networks.'
        },
        'mission_title': {
            'zh': '研究使命',
            'en': 'Research Mission'
        },
        'mission_text': {
            'zh': '我们的研究旨在回答以下核心科学问题：',
            'en': 'Our research aims to answer the following key scientific questions:'
        },
        'mission_q1': {
            'zh': '神经发育过程中表观遗传修饰是如何建立和动态调控的？',
            'en': 'How are epigenetic modifications established and dynamically regulated during neural development?'
        },
        'mission_q2': {
            'zh': '环境因素如何通过表观遗传机制影响神经功能？',
            'en': 'How do environmental factors affect neural function through epigenetic mechanisms?'
        },
        'mission_q3': {
            'zh': '表观遗传异常如何参与神经精神疾病的发生？',
            'en': 'How do epigenetic abnormalities contribute to neuropsychiatric diseases?'
        },
        'mission_q4': {
            'zh': '能否通过干预表观遗传来治疗神经系统疾病？',
            'en': 'Can neurological diseases be treated through epigenetic interventions?'
        },
        'platform_title': {
            'zh': '研究平台',
            'en': 'Research Platforms'
        },
        'platform_text': {
            'zh': '课题组拥有完善的实验平台，包括：',
            'en': 'The group has comprehensive experimental platforms, including:'
        },
        'platform1': {
            'zh': '高通量测序平台（ChIP-seq、RNA-seq、ATAC-seq等）',
            'en': 'High-throughput sequencing platform (ChIP-seq, RNA-seq, ATAC-seq, etc.)'
        },
        'platform2': {
            'zh': '神经细胞培养与分化系统',
            'en': 'Neural cell culture and differentiation system'
        },
        'platform3': {
            'zh': '动物行为学实验平台',
            'en': 'Animal behavior experimental platform'
        },
        'platform4': {
            'zh': '生物信息学分析工作站',
            'en': 'Bioinformatics analysis workstation'
        },
        'platform5': {
            'zh': '蛋白质组学与代谢组学平台',
            'en': 'Proteomics and metabolomics platform'
        },
        'collab_title': {
            'zh': '合作交流',
            'en': 'Collaboration'
        },
        'collab_text': {
            'zh': '课题组与国内外多个顶尖研究机构建立了紧密的合作关系，包括斯坦福大学、MIT、牛津大学、清华大学、北京大学等。我们定期举办学术研讨会，邀请领域内知名学者来访交流。',
            'en': 'The group has established close collaborative relationships with top research institutions worldwide, including Stanford University, MIT, Oxford University, Tsinghua University, Peking University, etc. We regularly host academic seminars and invite renowned scholars in the field for exchange.'
        }
    },
    // Research page
    'research': {
        'title': {
            'zh': '研究方向',
            'en': 'Research Areas'
        },
        'subtitle': {
            'zh': '聚焦神经表观遗传学前沿领域',
            'en': 'Focusing on frontier areas of Neuroepigenetics'
        },
        'r1_title': {
            'zh': '1. 神经发育的表观遗传调控',
            'en': '1. Epigenetic Regulation of Neural Development'
        },
        'r1_desc': {
            'zh': '研究胚胎发育和成体神经发生过程中，DNA甲基化、组蛋白修饰、染色质重塑等表观遗传机制如何协同调控神经干细胞的增殖、分化和功能建立。我们特别关注关键发育窗口期的表观遗传编程与重编程机制。',
            'en': 'Studying how epigenetic mechanisms such as DNA methylation, histone modifications, and chromatin remodeling cooperatively regulate neural stem cell proliferation, differentiation, and functional establishment during embryonic development and adult neurogenesis. We particularly focus on epigenetic programming and reprogramming during critical developmental windows.'
        },
        'r2_title': {
            'zh': '2. 神经活动的表观遗传调控',
            'en': '2. Epigenetic Regulation of Neural Activity'
        },
        'r2_desc': {
            'zh': '探索神经活动依赖的表观遗传修饰变化，包括神经元激活后组蛋白修饰的动态改变、DNA甲基化的可塑性调节，以及这些变化如何参与学习记忆、行为适应等高级神经功能。',
            'en': 'Exploring activity-dependent epigenetic modifications, including dynamic changes of histone modifications after neuronal activation, plastic regulation of DNA methylation, and how these changes participate in higher neural functions like learning and memory and behavioral adaptation.'
        },
        'r3_title': {
            'zh': '3. 神经疾病的表观遗传机制',
            'en': '3. Epigenetic Mechanisms in Neurological Diseases'
        },
        'r3_desc': {
            'zh': '研究阿尔茨海默病、帕金森病、抑郁症、精神分裂症等神经精神疾病中的表观遗传异常。我们致力于发现疾病特异性的表观遗传标志物，并探索表观遗传干预策略在疾病治疗中的潜力。',
            'en': 'Studying epigenetic abnormalities in neuropsychiatric diseases such as Alzheimer\'s disease, Parkinson\'s disease, depression, and schizophrenia. We are dedicated to discovering disease-specific epigenetic biomarkers and exploring the potential of epigenetic intervention strategies in disease treatment.'
        },
        'r4_title': {
            'zh': '4. 环境因素与神经表观遗传',
            'en': '4. Environmental Factors and Neuroepigenetics'
        },
        'r4_desc': {
            'zh': '研究外界环境因素（如应激、营养、药物、毒素）如何通过表观遗传机制影响神经系统发育和功能。特别关注母体应激、early-life stress对子代神经发育和行为的长期影响及其表观遗传机制。',
            'en': 'Studying how external environmental factors (such as stress, nutrition, drugs, toxins) affect nervous system development and function through epigenetic mechanisms. Special focus on the long-term effects of maternal stress and early-life stress on offspring neural development and behavior and their epigenetic mechanisms.'
        },
        'r5_title': {
            'zh': '5. 非编码RNA在神经系统中功能',
            'en': '5. Functions of Non-coding RNA in Nervous System'
        },
        'r5_desc': {
            'zh': '系统解析miRNA、lncRNA、circRNA等非编码RNA在神经发育、功能调控和疾病发生中的作用机制。我们构建ceRNA调控网络，揭示非编码RNA参与神经表观遗传调控的分子逻辑。',
            'en': 'Systematically analyzing the mechanisms of non-coding RNAs such as miRNA, lncRNA, and circRNA in neural development, functional regulation, and disease pathogenesis. We construct ceRNA regulatory networks to reveal the molecular logic of non-coding RNA involvement in neuroepigenetic regulation.'
        },
        'r6_title': {
            'zh': '6. 表观遗传干预与神经再生',
            'en': '6. Epigenetic Intervention and Neural Regeneration'
        },
        'r6_desc': {
            'zh': '开发基于表观遗传调控的神经保护和治疗策略，包括小分子抑制剂、基因编辑工具、表观遗传药物等在神经损伤修复和神经退行性疾病治疗中的应用研究。',
            'en': 'Developing neuroprotective and therapeutic strategies based on epigenetic regulation, including the application of small molecule inhibitors, gene editing tools, and epigenetic drugs in nerve injury repair and neurodegenerative disease treatment.'
        },
        // Tags
        'tag_neural_stem': {
            'zh': '神经干细胞',
            'en': 'Neural Stem Cells'
        },
        'tag_epigenetic_programming': {
            'zh': '表观遗传编程',
            'en': 'Epigenetic Programming'
        },
        'tag_neural_diff': {
            'zh': '神经分化',
            'en': 'Neural Differentiation'
        },
        'tag_neural_activity': {
            'zh': '神经活动',
            'en': 'Neural Activity'
        },
        'tag_learning_memory': {
            'zh': '学习记忆',
            'en': 'Learning & Memory'
        },
        'tag_plasticity': {
            'zh': '可塑性',
            'en': 'Plasticity'
        },
        'tag_alzheimer': {
            'zh': '阿尔茨海默病',
            'en': 'Alzheimer\'s Disease'
        },
        'tag_depression': {
            'zh': '抑郁症',
            'en': 'Depression'
        },
        'tag_biomarker': {
            'zh': '生物标志物',
            'en': 'Biomarker'
        },
        'tag_environment': {
            'zh': '环境因素',
            'en': 'Environmental Factors'
        },
        'tag_stress': {
            'zh': '应激',
            'en': 'Stress'
        },
        'tag_transgenerational': {
            'zh': '跨代遗传',
            'en': 'Transgenerational Inheritance'
        },
        'tag_mirna': {
            'zh': 'miRNA',
            'en': 'miRNA'
        },
        'tag_lncrna': {
            'zh': 'lncRNA',
            'en': 'lncRNA'
        },
        'tag_cerna': {
            'zh': 'ceRNA网络',
            'en': 'ceRNA Network'
        },
        'tag_crispr': {
            'zh': '基因编辑',
            'en': 'Gene Editing'
        },
        'tag_drug': {
            'zh': '药物开发',
            'en': 'Drug Development'
        },
        'tag_regeneration': {
            'zh': '神经再生',
            'en': 'Neural Regeneration'
        }
    },
    // Team page
    'team': {
        'title': {
            'zh': '团队成员',
            'en': 'Team Members'
        },
        'subtitle': {
            'zh': '充满活力的研究团队',
            'en': 'A Dynamic Research Team'
        },
        'pi': {
            'zh': '指导教授',
            'en': 'Principal Investigators'
        },
        'postdocs': {
            'zh': '博士后',
            'en': 'Postdoctoral Researchers'
        },
        'grad_students': {
            'zh': '研究生',
            'en': 'Graduate Students'
        },
        'research_assistants': {
            'zh': '科研助理',
            'en': 'Research Assistants'
        },
        // PI translations
        'li_xiang_name': { 'zh': '李翔 教授', 'en': 'Prof. Xiang Li' },
        'li_xiang_title': { 'zh': '指导教授 / 博士生导师', 'en': 'PI / PhD Supervisor' },
        'li_xiang_bio': { 'zh': '武汉大学教授，美国斯坦福大学博士后。主要从事神经表观遗传学研究，在Nature、Cell、Neuron等期刊发表论文60余篇。主持国家自然科学基金重点项目、973课题等多项科研项目。', 'en': 'Professor at Wuhan University, postdoc at Stanford University. Specializes in neuroepigenetics, published 60+ papers in Nature, Cell, Neuron. Led multiple key national research projects.' },
        'wei_wei_name': { 'zh': '魏嵬 教授', 'en': 'Prof. Wei Wei' },
        'wei_wei_title': { 'zh': '指导教授 / 博士生导师', 'en': 'PI / PhD Supervisor' },
        'wei_wei_bio': { 'zh': '武汉大学教授，美国哈佛大学博士。主要研究方向为神经发育与表观遗传调控，在Cell Stem Cell等期刊发表多篇论文。擅长干细胞与神经分化研究。', 'en': 'Professor at Wuhan University, PhD from Harvard. Research focuses on neural development and epigenetic regulation, published multiple papers in Cell Stem Cell. Expert in stem cell and neural differentiation.' },
        // Postdoc translations
        'postdoc_title': { 'zh': '博士后', 'en': 'Postdoctoral Researcher' },
        'liu_chang_name': { 'zh': '刘畅 博士', 'en': 'Dr. Chang Liu' },
        'liu_chang_bio': { 'zh': '研究阿尔茨海默病中的表观遗传异常，擅长动物行为学实验和分子生物学技术。', 'en': 'Research on epigenetic abnormalities in Alzheimer\'s disease, expert in animal behavior and molecular biology.' },
        'chen_xiaoxiao_name': { 'zh': '陈晓晓 博士', 'en': 'Dr. Xiaoxiao Chen' },
        'chen_xiaoxiao_bio': { 'zh': '研究方向为非编码RNA在神经系统中功能，擅长RNA-seq和生物信息学分析。', 'en': 'Research on non-coding RNA function in nervous system, expert in RNA-seq and bioinformatics.' },
        // Graduate student translations
        'zhao_wei_name': { 'zh': '赵伟 博士研究生', 'en': 'Wei Zhao (PhD Student)' },
        'zhao_wei_title': { 'zh': '博士研究生（三年级）', 'en': 'PhD Student (Year 3)' },
        'zhao_wei_bio': { 'zh': '研究神经干细胞分化的表观遗传调控机制。', 'en': 'Research on epigenetic regulation of neural stem cell differentiation.' },
        'sun_yue_name': { 'zh': '孙悦 博士研究生', 'en': 'Yue Sun (PhD Student)' },
        'sun_yue_title': { 'zh': '博士研究生（二年级）', 'en': 'PhD Student (Year 2)' },
        'sun_yue_bio': { 'zh': '研究应激对神经表观遗传的影响及其跨代传递。', 'en': 'Research on stress effects on neuroepigenetics and transgenerational inheritance.' },
        'zhou_qiang_name': { 'zh': '周强 硕士研究生', 'en': 'Qiang Zhou (Master Student)' },
        'zhou_qiang_title': { 'zh': '硕士研究生（三年级）', 'en': 'Master Student (Year 3)' },
        'zhou_qiang_bio': { 'zh': '研究lncRNA在抑郁症中的作用机制。', 'en': 'Research on lncRNA mechanisms in depression.' },
        'wu_yuqing_name': { 'zh': '吴雨晴 硕士研究生', 'en': 'Yuqing Wu (Master Student)' },
        'wu_yuqing_title': { 'zh': '硕士研究生（二年级）', 'en': 'Master Student (Year 2)' },
        'wu_yuqing_bio': { 'zh': '研究DNA甲基化在神经损伤修复中的作用。', 'en': 'Research on DNA methylation in nerve injury repair.' },
        // Research assistant translations
        'ra_title': { 'zh': '科研助理', 'en': 'Research Assistant' },
        'zheng_hao_name': { 'zh': '郑浩 科研助理', 'en': 'Hao Zheng' },
        'zheng_hao_bio': { 'zh': '负责实验室日常管理和技术平台维护。', 'en': 'Responsible for lab daily management and technical platform maintenance.' }
    },
    // Contact page
    'contact': {
        'title': {
            'zh': '联系我们',
            'en': 'Contact Us'
        },
        'subtitle': {
            'zh': '欢迎与我们交流合作',
            'en': 'Welcome to Connect and Collaborate'
        },
        'contact_info': {
            'zh': '联系信息',
            'en': 'Contact Information'
        },
        'address': {
            'zh': '地址',
            'en': 'Address'
        },
        'address_text': {
            'zh': '湖北省武汉市武昌区东湖路115号<br>武大医学部8号楼',
            'en': 'Building 8, Medical School<br>115 Donghu Road, Wuchang District'
        },
        'address_text1': {
            'zh': '湖北省武汉市武昌区东湖路115号<br>武大医学部8号楼',
            'en': 'Building 8, Medical School<br>115 Donghu Road, Wuchang District'
        },
        'address_text2': {
            'zh': '430071',
            'en': '430071'
        },
        'postal': {
            'zh': '邮编',
            'en': 'Postal Code'
        },
        'email_addr': {
            'zh': 'neuroepigen@lab.edu.cn',
            'en': 'neuroepigen@lab.edu.cn'
        },
        'phone': {
            'zh': '电话',
            'en': 'Phone'
        },
        'fax': {
            'zh': '传真',
            'en': 'Fax'
        },
        'email': {
            'zh': '邮箱',
            'en': 'Email'
        },
        'group_leader': {
            'zh': '课题组组长',
            'en': 'Group Leader'
        },
        'message_form': {
            'zh': '留言咨询',
            'en': 'Message Form'
        },
        'name': {
            'zh': '姓名',
            'en': 'Name'
        },
        'subject': {
            'zh': '主题',
            'en': 'Subject'
        },
        'message': {
            'zh': '留言内容',
            'en': 'Message'
        },
        'send': {
            'zh': '发送消息',
            'en': 'Send Message'
        },
        'map': {
            'zh': '地图位置',
            'en': 'Location'
        },
        'join_us': {
            'zh': '加入我们',
            'en': 'Join Us'
        },
        'join_us_text': {
            'zh': '我们常年招聘博士后研究人员、博士研究生和硕士研究生。欢迎具有分子生物学、神经科学、计算生物学背景的优秀学者加入我们的团队。博士后申请者请发送个人简历、研究计划至：',
            'en': 'We are always recruiting postdoctoral researchers, doctoral students, and master\'s students. Outstanding scholars with backgrounds in molecular biology, neuroscience, and computational biology are welcome to join our team. Postdoctoral applicants please send your CV and research plan to:'
        }
    },
    // Nav
    'nav': {
        'home': {
            'zh': '首页',
            'en': 'Home'
        },
        'about': {
            'zh': '关于我们',
            'en': 'About'
        },
        'research': {
            'zh': '研究方向',
            'en': 'Research'
        },
        'team': {
            'zh': '团队成员',
            'en': 'Team'
        },
        'contact': {
            'zh': '联系我们',
            'en': 'Contact'
        }
    },
    // Footer
    'footer': {
        'copyright': {
            'zh': '神经表观遗传学课题组 | 版权所有',
            'en': 'Neuroepigenetics Research Group | All Rights Reserved'
        }
    }
};

// Current language
let currentLang = 'zh';

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Language toggle
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
    updateLangButton();
}

function updateLangButton() {
    const btn = document.querySelector('.lang-switch');
    if (btn) {
        btn.textContent = currentLang === 'zh' ? 'EN' : '中';
    }
}

// Update all translatable elements
function updateLanguage() {
    const page = document.body.getAttribute('data-page') || 'index';

    // Set language attribute for CSS styling
    document.documentElement.setAttribute('lang', currentLang);
    document.body.setAttribute('lang', currentLang);

    // Update navigation
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
        const key = el.getAttribute('data-i18n-nav');
        if (translations.nav[key]) {
            el.innerHTML = translations.nav[key][currentLang];
        }
    });

    // Update page-specific content
    if (translations[page]) {
        Object.keys(translations[page]).forEach(key => {
            const els = document.querySelectorAll(`[data-i18n="${key}"]`);
            els.forEach(el => {
                if (translations[page][key][currentLang]) {
                    el.innerHTML = translations[page][key][currentLang];
                }
            });
        });
    }

    // Update footer
    const footerText = document.querySelectorAll('[data-i18n-footer]');
    footerText.forEach(el => {
        if (translations.footer.copyright) {
            el.innerHTML = translations.footer.copyright[currentLang];
        }
    });

    // Update document title
    updatePageTitle(page);
}

function updatePageTitle(page) {
    const titles = {
        'index': { 'zh': '神经表观遗传学课题组', 'en': 'Neuroepigenetics Research Group' },
        'about': { 'zh': '关于我们 - 神经表观遗传学课题组', 'en': 'About Us - Neuroepigenetics Research Group' },
        'research': { 'zh': '研究方向 - 神经表观遗传学课题组', 'en': 'Research Areas - Neuroepigenetics Research Group' },
        'team': { 'zh': '团队成员 - 神经表观遗传学课题组', 'en': 'Team Members - Neuroepigenetics Research Group' },
        'contact': { 'zh': '联系我们 - 神经表观遗传学课题组', 'en': 'Contact Us - Neuroepigenetics Research Group' }
    };
    if (titles[page]) {
        document.title = titles[page][currentLang];
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
    }

    // Update language button
    updateLangButton();

    // Apply initial language
    updateLanguage();
});

// Export functions to global scope
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
