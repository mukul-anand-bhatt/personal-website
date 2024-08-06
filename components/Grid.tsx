import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import {gridItems} from '@/data/Index'
const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map((items,i)=>(
                <BentoGridItem
                id={items.id}
                key={items.id}
                title={items.title}
                description={items.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid