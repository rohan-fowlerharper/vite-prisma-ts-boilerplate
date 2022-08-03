import { useEffect, useState } from 'react'
import type { Fruit, Womble } from '@prisma/client'

type FetchFruitResponse = (Fruit & {
  wombles: Womble[]
})[]

export default function () {
  const [fruitData, setFruitData] = useState<FetchFruitResponse | null>(null)

  useEffect(() => {
    const fetchFruitData = async () => {
      const response = await fetch('/api/fruit')
      console.log(response)
      const fruitData: FetchFruitResponse = await response.json()
      setFruitData(fruitData)
    }

    fetchFruitData()
  }, [])

  return (
    <div>
      {fruitData &&
        fruitData.map((fruit) => {
          return (
            <div key={fruit.id}>
              <p>{fruit.name}</p>
              <p>{fruit.color}</p>
              <p>{fruit.wombles.length} wombles</p>
              <ul>
                {fruit.wombles.map((womble) => (
                  <li key={womble.id}>
                    <p>{womble.name}</p>
                    <p>{womble.trait}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
    </div>
  )
}
