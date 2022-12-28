import { useEffect } from "react"

const useCount = (count) => {
  useEffect(() => {
    count === 0 ? (
      document.title = 'Chats'
    ) : document.title = `Chats(${count})`
  }, [count]);

}

export default useCount