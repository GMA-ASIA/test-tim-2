import { Target, MessageSquare, PenTool, Users, ShoppingCart, BookOpen } from 'lucide-react';

export const NAVIGATION_LINKS = [
  { label: '方案服務', href: '#services' },
  { label: '成功案例', href: '#cases' }, // Mapping to detailed services for now
  { label: '關於我們', href: '#why-us' },
  { label: 'AI 課程', href: '#pricing' },
];

export const SERVICES_SUMMARY = [
  {
    id: 'sales',
    icon: Target,
    title: '銷售自動化',
    description: '自動跟進潛在客戶，讓 Sales 專注於成交。',
  },
  {
    id: 'service',
    icon: MessageSquare,
    title: '客戶服務自動化',
    description: '24/7 智能回覆，秒速解決客戶查詢。',
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'AI 內容生成',
    description: '批量生成高品質社交媒體貼文及營銷文案。',
  },
  {
    id: 'hr',
    icon: Users,
    title: 'HR 及招聘自動化',
    description: '自動篩選履歷，安排面試，簡化入職流程。',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: '電商自動化',
    description: '庫存管理、訂單處理及售後跟進全自動。',
  },
  {
    id: 'education',
    icon: BookOpen,
    title: '教育及培訓自動化',
    description: '個性化學習路徑推薦，自動批改作業。',
  },
];

export const DETAILED_SERVICES = [
  {
    id: 'sales-detail',
    title: '銷售自動化 | Sales Automation',
    problem: 'Sales 每日手動 WhatsApp 跟進、忘記 follow up、CRM 資料唔齊全。',
    features: [
      '自動從網站/LinkedIn 收集潛在客戶並寫入 CRM',
      'AI 分析客戶行為，自動發送個人化跟進訊息',
      'Sales 只需處理「熱」的客戶，轉化率自然提高'
    ],
    result: '某貿易公司報價回覆時間由 24 小時縮短至 15 分鐘，成交率提升 32%',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'service-detail',
    title: '客戶服務自動化 | CS Automation',
    problem: '客服團隊每日重複回答相同問題，回應慢導致客怨。',
    features: [
      '訓練專屬 AI Chatbot，理解廣東話/英語混合查詢',
      '自動處理訂單查詢、退貨申請等常見請求',
      '遇到複雜問題自動轉接真人，並提供對話摘要'
    ],
    result: '網店客服成本降低 45%，客戶滿意度評分由 3.8 升至 4.8',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'content-detail',
    title: 'AI 內容生成 | Content Generation',
    problem: '寫 Post、寫 Blog 耗時長，缺乏創意，外判費用高昂。',
    features: [
      '根據品牌語氣，一鍵生成 Facebook/IG/LinkedIn 貼文',
      '自動生成 SEO 友好的長文章及產品描述',
      'AI 圖像生成配合文案，解決配圖版權問題'
    ],
    result: 'Digital Agency 內容產出量提升 5 倍，互動率增加 150%',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'hr-detail',
    title: 'HR 及招聘自動化 | HR Automation',
    problem: '篩選數百份 CV 耗費大量時間，容易錯過合適人選。',
    features: [
      'AI 自動解析 CV，根據職位要求進行評分排名',
      '自動發送面試邀請及跟進郵件',
      '新員工 Onboarding 流程自動化，減少 HR 行政工作'
    ],
    result: '招聘週期由 6 星期縮短至 2 星期，HR 行政時間減少 70%',
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'ecommerce-detail',
    title: '電商自動化 | E-commerce Automation',
    problem: '庫存混亂、手動更新多個平台數據，容易出錯。',
    features: [
      '跨平台（Shopify, WooCommerce, HKTVmall）庫存實時同步',
      '根據銷售數據自動預測補貨需求',
      'AI 分析顧客購買習慣，自動推薦關聯產品'
    ],
    result: '庫存準確率達 99.9%，缺貨率降低 80%',
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'edu-detail',
    title: '教育及培訓自動化 | Education Automation',
    problem: '老師花大量時間批改作業及處理行政，無法專注教學。',
    features: [
      'AI 輔助批改作業及試卷，提供詳細反饋建議',
      '根據學生表現自動生成個性化學習報告',
      '自動化排課及學生考勤通知'
    ],
    result: '導師每週節省 15 小時行政時間，學生完成率提升 40%',
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const PROCESS_STEPS = [
  {
    number: '1',
    title: '免費診斷',
    description: '30 分鐘視像會議，了解你最耗時的 3 個流程'
  },
  {
    number: '2',
    title: '方案設計',
    description: '度身訂造工作流程，清晰報價，預計 ROI'
  },
  {
    number: '3',
    title: '上線 & 支援',
    description: '2-4 星期內上線，持續優化支援'
  }
];

export const FAQS = [
  {
    question: '我的生意規模很小，適合做自動化嗎？',
    answer: '絕對適合。事實上，中小企因為人手有限，更需要透過自動化來釋放時間。我們的入門方案專為中小企設計，即使只有 2-3 人的團隊也能受惠。'
  },
  {
    question: '實施 AI 自動化需要很長時間嗎？',
    answer: '不需要。我們的解決方案通常在 2-4 星期內即可上線。對於簡單的流程自動化，甚至可以在幾天內完成。'
  },
  {
    question: '我完全不懂 Coding，將來如何維護？',
    answer: '我們採用 Low-code/No-code 平台構建，介面直觀。交付時我們會提供完整培訓，讓你或你的團隊能夠處理日常操作。我們亦提供持續的技術支援服務。'
  },
  {
    question: '資料安全如何保障？',
    answer: '我們極度重視資料安全。所有自動化流程均符合企業級安全標準，並簽署保密協議 (NDA)。我們只會選用合規且安全的 AI 模型及工具。'
  },
  {
    question: '如果 AI 出錯怎麼辦？',
    answer: '我們的系統設計包含「人機協作」機制（Human-in-the-loop）。對於信心分數較低的操作，系統會自動通知真人覆核，確保準確性。'
  }
];