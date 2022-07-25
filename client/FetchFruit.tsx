import { useEffect, useState } from 'react'

export default function () {
  const [fruitData, setFruitData] = useState(null)

  useEffect(() => {
    const fetchFruitData = async () => {
      const response = await fetch('/api/fruit')
      const fruitData = await response.json()
      console.log(fruitData)
      setFruitData(fruitData)
    }

    fetchFruitData()
  }, [])

  return <div>{fruitData && JSON.stringify(fruitData, null, 2)}</div>
}
