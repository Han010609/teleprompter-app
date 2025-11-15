import { forwardRef } from 'react'

const PreviewPanel = forwardRef(({ text }, ref) => {
  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col">
      <label className="text-sm font-medium text-[#94A3B8] mb-2">預覽效果</label>
      <div
        ref={ref}
        data-preview
        className="flex-1 bg-[#1E293B] text-[#F8FAFC] rounded-lg p-10 overflow-y-auto"
        style={{
          fontSize: 'clamp(36px, 4vw, 48px)',
          lineHeight: 1.5,
          fontFamily: 'inherit',
          scrollBehavior: 'smooth',
        }}
      >
        {text ? (
          <div className="whitespace-pre-wrap">{text}</div>
        ) : (
          <div className="h-full flex items-center justify-center text-lg text-[#94A3B8]">
            請在左側輸入文字內容
          </div>
        )}
      </div>
    </div>
  )
})

PreviewPanel.displayName = 'PreviewPanel'

export default PreviewPanel

