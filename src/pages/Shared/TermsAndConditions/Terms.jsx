import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-warning'>Our Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga inventore asperiores dolore voluptatibus non voluptates accusamus quod consequuntur sed. Quam molestias exercitationem iste velit perferendis dicta vitae quibusdam eaque veniam reprehenderit placeat tempore facere assumenda aliquid, sit id inventore excepturi necessitatibus debitis soluta. Eius fugit cumque hic et debitis, repellendus doloribus eligendi corporis nisi quod saepe pariatur inventore quae minima dignissimos magni ullam. Eveniet nemo ipsum magnam, hic unde omnis ut eligendi harum fugiat repellendus consectetur aperiam molestias, laudantium deleniti autem molestiae cum odio nihil deserunt. Ab aut ad eum necessitatibus excepturi tempore rem iure? Harum consequatur aspernatur unde quibusdam!</p>
            <p> <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;