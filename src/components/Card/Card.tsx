import React from "react";
export type CardProps = {
    content: string
}

const Card = ( {content}: CardProps) => {
    return (
        <div>
            This is a Card Component
        </div>
    )
}

export default Card;