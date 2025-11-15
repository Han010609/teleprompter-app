import { useEffect, useRef, useCallback } from 'react'
import { useTeleprompterStore } from './store/teleprompterStore'
import Header from './components/Header'
import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'
import ControlPanel from './components/ControlPanel'

function App() {
  const { text, isPlaying, speed, setText, setIsPlaying, setSpeed, reset } = useTeleprompterStore()
  const previewRef = useRef(null)

  // 重置功能：重置狀態並滾動到頂部
  const handleReset = useCallback(() => {
    reset()
    if (previewRef.current) {
      previewRef.current.scrollTop = 0
    }
  }, [reset])

  // 鍵盤快捷鍵
  useEffect(() => {
    const handleKeyDown = (e) => {
      // 如果正在輸入文字，不觸發快捷鍵
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
        return
      }

      switch (e.key) {
        case ' ':
          e.preventDefault()
          setIsPlaying((prev) => !prev)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSpeed((prev) => Math.min(3.0, prev + 0.1))
          break
        case 'ArrowDown':
          e.preventDefault()
          setSpeed((prev) => Math.max(0.5, prev - 0.1))
          break
        case 'Home':
          e.preventDefault()
          handleReset()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setIsPlaying, setSpeed, handleReset])

  // 自動滾動邏輯
  useEffect(() => {
    if (!isPlaying || !previewRef.current) return

    const previewElement = previewRef.current
    const baseSpeed = 50 // 基礎滾動速度（像素/秒）
    const scrollSpeed = baseSpeed * speed

    const interval = setInterval(() => {
      const maxScroll = previewElement.scrollHeight - previewElement.clientHeight
      
      if (previewElement.scrollTop >= maxScroll) {
        setIsPlaying(false)
        return
      }

      previewElement.scrollTop += scrollSpeed / 60 // 60fps
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [isPlaying, speed, setIsPlaying])

  return (
    <div className="flex flex-col h-screen bg-[#F8FAFC]">
      <Header />
      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6 overflow-hidden" style={{ height: 'calc(100vh - 64px - 120px)' }}>
        <EditorPanel text={text} setText={setText} />
        <PreviewPanel ref={previewRef} text={text} />
      </div>
      <ControlPanel onReset={handleReset} />
    </div>
  )
}

export default App

