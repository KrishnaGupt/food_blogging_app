import React, {useState} from 'react'
import Article from './Article'

const Articles = () => {

    const [currentList, setCurrentList] = useState(1)
    const [articlesPerList, setArticlesPerList] = useState(3)

    const data = [
    {
            img: 'https://i.ibb.co/ysw13NY/article1.png',
            id: 1,
            title: 'Grilled  Tomatoes at Home',
            subtitle: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
        {
            img: 'https://i.ibb.co/LrFm2Gg/article2.png',
            id: 2,
            title: 'Snacks for Travel',
            subtitle: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
        {
            img: 'https://i.ibb.co/tM92FKh/article3.png',
            id: 3,
            title: 'Post-workout Recipes',
            subtitle: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
         {
            img: 'https://i.ibb.co/Jcfpt8F/article4.png',
            id: 4,
            title: 'How To Grill Corn',
            subtitle: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
         {
            img: 'https://i.ibb.co/tzxPkkW/article5.png',
            id: 5,
            title: 'Crunchwrap Supreme',
            subtitle: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        },
         {
            img: 'https://i.ibb.co/89hHmNX/article6.png',
            id: 6,
            title: 'Broccoli Cheese Soup',
            subtitle: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
        }
    ]

    const lastListIndex = currentList * articlesPerList;
    const firstListIndex = lastListIndex - articlesPerList;
    const currentItems = data.slice(firstListIndex, lastListIndex)

  return (
    <div className='w-full text-center md:text-left md:w-[90%] m-auto'>
        <div className='text-[#0E2368] source text-[28px] md:text-[56px] font-semibold'>Latest Articles</div>
        <div className='flex flex-wrap justify-around mt-8 mb-20'>
            {
                currentItems.map(items => (
                    <Article img={items.img} key={items.id} title={items.title} subtitle={items.subtitle}/>
                ))
            }
        </div>
        <div className='m-auto flex justify-center my-12 text-center'>
            <div>
            <button><i className="text-[#424961] text-3xl mx-2 bi bi-arrow-left-square" onClick={()=> setCurrentList(1)}></i></button>
            <button><i className="text-[#424961] text-3xl mx-2 bi bi-arrow-right-square" onClick={()=> setCurrentList(2)}></i></button>
            </div>
        </div>
    </div>
  )
}

export default Articles