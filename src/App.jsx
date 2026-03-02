import React from 'react';

const App = () => {
  // 图片数据托管地址
  const images = {
    portrait: "https://i.postimg.cc/Gpqp8hP0/52a92015b956e44de3d751a23ca15bd0.jpg",
    hubeiMain: "https://i.postimg.cc/VvP51bsP/5467633302c0c63a95e5b40228bdbcda.png",
    hubeiDetail: "https://i.postimg.cc/yxhxNYWD/8ccba0f7b15d4f7f9ecdcc3153ea3b1a.png",
    community: {
      step1: "https://i.postimg.cc/kGBHqwsb/14d2224449ac7c21392040a515b7664b.jpg",
      step2: "https://i.postimg.cc/yY9HRYmb/2e51c099186b3cc0de3e3446697d5ffc.jpg",
      daily: "https://i.postimg.cc/pd7v89SN/d8f408bd73a35b1ddffe375d438c71bd.jpg"
    }
  };

  const socialMediaData = [
    { id: 1, title: "小红书内容规划与文案", tags: "精炼吸睛 | 设计感 | 生活哲思 | 中式美学", image: "https://i.postimg.cc/tCxQWmz7/baf20bfb1980a8849060bcd4c9e3e8f6.jpg" },
    { id: 2, title: "视频号主题策划与脚本", tags: "氛围感 | 深度挖掘主题 | 创意 | 向往打造", image: "https://i.postimg.cc/kXm3Nvhm/449b877697e7dbe6d6f05b58d5b09d52.jpg" },
    { id: 3, title: "公众号文案", tags: "品牌认知 | 人文哲思 | 产品详解 | 社群指引", image: "https://i.postimg.cc/nVQ99pNk/9431c9a05bc9879b8dfa43ef9fe0a4ef.jpg" },
    { id: 4, title: "小程序专栏策划与文案", tags: "护肤科普 | 成分解析 | 理念渗透 | 巩固社群", image: "https://i.postimg.cc/qvZpGC3t/e0855fdc89e3e60f37d10d40aa7fc671.jpg" }
  ];

  const videoProjects = [
    {
      id: 1,
      award: "第七届中国梦·青年影像 剧情单元一等奖",
      title: "剧情短片创作",
      desc: "重构内容产品节奏，运用「冲突前置」策略，显著提升完播率。",
      link: "https://weibo.com/3004938340/4651604148226734",
      platform: "WEIBO VIDEO"
    },
    {
      id: 2,
      award: "「永远跟党走」陕西省短视频大赛优秀奖",
      title: "视频剪辑*纪实短视频专题",
      desc: "洞察平台热点，将宏大叙事转化为具备共鸣感的视听语言。",
      link: "https://pan.baidu.com/s/1EZBolFiAP-APtczq1Z4qUA?pwd=os2a",
      platform: "CLOUD STORAGE"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#333] selection:bg-stone-200 overflow-x-hidden"
         style={{ fontFamily: '"SimSun", "STSong", "Songti SC", "serif"' }}>
      
      {/* ----------------- 首页：自画像与综合评价 (大幅间距优化版) ----------------- */}
      <section className="relative max-w-7xl mx-auto px-12 pb-24 min-h-[160vh] flex flex-col">
        {/* 右上角个人信息 */}
        <div className="absolute top-12 right-16 text-right space-y-3 z-10">
          <h1 className="text-4xl font-bold tracking-[0.2em] text-stone-800">裴思媛</h1>
          <p className="text-xl tracking-[0.2em] text-stone-500 font-sans">PORTFOLIO</p>
          <div className="pt-2">
            <p className="text-[11px] tracking-[0.5em] text-stone-400 font-sans uppercase">品牌 · 策划 · 文案</p>
          </div>
        </div>

        {/* 核心内容区块：透过 pt-[40vh] 增加"半个板块"的呼吸空间 */}
        <div className="mt-auto pt-[40vh] flex flex-col md:flex-row items-center justify-between w-full gap-24 relative mb-12">
          {/* 左侧评价内容 */}
          <div className="w-full md:w-5/12 space-y-5">
            <div className="space-y-4 text-stone-600 leading-relaxed text-[11px] text-justify">
              <div className="space-y-1">
                <p className="font-bold text-stone-800 tracking-wider">1. AIGC 提效建模能力</p>
                <p className="font-light">搭建视觉工作流应用，通过标准 SOP 缩短 50% 耗时。</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-stone-800 tracking-wider">2. 客情维护与文旅变现</p>
                <p className="font-light">驱动 70% 课程续报率，主导「服饰+景区」项目落地执行。</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-stone-800 tracking-wider">3. 爆款孵化与私域变现</p>
                <p className="font-light">产出单篇 20W+ 爆款，搭建 400+ 人私域，达成转化闭环。</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-stone-800 tracking-wider">4. 双语沟通与海外拓展</p>
                <p className="font-light">具备雅思 7.0 英文能力，可对接海外供应商与全球化业务。</p>
              </div>
            </div>
          </div>

          {/* 右侧自画像 */}
          <div className="w-full md:w-5/12 flex justify-end">
            <div className="w-full max-w-[340px] aspect-[4/3] flex items-center justify-center">
              <img 
                src={images.portrait} 
                alt="裴思媛自画像" 
                className="w-full h-auto shadow-2xl rotate-90 transform-gpu object-cover border-[12px] border-white" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 板块 01：湖北省博物馆 ----------------- */}
      <section className="relative max-w-7xl mx-auto px-12 py-4 flex flex-col md:flex-row items-start gap-12 lg:gap-24">
        <div className="absolute top-2 right-12 text-xs font-light tracking-widest text-stone-300 font-sans">01.</div>
        <div className="w-full md:w-5/12 space-y-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-800 mb-3">从文献到场景</h2>
            <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-sans">人群洞察 / 导览叙事 / 视觉迭代</p>
            <div className="w-12 h-[1px] bg-stone-200 mt-4 mb-6"></div>
            <div className="space-y-6 text-stone-600 leading-relaxed text-justify text-xs">
              <p>在湖北省博物馆实习期间，参与《与时代同行——汤文选百年诞辰书画精品展》策划与视觉运营。</p>
              <p>负责将考古文献转化为逾 <span className="text-stone-900 font-bold">1万字</span> 导览，以「以物证史」逻辑打造沉浸式体验。</p>
              <p>引入 <span className="text-stone-900 font-bold">AIGC 工具</span> 敏捷迭代视觉方案，大幅降低沟通成本。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-stone-100">
            <div>
              <div className="text-xl font-bold text-stone-800">100+</div>
              <div className="text-[10px] text-stone-400 tracking-widest uppercase mt-1 font-sans">小红书UGC笔记</div>
            </div>
            <div>
              <div className="text-xl font-bold text-stone-800">50%</div>
              <div className="text-[10px] text-stone-400 tracking-widest uppercase mt-1 font-sans">沟通效率提升</div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 flex flex-col gap-8 pt-4 relative">
          <div className="w-10/12 self-start border border-stone-100 shadow-md">
            <img src={images.hubeiMain} alt="展览主视觉" className="w-full h-auto" />
          </div>
          <div className="w-9/12 self-end border border-stone-100 shadow-md">
            <img src={images.hubeiDetail} alt="设计细节" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ----------------- 板块 10：新媒体内容策划 ----------------- */}
      <section className="relative max-w-7xl mx-auto px-12 py-6">
        <div className="absolute top-2 right-12 text-xs font-light tracking-widest text-stone-300 font-sans">10.</div>
        <header className="mb-6 space-y-2">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-800">新媒体内容策划</h2>
          <p className="text-stone-400 text-xs max-w-2xl leading-relaxed">基于品牌理念与TA画像，打造从认知到社群的全链路品牌内容</p>
        </header>
        <div className="flex flex-row justify-center items-start gap-4 md:gap-12 lg:gap-16 max-w-7xl mx-auto overflow-x-auto pb-4">
          {socialMediaData.map((item) => (
            <div key={item.id} className="flex flex-col items-center flex-shrink-0">
              <div className="w-[110px] md:w-[130px] aspect-[9/16] bg-white overflow-hidden mb-4 border border-stone-100 shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-center space-y-1 max-w-[140px]">
                <h3 className="text-[11px] md:text-[13px] font-bold text-stone-800 tracking-wide">{item.title}</h3>
                <p className="text-[9px] text-stone-400 tracking-tight leading-tight">{item.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 板块 29：社群策划 ----------------- */}
      <section className="relative max-w-7xl mx-auto px-12 py-6">
        <div className="absolute top-2 right-12 text-xs font-light tracking-widest text-stone-300 font-sans">29.</div>
        <header className="mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-800 mb-1">社群策划</h2>
          <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-sans">选品全流程跟进 / 每日干货价值输出</p>
        </header>
        <div className="max-w-4xl space-y-4 mb-8">
          <p className="text-stone-500 text-xs leading-relaxed text-justify">
            针对书籍变现需求，主导读书社群从0到1启动。制定留存策略，通过高频干货输出建立信任。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start max-w-5xl mx-auto">
          {[
            { img: images.community.step1, title: "选品全流程 01", desc: "多维度环比分析，精准勾勒用户画像与增长潜力。" },
            { img: images.community.step2, title: "选品全流程 02", desc: "完成书籍全流程销售跟进，实现从社群到电商转化。" },
            { img: images.community.daily, title: "每日分享内容", desc: "制定活跃策略，通过持续利他构建用户粘性闭环。" }
          ].map((card, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="w-8/12 aspect-[3/4] bg-white p-1 shadow-md border border-stone-200/50">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-center space-y-1 px-2">
                <p className="text-[11px] font-bold text-stone-800 uppercase tracking-widest">{card.title}</p>
                <p className="text-[9px] text-stone-500 leading-relaxed font-light">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 板块 35：影视创作 ----------------- */}
      <section className="relative max-w-7xl mx-auto px-12 py-6 pb-16">
        <div className="absolute top-2 right-12 text-xs font-light tracking-widest text-stone-300 font-sans">35.</div>
        <header className="mb-6 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-800 mb-1">影视创作</h2>
          <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-sans">内容调优 / 冲突前置 / 叙事重构</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videoProjects.map((project) => (
            <div key={project.id} className="group">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video bg-stone-900 overflow-hidden shadow-lg transition-all duration-700 hover:shadow-xl">
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white ml-0.5"></div>
                  </div>
                </div>
              </a>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold text-stone-800">{project.title}</h3>
                <p className="text-stone-700 font-bold text-[9px] bg-stone-100 inline-block px-2 py-0.5 italic">
                  {project.award}
                </p>
                <p className="text-stone-500 text-xs leading-relaxed text-justify">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 统一页脚 */}
      <footer className="px-12 pb-8 text-[9px] text-stone-300 tracking-[0.5em] uppercase flex justify-between items-center border-t border-stone-100 pt-6 font-sans mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <span className="w-8 h-[1px] bg-stone-100"></span>
          <span>© 2025 PEI SIYUAN</span>
        </div>
        <div className="flex gap-10">
          <span>PORTFOLIO v1.0</span>
          <span>CONTENT STRATEGY</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
