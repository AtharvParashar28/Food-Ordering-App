import { useState } from "react";
import AccordionItem from "./Accordion";
const ResCategory = (prop) => {
    const { data } = prop;

    const [showId, setShowId] = useState(null);

    console.log(data)
    return (
        <div className="flex flex-col w-full gap-4">
            {
                data?.map?.((item, index) => {
                    if ('itemCards' in item?.card?.card) {
                        // console.log(item?.card?.card?.itemCards.length)
                        const {categoryId} = item?.card?.card;
                        return (
                            <AccordionItem 
                            item={item}  
                            key={index}
                            showId={showId}
                            showItem={showId === categoryId}
                            setShowId = {setShowId}
                            />
                        )
                    }
                })
            }
        </div>
    ) || <p>No menu available</p>
}

export default ResCategory;