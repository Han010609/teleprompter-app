function EditorPanel({ text, setText }) {
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col">
      <label className="text-sm font-medium text-[#64748B] mb-2">編輯文字內容</label>
      <div className="flex-1 bg-white border border-[#E2E8F0] rounded-lg p-5">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="請在此輸入或貼上您的演講稿內容..."
          className="w-full h-full resize-none outline-none text-base text-[#1E293B] leading-relaxed placeholder:text-[#94A3B8]"
          style={{ fontFamily: 'inherit' }}
        />
      </div>
    </div>
  )
}

export default EditorPanel

