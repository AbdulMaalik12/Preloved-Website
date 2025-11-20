const KEY = 'saved_searches'

export function getSavedSearches() {
  const raw = localStorage.getItem(KEY)
  return raw ? JSON.parse(raw) : []
}

export function saveSearch(entry) {
  const list = getSavedSearches()
  const id = crypto.randomUUID()
  const next = [{ id, ...entry }, ...list]
  localStorage.setItem(KEY, JSON.stringify(next))
  return id
}

export function deleteSearch(id) {
  const list = getSavedSearches().filter(x => x.id !== id)
  localStorage.setItem(KEY, JSON.stringify(list))
}