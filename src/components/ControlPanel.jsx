import { useTeleprompterStore } from '../store/teleprompterStore'
import './ControlPanel.css'

function ControlPanel({ onReset }) {
  const { isPlaying, speed, setIsPlaying, setSpeed, reset } = useTeleprompterStore()

  const handleStart = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleReset = () => {
    reset()
    if (onReset) {
      onReset()
    }
  }

  const handleSpeedChange = (e) => {
    setSpeed(parseFloat(e.target.value))
  }

  return (
    <div className="w-full min-h-[120px] bg-white border-t border-[#E2E8F0] px-6 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-3">
          {!isPlaying ? (
            <button
              onClick={handleStart}
              className="w-[120px] h-12 bg-[#10B981] text-white font-medium rounded-lg hover:bg-[#059669] transition-colors"
            >
              開始
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="w-[120px] h-12 bg-[#EF4444] text-white font-medium rounded-lg hover:bg-[#DC2626] transition-colors"
            >
              暫停
            </button>
          )}
          <button
            onClick={handleReset}
            className="w-[120px] h-12 bg-[#64748B] text-white font-medium rounded-lg hover:bg-[#475569] transition-colors"
          >
            重置
          </button>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
          <label className="text-sm font-medium text-[#64748B] whitespace-nowrap">速度：</label>
          <input
            type="range"
            min="0.5"
            max="3.0"
            step="0.1"
            value={speed}
            onChange={handleSpeedChange}
            className="w-32 sm:w-48 h-1.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #2563EB 0%, #2563EB ${((speed - 0.5) / 2.5) * 100}%, #E2E8F0 ${((speed - 0.5) / 2.5) * 100}%, #E2E8F0 100%)`,
            }}
          />
          <span className="text-sm font-semibold text-[#1E293B] w-12 text-center">
            {speed.toFixed(1)}x
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0] rounded px-4 py-2">
          <span>快捷鍵：</span>
          <kbd className="px-1.5 py-0.5 bg-white rounded border border-[#E2E8F0]">空白鍵</kbd>
          <span>開始/暫停</span>
          <kbd className="px-1.5 py-0.5 bg-white rounded border border-[#E2E8F0]">↑↓</kbd>
          <span>速度</span>
          <kbd className="px-1.5 py-0.5 bg-white rounded border border-[#E2E8F0]">Home</kbd>
          <span>重置</span>
        </div>
      </div>

    </div>
  )
}

export default ControlPanel

