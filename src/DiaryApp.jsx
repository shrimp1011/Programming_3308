import { useState } from 'react'
import './diary.css'

function DiaryApp() {
  const today = new Date().toISOString().slice(0, 10)
  const [selectedDate, setSelectedDate] = useState(today)
  const [content, setContent] = useState('')
  const [entries, setEntries] = useState({})
  const [viewDate, setViewDate] = useState(null)

  const handleSave = () => {
    if (!content.trim()) return
    setEntries(prev => ({ ...prev, [selectedDate]: content }))
    alert(`${selectedDate} 일기가 저장되었습니다.`)
  }

  // 사이드바 항목 클릭 해당 일기 불러오기
  const handleSelectEntry = (date) => {
    setViewDate(date)
    setSelectedDate(date)
    setContent(entries[date] || '')
  }

  // 새 일기 버튼 클릭 초기화
  const handleNew = () => {
    setViewDate(null)
    setSelectedDate(today)
    setContent('')
  }

  const handleDelete = (date) => {
    setEntries(prev => {
      const next = { ...prev }
      delete next[date]
      return next
    })
    if (viewDate === date) handleNew()
  }

  const sortedDates = Object.keys(entries).sort((a, b) => b.localeCompare(a))

  return (
    <div className="diary">
      <h1 className="diary__title">📔 일기장</h1>

      <div className="diary__layout">

        <aside className="diary__sidebar">
          <div className="diary__sidebar-header">
            <span>저장된 일기 ({sortedDates.length})</span>
            <button className="diary__new-btn" onClick={handleNew}>+ 새 일기</button>
          </div>
          {sortedDates.length === 0 ? (
            <p className="diary__empty">아직 작성된 일기가 없습니다.</p>
          ) : (
            <ul className="diary__list">
              {sortedDates.map(date => (
                <li
                  key={date}
                  className={`diary__list-item${viewDate === date ? ' diary__list-item--active' : ''}`}
                  onClick={() => handleSelectEntry(date)}
                >
                  <span className="diary__list-date">{date}</span>
                  <p className="diary__list-preview">
                    {entries[date].slice(0, 40)}{entries[date].length > 40 ? '…' : ''}
                  </p>
                  <button
                    className="diary__delete-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(date)
                    }}
                  >삭제</button>
                </li>
              ))}
            </ul>
          )}
        </aside>

        <section className="diary__editor">
          <div className="diary__editor-top">
            <label className="diary__date-label">날짜</label>
            <input
              type="date"
              className="diary__date-input"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value)
                setViewDate(null)
              }}
            />
          </div>
          <textarea
            className="diary__textarea"
            placeholder="오늘 하루를 기록해보세요…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="diary__editor-bottom">
            <span className="diary__char-count">{content.length}자</span>
            <button className="diary__save-btn" onClick={handleSave}>저장</button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default DiaryApp
