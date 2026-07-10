export default function CampaignPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* 頂部小提示列 */}
      <div className="w-full bg-[#1a1a1a] py-2 text-center text-xs text-gray-400 border-b border-[#333]">
        <span className="text-orange-500 font-bold mr-1">1</span> 拒買代言品牌 
        <span className="text-orange-500 font-bold ml-4 mr-1">2</span> 取消追蹤訂閱
      </div>

      {/* 主視覺區塊 */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16 px-4">
        {/* Tag */}
        <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
          消費者表態
        </div>

        {/* 大標題 */}
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-6">
          我抵制與<br />
          蔡阿嘎合作品牌 ✊
        </h1>

        {/* 內文與品牌清單 */}
        <p className="text-sm text-gray-300 mb-4 text-center">
          本人宣示，作為消費者，我抵制與蔡阿嘎合作的<br/>品牌，以消費行動表達立場。
        </p>
        <p className="text-xs text-gray-500 max-w-2xl text-center leading-relaxed mb-12">
          GREENGOLD 保健食品・Roichen 正脊坐墊・USTINI 我挺你 健康鞋・TANITA 體脂計・
          SwitchBot 智慧家居・Jacfit 智慧運動環・威訊 WaySim eSIM・農純鄉・萬萬兩 ONE for WANT・
          千山 淨水器・Gelovery 萬家觀念・好神拖 拖把清潔・hahababy 毧品・髮基因 頭皮護理・
          素顏之本 天然保養・SHILLS 舒兒絲 保養品・eminent 萬國通路旅行箱・創勝 精緻搬家・
          金好運 線上娛樂城・OWNDAYS 眼鏡
        </p>

        {/* 巨大數字區 */}
        <div className="text-center mb-8">
          <div className="text-6xl md:text-7xl font-extrabold text-orange-500 tracking-tight">
            143,399
          </div>
          <div className="text-gray-400 text-sm mt-2">人已表態</div>
        </div>

        {/* 主按鈕 */}
        <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 px-16 rounded-md text-lg shadow-[0_0_15px_rgba(249,115,22,0.3)]">
          我要表態 →
        </button>
      </section>

      {/* 這裡可以繼續接續下一區塊 (爭議懶人包等) ... */}

    </main>
  );
}
{/* ----------------------------------------------------
          2. 橫向滑動卡片區 (爭議懶人包)
         ---------------------------------------------------- */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full border-t border-[#333]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">📋</span>
          <h2 className="text-2xl font-bold text-white">爭議懶人包</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6">往右滑查看更多 →</p>

        {/* 水平滑動容器 (隱藏原生捲軸但保留滑動功能) */}
        <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          
          {/* 卡片 1 */}
          <div className="min-w-[300px] md:min-w-[350px] bg-[#1e1e1e] p-6 rounded-xl snap-start border border-[#333] flex flex-col">
            <div>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">2026</span>
              <h3 className="text-lg font-bold text-white mb-3">遭爆下令「嘎家軍」出征酸民</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                群組截圖流出，「嘎哥護衛軍 GArmy」成員逾 9,900 人，內部下令「全員注意正式開戰！」要求在 Threads、IG、FB、YouTube 四平台對批評者反擊...
              </p>
            </div>
            <div className="flex gap-4 items-center mt-auto">
              <span className="text-xs bg-[#333] text-gray-300 px-3 py-1 rounded-md">出征酸民</span>
              <a href="#" className="text-orange-500 text-xs hover:underline">查看來源 ↗</a>
            </div>
          </div>

          {/* 卡片 2 */}
          <div className="min-w-[300px] md:min-w-[350px] bg-[#1e1e1e] p-6 rounded-xl snap-start border border-[#333] flex flex-col">
            <div>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">2026</span>
              <h3 className="text-lg font-bold text-white mb-3">被罵回嗆「都是中共同路人」</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                道歉後再拍片反擊，稱轉傳日媒報導的人都是「中共同路人」，並將批評與政治掛鉤。網紅陳沂直言：「這跟館長不管怎樣都是民進黨害的邏輯不是有87%像？」...
              </p>
            </div>
            <div className="flex gap-4 items-center mt-auto">
              <span className="text-xs bg-[#333] text-gray-300 px-3 py-1 rounded-md">政治消費</span>
              <a href="#" className="text-orange-500 text-xs hover:underline">查看來源 ↗</a>
            </div>
          </div>

          {/* 卡片 3 */}
          <div className="min-w-[300px] md:min-w-[350px] bg-[#1e1e1e] p-6 rounded-xl snap-start border border-[#333] flex flex-col">
            <div>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">2026</span>
              <h3 className="text-lg font-bold text-white mb-3">AI 對決日本街頭畫家</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                在日本請街頭畫家為兒子繪製肖像，卻將手繪作品與 AI 生成圖並排讓粉絲投票比較。日媒以「對日本畫家太失禮」為題報導，引發爭議...
              </p>
            </div>
            <div className="flex gap-4 items-center mt-auto">
              <span className="text-xs bg-[#333] text-gray-300 px-3 py-1 rounded-md">不尊重創作者</span>
              <a href="#" className="text-orange-500 text-xs hover:underline">查看來源 ↗</a>
            </div>
          </div>

        </div>
      </section>
{/* ----------------------------------------------------
          3. 意見調查與長條圖區 (Polls & Progress Bars)
         ---------------------------------------------------- */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full border-t border-[#333]">
        
        {/* 上半部：已結束的投票結果 */}
        <div className="mb-16">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-xl">📊</span>
            <h2 className="text-xl font-bold text-white">消費者意見調查・第一輪</h2>
            <span className="bg-[#333] text-gray-400 text-xs px-2 py-1 rounded-full">已結束</span>
          </div>
          <p className="text-center text-gray-400 text-sm mb-8">
            你對合作品牌方的訴求是什麼？共 560 人參與
          </p>

          {/* 長條圖選項 1 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white mb-2">
              <span className="pr-4">品牌方臉書小編有做出已停止合作回應即可，不在乎仍會在品牌相關合作貼文、影片跟導購網頁看到蔡阿嘎</span>
              <span className="font-bold">26%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '26%' }}></div>
            </div>
            <div className="text-xs text-gray-500">146 票</div>
          </div>

          {/* 長條圖選項 2 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white mb-2">
              <span className="pr-4">要求切割，全面下架所有蔡阿嘎合作貼文、影片與導購網頁</span>
              <span className="font-bold">26%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '26%' }}></div>
            </div>
            <div className="text-xs text-gray-500">148 票</div>
          </div>

          {/* 長條圖選項 3 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white mb-2">
              <span className="pr-4">進一步徹底切割，全面下架所有合作內容，並發表官方正式聲明，公開承諾不再合作</span>
              <span className="font-bold">48%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '48%' }}></div>
            </div>
            <div className="text-xs text-gray-500">266 票</div>
          </div>
        </div>

        {/* 下半部：進行中的投票 */}
        <div className="border-t border-[#333] pt-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-xl">📊</span>
            <h2 className="text-xl font-bold text-white">蔡阿嘎公開道歉了⋯你的立場是？</h2>
          </div>
          <p className="text-center text-gray-400 text-sm mb-2">每人限投一票</p>
          <p className="text-center text-yellow-500 text-xs mb-8 flex justify-center items-center gap-1">
            <span>⚠️</span> 投票後不可更動，請謹慎思考後做出選擇。
          </p>

          <div className="flex flex-col gap-4">
            {/* 投票選項按鈕 1 */}
            <button className="flex items-center gap-4 bg-[#1e1e1e] border border-[#333] hover:border-orange-500 transition-colors p-4 rounded-xl text-left w-full">
              <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <span className="text-white text-sm">接受道歉，停止抵制行動</span>
            </button>
            
            {/* 投票選項按鈕 2 */}
            <button className="flex items-center gap-4 bg-[#1e1e1e] border border-[#333] hover:border-orange-500 transition-colors p-4 rounded-xl text-left w-full">
              <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <span className="text-white text-sm">持保留態度，觀察後續品牌方是否跟進切割</span>
            </button>

            {/* 投票選項按鈕 3 */}
            <button className="flex items-center gap-4 bg-[#1e1e1e] border border-[#333] hover:border-orange-500 transition-colors p-4 rounded-xl text-left w-full">
              <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
              <span className="text-white text-sm">已不是第一次道歉，一直重複相同戲碼，堅持抵制直到各品牌發表正式聲明切割</span>
            </button>
          </div>
        </div>

      </section>
{/* ----------------------------------------------------
          3. 意見調查與長條圖區 (Polls & Progress Bars)
         ---------------------------------------------------- */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full border-t border-[#333]">
        
        {/* 上半部：已結束的投票結果 */}
        <div className="mb-16">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-xl">📊</span>
            <h2 className="text-xl font-bold text-white">消費者意見調查・第一輪</h2>
            <span className="bg-[#333] text-gray-400 text-xs px-2 py-1 rounded-full">已結束</span>
          </div>
          <p className="text-center text-gray-400 text-sm mb-8">
            你對合作品牌方的訴求是什麼？共 560 人參與
          </p>

          {/* 長條圖選項 1 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white mb-2">
              <span className="pr-4">品牌方臉書小編有做出已停止合作回應即可，不在乎仍會在品牌相關合作貼文、影片跟導購網頁看到蔡阿嘎</span>
              <span className="font-bold">26%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '26%' }}></div>
            </div>
            <div className="text-xs text-gray-500">146 票</div>
          </div>

          {/* 長條圖選項 2 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white mb-2">
              <span className="pr-4">要求切割，全面下架所有蔡阿嘎合作貼文、影片與導購網頁</span>
              <span className="font-bold">26%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '26%' }}></div>
            </div>
            <div className="text-xs text-gray-500">148 票</div>
          </div>

          {/* 長條圖選項 3 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white mb-2">
              <span className="pr-4">進一步徹底切割，全面下架所有合作內容，並發表官方正式聲明，公開承諾不再合作</span>
              <span className="font-bold">48%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '48%' }}></div>
            </div>
            <div className="text-xs text-gray-500">266 票</div>
          </div>
        </div>

        {/* 下半部：進行中的投票 */}
        <div className="border-t border-[#333] pt-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-xl">📊</span>
            <h2 className="text-xl font-bold text-white">蔡阿嘎公開道歉了⋯你的立場是？</h2>
          </div>
          <p className="text-center text-gray-400 text-sm mb-2">每人限投一票</p>
          <p className="text-center text-yellow-500 text-xs mb-8 flex justify-center items-center gap-1">
            <span>⚠️</span> 投票後不可更動，請謹慎思考後做出選擇。
          </p>

          <div className="flex flex-col gap-4">
            {/* 投票選項按鈕 1 */}
            <button className="flex items-center gap-4 bg-[#1e1e1e] border border-[#333] hover:border-orange-500 transition-colors p-4 rounded-xl text-left w-full">
              <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <span className="text-white text-sm">接受道歉，停止抵制行動</span>
            </button>
            
            {/* 投票選項按鈕 2 */}
            <button className="flex items-center gap-4 bg-[#1e1e1e] border border-[#333] hover:border-orange-500 transition-colors p-4 rounded-xl text-left w-full">
              <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <span className="text-white text-sm">持保留態度，觀察後續品牌方是否跟進切割</span>
            </button>

            {/* 投票選項按鈕 3 */}
            <button className="flex items-center gap-4 bg-[#1e1e1e] border border-[#333] hover:border-orange-500 transition-colors p-4 rounded-xl text-left w-full">
              <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
              <span className="text-white text-sm">已不是第一次道歉，一直重複相同戲碼，堅持抵制直到各品牌發表正式聲明切割</span>
            </button>
          </div>
        </div>

      </section>
{/* ----------------------------------------------------
          5. 退訂行動與數據儀表板 (Unsubscribe Challenge)
         ---------------------------------------------------- */}
      <section className="py-20 px-4 max-w-5xl mx-auto w-full border-t border-[#333]">
        
        {/* 標題區 */}
        <div className="flex flex-col items-center mb-12">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            退訂行動
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight mb-4">
            蔡阿嘎<br />退訂挑戰 ✊
          </h2>
          <p className="text-gray-400 text-sm">退訂他的頻道，讓數字說話。</p>
        </div>

        {/* 步驟一：退訂連結區 */}
        <div className="flex flex-col items-center mb-12 border-b border-[#333] pb-12">
          <p className="text-xs text-gray-500 mb-6">步驟一：點下方退訂 / 取消追蹤</p>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-white text-black font-bold px-2 py-0.5 rounded text-xs">▶ YouTube</span>
            <span className="text-white text-sm font-bold">退訂以下頻道</span>
          </div>

          {/* YouTube 頻道紅色按鈕群 (使用 flex-wrap 讓它自動換行排版) */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl">
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">蔡阿嘎</button>
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">蔡阿嘎 Life</button>
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">蔡桃貴</button>
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">嘎嫂二伯&蔡波能's Daily</button>
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">hahababy はははびー</button>
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">蔡阿嘎543</button>
            <button className="bg-[#cc0000] hover:bg-red-700 text-white text-sm font-bold px-6 py-2 rounded-full transition-colors">大頭佛工作室</button>
          </div>

          {/* IG & Threads 方塊按鈕 */}
          <div className="flex gap-4">
            <button className="bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#333] transition-colors rounded-2xl w-32 h-24 flex flex-col items-center justify-center gap-1">
              <span className="text-2xl text-white">📷</span>
              <span className="text-white text-sm font-bold">Instagram</span>
              <span className="text-gray-500 text-xs">取消追蹤</span>
            </button>
            <button className="bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#333] transition-colors rounded-2xl w-32 h-24 flex flex-col items-center justify-center gap-1">
              <span className="text-2xl text-white">@</span>
              <span className="text-white text-sm font-bold">Threads</span>
              <span className="text-gray-500 text-xs">取消追蹤</span>
            </button>
          </div>
        </div>

        {/* 步驟二：打卡按鈕 */}
        <div className="flex flex-col items-center mb-10">
          <p className="text-xs text-gray-500 mb-4">步驟二：打卡記錄退訂</p>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-4 px-24 rounded-xl text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            ✊ 我退訂了！
          </button>
        </div>

        {/* 超巨大數據儀表板 */}
        <div className="bg-[#111] border border-[#333] rounded-3xl p-8 md:p-12 text-center flex flex-col gap-10">
          
          <div>
            <p className="text-gray-500 text-sm mb-2 flex justify-center items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> 蔡阿嘎 YouTube 現在訂閱數
            </p>
            <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">2,520,000</div>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-2">活動開始時 (2026年6月27日)</p>
            <div className="text-5xl md:text-7xl font-black text-gray-500 tracking-tighter">2,530,000</div>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2 flex justify-center items-center gap-2">
              <span>📉</span> 活動以來已減少訂閱數
            </p>
            <div className="text-6xl md:text-8xl font-black text-[#10b981] tracking-tighter">10,000</div>
          </div>

          <div>
            <p className="text-orange-500 text-sm mb-2 flex justify-center items-center gap-2 font-bold">
              <span>✊</span> 已加入退訂挑戰
            </p>
            <div className="text-6xl md:text-8xl font-black text-orange-500 tracking-tighter">8,216</div>
          </div>

          {/* 底部進度條與里程碑 */}
          <div className="mt-8 pt-8 border-t border-[#333] text-left">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>第 3 階段目標：1 萬人</span>
              <span className="text-orange-500 font-bold">64%</span>
            </div>
            
            {/* 進度條本體 */}
            <div className="w-full h-2 bg-[#333] rounded-full mb-4">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: '64%' }}></div>
            </div>

            {/* 里程碑標籤 */}
            <div className="flex flex-wrap gap-2">
              <span className="border border-green-600 text-green-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 bg-green-900/20">
                ✅ 1,000 人
              </span>
              <span className="border border-green-600 text-green-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 bg-green-900/20">
                ✅ 5,000 人
              </span>
              <span className="border border-orange-600 text-orange-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 bg-orange-900/20">
                ⏳ 1 萬人
              </span>
              <span className="border border-[#444] text-gray-500 text-xs px-3 py-1 rounded-full bg-[#222]">
                ○ 5 萬人
              </span>
              <span className="border border-[#444] text-gray-500 text-xs px-3 py-1 rounded-full bg-[#222]">
                ○ 10 萬人
              </span>
            </div>
          </div>
        </div>

      </section>
