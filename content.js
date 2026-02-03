// This file contains all the text content for the presentation.
// You can edit the text here, and it will update the webpage automatically.

window.presentationData = {
    meta: {
        title: "健康陪伴 AI 商业计划书"
    },
    slides: {
        cover: {
            number: "01",
            date: "商业计划书 · 2026年2月",
            title_line1: "健康陪伴",
            title_line2: "AI",
            hero_text_line1: "让健康管理",
            hero_text_line2: "从\"用户提问\"",
            hero_text_line3: "变成\"系统",
            hero_text_highlight: "主动接管",
            hero_text_end: "\"",
            presenter_label: "演讲人",
            presenter_name: "Will",
            page_number: "01 / 12"
        },
        team: {
            chapter: "CHAPTER 01",
            title: "核心团队",
            members: [
                {
                    number: "01",
                    name: "Will",
                    role: "CEO / 产品负责人",
                    details: [
                        "• 前京东运营总监",
                        "• 国家注册营养师",
                        "• 小红书头部营养师博主",
                        "• 西北大学制药工程毕业"
                    ],
                    avatar: "头像will.png"
                },
                {
                    number: "02",
                    name: "Chenyang",
                    role: "CTO / 技术负责人",
                    details: [
                        "• 欢聚时代系统架构师",
                        "• 武汉大学人工智能硕士",
                        "• 华中科技大学计算机学士"
                    ],
                    avatar: "头像cy.png"
                },
                {
                    number: "03",
                    name: "Suhan",
                    role: "COO / 运营负责人",
                    details: [
                        "• 前阿里运营专家",
                        "• 香港城市大学数量分析硕士"
                    ],
                    avatar: "头像sh.png"
                }
            ],
            page_number: "02 / 12"
        },
        market: {
            chapter: "CHAPTER 02",
            page_number: "03 / 12",
            main_title: "健康需求爆发，但传统健康管理高成本，低成功率",
            subtitle: "AI将改变行业：让高质量健康管理可以规模化，成本降低100倍",
            left_col: {
                header: "肥胖，慢病逐年增高<br>即缺专业个性化建议，长期执行失败高", // Note: '即缺' transcribed from image, potentially '急缺' or '却缺'
                chart1: {
                    title: "中国慢病市场规模趋势（亿元）",
                    bars: [
                        { label: "2024E", value: "8200", height: "40%" },
                        { label: "2025E", value: "8800", height: "45%" },
                        { label: "2026E", value: "9600", height: "50%" },
                        { label: "2027E", value: "10800", height: "60%" },
                        { label: "2028E", value: "11900", height: "70%" },
                        { label: "2029E", value: "12900", height: "80%" }
                    ]
                },
                chart2: {
                    title: "中国超重人群趋势（亿人）",
                    bars: [
                        { label: "2021", value: "2.3", height: "40%" },
                        { label: "2026E", value: "2.8", height: "60%" },
                        { label: "2030E", value: "3.4", height: "80%" }
                    ]
                }
            },
            right_col: {
                header_trad: "传统健康管理",
                header_ai: "AI驱动健康管理",
                vs_label: "VS",
                items: [
                    { trad: "高成本（2000元/月）", ai: "低成本（20元/月）" },
                    { trad: "质量参差（人主导）", ai: "高质量个性化" },
                    { trad: "难坚持", ai: "游戏化驱动" },
                    { trad: "信任低（保健品配套）", ai: "靠服务盈利" },
                    { trad: "管理成本高，无法规模化", ai: "边际成本低，易规模化" }
                ]
            }
        },
        user_persona: {
            chapter: "CHAPTER 03",
            title: "目标用户画像",
            subtitle: "精准定位高价值用户：更有意愿为科学健康付费", // Added simulated subtitle similar to Slide 3 style
            target: {
                title: "目标用户",
                items: [
                    "30-45，女性，一二线为主",
                    "有科学营养基础意识，在吃2款以上补剂",
                    "有明确的健康需求（抗衰，减肥，亚健康，四高）",
                    "但是缺少方法"
                ]
            },
            non_target: {
                title: "不是目标用户",
                items: [
                    "肥胖但极度不健康",
                    "特别注重中医养生",
                    "极度繁忙无暇照顾身体",
                    "营养领域专业人士"
                ]
            },
            page_number: "04 / 12"
        },
        product_logic: {
            chapter: "SYSTEM ARCHITECTURE",
            title: "我们把健康管理，从“用户提问”变成“系统接管”",
            subtitle: "主动管理形成健康闭环，游戏化减少执行难度，身体改变驱动长期使用",
            flow: [
                {
                    title: "用户需求",
                    items: ["减肥", "调四高", "精力差", "抗衰"]
                },
                {
                    title: "输入",
                    items: ["饮食", "问卷", "体检", "报告"]
                },
                {
                    title: "主动健康<br>智能体平台",
                    data_source: {
                        title: "专业数据",
                        items: ["官方指南", "权威文献", "营养数据库"]
                    }
                },
                {
                    title: "个性化方案",
                    items: ["饮食建议", "营养搭配", "热量设计", "补剂推荐", "健康周任务"]
                },
                {
                    group_title: "主动化",
                    items: [
                        {
                            title: "个性化<br>主动提醒",
                            sub_items: ["体重打卡", "补剂补充", "饮食记录"]
                        },
                        {
                            title: "健康计划<br>主动跟进",
                            sub_items: ["周任务个性化", "周任务主动跟进", "围绕周任务主动科普", "完成任务激励"]
                        },
                        {
                            title: "健康风险<br>主动预警",
                            sub_items: ["营养摄入素缺口预警", "营养不良主动提醒", "炎症过高预警", "动态安排健康任务"]
                        }
                    ]
                },
                {
                    group_title: "游戏化",
                    items: ["排名", "勋章&等级", "积分"]
                },
                {
                    items: ["体重变轻", "指标变好", "精力变好", "生物年龄<br>衰老减缓"]
                }
            ],
            page_number: "05 / 12"
        },
        validation: {
            chapter: "CHAPTER 05",
            title: "150 名付费用户，健康管理闭环已初步验证",
            subtitle: "减重结果 + 连续使用 + 数据化追踪，系统已可规模化复制",
            metrics: {
                users_count: "150",
                users_label: "付费种子用户",
                quote: "\"初步验证闭环成功\""
            },
            case_study: {
                label: "SUCCESS STORY",
                title: "真实用户案例",
                items: [
                    { label: "减重成果", value: "-20 斤" },
                    { label: "用户活跃", value: "连续 6 个月" },
                    { label: "效果追踪", value: "数据化追踪成功" }
                ]
            },
            page_number: "06 / 12"
        },
        business_model: {
            chapter: "CHAPTER 06",
            title: "订阅费是基础，客户终身价值上限有空间",
            subtitle: "基础订阅 + 升级服务 + 增值商品，单用户年度价值 800–1000 元，CAC 明显可控",
            revenue_items: [
                { item: "基础订阅 (核心)", amount: "248 元", desc: "AI 全年健康管理/饮食运动指导" },
                { item: "进阶检测升级 (约30%用户)", amount: "350 元", desc: "专项检测数据分析" },
                { item: "增值商品 / 服务", amount: "200~400 元", desc: "健康补剂，商品等" },
                { item: "综合 ARPU / LTV", amount: "800~1000 元", desc: "综合年度单用户产值", is_total: true }
            ],
            channel_types: [
                { type: "内容 + 私域", cac: "40-80", desc: "核心获客渠道，通过垂直内容精准吸粉" },
                { type: "用户转介绍 (MGM)", cac: "20-50", desc: "高满意度带来的低成本增长" },
                { type: "渠道/B端合作", cac: "80-150", desc: "体检中心，健身房、保险机构精准导流" }
            ],
            page_number: "07 / 12"
        },
        acquisition: {
            chapter: "CHAPTER 07",
            title: "获客路径与阶段",
            cac: {
                title: "获客成本 (CAC)",
                items: [
                    { label: "私域/内容", cost: "40-80元" },
                    { label: "用户转介绍", cost: "20-50元" },
                    { label: "B端合作", cost: "80-150元" }
                ]
            },
            stages: [
                {
                    period: "短期",
                    time: "0-6个月",
                    title: "小红书私域 IP",
                    desc: "依靠内容矩阵，低成本获取种子用户。"
                },
                {
                    period: "中期",
                    time: "6-18个月",
                    title: "自动化与裂变",
                    desc: "建立品牌信任，通过转介绍实现裂变增长。"
                },
                {
                    period: "长期",
                    time: "18个月+",
                    title: "生态合作",
                    items: [
                        "医疗机构合作",
                        "B2B2C 组织采购",
                        "家庭健康套餐"
                    ]
                }
            ],
            page_number: "08 / 12"
        },
        market_size: {
            chapter: "CHAPTER 08",
            title: "从主动健康人群切入，未来可以拓展到慢病管理人群",
            tam: {
                label: "TAM 潜在市场",
                value: "346.5",
                unit: "亿",
                sub: "9,900 万人",
                desc: "25-55岁、有慢病/亚健康痛点且有付费意愿的人群总量。"
            },
            sam: {
                label: "SAM 可服务",
                value: "69.3",
                unit: "亿",
                sub: "1,980 万人",
                desc: "习惯线上订阅制、认可 AI 数字化健康管理的核心用户。"
            },
            som: {
                label: "SOM 核心",
                value: "3",
                unit: "亿",
                sub: "30 万人",
                desc: "初步通过私域转化、内容引流及口碑推荐可直接触达的规模。"
            },
            page_number: "09 / 12"
        },
        roadmap: {
            chapter: "CHAPTER 09",
            title: "未来1年里程碑",
            subtitle: "目前仍然在付费意愿验证阶段",
            milestones: [
                {
                    month: "3/1",
                    title: "验证付费意愿",
                    deliverables: "AI 方案 + 基础监测小程序上线",
                    metrics: ["ARR: <span class=\"font-bold\">≈ 9万</span>", "用户: 250-1000", "付费率 5%", "7日留存 50%"]
                },
                {
                    month: "6/1",
                    title: "验证行为改变",
                    deliverables: "进阶检测版上线；打卡/PK 计划个性化",
                    metrics: ["ARR: <span class=\"font-bold\">≈ 35万</span>", "用户: 1000-2000", "留存率 35%", "进阶转化 20%"]
                },
                {
                    month: "9/1",
                    title: "验证规模扩张",
                    deliverables: "内容体系社群 SOP；从个人 IP 到品牌化",
                    metrics: ["ARR: <span class=\"font-bold\">≈ 175万</span>", "用户: 5000", "综合 CAC ≤ 80元"]
                },
                {
                    month: "12个月",
                    title: "家庭 & B 端联动",
                    deliverables: "家庭套餐上线；企业健康管理 PoC",
                    metrics: ["ARR: <span class=\"font-bold\">≈ 350万</span>", "用户: 10000", "家庭ARPU 800元", "B端签约 2家"]
                }
            ],
            vision: {
                label: "明年",
                title: "稳定可复制",
                desc: "增长飞轮稳定；自动化续费机制",
                metrics: ["ARR: <span class=\"font-bold\">≈ 1050万</span>", "用户: 30000", "续费率 50%"]
            },
            page_number: "10 / 12"
        },
        funding: {
            chapter: "CHAPTER 10",
            title: "资金用途",
            subtitle: "资金持续投入，可以复制，有效，无痛的健康管理系统",
            items: [
                {
                    percent: "60",
                    title: "产品研发",
                    details: ["• AI 营养与智能体研发", "• 行为激励系统优化", "• 个性化模型持续迭代", "• 人员招募：前端1名，2名智能体优化"]
                },
                {
                    percent: "40",
                    title: "品牌建设",
                    details: ["• 招募市场与品牌负责人", "• 内容体系与品牌方法论搭建", "• 品牌活动，内容制作，投流"]
                }
            ],
            page_number: "11 / 12"
        },
        vision_page: {
            chapter: "CHAPTER 11 - OUR VISION",
            title_line1: "让健康管理",
            title_line2: "从\"",
            title_highlight1: "被误导、被收割",
            title_line3: "\"",
            title_line4: "变成\"",
            title_highlight2: "科学、快乐、被长期负责",
            title_end: "\"",
            subtitle: "致敬每一个认真对待健康的人！",
            contact: "联系我们: 186-xxxx-xxxx",
            page_number: "12 / 12"
        }
    }
};
